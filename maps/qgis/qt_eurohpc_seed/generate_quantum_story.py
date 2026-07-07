#!/usr/bin/env python3
"""
generate_quantum_story.py

Genera un atlante narrativo animato in HTML a partire dai tre layer GeoJSON:

- data/processed/qt_infrastructures.geojson
- data/processed/qt_actors.geojson
- data/processed/qt_relations.geojson

Non richiede librerie esterne. Produce un file HTML standalone con mappa SVG semplificata
dell'Europa, capitoli narrativi, play/pausa, avanti/indietro e tooltip.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

CHAPTERS = [
    {
        "id": "01", "year": "base scientifica", "title": "Scienza forte",
        "subtitle": "L'Europa conosce il quantum. Ora deve industrializzarlo.",
        "text": "La partenza non è il vuoto: l'Europa ha scuole scientifiche, laboratori e competenze su ottica, materiali, criogenia e informatica teorica. La sfida è trasformare conoscenza distribuita in macchine, servizi, standard e industria.",
        "actors": ["european_research_initiative", "national_consortium"],
        "infra": [], "relations": [],
        "focus": ["ACTOR_QUANTUM_FLAGSHIP", "ACTOR_NQSTI"],
        "note": "Ricerca forte, ma ancora da trasformare in filiera."
    },
    {
        "id": "02", "year": "2018+", "title": "Strategia pubblica",
        "subtitle": "Dalla fisica alla politica industriale.",
        "text": "Il quantum diventa priorità strategica: programmi europei, iniziative comuni e consorzi nazionali provano a coordinare ricerca, infrastrutture e competenze. Qui nasce il passaggio dal laboratorio alla capacità tecnologica comune.",
        "actors": ["european_public_institution", "european_research_initiative", "national_consortium"],
        "infra": [], "relations": [],
        "focus": ["ACTOR_EUROHPC_JU", "ACTOR_QUANTUM_FLAGSHIP", "ACTOR_NQSTI"],
        "note": "Il pubblico crea la cornice strategica."
    },
    {
        "id": "03", "year": "2020-2026", "title": "Integrazione con HPC",
        "subtitle": "La QPU entra nel supercomputer.",
        "text": "La scelta europea più visibile è ibrida: le QPU non sono isole, ma acceleratori e moduli sperimentali collegati ai grandi centri di supercalcolo. Il quantum nasce accanto all'HPC, non contro l'HPC.",
        "actors": ["hpc_research_center"], "infra": ["all"],
        "relations": ["hosts", "hosts_or_operates"],
        "focus": [],
        "note": "Quantum + HPC = infrastruttura computazionale europea."
    },
    {
        "id": "04", "year": "oggi", "title": "Pluralità tecnologica",
        "subtitle": "Molte piattaforme, nessun vincitore unico.",
        "text": "Atomi neutri, superconduttori, fotonica, ioni intrappolati e annealing convivono. L'Europa non sembra scegliere un solo cavallo: costruisce accesso comparativo a piattaforme diverse, perché la tecnologia dominante non è ancora decisa.",
        "actors": [], "infra": ["all"], "relations": [],
        "focus": [],
        "note": "Strategia prudente: testare più architetture."
    },
    {
        "id": "05", "year": "2025-2026", "title": "Prime infrastrutture",
        "subtitle": "Il quantum appare in luoghi precisi.",
        "text": "La promessa teorica si materializza: Bologna, Barcellona, Jülich, Monaco, Ostrava, Poznań e Francia diventano nodi fisici della rete quantum-HPC europea. La geografia inizia a contare.",
        "actors": [], "infra": ["all"], "relations": [],
        "focus": [],
        "note": "Dalla promessa alla presenza territoriale."
    },
    {
        "id": "06", "year": "filiera", "title": "Filiera incompleta",
        "subtitle": "La QPU è solo la punta dell'iceberg.",
        "text": "Avere una macchina non basta: servono chip, laser, vuoto, criogenia, elettronica di controllo, software, compilatori, manutenzione e talenti. La sovranità quantistica coincide con il controllo della filiera.",
        "actors": ["company", "hpc_research_center"], "infra": ["all"],
        "relations": ["supplier_of", "component_supplier_for", "hosts", "hosts_or_operates"],
        "focus": [],
        "note": "Sovranità = macchina + componenti + software + competenze."
    },
    {
        "id": "07", "year": "industria", "title": "Pochi player privati",
        "subtitle": "Pochi fornitori, alta centralità strategica.",
        "text": "Pasqal, IQM, Quandela, AQT, Qilimanjaro e attocube emergono come nodi industriali molto centrali. Sono fondamentali, ma ancora pochi: l'Europa deve moltiplicare i player privati profondi, non solo i bandi pubblici.",
        "actors": ["company"], "infra": ["all"],
        "relations": ["supplier_of", "component_supplier_for"],
        "focus": ["ACTOR_PASQAL", "ACTOR_IQM", "ACTOR_QUANDELA", "ACTOR_AQT", "ACTOR_QILIMANJARO", "ACTOR_ATTOCUBE"],
        "note": "Pochi nodi industriali reggono molte relazioni."
    },
    {
        "id": "08", "year": "scala", "title": "Capitale insufficiente",
        "subtitle": "Il pubblico accende, il privato deve scalare.",
        "text": "La ricerca pubblica può far nascere prototipi e infrastrutture. Ma lo scale-up richiede capitale privato, procurement strategico, domanda industriale e tempi lunghi. Senza scala, l'Europa resta forte nei laboratori e fragile nel mercato.",
        "actors": ["company", "european_public_institution", "european_research_initiative", "national_consortium"],
        "infra": [], "relations": [],
        "focus": ["ACTOR_EUROHPC_JU", "ACTOR_QUANTUM_FLAGSHIP", "ACTOR_NQSTI"],
        "note": "Il salto critico è dal prototipo al mercato."
    },
    {
        "id": "09", "year": "rischio", "title": "Rischio dipendenza",
        "subtitle": "La dipendenza può nascere anche dopo l'invenzione.",
        "text": "Il rischio non è solo non inventare. È inventare in Europa, formare talenti in Europa, produrre prototipi in Europa, e poi vedere crescita, acquisizioni, IP o produzione spostarsi altrove.",
        "actors": ["company"], "infra": ["all"],
        "relations": ["supplier_of", "component_supplier_for"],
        "focus": ["ACTOR_PASQAL", "ACTOR_IQM", "ACTOR_QUANDELA", "ACTOR_AQT", "ACTOR_QILIMANJARO", "ACTOR_ATTOCUBE"],
        "note": "La vulnerabilità nasce nei colli di bottiglia industriali."
    },
    {
        "id": "10", "year": "sovranità", "title": "Sovranità quantistica",
        "subtitle": "Infrastruttura, filiera, accesso, standard.",
        "text": "La sovranità quantistica non è autarchia. È poter progettare, costruire, usare, mantenere e proteggere infrastrutture critiche. L'Europa ha già i primi nodi pubblici: ora deve completare mercato, filiera e campioni industriali.",
        "actors": ["all"], "infra": ["all"], "relations": ["all"],
        "focus": [],
        "note": "La rete esiste. La filiera va completata."
    },
]

HTML_TEMPLATE = r'''<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Atlante narrativo del quantum europeo</title>
<style>
:root{--bg:#070a12;--panel:rgba(12,16,28,.94);--text:#f3f5ff;--muted:#abb5cf;--accent:#9ad7ff}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 28% 22%,#18233d 0,#070a12 58%,#04050a 100%);color:var(--text);font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow:hidden}.app{height:100vh;display:grid;grid-template-columns:minmax(720px,1fr) 430px}.map-wrap{position:relative;padding:24px}.panel{border-left:1px solid rgba(255,255,255,.1);background:var(--panel);padding:28px;display:flex;flex-direction:column;gap:18px}#map{width:100%;height:100%;border-radius:24px;background:radial-gradient(circle at 50% 45%,rgba(90,160,255,.12),transparent 46%),linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.01));box-shadow:inset 0 0 0 1px rgba(255,255,255,.08),0 26px 80px rgba(0,0,0,.45)}.kicker{font-size:.78rem;letter-spacing:.13em;text-transform:uppercase;color:var(--accent);font-weight:800}h1{margin:0;font-size:2rem;line-height:1.05}.subtitle{color:var(--muted);font-size:1.05rem;line-height:1.35}.story{font-size:1.02rem;line-height:1.55}.note{padding:14px 16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:16px;color:#dce8ff;line-height:1.35}.grid{stroke:rgba(255,255,255,.075);stroke-width:1}.country{fill:rgba(255,255,255,.18);font-size:18px;font-weight:800;text-anchor:middle;letter-spacing:.03em}.rel{opacity:0;transition:opacity .55s ease,stroke-width .55s ease;stroke-width:1.7}.rel.on{opacity:.42}.rel.supplier_of.on{stroke-width:2.2}.rel.hosts.on,.rel.hosts_or_operates.on{stroke-dasharray:7 6}.rel.component_supplier_for.on{stroke-dasharray:2 6}.pt{opacity:0;transition:opacity .55s ease,filter .55s ease;stroke:#070a12;stroke-width:1.5}.pt.on{opacity:.98}.pt.focus{filter:drop-shadow(0 0 10px rgba(255,232,140,.8));stroke:#fff4ad;stroke-width:2.4}.halo{opacity:0;stroke:#fff1a5;stroke-width:2;fill:none;transition:opacity .55s ease}.halo.on{opacity:.55}.lab{opacity:0;fill:#f4f7ff;paint-order:stroke;stroke:#070a12;stroke-width:4px;stroke-linejoin:round;font-size:12px;font-weight:800;text-anchor:middle;pointer-events:none;transition:opacity .55s ease}.lab.on{opacity:.92}.legend{display:grid;grid-template-columns:1fr 1fr;gap:12px;color:var(--muted);font-size:.78rem}.box{padding:12px;border-radius:14px;background:rgba(255,255,255,.045)}.boxt{color:var(--text);font-weight:800;margin-bottom:8px}.sw{display:inline-block;width:11px;height:11px;border-radius:99px;margin-right:7px;vertical-align:-1px}.progress{height:8px;background:rgba(255,255,255,.08);border-radius:999px;overflow:hidden}.progress div{height:100%;width:0;background:linear-gradient(90deg,#9ad7ff,#ffd95a);transition:width .45s ease}.steps{display:flex;gap:5px;flex-wrap:wrap}.step{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;font-size:.75rem;color:var(--muted);background:rgba(255,255,255,.06)}.step.active{background:#9ad7ff;color:#08111f}.controls{margin-top:auto;display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:10px}button{cursor:pointer;color:var(--text);background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);padding:12px 14px;border-radius:999px;font-weight:800}button:hover{background:rgba(255,255,255,.14)}.tip{position:absolute;display:none;pointer-events:none;max-width:320px;padding:10px 12px;border-radius:12px;background:rgba(3,6,12,.94);border:1px solid rgba(255,255,255,.12);font-size:.82rem;line-height:1.3;box-shadow:0 12px 40px rgba(0,0,0,.35)}.footer{color:var(--muted);font-size:.76rem;line-height:1.35}@media(max-width:1000px){body{overflow:auto}.app{height:auto;grid-template-columns:1fr}.map-wrap{height:68vh}.panel{border-left:0;border-top:1px solid rgba(255,255,255,.1)}}
</style>
</head>
<body>
<div class="app">
<main class="map-wrap">
<svg id="map" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid meet"><g id="grid"></g><g id="countries"></g><g id="rels"></g><g id="halos"></g><g id="pts"></g><g id="labs"></g></svg>
<div id="tip" class="tip"></div>
</main>
<aside class="panel">
<div class="kicker" id="kicker"></div><h1 id="title"></h1><div class="subtitle" id="subtitle"></div><div class="story" id="story"></div><div class="note" id="note"></div>
<div class="legend"><div class="box"><div class="boxt">Piattaforme</div><div><span class="sw" style="background:#66d9a0"></span>neutral atoms</div><div><span class="sw" style="background:#5ab0ff"></span>superconducting</div><div><span class="sw" style="background:#ffd95a"></span>photonic</div><div><span class="sw" style="background:#c58cff"></span>trapped ions</div><div><span class="sw" style="background:#ff9f5a"></span>annealing</div></div><div class="box"><div class="boxt">Attori</div><div><span class="sw" style="background:#ffcc66"></span>company</div><div><span class="sw" style="background:#80d8ff"></span>hpc center</div><div><span class="sw" style="background:#b7ff7a"></span>consortium</div><div><span class="sw" style="background:#ff8fb3"></span>institution</div><div><span class="sw" style="background:#d7a7ff"></span>initiative</div></div></div>
<div class="progress"><div id="progress"></div></div><div class="steps" id="steps"></div><div class="controls"><button id="prev">← Indietro</button><button id="next">Avanti →</button><button id="play">Pausa</button></div>
<div class="footer">Dati locali: <code>qt_infrastructures</code>, <code>qt_actors</code>, <code>qt_relations</code>. SVG narrativo semplificato, non basemap cartografica.</div>
</aside></div>
<script>
const DATA = __DATA__;
const W=1280,H=720,b={lonMin:-8.5,lonMax:31.5,latMin:39,latMax:62.5};
const colP={"Neutral atoms":"#66d9a0","neutral_atoms":"#66d9a0","Superconducting":"#5ab0ff","superconducting":"#5ab0ff","Photonic":"#ffd95a","photonic":"#ffd95a","Trapped ions":"#c58cff","trapped_ions":"#c58cff","Superconducting annealing":"#ff9f5a","superconducting_annealing":"#ff9f5a","cryogenic_systems":"#9fb3ff","multiple":"#d4d4d4"};
const colA={company:"#ffcc66",hpc_research_center:"#80d8ff",national_consortium:"#b7ff7a",european_public_institution:"#ff8fb3",european_research_initiative:"#d7a7ff"};
const colR={supplier_of:"#ffcc66",component_supplier_for:"#e6e6e6",hosts:"#80d8ff",hosts_or_operates:"#80d8ff"};
let cur=0,playing=true,timer=null; const NS="http://www.w3.org/2000/svg";
function pr(lon,lat){return [(lon-b.lonMin)/(b.lonMax-b.lonMin)*W,(b.latMax-lat)/(b.latMax-b.latMin)*H]}
function mk(t,a={},text=null){let e=document.createElementNS(NS,t);for(const[k,v]of Object.entries(a))e.setAttribute(k,v);if(text!==null)e.textContent=text;return e}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function has(arr,v){return arr&&arr.length&&(arr.includes('all')||arr.includes(v))}
function id(f){return f.properties.id}
function tipHtml(d,kind){let p=d.properties||{}; if(kind==='infra')return `<b>${esc(p.name)}</b><br>piattaforma: ${esc(p.platform)}<br>tecnologia: ${esc(p.technology)}<br>host: ${esc(p.host)}<br>supplier: ${esc(p.supplier)}<br>qubits: ${esc(p.qubits)}`; if(kind==='actor')return `<b>${esc(p.name)}</b><br>tipo: ${esc(p.actor_type)}<br>dominio: ${esc(p.main_domain)}<br>ruolo: ${esc(p.role)}`; return `<b>${esc(p.relation_label||p.id)}</b><br>tipo: ${esc(p.relation_type)}<br>da: ${esc(p.from_name)}<br>a: ${esc(p.to_name)}`}
function bind(el,d,k){const tip=document.getElementById('tip');el.addEventListener('mousemove',ev=>{tip.style.display='block';tip.style.left=(ev.clientX+14)+'px';tip.style.top=(ev.clientY+14)+'px';tip.innerHTML=tipHtml(d,k)});el.addEventListener('mouseleave',()=>tip.style.display='none')}
function qsize(q){q=Number(q)||20;return Math.max(4,Math.min(12,4+(q-10)*8/140))}
function render(){
 for(let lon=-5;lon<=30;lon+=5){let a=pr(lon,b.latMin),c=pr(lon,b.latMax);document.getElementById('grid').appendChild(mk('line',{x1:a[0],y1:a[1],x2:c[0],y2:c[1],class:'grid'}))}
 for(let lat=40;lat<=60;lat+=5){let a=pr(b.lonMin,lat),c=pr(b.lonMax,lat);document.getElementById('grid').appendChild(mk('line',{x1:a[0],y1:a[1],x2:c[0],y2:c[1],class:'grid'}))}
 [['France',2.4,46.7],['Germany',10.4,51],['Italy',12.4,43.2],['Spain',-3.6,40.4],['Poland',19.1,52],['Czechia',15.4,49.8],['Austria',14,47.5],['Finland',25.7,60.6],['Belgium',4.4,50.8],['Lux.',6.1,49.7]].forEach(([n,lo,la])=>{let p=pr(lo,la);document.getElementById('countries').appendChild(mk('text',{x:p[0],y:p[1],class:'country'},n))});
 DATA.relations.features.forEach(f=>{let cs=f.geometry.coordinates.map(c=>pr(c[0],c[1])),rt=f.properties.relation_type;let e=mk('line',{x1:cs[0][0],y1:cs[0][1],x2:cs[1][0],y2:cs[1][1],stroke:colR[rt]||'#999',class:'rel '+rt,'data-id':id(f),'data-type':rt});bind(e,f,'rel');document.getElementById('rels').appendChild(e)});
 function point(f,kind){let [x,y]=pr(f.geometry.coordinates[0],f.geometry.coordinates[1]),p=f.properties,r=kind==='infra'?qsize(p.qubits):(p.actor_type==='company'?6.5:5.2),color=kind==='infra'?(colP[p.platform]||'#ddd'):(colA[p.actor_type]||'#eee'),label=kind==='infra'?p.name:(p.short_name||p.name);document.getElementById('halos').appendChild(mk('circle',{cx:x,cy:y,r:Math.max(r+8,14),class:'halo','data-id':id(f)}));let c=mk('circle',{cx:x,cy:y,r:r,fill:color,class:'pt '+kind,'data-id':id(f),'data-kind':kind,'data-type':kind==='infra'?'infra':p.actor_type});bind(c,f,kind);document.getElementById('pts').appendChild(c);document.getElementById('labs').appendChild(mk('text',{x:x,y:y-r-7,class:'lab','data-id':id(f)},label))}
 DATA.infra.features.forEach(f=>point(f,'infra')); DATA.actors.features.forEach(f=>point(f,'actor'));
 DATA.chapters.forEach((ch,i)=>{let s=document.createElement('div');s.className='step';s.textContent=ch.id;s.onclick=()=>{cur=i;update();restart()};document.getElementById('steps').appendChild(s)});
}
function update(){let ch=DATA.chapters[cur];document.getElementById('kicker').textContent=`Capitolo ${ch.id} · ${ch.year}`;document.getElementById('title').textContent=ch.title;document.getElementById('subtitle').textContent=ch.subtitle;document.getElementById('story').textContent=ch.text;document.getElementById('note').textContent=ch.note;document.getElementById('progress').style.width=((cur+1)/DATA.chapters.length*100)+'%';[...document.querySelectorAll('.step')].forEach((e,i)=>e.classList.toggle('active',i===cur));let visible=new Set();DATA.infra.features.forEach(f=>{if(has(ch.infra,'all'))visible.add(id(f))});DATA.actors.features.forEach(f=>{if(has(ch.actors,f.properties.actor_type))visible.add(id(f))});let focus=new Set(ch.focus||[]);document.querySelectorAll('.pt').forEach(e=>{let on=visible.has(e.dataset.id);e.classList.toggle('on',on);e.classList.toggle('focus',on&&focus.has(e.dataset.id))});document.querySelectorAll('.halo').forEach(e=>e.classList.toggle('on',visible.has(e.dataset.id)&&(focus.has(e.dataset.id)||ch.id==='09')));document.querySelectorAll('.lab').forEach(e=>e.classList.toggle('on',visible.has(e.dataset.id)));document.querySelectorAll('.rel').forEach(e=>e.classList.toggle('on',has(ch.relations,e.dataset.type)))}
function next(){cur=(cur+1)%DATA.chapters.length;update()}function prev(){cur=(cur-1+DATA.chapters.length)%DATA.chapters.length;update()}function restart(){if(timer)clearInterval(timer);if(playing)timer=setInterval(next,8000)}
document.getElementById('next').onclick=()=>{next();restart()};document.getElementById('prev').onclick=()=>{prev();restart()};document.getElementById('play').onclick=()=>{playing=!playing;document.getElementById('play').textContent=playing?'Pausa':'Play';restart()};document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){next();restart()} if(e.key==='ArrowLeft'){prev();restart()} if(e.key===' '){e.preventDefault();document.getElementById('play').click()}});
render();update();restart();
</script>
</body>
</html>
'''

def load_json(path: Path):
    with path.open(encoding='utf-8') as f:
        return json.load(f)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--data-dir', default='data/processed')
    ap.add_argument('--output', default='docs/quantum/quantum_story_atlas.html')
    args = ap.parse_args()
    data_dir = Path(args.data_dir)
    required = {
        'infra': data_dir / 'qt_infrastructures.geojson',
        'actors': data_dir / 'qt_actors.geojson',
        'relations': data_dir / 'qt_relations.geojson',
    }
    missing = [str(p) for p in required.values() if not p.exists()]
    if missing:
        raise FileNotFoundError('File mancanti:\n- ' + '\n- '.join(missing))
    data = {
        'chapters': CHAPTERS,
        'infra': load_json(required['infra']),
        'actors': load_json(required['actors']),
        'relations': load_json(required['relations']),
    }
    out = Path(args.output)
    out.parent.mkdir(parents=True, exist_ok=True)
    html = HTML_TEMPLATE.replace('__DATA__', json.dumps(data, ensure_ascii=False))
    out.write_text(html, encoding='utf-8')
    print(f'Creato: {out.resolve()}')
    print(f"Infrastrutture: {len(data['infra'].get('features', []))}")
    print(f"Attori: {len(data['actors'].get('features', []))}")
    print(f"Relazioni: {len(data['relations'].get('features', []))}")

if __name__ == '__main__':
    main()
