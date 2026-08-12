var wms_layers = [];

var format_01_hydrogen_industrial_use_0 = new ol.format.GeoJSON();
var features_01_hydrogen_industrial_use_0 = format_01_hydrogen_industrial_use_0.readFeatures(json_01_hydrogen_industrial_use_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_hydrogen_industrial_use_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_hydrogen_industrial_use_0.addFeatures(features_01_hydrogen_industrial_use_0);
var lyr_01_hydrogen_industrial_use_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_hydrogen_industrial_use_0, 
                style: style_01_hydrogen_industrial_use_0,
                popuplayertitle: '01_hydrogen_industrial_use',
                interactive: true,
                title: '<img src="styles/legend/01_hydrogen_industrial_use_0.png" /> 01_hydrogen_industrial_use'
            });
var format_02_hydrogen_import_hubs_1 = new ol.format.GeoJSON();
var features_02_hydrogen_import_hubs_1 = format_02_hydrogen_import_hubs_1.readFeatures(json_02_hydrogen_import_hubs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_hydrogen_import_hubs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_hydrogen_import_hubs_1.addFeatures(features_02_hydrogen_import_hubs_1);
var lyr_02_hydrogen_import_hubs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_hydrogen_import_hubs_1, 
                style: style_02_hydrogen_import_hubs_1,
                popuplayertitle: '02_hydrogen_import_hubs',
                interactive: true,
                title: '<img src="styles/legend/02_hydrogen_import_hubs_1.png" /> 02_hydrogen_import_hubs'
            });
var format_03_h2med_barmar_2 = new ol.format.GeoJSON();
var features_03_h2med_barmar_2 = format_03_h2med_barmar_2.readFeatures(json_03_h2med_barmar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_h2med_barmar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_h2med_barmar_2.addFeatures(features_03_h2med_barmar_2);
var lyr_03_h2med_barmar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_h2med_barmar_2, 
                style: style_03_h2med_barmar_2,
                popuplayertitle: '03_h2med_barmar',
                interactive: true,
                title: '<img src="styles/legend/03_h2med_barmar_2.png" /> 03_h2med_barmar'
            });
var format_04_puglia_green_hydrogen_3 = new ol.format.GeoJSON();
var features_04_puglia_green_hydrogen_3 = format_04_puglia_green_hydrogen_3.readFeatures(json_04_puglia_green_hydrogen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_puglia_green_hydrogen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_puglia_green_hydrogen_3.addFeatures(features_04_puglia_green_hydrogen_3);
var lyr_04_puglia_green_hydrogen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_puglia_green_hydrogen_3, 
                style: style_04_puglia_green_hydrogen_3,
                popuplayertitle: '04_puglia_green_hydrogen',
                interactive: true,
                title: '<img src="styles/legend/04_puglia_green_hydrogen_3.png" /> 04_puglia_green_hydrogen'
            });
var format_05_south2_corridor_4 = new ol.format.GeoJSON();
var features_05_south2_corridor_4 = format_05_south2_corridor_4.readFeatures(json_05_south2_corridor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_south2_corridor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_south2_corridor_4.addFeatures(features_05_south2_corridor_4);
var lyr_05_south2_corridor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_south2_corridor_4, 
                style: style_05_south2_corridor_4,
                popuplayertitle: '05_south2_corridor',
                interactive: true,
                title: '<img src="styles/legend/05_south2_corridor_4.png" /> 05_south2_corridor'
            });
var format_06_hydrogen_research_italy_5 = new ol.format.GeoJSON();
var features_06_hydrogen_research_italy_5 = format_06_hydrogen_research_italy_5.readFeatures(json_06_hydrogen_research_italy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_06_hydrogen_research_italy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_06_hydrogen_research_italy_5.addFeatures(features_06_hydrogen_research_italy_5);
var lyr_06_hydrogen_research_italy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_06_hydrogen_research_italy_5, 
                style: style_06_hydrogen_research_italy_5,
                popuplayertitle: '06_hydrogen_research_italy',
                interactive: true,
                title: '<img src="styles/legend/06_hydrogen_research_italy_5.png" /> 06_hydrogen_research_italy'
            });
var format_07_fuel_cell_europe_6 = new ol.format.GeoJSON();
var features_07_fuel_cell_europe_6 = format_07_fuel_cell_europe_6.readFeatures(json_07_fuel_cell_europe_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_07_fuel_cell_europe_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_07_fuel_cell_europe_6.addFeatures(features_07_fuel_cell_europe_6);
var lyr_07_fuel_cell_europe_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_07_fuel_cell_europe_6, 
                style: style_07_fuel_cell_europe_6,
                popuplayertitle: '07_fuel_cell_europe',
                interactive: true,
                title: '<img src="styles/legend/07_fuel_cell_europe_6.png" /> 07_fuel_cell_europe'
            });
