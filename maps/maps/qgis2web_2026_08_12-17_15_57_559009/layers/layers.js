var wms_layers = [];

var format_01_robotics_research_0 = new ol.format.GeoJSON();
var features_01_robotics_research_0 = format_01_robotics_research_0.readFeatures(json_01_robotics_research_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_robotics_research_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_robotics_research_0.addFeatures(features_01_robotics_research_0);
var lyr_01_robotics_research_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_robotics_research_0, 
                style: style_01_robotics_research_0,
                popuplayertitle: '01_robotics_research',
                interactive: true,
                title: '<img src="styles/legend/01_robotics_research_0.png" /> 01_robotics_research'
            });
var format_02_robotics_components_1 = new ol.format.GeoJSON();
var features_02_robotics_components_1 = format_02_robotics_components_1.readFeatures(json_02_robotics_components_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02_robotics_components_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02_robotics_components_1.addFeatures(features_02_robotics_components_1);
var lyr_02_robotics_components_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_02_robotics_components_1, 
                style: style_02_robotics_components_1,
                popuplayertitle: '02_robotics_components',
                interactive: true,
                title: '<img src="styles/legend/02_robotics_components_1.png" /> 02_robotics_components'
            });
var format_03_robot_manufacturing_2 = new ol.format.GeoJSON();
var features_03_robot_manufacturing_2 = format_03_robot_manufacturing_2.readFeatures(json_03_robot_manufacturing_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03_robot_manufacturing_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03_robot_manufacturing_2.addFeatures(features_03_robot_manufacturing_2);
var lyr_03_robot_manufacturing_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03_robot_manufacturing_2, 
                style: style_03_robot_manufacturing_2,
                popuplayertitle: '03_robot_manufacturing',
                interactive: true,
                title: '<img src="styles/legend/03_robot_manufacturing_2.png" /> 03_robot_manufacturing'
            });
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
var group_Robotics = new ol.layer.Group({
                                layers: [lyr_01_robotics_research_0,lyr_02_robotics_components_1,lyr_03_robot_manufacturing_2,],
                                fold: 'open',
                                title: 'Robotics'});
var group_02_ENERGIA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '02_ENERGIA'});
var group_H2 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'H2'});
var group_05_SALUTE_MEDICINA = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '05_SALUTE_MEDICINA'});
var group_Admin_region = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
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
                                fold: 'open',
                                title: 'PAESI'});

lyr_01_robotics_research_0.setVisible(true);lyr_02_robotics_components_1.setVisible(true);lyr_03_robot_manufacturing_2.setVisible(true);
var layersList = [group_Robotics];
lyr_01_robotics_research_0.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'city': 'city', 'stage': 'stage', 'category': 'category', 'organisation': 'organisation', 'function': 'function', 'description': 'description', 'address': 'address', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_02_robotics_components_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'city': 'city', 'stage': 'stage', 'category': 'category', 'organisation': 'organisation', 'function': 'function', 'description': 'description', 'address': 'address', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_03_robot_manufacturing_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'city': 'city', 'stage': 'stage', 'category': 'category', 'organisation': 'organisation', 'function': 'function', 'description': 'description', 'address': 'address', 'source_label': 'source_label', 'source_url': 'source_url', 'coordinate_precision': 'coordinate_precision', });
lyr_01_robotics_research_0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'stage': 'TextEdit', 'category': 'TextEdit', 'organisation': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'address': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_02_robotics_components_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'stage': 'TextEdit', 'category': 'TextEdit', 'organisation': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'address': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_03_robot_manufacturing_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'stage': 'TextEdit', 'category': 'TextEdit', 'organisation': 'TextEdit', 'function': 'TextEdit', 'description': 'TextEdit', 'address': 'TextEdit', 'source_label': 'TextEdit', 'source_url': 'TextEdit', 'coordinate_precision': 'TextEdit', });
lyr_01_robotics_research_0.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'city': 'no label', 'stage': 'no label', 'category': 'no label', 'organisation': 'no label', 'function': 'no label', 'description': 'no label', 'address': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_02_robotics_components_1.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'city': 'no label', 'stage': 'no label', 'category': 'no label', 'organisation': 'no label', 'function': 'no label', 'description': 'no label', 'address': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_03_robot_manufacturing_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'city': 'no label', 'stage': 'no label', 'category': 'no label', 'organisation': 'no label', 'function': 'no label', 'description': 'no label', 'address': 'no label', 'source_label': 'no label', 'source_url': 'no label', 'coordinate_precision': 'no label', });
lyr_03_robot_manufacturing_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});