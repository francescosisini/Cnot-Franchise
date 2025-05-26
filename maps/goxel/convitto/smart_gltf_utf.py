import json, base64, sys
import numpy as np

def load_gltf(path):
    """Leggi il .gltf e restituisci (dict, lista buffer bytearray)"""
    with open(path, 'r') as f:
        gltf_json = json.load(f)
    buffers = []
    for buf in gltf_json["buffers"]:
        uri = buf["uri"]
        if uri.startswith("data:"):
            b64 = uri.split(",", 1)[1]
            buffers.append(bytearray(base64.b64decode(b64)))
        else:
            with open(uri, "rb") as fbin:
                buffers.append(bytearray(fbin.read()))
    return gltf_json, buffers

def get_accessor_data(gltf, buffers, accessor_idx):
    """Estrae dati di un accessor (supporta byteStride e più buffer)"""
    acc = gltf["accessors"][accessor_idx]
    bv = gltf["bufferViews"][acc["bufferView"]]
    buffer_index = bv.get("buffer", 0)
    binary = buffers[buffer_index]
    byte_offset = bv.get("byteOffset", 0) + acc.get("byteOffset", 0)
    count = acc["count"]
    type_name = acc["type"]
    comp_type = acc["componentType"]
    comp_count = {'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4,'MAT4':16}.get(type_name,1)
    dtype = {5126: np.float32, 5123: np.uint16, 5122: np.int16,
             5121: np.uint8, 5120: np.int8}[comp_type]
    stride = bv.get("byteStride", None)
    comp_byte = np.dtype(dtype).itemsize
    elem_bytes = comp_count * comp_byte

    if stride is None or stride == elem_bytes:
        # Packed: slice diretto
        start = byte_offset
        end = start + count*elem_bytes
        arr = np.frombuffer(binary[start:end], dtype=dtype)
        arr = arr.reshape(count, comp_count)
    else:
        # Interleaved: leggi ogni elemento a distanza di stride
        arr = np.zeros((count, comp_count), dtype=dtype)
        for i in range(count):
            begin = byte_offset + i*stride
            chunk = binary[begin:begin+elem_bytes]
            arr[i] = np.frombuffer(chunk, dtype=dtype)
    # Normalizza se serve (normali int8/uint8)
    if acc.get("normalized", False):
        if comp_type == 5120: arr = np.clip(arr.astype(np.float32)/127.0, -1, 1)
        elif comp_type == 5121: arr = arr.astype(np.float32)/255.0
        elif comp_type == 5122: arr = np.clip(arr.astype(np.float32)/32767.0, -1, 1)
        elif comp_type == 5123: arr = arr.astype(np.float32)/65535.0
    else:
        if comp_type == 5126:
            arr = arr.astype(np.float32)
    return arr

def generate_planar_uvs(positions, normals):
    """UV planari smart per ogni vertice"""
    uv = np.zeros((positions.shape[0], 2), dtype=np.float32)
    dom = np.abs(normals).argmax(axis=1)
    # Y dominante: X/Z | Z dominante: X/Y | X dominante: Z/Y
    mask_y = (dom==1)
    mask_z = (dom==2)
    mask_x = (dom==0)
    uv[mask_y,0] = positions[mask_y,0]
    uv[mask_y,1] = positions[mask_y,2]
    uv[mask_z,0] = positions[mask_z,0]
    uv[mask_z,1] = positions[mask_z,1]
    uv[mask_x,0] = positions[mask_x,2]
    uv[mask_x,1] = positions[mask_x,1]
    return uv

def add_uv_to_gltf(gltf, buffers, mesh_index, prim_index, uv_array, out_buffer_idx=0):
    """Aggiungi UV planari come TEXCOORD_0 a una primitive (i UV vanno nel buffer out_buffer_idx)"""
    uv_bytes = uv_array.astype(np.float32).tobytes()
    # Padding per allineamento a 4
    bin_out = buffers[out_buffer_idx]
    pad = (-len(bin_out)) % 4
    if pad: bin_out.extend(b'\x00'*pad)
    offset = len(bin_out)
    bin_out.extend(uv_bytes)
    # Crea bufferView
    bv = {
        "buffer": out_buffer_idx,
        "byteOffset": offset,
        "byteLength": len(uv_bytes),
        "target": 34962  # GL_ARRAY_BUFFER
    }
    gltf["bufferViews"].append(bv)
    bv_idx = len(gltf["bufferViews"])-1
    # Crea accessor
    acc = {
        "bufferView": bv_idx,
        "byteOffset": 0,
        "componentType": 5126,  # FLOAT
        "count": uv_array.shape[0],
        "type": "VEC2"
    }
    gltf["accessors"].append(acc)
    acc_idx = len(gltf["accessors"])-1
    # Aggiorna primitive
    prim = gltf["meshes"][mesh_index]["primitives"][prim_index]
    if "attributes" not in prim: prim["attributes"] = {}
    prim["attributes"]["TEXCOORD_0"] = acc_idx

def save_gltf(gltf, buffers, path):
    # Codifica tutti i buffer nuovamente come base64 data URI
    for i, buf in enumerate(buffers):
        b64 = base64.b64encode(bytes(buf)).decode('utf-8')
        gltf["buffers"][i]["uri"] = "data:application/octet-stream;base64," + b64
        gltf["buffers"][i]["byteLength"] = len(buf)
    with open(path, 'w') as f:
        json.dump(gltf, f, indent=2)
    print("Salvato:", path)

def process_gltf(input_path, output_path):
    gltf, buffers = load_gltf(input_path)
    # Trova il buffer delle mesh su cui vuoi scrivere le UV (di solito 0)
    mesh_buffer_idx = 0
    for mesh_idx, mesh in enumerate(gltf.get("meshes", [])):
        for prim_idx, prim in enumerate(mesh.get("primitives", [])):
            attrs = prim.get("attributes", {})
            if "POSITION" in attrs and "NORMAL" in attrs:
                pos_idx = attrs["POSITION"]
                norm_idx = attrs["NORMAL"]
                positions = get_accessor_data(gltf, buffers, pos_idx)
                normals   = get_accessor_data(gltf, buffers, norm_idx)
                uv = generate_planar_uvs(positions, normals)
                add_uv_to_gltf(gltf, buffers, mesh_idx, prim_idx, uv, mesh_buffer_idx)
            else:
                print(f"Mesh {mesh_idx} Prim {prim_idx} manca POSITION/NORMAL, salto.")
    save_gltf(gltf, buffers, output_path)

if __name__=="__main__":
    if len(sys.argv)<3:
        print("Usage: python smart_gltf_uvs_multibuffer.py input.gltf output.gltf")
        sys.exit(1)
    process_gltf(sys.argv[1], sys.argv[2])