var format_08_hydrogen_external_links_7 = new ol.format.GeoJSON();
var features_08_hydrogen_external_links_7 = format_08_hydrogen_external_links_7.readFeatures(json_08_hydrogen_external_links_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_08_hydrogen_external_links_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_08_hydrogen_external_links_7.addFeatures(features_08_hydrogen_external_links_7);
var lyr_08_hydrogen_external_links_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_08_hydrogen_external_links_7, 
                style: style_08_hydrogen_external_links_7,
                popuplayertitle: '08_hydrogen_external_links',
                interactive: true,
                title: '<img src="styles/legend/08_hydrogen_external_links_7.png" /> 08_hydrogen_external_links'
            });
var group_H2 = new ol.layer.Group({
                                layers: [lyr_01_hydrogen_industrial_use_0,lyr_02_hydrogen_import_hubs_1,lyr_03_h2med_barmar_2,lyr_04_puglia_green_hydrogen_3,lyr_05_south2_corridor_4,lyr_06_hydrogen_research_italy_5,lyr_07_fuel_cell_europe_6,lyr_08_hydrogen_external_links_7,],
                                fold: 'open',
                                title: 'H2'});
var group_01_DATI_INFRASTRUTTURA_DIGITALE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '01_DATI_INFRASTRUTTURA_DIGITALE'});
var group_quantum = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'quantum'});
var group_AI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'AI'});
var group_Supercomputer = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Supercomputer'});
var group_02_ENERGIA = new ol.layer.Group({
                                layers: [],
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
var group_Narrativa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Narrativa'});
var group_tinyhouses = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'tiny houses'});
var group_Sorveglianza = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sorveglianza'});
var group_Zonadimenticata = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Zona dimenticata'});
var group_Topografia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Topografia'});
var group_Strutture_dismesse = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Strutture_dismesse'});
var group_TimelineCNOT17 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Timeline CNOT 1.7'});
var group_casepersonaggi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'case personaggi'});
var group_stories = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'stories'});
var group_distribuzionecibo = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'distribuzione cibo'});
var group_EUROPOL = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'EUROPOL'});
var group_BCE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'BCE'});
var group_Commissione_Europea = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Commissione_Europea'});
var group_ENISA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ENISA'});
var group_euLISA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'eu-LISA'});
var group_EUROJUST = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'EUROJUST'});
var group_FRONTEX = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'FRONTEX'});
var group_Capitalieuropee = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Capitali europee'});
var group_PAESI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PAESI'});

lyr_01_hydrogen_industrial_use_0.setVisible(true);lyr_02_hydrogen_import_hubs_1.setVisible(true);lyr_03_h2med_barmar_2.setVisible(true);lyr_04_puglia_green_hydrogen_3.setVisible(true);lyr_05_south2_corridor_4.setVisible(true);lyr_06_hydrogen_research_italy_5.setVisible(true);lyr_07_fuel_cell_europe_6.setVisible(true);lyr_08_hydrogen_external_links_7.setVisible(true);
var layersList = [group_H2];
lyr_01_hydrogen_industrial_use_0.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_02_hydrogen_import_hubs_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_03_h2med_barmar_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_04_puglia_green_hydrogen_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_05_south2_corridor_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_06_hydrogen_research_italy_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_07_fuel_cell_europe_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_08_hydrogen_external_links_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'category': 'category', 'subtype': 'subtype', 'status': 'status', 'operator': 'operator', 'function': 'function', 'description': 'description', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_01_hydrogen_industrial_use_0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_02_hydrogen_import_hubs_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_03_h2med_barmar_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_04_puglia_green_hydrogen_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_05_south2_corridor_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_06_hydrogen_research_italy_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_07_fuel_cell_europe_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_08_hydrogen_external_links_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'category': 'TextEdit', 'subtype': 'TextEdit', 'status': 'TextEdit', 'operator': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_01_hydrogen_industrial_use_0.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_02_hydrogen_import_hubs_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_03_h2med_barmar_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_04_puglia_green_hydrogen_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_05_south2_corridor_4.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_06_hydrogen_research_italy_5.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_07_fuel_cell_europe_6.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_08_hydrogen_external_links_7.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'category': 'no label', 'subtype': 'no label', 'status': 'no label', 'operator': 'no label', 'function': 'no label', 'description': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_08_hydrogen_external_links_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});