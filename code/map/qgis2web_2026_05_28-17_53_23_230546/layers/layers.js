var wms_layers = [];

var format_tiny_house_0 = new ol.format.GeoJSON();
var features_tiny_house_0 = format_tiny_house_0.readFeatures(json_tiny_house_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tiny_house_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tiny_house_0.addFeatures(features_tiny_house_0);
var lyr_tiny_house_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tiny_house_0, 
                style: style_tiny_house_0,
                popuplayertitle: 'tiny_house',
                interactive: true,
                title: '<img src="styles/legend/tiny_house_0.png" /> tiny_house'
            });
var format_Drone_port_1 = new ol.format.GeoJSON();
var features_Drone_port_1 = format_Drone_port_1.readFeatures(json_Drone_port_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drone_port_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drone_port_1.addFeatures(features_Drone_port_1);
var lyr_Drone_port_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drone_port_1, 
                style: style_Drone_port_1,
                popuplayertitle: 'Drone_port',
                interactive: true,
                title: '<img src="styles/legend/Drone_port_1.png" /> Drone_port'
            });
var format_amenity_school_ferrara_2 = new ol.format.GeoJSON();
var features_amenity_school_ferrara_2 = format_amenity_school_ferrara_2.readFeatures(json_amenity_school_ferrara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_school_ferrara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_school_ferrara_2.addFeatures(features_amenity_school_ferrara_2);
var lyr_amenity_school_ferrara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_school_ferrara_2, 
                style: style_amenity_school_ferrara_2,
                popuplayertitle: 'amenity_school_ferrara',
                interactive: true,
                title: '<img src="styles/legend/amenity_school_ferrara_2.png" /> amenity_school_ferrara'
            });
var format_amenity_school_ferrara_3 = new ol.format.GeoJSON();
var features_amenity_school_ferrara_3 = format_amenity_school_ferrara_3.readFeatures(json_amenity_school_ferrara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_school_ferrara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_school_ferrara_3.addFeatures(features_amenity_school_ferrara_3);
var lyr_amenity_school_ferrara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_school_ferrara_3, 
                style: style_amenity_school_ferrara_3,
                popuplayertitle: 'amenity_school_ferrara',
                interactive: true,
                title: '<img src="styles/legend/amenity_school_ferrara_3.png" /> amenity_school_ferrara'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_4, 
                style: style_building_4,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_highway_5 = new ol.format.GeoJSON();
var features_highway_5 = format_highway_5.readFeatures(json_highway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_5.addFeatures(features_highway_5);
var lyr_highway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_5, 
                style: style_highway_5,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_5.png" /> highway'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });
var format_building_7 = new ol.format.GeoJSON();
var features_building_7 = format_building_7.readFeatures(json_building_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_7.addFeatures(features_building_7);
var lyr_building_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_7, 
                style: style_building_7,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_7.png" /> building'
            });
var format_building_8 = new ol.format.GeoJSON();
var features_building_8 = format_building_8.readFeatures(json_building_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_8.addFeatures(features_building_8);
var lyr_building_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_8, 
                style: style_building_8,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_8.png" /> building'
            });
var format_convitto_base_localConvittoCardinalMoraesempiobase_9 = new ol.format.GeoJSON();
var features_convitto_base_localConvittoCardinalMoraesempiobase_9 = format_convitto_base_localConvittoCardinalMoraesempiobase_9.readFeatures(json_convitto_base_localConvittoCardinalMoraesempiobase_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_9.addFeatures(features_convitto_base_localConvittoCardinalMoraesempiobase_9);
var lyr_convitto_base_localConvittoCardinalMoraesempiobase_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_9, 
                style: style_convitto_base_localConvittoCardinalMoraesempiobase_9,
                popuplayertitle: 'convitto_base_local — Convitto Cardinal Mora - esempio base',
                interactive: true,
                title: '<img src="styles/legend/convitto_base_localConvittoCardinalMoraesempiobase_9.png" /> convitto_base_local — Convitto Cardinal Mora - esempio base'
            });
