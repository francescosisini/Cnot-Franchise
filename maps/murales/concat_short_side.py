#!/usr/bin/env python3
import sys, os, argparse
from PIL import Image

def concat_images(image_paths, output_path, orientation):
    imgs = [Image.open(p) for p in image_paths]
    # determina short_side solo se auto
    w, h = imgs[0].size
    if orientation == "auto":
        short = 'width' if w < h else 'height'
    else:
        short = 'width' if orientation == 'horizontal' else 'height'

    if short == 'width':
        # orizzontale
        total_w = sum(im.width for im in imgs)
        max_h   = max(im.height for im in imgs)
        new = Image.new('RGB', (total_w, max_h), (255,255,255))
        x_off = 0
        for im in imgs:
            new.paste(im, (x_off, 0))
            x_off += im.width
    else:
        # verticale
        max_w      = max(im.width for im in imgs)
        total_h    = sum(im.height for im in imgs)
        new = Image.new('RGB', (max_w, total_h), (255,255,255))
        y_off = 0
        for im in imgs:
            new.paste(im, (0, y_off))
            y_off += im.height

    new.save(output_path, 'JPEG')
    print(f"Salvato: {output_path}")

if __name__=="__main__":
    p = argparse.ArgumentParser(
        description="Concatenate JPEG images lungo il lato corto o forzato"
    )
    p.add_argument("images", nargs="+", help="Percorsi immagini JPEG")
    p.add_argument("-o","--output", default="output.jpg", help="File di output")
    p.add_argument(
        "--orientation",
        choices=["auto","horizontal","vertical"],
        default="auto",
        help="auto=short-side, horizontal, vertical"
    )
    args = p.parse_args()
    for img in args.images:
        if not os.path.isfile(img):
            p.error(f"File non trovato: {img}")
    concat_images(args.images, args.output, args.orientation)
