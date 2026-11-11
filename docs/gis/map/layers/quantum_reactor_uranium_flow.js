/* Load after layers.js and before resources/qgis2web.js. OpenLayers global build. */
(function () {
  'use strict';
  var name = 'quantum_reactor_uranium_flow';
  if (typeof ol === 'undefined' || typeof layersList === 'undefined') {
    throw new Error(name + ': load OpenLayers and layers.js first');
  }
  if (window.lyr_quantum_reactor_uranium_flow) return;
  function wrap(text, limit) {
    var lines = [], line = '';
    String(text).split(/\s+/).forEach(function (word) {
      if (line && (line + ' ' + word).length > limit) { lines.push(line); line = ''; }
      line += (line ? ' ' : '') + word;
    });
    if (line) lines.push(line);
    return lines.join('\n');
  }
  var offsets = {inkai:[22,-42],tricastin:[-320,100],almelo:[-325,-100],vasteras:[25,-85],psi:[70,-85],cern:[75,120]};
  function style(feature, resolution) {
    var geometry = feature.getGeometry();
    if (feature.get('kind') === 'flow') {
      var end, start;
      geometry.forEachSegment(function(a,b) {start=a;end=b;});
      var rotation = Math.atan2(end[1]-start[1],end[0]-start[0]);
      return [
        new ol.style.Style({stroke:new ol.style.Stroke({color:'#68d9df',width:2.5,lineDash:[10,5]}),text:new ol.style.Text({text:feature.get('label'),placement:'line',font:'600 13px sans-serif',fill:new ol.style.Fill({color:'#68d9df'}),stroke:new ol.style.Stroke({color:'#050a0b',width:4})})}),
        new ol.style.Style({geometry:new ol.geom.Point(geometry.getCoordinateAt(0.88)),image:new ol.style.RegularShape({points:3,radius:10,rotation:-rotation+Math.PI/2,fill:new ol.style.Fill({color:'#68d9df'})})})
      ];
    }
    var color=feature.get('role')==='industrial'?'#f2c65c':'#a1b4b5';
    var result=[new ol.style.Style({image:new ol.style.Circle({radius:6,fill:new ol.style.Fill({color:color}),stroke:new ol.style.Stroke({color:'#050a0b',width:2})})})];
    var xy=geometry.getCoordinates(), offset=offsets[feature.get('id')] || [20,-30];
    // Callout leaders use screen offsets converted to map units at current zoom.
    var anchor=[xy[0]+offset[0]*resolution,xy[1]-offset[1]*resolution];
    result.push(new ol.style.Style({geometry:new ol.geom.LineString([xy,anchor]),stroke:new ol.style.Stroke({color:color,width:1})}));
    result.push(new ol.style.Style({geometry:new ol.geom.Point(anchor),text:new ol.style.Text({
      text:feature.get('name')+'\n'+wrap(feature.get('description'),40),
      font:'13px sans-serif',textAlign:'left',textBaseline:'middle',offsetX:6,
      fill:new ol.style.Fill({color:color}),stroke:new ol.style.Stroke({color:'#050a0b',width:2}),
      backgroundFill:new ol.style.Fill({color:'rgba(5,10,11,0.94)'}),
      backgroundStroke:new ol.style.Stroke({color:'#42574b',width:1}),padding:[7,9,7,9]
    })}));
    return result;
  }
  var layer=new ol.layer.Vector({
    title:name,popuplayertitle:'Quantum Reactor · flusso industriale dell’uranio',
    name:name,layerName:name,interactive:true,visible:false,zIndex:150,
    source:new ol.source.Vector({url:'./geojson/quantum_reactor_uranium_flow.geojson',format:new ol.format.GeoJSON()}),style:style
  });
  layer.set('cnotId',name);
  var fields=['id','name','kind','stage','role','description','source_url','coordinate_precision','coordinate_note','relation_type','transport_verified','note','from_id','to_id'];
  var aliases={},images={},labels={};
  fields.forEach(function(f){aliases[f]=f;images[f]='TextEdit';labels[f]='inline label';});
  layer.set('fieldAliases',aliases);layer.set('fieldImages',images);layer.set('fieldLabels',labels);
  window.lyr_quantum_reactor_uranium_flow=layer;
  layersList.push(layer);
})();