var format_convitto_base_localConvittoCardinalMoraesempiobase_10 = new ol.format.GeoJSON();
var features_convitto_base_localConvittoCardinalMoraesempiobase_10 = format_convitto_base_localConvittoCardinalMoraesempiobase_10.readFeatures(json_convitto_base_localConvittoCardinalMoraesempiobase_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_10.addFeatures(features_convitto_base_localConvittoCardinalMoraesempiobase_10);
var lyr_convitto_base_localConvittoCardinalMoraesempiobase_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_10, 
                style: style_convitto_base_localConvittoCardinalMoraesempiobase_10,
                popuplayertitle: 'convitto_base_local — Convitto Cardinal Mora - esempio base',
                interactive: true,
                title: '<img src="styles/legend/convitto_base_localConvittoCardinalMoraesempiobase_10.png" /> convitto_base_local — Convitto Cardinal Mora - esempio base'
            });
var format_targets_11 = new ol.format.GeoJSON();
var features_targets_11 = format_targets_11.readFeatures(json_targets_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_targets_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_targets_11.addFeatures(features_targets_11);
var lyr_targets_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_targets_11, 
                style: style_targets_11,
                popuplayertitle: 'targets',
                interactive: true,
                title: '<img src="styles/legend/targets_11.png" /> targets'
            });
var group_Zonadimenticata = new ol.layer.Group({
                                layers: [lyr_building_7,lyr_building_8,lyr_convitto_base_localConvittoCardinalMoraesempiobase_9,lyr_convitto_base_localConvittoCardinalMoraesempiobase_10,],
                                fold: 'open',
                                title: 'Zona dimenticata'});
var group_Topografia = new ol.layer.Group({
                                layers: [lyr_highway_5,lyr_highway_6,],
                                fold: 'close',
                                title: 'Topografia'});
var group_Strutture_dismesse = new ol.layer.Group({
                                layers: [lyr_amenity_school_ferrara_2,lyr_amenity_school_ferrara_3,lyr_building_4,],
                                fold: 'open',
                                title: 'Strutture_dismesse'});
var group_Infrastrutture = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Infrastrutture'});
var group_tinyhouses = new ol.layer.Group({
                                layers: [lyr_tiny_house_0,lyr_Drone_port_1,],
                                fold: 'close',
                                title: 'tiny houses'});

