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
var format_telecamere_11 = new ol.format.GeoJSON();
var features_telecamere_11 = format_telecamere_11.readFeatures(json_telecamere_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_telecamere_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_telecamere_11.addFeatures(features_telecamere_11);
var lyr_telecamere_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_telecamere_11, 
                style: style_telecamere_11,
                popuplayertitle: 'telecamere',
                interactive: true,
                title: '<img src="styles/legend/telecamere_11.png" /> telecamere'
            });
var format_highway_traffic_signals_ferrara_12 = new ol.format.GeoJSON();
var features_highway_traffic_signals_ferrara_12 = format_highway_traffic_signals_ferrara_12.readFeatures(json_highway_traffic_signals_ferrara_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_traffic_signals_ferrara_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_traffic_signals_ferrara_12.addFeatures(features_highway_traffic_signals_ferrara_12);
var lyr_highway_traffic_signals_ferrara_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_traffic_signals_ferrara_12, 
                style: style_highway_traffic_signals_ferrara_12,
                popuplayertitle: 'highway_traffic_signals_ferrara',
                interactive: true,
                title: '<img src="styles/legend/highway_traffic_signals_ferrara_12.png" /> highway_traffic_signals_ferrara'
            });
var format_Nuclear_power_plant_database_13 = new ol.format.GeoJSON();
var features_Nuclear_power_plant_database_13 = format_Nuclear_power_plant_database_13.readFeatures(json_Nuclear_power_plant_database_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nuclear_power_plant_database_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nuclear_power_plant_database_13.addFeatures(features_Nuclear_power_plant_database_13);
var lyr_Nuclear_power_plant_database_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nuclear_power_plant_database_13, 
                style: style_Nuclear_power_plant_database_13,
                popuplayertitle: 'Nuclear_power_plant_database',
                interactive: true,
                title: '<img src="styles/legend/Nuclear_power_plant_database_13.png" /> Nuclear_power_plant_database'
            });
var format_Solarl_power_plant_database_14 = new ol.format.GeoJSON();
var features_Solarl_power_plant_database_14 = format_Solarl_power_plant_database_14.readFeatures(json_Solarl_power_plant_database_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solarl_power_plant_database_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarl_power_plant_database_14.addFeatures(features_Solarl_power_plant_database_14);
var lyr_Solarl_power_plant_database_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarl_power_plant_database_14, 
                style: style_Solarl_power_plant_database_14,
                popuplayertitle: 'Solarl_power_plant_database',
                interactive: true,
                title: '<img src="styles/legend/Solarl_power_plant_database_14.png" /> Solarl_power_plant_database'
            });
var format_Wind_power_plant_database_15 = new ol.format.GeoJSON();
var features_Wind_power_plant_database_15 = format_Wind_power_plant_database_15.readFeatures(json_Wind_power_plant_database_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wind_power_plant_database_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wind_power_plant_database_15.addFeatures(features_Wind_power_plant_database_15);
var lyr_Wind_power_plant_database_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wind_power_plant_database_15, 
                style: style_Wind_power_plant_database_15,
                popuplayertitle: 'Wind_power_plant_database ',
                interactive: true,
                title: '<img src="styles/legend/Wind_power_plant_database_15.png" /> Wind_power_plant_database '
            });
var format_europe_16 = new ol.format.GeoJSON();
var features_europe_16 = format_europe_16.readFeatures(json_europe_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_europe_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_europe_16.addFeatures(features_europe_16);
var lyr_europe_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_europe_16, 
                style: style_europe_16,
                popuplayertitle: 'europe',
                interactive: true,
                title: 'europe'
            });
var format_targets_17 = new ol.format.GeoJSON();
var features_targets_17 = format_targets_17.readFeatures(json_targets_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_targets_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_targets_17.addFeatures(features_targets_17);
var lyr_targets_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_targets_17, 
                style: style_targets_17,
                popuplayertitle: 'targets',
                interactive: true,
                title: '<img src="styles/legend/targets_17.png" /> targets'
            });
var group_01_DATI_INFRASTRUTTURA_DIGITALE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '01_DATI_INFRASTRUTTURA_DIGITALE'});
var group_02_ENERGIA = new ol.layer.Group({
                                layers: [lyr_Nuclear_power_plant_database_13,lyr_Solarl_power_plant_database_14,lyr_Wind_power_plant_database_15,],
                                fold: 'open',
                                title: '02_ENERGIA'});
var group_05_SALUTE_MEDICINA = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '05_SALUTE_MEDICINA'});
var group_Admin_region = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Admin_region'});
var group_Sorveglianza = new ol.layer.Group({
                                layers: [lyr_telecamere_11,lyr_highway_traffic_signals_ferrara_12,],
                                fold: 'close',
                                title: 'Sorveglianza'});
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