lyr_tiny_house_0.setVisible(true);lyr_Drone_port_1.setVisible(true);lyr_amenity_school_ferrara_2.setVisible(true);lyr_amenity_school_ferrara_3.setVisible(true);lyr_building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_building_7.setVisible(true);lyr_building_8.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_9.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_10.setVisible(true);lyr_targets_11.setVisible(true);
var layersList = [group_tinyhouses,group_Strutture_dismesse,group_Topografia,group_Zonadimenticata,lyr_targets_11];
lyr_tiny_house_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Proprietario': 'Proprietario', });
lyr_Drone_port_1.set('fieldAliases', {'fid': 'fid', });
lyr_amenity_school_ferrara_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'wheelchair': 'wheelchair', 'locked': 'locked', 'description': 'description', 'check_date': 'check_date', 'name:it': 'name:it', 'name:en': 'name:en', 'addr:postcode': 'addr:postcode', 'school': 'school', 'website': 'website', 'entrance': 'entrance', 'education': 'education', 'addr:housename': 'addr:housename', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'isced:level': 'isced:level', 'grades': 'grades', 'barrier': 'barrier', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'route_ref': 'route_ref', 'location': 'location', 'network': 'network', 'shelter': 'shelter', 'ref': 'ref', 'public_transport': 'public_transport', 'operator': 'operator', 'name': 'name', 'highway': 'highway', 'bench': 'bench', });
lyr_amenity_school_ferrara_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'roof:colour': 'roof:colour', 'addr:housename': 'addr:housename', 'barrier': 'barrier', 'religion': 'religion', 'grades': 'grades', 'wheelchair': 'wheelchair', 'toilets:wheelchair': 'toilets:wheelchair', 'name_1': 'name_1', 'website': 'website', 'roof:levels': 'roof:levels', 'addr:postcode': 'addr:postcode', 'isced:level': 'isced:level', 'addr:hamlet': 'addr:hamlet', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'name:etymology:wikidata': 'name:etymology:wikidata', 'wikidata': 'wikidata', 'roof:shape': 'roof:shape', 'roof:material': 'roof:material', 'operator:type': 'operator:type', 'height': 'height', 'building:material': 'building:material', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'education': 'education', 'building': 'building', });
lyr_building_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'man_made': 'man_made', 'roof:shape': 'roof:shape', 'start_date': 'start_date', 'shop': 'shop', 'operator': 'operator', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'leisure': 'leisure', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'roof:material': 'roof:material', 'religion': 'religion', 'historic': 'historic', 'denomination': 'denomination', 'building:material': 'building:material', 'name': 'name', 'amenity': 'amenity', 'building:levels': 'building:levels', 'height': 'height', 'type': 'type', });
lyr_highway_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'turn:lanes': 'turn:lanes', 'crossing:island': 'crossing:island', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'bin': 'bin', 'bench': 'bench', 'public_transport': 'public_transport', 'network': 'network', 'departures_board': 'departures_board', 'bus': 'bus', 'crossing:markings': 'crossing:markings', 'maxweight:signed': 'maxweight:signed', 'crossing': 'crossing', 'smoothness': 'smoothness', 'covered': 'covered', 'maxheight:signed': 'maxheight:signed', 'maxheight': 'maxheight', 'ramp': 'ramp', 'handrail': 'handrail', 'sport': 'sport', 'area': 'area', 'short_name': 'short_name', 'footway': 'footway', 'ref': 'ref', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'service': 'service', 'name:etymology:wikidata': 'name:etymology:wikidata', 'parking:both': 'parking:both', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'cycleway:lane': 'cycleway:lane', 'motorcar': 'motorcar', 'tunnel': 'tunnel', 'junction': 'junction', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'check_date:surface': 'check_date:surface', 'old_ref': 'old_ref', 'width': 'width', 'incline': 'incline', 'bridge': 'bridge', 'access': 'access', 'busway': 'busway', 'historic': 'historic', 'cycleway:left': 'cycleway:left', 'sidewalk:both': 'sidewalk:both', 'maxspeed': 'maxspeed', 'cycleway': 'cycleway', 'segregated': 'segregated', 'loc_name': 'loc_name', 'foot': 'foot', 'bicycle': 'bicycle', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'lanes': 'lanes', 'alt_name': 'alt_name', 'cycleway:right': 'cycleway:right', 'sidewalk': 'sidewalk', 'layer': 'layer', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'surface': 'surface', 'source:def': 'source:def', 'oneway': 'oneway', 'name': 'name', 'motor_vehicle': 'motor_vehicle', });
lyr_highway_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'level': 'level', 'operator': 'operator', 'network:wikidata': 'network:wikidata', 'horse': 'horse', 'golf': 'golf', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'arcade:right': 'arcade:right', 'departures_board': 'departures_board', 'bin': 'bin', 'public_transport': 'public_transport', 'bus': 'bus', 'placement': 'placement', 'maxspeed:type': 'maxspeed:type', 'turn:lanes:backward': 'turn:lanes:backward', 'maxheight': 'maxheight', 'crossing_ref': 'crossing_ref', 'maxweight:signed': 'maxweight:signed', 'covered': 'covered', 'parking:left:orientation': 'parking:left:orientation', 'parking:left': 'parking:left', 'tactile_paving': 'tactile_paving', 'footway': 'footway', 'step_count': 'step_count', 'cycleway:left': 'cycleway:left', 'ref': 'ref', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'informal': 'informal', 'junction': 'junction', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'motorcar': 'motorcar', 'tracktype': 'tracktype', 'hgv': 'hgv', 'tunnel': 'tunnel', 'smoothness': 'smoothness', 'width': 'width', 'source:maxspeed': 'source:maxspeed', 'vehicle:lanes': 'vehicle:lanes', 'psv:lanes:forward': 'psv:lanes:forward', 'lanes:backward': 'lanes:backward', 'access:lanes:forward': 'access:lanes:forward', 'shelter': 'shelter', 'network': 'network', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'bench': 'bench', 'turn:lanes': 'turn:lanes', 'old_ref': 'old_ref', 'bridge': 'bridge', 'segregated': 'segregated', 'check_date:surface': 'check_date:surface', 'historic': 'historic', 'access': 'access', 'cycleway:right': 'cycleway:right', 'parking:both:orientation': 'parking:both:orientation', 'parking:both': 'parking:both', 'layer': 'layer', 'cycleway': 'cycleway', 'parking:right:orientation': 'parking:right:orientation', 'parking:right': 'parking:right', 'sidewalk:both:surface': 'sidewalk:both:surface', 'loc_name': 'loc_name', 'area': 'area', 'short_name': 'short_name', 'maxspeed': 'maxspeed', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes': 'lanes', 'foot': 'foot', 'bicycle': 'bicycle', 'alt_name': 'alt_name', 'sidewalk:both': 'sidewalk:both', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'motor_vehicle': 'motor_vehicle', 'source:def': 'source:def', 'service': 'service', 'surface': 'surface', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_building_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', });
lyr_building_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'religion': 'religion', 'denomination': 'denomination', 'amenity': 'amenity', 'name': 'name', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_9.set('fieldAliases', {'nome': 'nome', 'tipo': 'tipo', 'piano': 'piano', 'funzione': 'funzione', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'note': 'note', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_10.set('fieldAliases', {'nome': 'nome', 'tipo': 'tipo', 'piano': 'piano', 'funzione': 'funzione', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'note': 'note', });
lyr_targets_11.set('fieldAliases', {'name': 'name', });
lyr_tiny_house_0.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Proprietario': 'TextEdit', });
lyr_Drone_port_1.set('fieldImages', {'fid': '', });
lyr_amenity_school_ferrara_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'wheelchair': '', 'locked': '', 'description': '', 'check_date': '', 'name:it': '', 'name:en': '', 'addr:postcode': '', 'school': '', 'website': '', 'entrance': '', 'education': '', 'addr:housename': '', 'addr:city': '', 'addr:street': '', 'addr:housenumber': '', 'isced:level': '', 'grades': '', 'barrier': '', 'wikipedia': '', 'wikidata': '', 'route_ref': '', 'location': '', 'network': '', 'shelter': '', 'ref': '', 'public_transport': '', 'operator': '', 'name': '', 'highway': '', 'bench': '', });
lyr_amenity_school_ferrara_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'roof:colour': '', 'addr:housename': '', 'barrier': '', 'religion': '', 'grades': '', 'wheelchair': '', 'toilets:wheelchair': '', 'name_1': '', 'website': '', 'roof:levels': '', 'addr:postcode': '', 'isced:level': '', 'addr:hamlet': '', 'addr:street': '', 'addr:housenumber': '', 'addr:city': '', 'name:etymology:wikidata': '', 'wikidata': '', 'roof:shape': '', 'roof:material': '', 'operator:type': '', 'height': '', 'building:material': '', 'building:levels': '', 'type': '', 'name': '', 'education': '', 'building': '', });
lyr_building_4.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'tower:type': 'TextEdit', 'tower:construction': 'TextEdit', 'man_made': 'TextEdit', 'roof:shape': 'TextEdit', 'start_date': 'TextEdit', 'shop': 'TextEdit', 'operator': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'leisure': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'roof:material': 'TextEdit', 'religion': 'TextEdit', 'historic': 'TextEdit', 'denomination': 'TextEdit', 'building:material': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'building:levels': 'TextEdit', 'height': 'TextEdit', 'type': 'TextEdit', });
lyr_highway_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'turn:lanes': '', 'crossing:island': '', 'tactile_paving': '', 'shelter': '', 'bin': '', 'bench': '', 'public_transport': '', 'network': '', 'departures_board': '', 'bus': '', 'crossing:markings': '', 'maxweight:signed': '', 'crossing': '', 'smoothness': '', 'covered': '', 'maxheight:signed': '', 'maxheight': '', 'ramp': '', 'handrail': '', 'sport': '', 'area': '', 'short_name': '', 'footway': '', 'ref': '', 'sidewalk:right': '', 'sidewalk:left': '', 'service': '', 'name:etymology:wikidata': '', 'parking:both': '', 'footway:surface': '', 'cycleway:surface': '', 'cycleway:lane': '', 'motorcar': '', 'tunnel': '', 'junction': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes:backward': '', 'check_date:surface': '', 'old_ref': '', 'width': '', 'incline': '', 'bridge': '', 'access': '', 'busway': '', 'historic': '', 'cycleway:left': '', 'sidewalk:both': '', 'maxspeed': '', 'cycleway': '', 'segregated': '', 'loc_name': '', 'foot': '', 'bicycle': '', 'wikipedia': '', 'wikidata': '', 'lanes': '', 'alt_name': '', 'cycleway:right': '', 'sidewalk': '', 'layer': '', 'lit': '', 'lane_markings': '', 'cycleway:both': '', 'surface': '', 'source:def': '', 'oneway': '', 'name': '', 'motor_vehicle': '', });
lyr_highway_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'level': '', 'operator': '', 'network:wikidata': '', 'horse': '', 'golf': '', 'crossing:markings': '', 'crossing': '', 'arcade:right': '', 'departures_board': '', 'bin': '', 'public_transport': '', 'bus': '', 'placement': '', 'maxspeed:type': '', 'turn:lanes:backward': '', 'maxheight': '', 'crossing_ref': '', 'maxweight:signed': '', 'covered': '', 'parking:left:orientation': '', 'parking:left': '', 'tactile_paving': '', 'footway': '', 'step_count': '', 'cycleway:left': '', 'ref': '', 'ramp': '', 'incline': '', 'handrail': '', 'informal': '', 'junction': '', 'sidewalk:right': '', 'sidewalk:left': '', 'motorcar': '', 'tracktype': '', 'hgv': '', 'tunnel': '', 'smoothness': '', 'width': '', 'source:maxspeed': '', 'vehicle:lanes': '', 'psv:lanes:forward': '', 'lanes:backward': '', 'access:lanes:forward': '', 'shelter': '', 'network': '', 'footway:surface': '', 'cycleway:surface': '', 'bench': '', 'turn:lanes': '', 'old_ref': '', 'bridge': '', 'segregated': '', 'check_date:surface': '', 'historic': '', 'access': '', 'cycleway:right': '', 'parking:both:orientation': '', 'parking:both': '', 'layer': '', 'cycleway': '', 'parking:right:orientation': '', 'parking:right': '', 'sidewalk:both:surface': '', 'loc_name': '', 'area': '', 'short_name': '', 'maxspeed': '', 'wikipedia': '', 'wikidata': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes': '', 'foot': '', 'bicycle': '', 'alt_name': '', 'sidewalk:both': '', 'sidewalk': '', 'oneway': '', 'lit': '', 'lane_markings': '', 'cycleway:both': '', 'motor_vehicle': '', 'source:def': '', 'service': '', 'surface': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_building_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:street': '', 'addr:housenumber': '', });
lyr_building_8.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_9.set('fieldImages', {'nome': 'TextEdit', 'tipo': 'TextEdit', 'piano': 'Range', 'funzione': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'note': 'TextEdit', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_10.set('fieldImages', {'nome': '', 'tipo': '', 'piano': '', 'funzione': '', 'spatial_url': '', 'url_label': '', 'note': '', });
lyr_targets_11.set('fieldImages', {'name': 'TextEdit', });
lyr_tiny_house_0.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Proprietario': 'no label', });
lyr_Drone_port_1.set('fieldLabels', {'fid': 'no label', });
lyr_amenity_school_ferrara_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'wheelchair': 'no label', 'locked': 'no label', 'description': 'no label', 'check_date': 'no label', 'name:it': 'no label', 'name:en': 'no label', 'addr:postcode': 'no label', 'school': 'no label', 'website': 'no label', 'entrance': 'no label', 'education': 'no label', 'addr:housename': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'isced:level': 'no label', 'grades': 'no label', 'barrier': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'route_ref': 'no label', 'location': 'no label', 'network': 'no label', 'shelter': 'no label', 'ref': 'no label', 'public_transport': 'no label', 'operator': 'no label', 'name': 'no label', 'highway': 'no label', 'bench': 'no label', });
lyr_amenity_school_ferrara_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'roof:colour': 'no label', 'addr:housename': 'no label', 'barrier': 'no label', 'religion': 'no label', 'grades': 'no label', 'wheelchair': 'no label', 'toilets:wheelchair': 'no label', 'name_1': 'no label', 'website': 'no label', 'roof:levels': 'no label', 'addr:postcode': 'no label', 'isced:level': 'no label', 'addr:hamlet': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'name:etymology:wikidata': 'no label', 'wikidata': 'no label', 'roof:shape': 'no label', 'roof:material': 'no label', 'operator:type': 'no label', 'height': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'education': 'no label', 'building': 'no label', });
lyr_building_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'man_made': 'no label', 'roof:shape': 'no label', 'start_date': 'no label', 'shop': 'no label', 'operator': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'leisure': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'roof:material': 'no label', 'religion': 'no label', 'historic': 'no label', 'denomination': 'no label', 'building:material': 'no label', 'name': 'no label', 'amenity': 'no label', 'building:levels': 'no label', 'height': 'no label', 'type': 'no label', });
lyr_highway_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'turn:lanes': 'no label', 'crossing:island': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'bin': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'network': 'no label', 'departures_board': 'no label', 'bus': 'no label', 'crossing:markings': 'no label', 'maxweight:signed': 'no label', 'crossing': 'no label', 'smoothness': 'no label', 'covered': 'no label', 'maxheight:signed': 'no label', 'maxheight': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'sport': 'no label', 'area': 'no label', 'short_name': 'no label', 'footway': 'no label', 'ref': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'service': 'no label', 'name:etymology:wikidata': 'no label', 'parking:both': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'cycleway:lane': 'no label', 'motorcar': 'no label', 'tunnel': 'no label', 'junction': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'check_date:surface': 'no label', 'old_ref': 'no label', 'width': 'no label', 'incline': 'no label', 'bridge': 'no label', 'access': 'no label', 'busway': 'no label', 'historic': 'no label', 'cycleway:left': 'no label', 'sidewalk:both': 'no label', 'maxspeed': 'no label', 'cycleway': 'no label', 'segregated': 'no label', 'loc_name': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'lanes': 'no label', 'alt_name': 'no label', 'cycleway:right': 'no label', 'sidewalk': 'no label', 'layer': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'surface': 'no label', 'source:def': 'no label', 'oneway': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', });
lyr_highway_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'level': 'no label', 'operator': 'no label', 'network:wikidata': 'no label', 'horse': 'no label', 'golf': 'no label', 'crossing:markings': 'no label', 'crossing': 'no label', 'arcade:right': 'no label', 'departures_board': 'no label', 'bin': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'placement': 'no label', 'maxspeed:type': 'no label', 'turn:lanes:backward': 'no label', 'maxheight': 'no label', 'crossing_ref': 'no label', 'maxweight:signed': 'no label', 'covered': 'no label', 'parking:left:orientation': 'no label', 'parking:left': 'no label', 'tactile_paving': 'no label', 'footway': 'no label', 'step_count': 'no label', 'cycleway:left': 'no label', 'ref': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'informal': 'no label', 'junction': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'motorcar': 'no label', 'tracktype': 'no label', 'hgv': 'no label', 'tunnel': 'no label', 'smoothness': 'no label', 'width': 'no label', 'source:maxspeed': 'no label', 'vehicle:lanes': 'no label', 'psv:lanes:forward': 'no label', 'lanes:backward': 'no label', 'access:lanes:forward': 'no label', 'shelter': 'no label', 'network': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'bench': 'no label', 'turn:lanes': 'no label', 'old_ref': 'no label', 'bridge': 'no label', 'segregated': 'no label', 'check_date:surface': 'no label', 'historic': 'no label', 'access': 'no label', 'cycleway:right': 'no label', 'parking:both:orientation': 'no label', 'parking:both': 'no label', 'layer': 'no label', 'cycleway': 'no label', 'parking:right:orientation': 'no label', 'parking:right': 'no label', 'sidewalk:both:surface': 'no label', 'loc_name': 'no label', 'area': 'no label', 'short_name': 'no label', 'maxspeed': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'alt_name': 'no label', 'sidewalk:both': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'motor_vehicle': 'no label', 'source:def': 'no label', 'service': 'no label', 'surface': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_building_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', });
lyr_building_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'religion': 'no label', 'denomination': 'no label', 'amenity': 'no label', 'name': 'no label', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_9.set('fieldLabels', {'nome': 'no label', 'tipo': 'no label', 'piano': 'no label', 'funzione': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'note': 'no label', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_10.set('fieldLabels', {'nome': 'no label', 'tipo': 'no label', 'piano': 'no label', 'funzione': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'note': 'no label', });
lyr_targets_11.set('fieldLabels', {'name': 'no label', });
lyr_targets_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});