lyr_tiny_house_0.setVisible(true);lyr_Drone_port_1.setVisible(true);lyr_amenity_school_ferrara_2.setVisible(true);lyr_amenity_school_ferrara_3.setVisible(true);lyr_building_4.setVisible(true);lyr_highway_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_building_7.setVisible(true);lyr_building_8.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_9.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_10.setVisible(true);lyr_telecamere_11.setVisible(true);lyr_highway_traffic_signals_ferrara_12.setVisible(true);lyr_Nuclear_power_plant_database_13.setVisible(true);lyr_Solarl_power_plant_database_14.setVisible(true);lyr_Wind_power_plant_database_15.setVisible(true);lyr_europe_16.setVisible(true);lyr_targets_17.setVisible(true);
var layersList = [group_tinyhouses,group_Strutture_dismesse,group_Topografia,group_Zonadimenticata,group_Sorveglianza,group_02_ENERGIA,lyr_europe_16,lyr_targets_17];
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
lyr_telecamere_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'note': 'note', });
lyr_highway_traffic_signals_ferrara_12.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:island': 'crossing:island', 'supervised': 'supervised', 'traffic_signals:direction': 'traffic_signals:direction', 'traffic_signals': 'traffic_signals', 'traffic_signals:vibration': 'traffic_signals:vibration', 'traffic_signals:sound': 'traffic_signals:sound', 'tactile_paving': 'tactile_paving', 'crossing': 'crossing', 'button_operated': 'button_operated', 'source:def': 'source:def', 'name': 'name', });
lyr_Nuclear_power_plant_database_13.set('fieldAliases', {'country': 'country', 'country_long': 'country_long', 'name': 'name', 'gppd_idnr': 'gppd_idnr', 'capacity_mw': 'capacity_mw', 'latitude': 'latitude', 'longitude': 'longitude', 'primary_fuel': 'primary_fuel', 'other_fuel1': 'other_fuel1', 'other_fuel2': 'other_fuel2', 'other_fuel3': 'other_fuel3', 'commissioning_year': 'commissioning_year', 'owner': 'owner', 'source': 'source', 'url': 'url', 'geolocation_source': 'geolocation_source', 'wepp_id': 'wepp_id', 'year_of_capacity_data': 'year_of_capacity_data', 'generation_gwh_2013': 'generation_gwh_2013', 'generation_gwh_2014': 'generation_gwh_2014', 'generation_gwh_2015': 'generation_gwh_2015', 'generation_gwh_2016': 'generation_gwh_2016', 'generation_gwh_2017': 'generation_gwh_2017', 'generation_gwh_2018': 'generation_gwh_2018', 'generation_gwh_2019': 'generation_gwh_2019', 'generation_data_source': 'generation_data_source', 'estimated_generation_gwh_2013': 'estimated_generation_gwh_2013', 'estimated_generation_gwh_2014': 'estimated_generation_gwh_2014', 'estimated_generation_gwh_2015': 'estimated_generation_gwh_2015', 'estimated_generation_gwh_2016': 'estimated_generation_gwh_2016', 'estimated_generation_gwh_2017': 'estimated_generation_gwh_2017', 'estimated_generation_note_2013': 'estimated_generation_note_2013', 'estimated_generation_note_2014': 'estimated_generation_note_2014', 'estimated_generation_note_2015': 'estimated_generation_note_2015', 'estimated_generation_note_2016': 'estimated_generation_note_2016', 'estimated_generation_note_2017': 'estimated_generation_note_2017', });
lyr_Solarl_power_plant_database_14.set('fieldAliases', {'country': 'country', 'country_long': 'country_long', 'name': 'name', 'gppd_idnr': 'gppd_idnr', 'capacity_mw': 'capacity_mw', 'latitude': 'latitude', 'longitude': 'longitude', 'primary_fuel': 'primary_fuel', 'other_fuel1': 'other_fuel1', 'other_fuel2': 'other_fuel2', 'other_fuel3': 'other_fuel3', 'commissioning_year': 'commissioning_year', 'owner': 'owner', 'source': 'source', 'url': 'url', 'geolocation_source': 'geolocation_source', 'wepp_id': 'wepp_id', 'year_of_capacity_data': 'year_of_capacity_data', 'generation_gwh_2013': 'generation_gwh_2013', 'generation_gwh_2014': 'generation_gwh_2014', 'generation_gwh_2015': 'generation_gwh_2015', 'generation_gwh_2016': 'generation_gwh_2016', 'generation_gwh_2017': 'generation_gwh_2017', 'generation_gwh_2018': 'generation_gwh_2018', 'generation_gwh_2019': 'generation_gwh_2019', 'generation_data_source': 'generation_data_source', 'estimated_generation_gwh_2013': 'estimated_generation_gwh_2013', 'estimated_generation_gwh_2014': 'estimated_generation_gwh_2014', 'estimated_generation_gwh_2015': 'estimated_generation_gwh_2015', 'estimated_generation_gwh_2016': 'estimated_generation_gwh_2016', 'estimated_generation_gwh_2017': 'estimated_generation_gwh_2017', 'estimated_generation_note_2013': 'estimated_generation_note_2013', 'estimated_generation_note_2014': 'estimated_generation_note_2014', 'estimated_generation_note_2015': 'estimated_generation_note_2015', 'estimated_generation_note_2016': 'estimated_generation_note_2016', 'estimated_generation_note_2017': 'estimated_generation_note_2017', });
lyr_Wind_power_plant_database_15.set('fieldAliases', {'country': 'country', 'country_long': 'country_long', 'name': 'name', 'gppd_idnr': 'gppd_idnr', 'capacity_mw': 'capacity_mw', 'latitude': 'latitude', 'longitude': 'longitude', 'primary_fuel': 'primary_fuel', 'other_fuel1': 'other_fuel1', 'other_fuel2': 'other_fuel2', 'other_fuel3': 'other_fuel3', 'commissioning_year': 'commissioning_year', 'owner': 'owner', 'source': 'source', 'url': 'url', 'geolocation_source': 'geolocation_source', 'wepp_id': 'wepp_id', 'year_of_capacity_data': 'year_of_capacity_data', 'generation_gwh_2013': 'generation_gwh_2013', 'generation_gwh_2014': 'generation_gwh_2014', 'generation_gwh_2015': 'generation_gwh_2015', 'generation_gwh_2016': 'generation_gwh_2016', 'generation_gwh_2017': 'generation_gwh_2017', 'generation_gwh_2018': 'generation_gwh_2018', 'generation_gwh_2019': 'generation_gwh_2019', 'generation_data_source': 'generation_data_source', 'estimated_generation_gwh_2013': 'estimated_generation_gwh_2013', 'estimated_generation_gwh_2014': 'estimated_generation_gwh_2014', 'estimated_generation_gwh_2015': 'estimated_generation_gwh_2015', 'estimated_generation_gwh_2016': 'estimated_generation_gwh_2016', 'estimated_generation_gwh_2017': 'estimated_generation_gwh_2017', 'estimated_generation_note_2013': 'estimated_generation_note_2013', 'estimated_generation_note_2014': 'estimated_generation_note_2014', 'estimated_generation_note_2015': 'estimated_generation_note_2015', 'estimated_generation_note_2016': 'estimated_generation_note_2016', 'estimated_generation_note_2017': 'estimated_generation_note_2017', });
lyr_europe_16.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'labelrank': 'labelrank', 'sovereignt': 'sovereignt', 'sov_a3': 'sov_a3', 'adm0_dif': 'adm0_dif', 'level': 'level', 'type': 'type', 'tlc': 'tlc', 'admin': 'admin', 'adm0_a3': 'adm0_a3', 'geou_dif': 'geou_dif', 'geounit': 'geounit', 'gu_a3': 'gu_a3', 'su_dif': 'su_dif', 'subunit': 'subunit', 'su_a3': 'su_a3', 'brk_diff': 'brk_diff', 'name': 'name', 'name_long': 'name_long', 'brk_a3': 'brk_a3', 'brk_name': 'brk_name', 'brk_group': 'brk_group', 'abbrev': 'abbrev', 'postal': 'postal', 'formal_en': 'formal_en', 'formal_fr': 'formal_fr', 'name_ciawf': 'name_ciawf', 'note_adm0': 'note_adm0', 'note_brk': 'note_brk', 'name_sort': 'name_sort', 'name_alt': 'name_alt', 'mapcolor7': 'mapcolor7', 'mapcolor8': 'mapcolor8', 'mapcolor9': 'mapcolor9', 'mapcolor13': 'mapcolor13', 'pop_est': 'pop_est', 'pop_rank': 'pop_rank', 'pop_year': 'pop_year', 'gdp_md': 'gdp_md', 'gdp_year': 'gdp_year', 'economy': 'economy', 'income_grp': 'income_grp', 'fips_10': 'fips_10', 'iso_a2': 'iso_a2', 'iso_a2_eh': 'iso_a2_eh', 'iso_a3': 'iso_a3', 'iso_a3_eh': 'iso_a3_eh', 'iso_n3': 'iso_n3', 'iso_n3_eh': 'iso_n3_eh', 'un_a3': 'un_a3', 'wb_a2': 'wb_a2', 'wb_a3': 'wb_a3', 'woe_id': 'woe_id', 'woe_id_eh': 'woe_id_eh', 'woe_note': 'woe_note', 'adm0_iso': 'adm0_iso', 'adm0_diff': 'adm0_diff', 'adm0_tlc': 'adm0_tlc', 'adm0_a3_us': 'adm0_a3_us', 'adm0_a3_fr': 'adm0_a3_fr', 'adm0_a3_ru': 'adm0_a3_ru', 'adm0_a3_es': 'adm0_a3_es', 'adm0_a3_cn': 'adm0_a3_cn', 'adm0_a3_tw': 'adm0_a3_tw', 'adm0_a3_in': 'adm0_a3_in', 'adm0_a3_np': 'adm0_a3_np', 'adm0_a3_pk': 'adm0_a3_pk', 'adm0_a3_de': 'adm0_a3_de', 'adm0_a3_gb': 'adm0_a3_gb', 'adm0_a3_br': 'adm0_a3_br', 'adm0_a3_il': 'adm0_a3_il', 'adm0_a3_ps': 'adm0_a3_ps', 'adm0_a3_sa': 'adm0_a3_sa', 'adm0_a3_eg': 'adm0_a3_eg', 'adm0_a3_ma': 'adm0_a3_ma', 'adm0_a3_pt': 'adm0_a3_pt', 'adm0_a3_ar': 'adm0_a3_ar', 'adm0_a3_jp': 'adm0_a3_jp', 'adm0_a3_ko': 'adm0_a3_ko', 'adm0_a3_vn': 'adm0_a3_vn', 'adm0_a3_tr': 'adm0_a3_tr', 'adm0_a3_id': 'adm0_a3_id', 'adm0_a3_pl': 'adm0_a3_pl', 'adm0_a3_gr': 'adm0_a3_gr', 'adm0_a3_it': 'adm0_a3_it', 'adm0_a3_nl': 'adm0_a3_nl', 'adm0_a3_se': 'adm0_a3_se', 'adm0_a3_bd': 'adm0_a3_bd', 'adm0_a3_ua': 'adm0_a3_ua', 'adm0_a3_un': 'adm0_a3_un', 'adm0_a3_wb': 'adm0_a3_wb', 'continent': 'continent', 'region_un': 'region_un', 'subregion': 'subregion', 'region_wb': 'region_wb', 'name_len': 'name_len', 'long_len': 'long_len', 'abbrev_len': 'abbrev_len', 'tiny': 'tiny', 'homepart': 'homepart', 'min_zoom': 'min_zoom', 'min_label': 'min_label', 'max_label': 'max_label', 'label_x': 'label_x', 'label_y': 'label_y', 'ne_id': 'ne_id', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fa': 'name_fa', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_he': 'name_he', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'name_zht': 'name_zht', 'fclass_iso': 'fclass_iso', 'tlc_diff': 'tlc_diff', 'fclass_tlc': 'fclass_tlc', 'fclass_us': 'fclass_us', 'fclass_fr': 'fclass_fr', 'fclass_ru': 'fclass_ru', 'fclass_es': 'fclass_es', 'fclass_cn': 'fclass_cn', 'fclass_tw': 'fclass_tw', 'fclass_in': 'fclass_in', 'fclass_np': 'fclass_np', 'fclass_pk': 'fclass_pk', 'fclass_de': 'fclass_de', 'fclass_gb': 'fclass_gb', 'fclass_br': 'fclass_br', 'fclass_il': 'fclass_il', 'fclass_ps': 'fclass_ps', 'fclass_sa': 'fclass_sa', 'fclass_eg': 'fclass_eg', 'fclass_ma': 'fclass_ma', 'fclass_pt': 'fclass_pt', 'fclass_ar': 'fclass_ar', 'fclass_jp': 'fclass_jp', 'fclass_ko': 'fclass_ko', 'fclass_vn': 'fclass_vn', 'fclass_tr': 'fclass_tr', 'fclass_id': 'fclass_id', 'fclass_pl': 'fclass_pl', 'fclass_gr': 'fclass_gr', 'fclass_it': 'fclass_it', 'fclass_nl': 'fclass_nl', 'fclass_se': 'fclass_se', 'fclass_bd': 'fclass_bd', 'fclass_ua': 'fclass_ua', 'filename': 'filename', });
lyr_targets_17.set('fieldAliases', {'name': 'name', });
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
lyr_telecamere_11.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'tipo': '', 'note': '', });
lyr_highway_traffic_signals_ferrara_12.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing:island': '', 'supervised': '', 'traffic_signals:direction': '', 'traffic_signals': '', 'traffic_signals:vibration': '', 'traffic_signals:sound': '', 'tactile_paving': '', 'crossing': '', 'button_operated': '', 'source:def': '', 'name': '', });
lyr_Nuclear_power_plant_database_13.set('fieldImages', {'country': 'TextEdit', 'country_long': 'TextEdit', 'name': 'TextEdit', 'gppd_idnr': 'TextEdit', 'capacity_mw': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'primary_fuel': 'TextEdit', 'other_fuel1': 'TextEdit', 'other_fuel2': 'TextEdit', 'other_fuel3': 'TextEdit', 'commissioning_year': 'TextEdit', 'owner': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'geolocation_source': 'TextEdit', 'wepp_id': 'TextEdit', 'year_of_capacity_data': 'Range', 'generation_gwh_2013': 'TextEdit', 'generation_gwh_2014': 'TextEdit', 'generation_gwh_2015': 'TextEdit', 'generation_gwh_2016': 'TextEdit', 'generation_gwh_2017': 'TextEdit', 'generation_gwh_2018': 'TextEdit', 'generation_gwh_2019': 'TextEdit', 'generation_data_source': 'TextEdit', 'estimated_generation_gwh_2013': 'TextEdit', 'estimated_generation_gwh_2014': 'TextEdit', 'estimated_generation_gwh_2015': 'TextEdit', 'estimated_generation_gwh_2016': 'TextEdit', 'estimated_generation_gwh_2017': 'TextEdit', 'estimated_generation_note_2013': 'TextEdit', 'estimated_generation_note_2014': 'TextEdit', 'estimated_generation_note_2015': 'TextEdit', 'estimated_generation_note_2016': 'TextEdit', 'estimated_generation_note_2017': 'TextEdit', });
lyr_Solarl_power_plant_database_14.set('fieldImages', {'country': 'TextEdit', 'country_long': 'TextEdit', 'name': 'TextEdit', 'gppd_idnr': 'TextEdit', 'capacity_mw': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'primary_fuel': 'TextEdit', 'other_fuel1': 'TextEdit', 'other_fuel2': 'TextEdit', 'other_fuel3': 'TextEdit', 'commissioning_year': 'TextEdit', 'owner': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'geolocation_source': 'TextEdit', 'wepp_id': 'TextEdit', 'year_of_capacity_data': 'Range', 'generation_gwh_2013': 'TextEdit', 'generation_gwh_2014': 'TextEdit', 'generation_gwh_2015': 'TextEdit', 'generation_gwh_2016': 'TextEdit', 'generation_gwh_2017': 'TextEdit', 'generation_gwh_2018': 'TextEdit', 'generation_gwh_2019': 'TextEdit', 'generation_data_source': 'TextEdit', 'estimated_generation_gwh_2013': 'TextEdit', 'estimated_generation_gwh_2014': 'TextEdit', 'estimated_generation_gwh_2015': 'TextEdit', 'estimated_generation_gwh_2016': 'TextEdit', 'estimated_generation_gwh_2017': 'TextEdit', 'estimated_generation_note_2013': 'TextEdit', 'estimated_generation_note_2014': 'TextEdit', 'estimated_generation_note_2015': 'TextEdit', 'estimated_generation_note_2016': 'TextEdit', 'estimated_generation_note_2017': 'TextEdit', });
lyr_Wind_power_plant_database_15.set('fieldImages', {'country': 'TextEdit', 'country_long': 'TextEdit', 'name': 'TextEdit', 'gppd_idnr': 'TextEdit', 'capacity_mw': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'primary_fuel': 'TextEdit', 'other_fuel1': 'TextEdit', 'other_fuel2': 'TextEdit', 'other_fuel3': 'TextEdit', 'commissioning_year': 'TextEdit', 'owner': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'geolocation_source': 'TextEdit', 'wepp_id': 'TextEdit', 'year_of_capacity_data': 'Range', 'generation_gwh_2013': 'TextEdit', 'generation_gwh_2014': 'TextEdit', 'generation_gwh_2015': 'TextEdit', 'generation_gwh_2016': 'TextEdit', 'generation_gwh_2017': 'TextEdit', 'generation_gwh_2018': 'TextEdit', 'generation_gwh_2019': 'TextEdit', 'generation_data_source': 'TextEdit', 'estimated_generation_gwh_2013': 'TextEdit', 'estimated_generation_gwh_2014': 'TextEdit', 'estimated_generation_gwh_2015': 'TextEdit', 'estimated_generation_gwh_2016': 'TextEdit', 'estimated_generation_gwh_2017': 'TextEdit', 'estimated_generation_note_2013': 'TextEdit', 'estimated_generation_note_2014': 'TextEdit', 'estimated_generation_note_2015': 'TextEdit', 'estimated_generation_note_2016': 'TextEdit', 'estimated_generation_note_2017': 'TextEdit', });
lyr_europe_16.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'labelrank': 'Range', 'sovereignt': 'TextEdit', 'sov_a3': 'TextEdit', 'adm0_dif': 'Range', 'level': 'Range', 'type': 'TextEdit', 'tlc': 'TextEdit', 'admin': 'TextEdit', 'adm0_a3': 'TextEdit', 'geou_dif': 'Range', 'geounit': 'TextEdit', 'gu_a3': 'TextEdit', 'su_dif': 'Range', 'subunit': 'TextEdit', 'su_a3': 'TextEdit', 'brk_diff': 'Range', 'name': 'TextEdit', 'name_long': 'TextEdit', 'brk_a3': 'TextEdit', 'brk_name': 'TextEdit', 'brk_group': 'TextEdit', 'abbrev': 'TextEdit', 'postal': 'TextEdit', 'formal_en': 'TextEdit', 'formal_fr': 'TextEdit', 'name_ciawf': 'TextEdit', 'note_adm0': 'TextEdit', 'note_brk': 'TextEdit', 'name_sort': 'TextEdit', 'name_alt': 'TextEdit', 'mapcolor7': 'Range', 'mapcolor8': 'Range', 'mapcolor9': 'Range', 'mapcolor13': 'Range', 'pop_est': 'Range', 'pop_rank': 'Range', 'pop_year': 'Range', 'gdp_md': 'Range', 'gdp_year': 'Range', 'economy': 'TextEdit', 'income_grp': 'TextEdit', 'fips_10': 'TextEdit', 'iso_a2': 'TextEdit', 'iso_a2_eh': 'TextEdit', 'iso_a3': 'TextEdit', 'iso_a3_eh': 'TextEdit', 'iso_n3': 'TextEdit', 'iso_n3_eh': 'TextEdit', 'un_a3': 'TextEdit', 'wb_a2': 'TextEdit', 'wb_a3': 'TextEdit', 'woe_id': 'Range', 'woe_id_eh': 'Range', 'woe_note': 'TextEdit', 'adm0_iso': 'TextEdit', 'adm0_diff': 'TextEdit', 'adm0_tlc': 'TextEdit', 'adm0_a3_us': 'TextEdit', 'adm0_a3_fr': 'TextEdit', 'adm0_a3_ru': 'TextEdit', 'adm0_a3_es': 'TextEdit', 'adm0_a3_cn': 'TextEdit', 'adm0_a3_tw': 'TextEdit', 'adm0_a3_in': 'TextEdit', 'adm0_a3_np': 'TextEdit', 'adm0_a3_pk': 'TextEdit', 'adm0_a3_de': 'TextEdit', 'adm0_a3_gb': 'TextEdit', 'adm0_a3_br': 'TextEdit', 'adm0_a3_il': 'TextEdit', 'adm0_a3_ps': 'TextEdit', 'adm0_a3_sa': 'TextEdit', 'adm0_a3_eg': 'TextEdit', 'adm0_a3_ma': 'TextEdit', 'adm0_a3_pt': 'TextEdit', 'adm0_a3_ar': 'TextEdit', 'adm0_a3_jp': 'TextEdit', 'adm0_a3_ko': 'TextEdit', 'adm0_a3_vn': 'TextEdit', 'adm0_a3_tr': 'TextEdit', 'adm0_a3_id': 'TextEdit', 'adm0_a3_pl': 'TextEdit', 'adm0_a3_gr': 'TextEdit', 'adm0_a3_it': 'TextEdit', 'adm0_a3_nl': 'TextEdit', 'adm0_a3_se': 'TextEdit', 'adm0_a3_bd': 'TextEdit', 'adm0_a3_ua': 'TextEdit', 'adm0_a3_un': 'Range', 'adm0_a3_wb': 'Range', 'continent': 'TextEdit', 'region_un': 'TextEdit', 'subregion': 'TextEdit', 'region_wb': 'TextEdit', 'name_len': 'Range', 'long_len': 'Range', 'abbrev_len': 'Range', 'tiny': 'Range', 'homepart': 'Range', 'min_zoom': 'Range', 'min_label': 'TextEdit', 'max_label': 'TextEdit', 'label_x': 'TextEdit', 'label_y': 'TextEdit', 'ne_id': 'Range', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fa': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_he': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'name_zht': 'TextEdit', 'fclass_iso': 'TextEdit', 'tlc_diff': 'TextEdit', 'fclass_tlc': 'TextEdit', 'fclass_us': 'TextEdit', 'fclass_fr': 'TextEdit', 'fclass_ru': 'TextEdit', 'fclass_es': 'TextEdit', 'fclass_cn': 'TextEdit', 'fclass_tw': 'TextEdit', 'fclass_in': 'TextEdit', 'fclass_np': 'TextEdit', 'fclass_pk': 'TextEdit', 'fclass_de': 'TextEdit', 'fclass_gb': 'TextEdit', 'fclass_br': 'TextEdit', 'fclass_il': 'TextEdit', 'fclass_ps': 'TextEdit', 'fclass_sa': 'TextEdit', 'fclass_eg': 'TextEdit', 'fclass_ma': 'TextEdit', 'fclass_pt': 'TextEdit', 'fclass_ar': 'TextEdit', 'fclass_jp': 'TextEdit', 'fclass_ko': 'TextEdit', 'fclass_vn': 'TextEdit', 'fclass_tr': 'TextEdit', 'fclass_id': 'TextEdit', 'fclass_pl': 'TextEdit', 'fclass_gr': 'TextEdit', 'fclass_it': 'TextEdit', 'fclass_nl': 'TextEdit', 'fclass_se': 'TextEdit', 'fclass_bd': 'TextEdit', 'fclass_ua': 'TextEdit', 'filename': 'TextEdit', });
lyr_targets_17.set('fieldImages', {'name': 'TextEdit', });
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
lyr_telecamere_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'tipo': 'no label', 'note': 'no label', });
lyr_highway_traffic_signals_ferrara_12.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing:island': 'no label', 'supervised': 'no label', 'traffic_signals:direction': 'no label', 'traffic_signals': 'no label', 'traffic_signals:vibration': 'no label', 'traffic_signals:sound': 'no label', 'tactile_paving': 'no label', 'crossing': 'no label', 'button_operated': 'no label', 'source:def': 'no label', 'name': 'no label', });
lyr_Nuclear_power_plant_database_13.set('fieldLabels', {'country': 'no label', 'country_long': 'no label', 'name': 'no label', 'gppd_idnr': 'no label', 'capacity_mw': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'primary_fuel': 'no label', 'other_fuel1': 'no label', 'other_fuel2': 'no label', 'other_fuel3': 'no label', 'commissioning_year': 'no label', 'owner': 'no label', 'source': 'no label', 'url': 'no label', 'geolocation_source': 'no label', 'wepp_id': 'no label', 'year_of_capacity_data': 'no label', 'generation_gwh_2013': 'no label', 'generation_gwh_2014': 'no label', 'generation_gwh_2015': 'no label', 'generation_gwh_2016': 'no label', 'generation_gwh_2017': 'no label', 'generation_gwh_2018': 'no label', 'generation_gwh_2019': 'no label', 'generation_data_source': 'no label', 'estimated_generation_gwh_2013': 'no label', 'estimated_generation_gwh_2014': 'no label', 'estimated_generation_gwh_2015': 'no label', 'estimated_generation_gwh_2016': 'no label', 'estimated_generation_gwh_2017': 'no label', 'estimated_generation_note_2013': 'no label', 'estimated_generation_note_2014': 'no label', 'estimated_generation_note_2015': 'no label', 'estimated_generation_note_2016': 'no label', 'estimated_generation_note_2017': 'no label', });
lyr_Solarl_power_plant_database_14.set('fieldLabels', {'country': 'no label', 'country_long': 'no label', 'name': 'no label', 'gppd_idnr': 'no label', 'capacity_mw': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'primary_fuel': 'no label', 'other_fuel1': 'no label', 'other_fuel2': 'no label', 'other_fuel3': 'no label', 'commissioning_year': 'no label', 'owner': 'no label', 'source': 'no label', 'url': 'no label', 'geolocation_source': 'no label', 'wepp_id': 'no label', 'year_of_capacity_data': 'no label', 'generation_gwh_2013': 'no label', 'generation_gwh_2014': 'no label', 'generation_gwh_2015': 'no label', 'generation_gwh_2016': 'no label', 'generation_gwh_2017': 'no label', 'generation_gwh_2018': 'no label', 'generation_gwh_2019': 'no label', 'generation_data_source': 'no label', 'estimated_generation_gwh_2013': 'no label', 'estimated_generation_gwh_2014': 'no label', 'estimated_generation_gwh_2015': 'no label', 'estimated_generation_gwh_2016': 'no label', 'estimated_generation_gwh_2017': 'no label', 'estimated_generation_note_2013': 'no label', 'estimated_generation_note_2014': 'no label', 'estimated_generation_note_2015': 'no label', 'estimated_generation_note_2016': 'no label', 'estimated_generation_note_2017': 'no label', });
lyr_Wind_power_plant_database_15.set('fieldLabels', {'country': 'no label', 'country_long': 'no label', 'name': 'no label', 'gppd_idnr': 'no label', 'capacity_mw': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'primary_fuel': 'no label', 'other_fuel1': 'no label', 'other_fuel2': 'no label', 'other_fuel3': 'no label', 'commissioning_year': 'no label', 'owner': 'no label', 'source': 'no label', 'url': 'no label', 'geolocation_source': 'no label', 'wepp_id': 'no label', 'year_of_capacity_data': 'no label', 'generation_gwh_2013': 'no label', 'generation_gwh_2014': 'no label', 'generation_gwh_2015': 'no label', 'generation_gwh_2016': 'no label', 'generation_gwh_2017': 'no label', 'generation_gwh_2018': 'no label', 'generation_gwh_2019': 'no label', 'generation_data_source': 'no label', 'estimated_generation_gwh_2013': 'no label', 'estimated_generation_gwh_2014': 'no label', 'estimated_generation_gwh_2015': 'no label', 'estimated_generation_gwh_2016': 'no label', 'estimated_generation_gwh_2017': 'no label', 'estimated_generation_note_2013': 'no label', 'estimated_generation_note_2014': 'no label', 'estimated_generation_note_2015': 'no label', 'estimated_generation_note_2016': 'no label', 'estimated_generation_note_2017': 'no label', });
lyr_europe_16.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'labelrank': 'no label', 'sovereignt': 'no label', 'sov_a3': 'no label', 'adm0_dif': 'no label', 'level': 'no label', 'type': 'no label', 'tlc': 'no label', 'admin': 'no label', 'adm0_a3': 'no label', 'geou_dif': 'no label', 'geounit': 'no label', 'gu_a3': 'no label', 'su_dif': 'no label', 'subunit': 'no label', 'su_a3': 'no label', 'brk_diff': 'no label', 'name': 'no label', 'name_long': 'no label', 'brk_a3': 'no label', 'brk_name': 'no label', 'brk_group': 'no label', 'abbrev': 'no label', 'postal': 'no label', 'formal_en': 'no label', 'formal_fr': 'no label', 'name_ciawf': 'no label', 'note_adm0': 'no label', 'note_brk': 'no label', 'name_sort': 'no label', 'name_alt': 'no label', 'mapcolor7': 'no label', 'mapcolor8': 'no label', 'mapcolor9': 'no label', 'mapcolor13': 'no label', 'pop_est': 'no label', 'pop_rank': 'no label', 'pop_year': 'no label', 'gdp_md': 'no label', 'gdp_year': 'no label', 'economy': 'no label', 'income_grp': 'no label', 'fips_10': 'no label', 'iso_a2': 'no label', 'iso_a2_eh': 'no label', 'iso_a3': 'no label', 'iso_a3_eh': 'no label', 'iso_n3': 'no label', 'iso_n3_eh': 'no label', 'un_a3': 'no label', 'wb_a2': 'no label', 'wb_a3': 'no label', 'woe_id': 'no label', 'woe_id_eh': 'no label', 'woe_note': 'no label', 'adm0_iso': 'no label', 'adm0_diff': 'no label', 'adm0_tlc': 'no label', 'adm0_a3_us': 'no label', 'adm0_a3_fr': 'no label', 'adm0_a3_ru': 'no label', 'adm0_a3_es': 'no label', 'adm0_a3_cn': 'no label', 'adm0_a3_tw': 'no label', 'adm0_a3_in': 'no label', 'adm0_a3_np': 'no label', 'adm0_a3_pk': 'no label', 'adm0_a3_de': 'no label', 'adm0_a3_gb': 'no label', 'adm0_a3_br': 'no label', 'adm0_a3_il': 'no label', 'adm0_a3_ps': 'no label', 'adm0_a3_sa': 'no label', 'adm0_a3_eg': 'no label', 'adm0_a3_ma': 'no label', 'adm0_a3_pt': 'no label', 'adm0_a3_ar': 'no label', 'adm0_a3_jp': 'no label', 'adm0_a3_ko': 'no label', 'adm0_a3_vn': 'no label', 'adm0_a3_tr': 'no label', 'adm0_a3_id': 'no label', 'adm0_a3_pl': 'no label', 'adm0_a3_gr': 'no label', 'adm0_a3_it': 'no label', 'adm0_a3_nl': 'no label', 'adm0_a3_se': 'no label', 'adm0_a3_bd': 'no label', 'adm0_a3_ua': 'no label', 'adm0_a3_un': 'no label', 'adm0_a3_wb': 'no label', 'continent': 'no label', 'region_un': 'no label', 'subregion': 'no label', 'region_wb': 'no label', 'name_len': 'no label', 'long_len': 'no label', 'abbrev_len': 'no label', 'tiny': 'no label', 'homepart': 'no label', 'min_zoom': 'no label', 'min_label': 'no label', 'max_label': 'no label', 'label_x': 'no label', 'label_y': 'no label', 'ne_id': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fa': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_he': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'name_zht': 'no label', 'fclass_iso': 'no label', 'tlc_diff': 'no label', 'fclass_tlc': 'no label', 'fclass_us': 'no label', 'fclass_fr': 'no label', 'fclass_ru': 'no label', 'fclass_es': 'no label', 'fclass_cn': 'no label', 'fclass_tw': 'no label', 'fclass_in': 'no label', 'fclass_np': 'no label', 'fclass_pk': 'no label', 'fclass_de': 'no label', 'fclass_gb': 'no label', 'fclass_br': 'no label', 'fclass_il': 'no label', 'fclass_ps': 'no label', 'fclass_sa': 'no label', 'fclass_eg': 'no label', 'fclass_ma': 'no label', 'fclass_pt': 'no label', 'fclass_ar': 'no label', 'fclass_jp': 'no label', 'fclass_ko': 'no label', 'fclass_vn': 'no label', 'fclass_tr': 'no label', 'fclass_id': 'no label', 'fclass_pl': 'no label', 'fclass_gr': 'no label', 'fclass_it': 'no label', 'fclass_nl': 'no label', 'fclass_se': 'no label', 'fclass_bd': 'no label', 'fclass_ua': 'no label', 'filename': 'no label', });
lyr_targets_17.set('fieldLabels', {'name': 'no label', });
lyr_targets_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});