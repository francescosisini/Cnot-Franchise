var wms_layers = [];

var format_ne_10m_admin_0_countries_0 = new ol.format.GeoJSON();
var features_ne_10m_admin_0_countries_0 = format_ne_10m_admin_0_countries_0.readFeatures(json_ne_10m_admin_0_countries_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_admin_0_countries_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_admin_0_countries_0.addFeatures(features_ne_10m_admin_0_countries_0);
var lyr_ne_10m_admin_0_countries_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_admin_0_countries_0, 
                style: style_ne_10m_admin_0_countries_0,
                popuplayertitle: 'ne_10m_admin_0_countries',
                interactive: true,
                title: '<img src="styles/legend/ne_10m_admin_0_countries_0.png" /> ne_10m_admin_0_countries'
            });
var format_ai_relations_1 = new ol.format.GeoJSON();
var features_ai_relations_1 = format_ai_relations_1.readFeatures(json_ai_relations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_relations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_relations_1.addFeatures(features_ai_relations_1);
var lyr_ai_relations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_relations_1, 
                style: style_ai_relations_1,
                popuplayertitle: 'ai_relations',
                interactive: true,
                title: '<img src="styles/legend/ai_relations_1.png" /> ai_relations'
            });
var format_ai_factories_2 = new ol.format.GeoJSON();
var features_ai_factories_2 = format_ai_factories_2.readFeatures(json_ai_factories_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_factories_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_factories_2.addFeatures(features_ai_factories_2);
var lyr_ai_factories_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_factories_2, 
                style: style_ai_factories_2,
                popuplayertitle: 'ai_factories',
                interactive: true,
                title: '<img src="styles/legend/ai_factories_2.png" /> ai_factories'
            });
var format_ai_actors_3 = new ol.format.GeoJSON();
var features_ai_actors_3 = format_ai_actors_3.readFeatures(json_ai_actors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_actors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_actors_3.addFeatures(features_ai_actors_3);
var lyr_ai_actors_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_actors_3, 
                style: style_ai_actors_3,
                popuplayertitle: 'ai_actors',
                interactive: true,
    title: 'ai_actors<br />\
    <img src="styles/legend/ai_actors_3_0.png" /> <br />\
    <img src="styles/legend/ai_actors_3_1.png" /> ai_hpc_integration<br />\
    <img src="styles/legend/ai_actors_3_2.png" /> ai_policy_regulation<br />\
    <img src="styles/legend/ai_actors_3_3.png" /> hpc_ai_infrastructure<br />' });
var format_qt_relations_4 = new ol.format.GeoJSON();
var features_qt_relations_4 = format_qt_relations_4.readFeatures(json_qt_relations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qt_relations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qt_relations_4.addFeatures(features_qt_relations_4);
var lyr_qt_relations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qt_relations_4, 
                style: style_qt_relations_4,
                popuplayertitle: 'qt_relations',
                interactive: true,
    title: 'qt_relations<br />\
    <img src="styles/legend/qt_relations_4_0.png" /> component_supplier_for<br />\
    <img src="styles/legend/qt_relations_4_1.png" /> hosts<br />\
    <img src="styles/legend/qt_relations_4_2.png" /> hosts_or_operates<br />\
    <img src="styles/legend/qt_relations_4_3.png" /> supplier_of<br />\
    <img src="styles/legend/qt_relations_4_4.png" /> <br />' });
var format_qt_infrastructures_5 = new ol.format.GeoJSON();
var features_qt_infrastructures_5 = format_qt_infrastructures_5.readFeatures(json_qt_infrastructures_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qt_infrastructures_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qt_infrastructures_5.addFeatures(features_qt_infrastructures_5);
var lyr_qt_infrastructures_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qt_infrastructures_5, 
                style: style_qt_infrastructures_5,
                popuplayertitle: 'qt_infrastructures',
                interactive: true,
    title: 'qt_infrastructures<br />\
    <img src="styles/legend/qt_infrastructures_5_0.png" /> 12 - 21,6<br />\
    <img src="styles/legend/qt_infrastructures_5_1.png" /> 21,6 - 24,8<br />\
    <img src="styles/legend/qt_infrastructures_5_2.png" /> 24,8 - 63,2<br />\
    <img src="styles/legend/qt_infrastructures_5_3.png" /> 63,2 - 100<br />\
    <img src="styles/legend/qt_infrastructures_5_4.png" /> 100 - 140<br />' });
var format_qt_actors_6 = new ol.format.GeoJSON();
var features_qt_actors_6 = format_qt_actors_6.readFeatures(json_qt_actors_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qt_actors_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qt_actors_6.addFeatures(features_qt_actors_6);
var lyr_qt_actors_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qt_actors_6, 
                style: style_qt_actors_6,
                popuplayertitle: 'qt_actors',
                interactive: true,
    title: 'qt_actors<br />\
    <img src="styles/legend/qt_actors_6_0.png" /> company<br />\
    <img src="styles/legend/qt_actors_6_1.png" /> european_public_institution<br />\
    <img src="styles/legend/qt_actors_6_2.png" /> european_research_initiative<br />\
    <img src="styles/legend/qt_actors_6_3.png" /> hpc_research_center<br />\
    <img src="styles/legend/qt_actors_6_4.png" /> national_consortium<br />\
    <img src="styles/legend/qt_actors_6_5.png" /> <br />' });
var format_cnoteurope_7 = new ol.format.GeoJSON();
var features_cnoteurope_7 = format_cnoteurope_7.readFeatures(json_cnoteurope_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnoteurope_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnoteurope_7.addFeatures(features_cnoteurope_7);
var lyr_cnoteurope_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnoteurope_7, 
                style: style_cnoteurope_7,
                popuplayertitle: 'cnot — europe',
                interactive: true,
                title: '<img src="styles/legend/cnoteurope_7.png" /> cnot — europe'
            });
var group_01_DATI_INFRASTRUTTURA_DIGITALE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '01_DATI_INFRASTRUTTURA_DIGITALE'});
var group_02_ENERGIA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '02_ENERGIA'});
var group_05_SALUTE_MEDICINA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '05_SALUTE_MEDICINA'});
var group_quantum = new ol.layer.Group({
                                layers: [lyr_qt_relations_4,lyr_qt_infrastructures_5,lyr_qt_actors_6,],
                                fold: 'close',
                                title: 'quantum'});
var group_AI = new ol.layer.Group({
                                layers: [lyr_ai_relations_1,lyr_ai_factories_2,lyr_ai_actors_3,],
                                fold: 'close',
                                title: 'AI'});
var group_Supercomputer = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Supercomputer'});
var group_Admin_region = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Admin_region'});
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
var group_2041 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '2041'});
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
                                fold: 'close',
                                title: 'BCE'});
var group_Commissione_Europea = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Commissione_Europea'});
var group_ENISA = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'ENISA'});
var group_euLISA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'eu-LISA'});
var group_EUROJUST = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EUROJUST'});
var group_FRONTEX = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FRONTEX'});
var group_Capitalieuropee = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Capitali europee'});
var group_paesi = new ol.layer.Group({
                                layers: [lyr_ne_10m_admin_0_countries_0,],
                                fold: 'open',
                                title: 'paesi'});

lyr_ne_10m_admin_0_countries_0.setVisible(true);lyr_ai_relations_1.setVisible(true);lyr_ai_factories_2.setVisible(true);lyr_ai_actors_3.setVisible(true);lyr_qt_relations_4.setVisible(true);lyr_qt_infrastructures_5.setVisible(true);lyr_qt_actors_6.setVisible(true);lyr_cnoteurope_7.setVisible(true);
var layersList = [group_paesi,group_AI,group_quantum,lyr_cnoteurope_7];
lyr_ne_10m_admin_0_countries_0.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'TLC': 'TLC', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'POP_YEAR': 'POP_YEAR', 'GDP_MD': 'GDP_MD', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10': 'FIPS_10', 'ISO_A2': 'ISO_A2', 'ISO_A2_EH': 'ISO_A2_EH', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'ISO_N3_EH': 'ISO_N3_EH', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_ISO': 'ADM0_ISO', 'ADM0_DIFF': 'ADM0_DIFF', 'ADM0_TLC': 'ADM0_TLC', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_FR': 'ADM0_A3_FR', 'ADM0_A3_RU': 'ADM0_A3_RU', 'ADM0_A3_ES': 'ADM0_A3_ES', 'ADM0_A3_CN': 'ADM0_A3_CN', 'ADM0_A3_TW': 'ADM0_A3_TW', 'ADM0_A3_IN': 'ADM0_A3_IN', 'ADM0_A3_NP': 'ADM0_A3_NP', 'ADM0_A3_PK': 'ADM0_A3_PK', 'ADM0_A3_DE': 'ADM0_A3_DE', 'ADM0_A3_GB': 'ADM0_A3_GB', 'ADM0_A3_BR': 'ADM0_A3_BR', 'ADM0_A3_IL': 'ADM0_A3_IL', 'ADM0_A3_PS': 'ADM0_A3_PS', 'ADM0_A3_SA': 'ADM0_A3_SA', 'ADM0_A3_EG': 'ADM0_A3_EG', 'ADM0_A3_MA': 'ADM0_A3_MA', 'ADM0_A3_PT': 'ADM0_A3_PT', 'ADM0_A3_AR': 'ADM0_A3_AR', 'ADM0_A3_JP': 'ADM0_A3_JP', 'ADM0_A3_KO': 'ADM0_A3_KO', 'ADM0_A3_VN': 'ADM0_A3_VN', 'ADM0_A3_TR': 'ADM0_A3_TR', 'ADM0_A3_ID': 'ADM0_A3_ID', 'ADM0_A3_PL': 'ADM0_A3_PL', 'ADM0_A3_GR': 'ADM0_A3_GR', 'ADM0_A3_IT': 'ADM0_A3_IT', 'ADM0_A3_NL': 'ADM0_A3_NL', 'ADM0_A3_SE': 'ADM0_A3_SE', 'ADM0_A3_BD': 'ADM0_A3_BD', 'ADM0_A3_UA': 'ADM0_A3_UA', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'LABEL_X': 'LABEL_X', 'LABEL_Y': 'LABEL_Y', 'NE_ID': 'NE_ID', 'WIKIDATAID': 'WIKIDATAID', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FA': 'NAME_FA', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HE': 'NAME_HE', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_UK': 'NAME_UK', 'NAME_UR': 'NAME_UR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'NAME_ZHT': 'NAME_ZHT', 'FCLASS_ISO': 'FCLASS_ISO', 'TLC_DIFF': 'TLC_DIFF', 'FCLASS_TLC': 'FCLASS_TLC', 'FCLASS_US': 'FCLASS_US', 'FCLASS_FR': 'FCLASS_FR', 'FCLASS_RU': 'FCLASS_RU', 'FCLASS_ES': 'FCLASS_ES', 'FCLASS_CN': 'FCLASS_CN', 'FCLASS_TW': 'FCLASS_TW', 'FCLASS_IN': 'FCLASS_IN', 'FCLASS_NP': 'FCLASS_NP', 'FCLASS_PK': 'FCLASS_PK', 'FCLASS_DE': 'FCLASS_DE', 'FCLASS_GB': 'FCLASS_GB', 'FCLASS_BR': 'FCLASS_BR', 'FCLASS_IL': 'FCLASS_IL', 'FCLASS_PS': 'FCLASS_PS', 'FCLASS_SA': 'FCLASS_SA', 'FCLASS_EG': 'FCLASS_EG', 'FCLASS_MA': 'FCLASS_MA', 'FCLASS_PT': 'FCLASS_PT', 'FCLASS_AR': 'FCLASS_AR', 'FCLASS_JP': 'FCLASS_JP', 'FCLASS_KO': 'FCLASS_KO', 'FCLASS_VN': 'FCLASS_VN', 'FCLASS_TR': 'FCLASS_TR', 'FCLASS_ID': 'FCLASS_ID', 'FCLASS_PL': 'FCLASS_PL', 'FCLASS_GR': 'FCLASS_GR', 'FCLASS_IT': 'FCLASS_IT', 'FCLASS_NL': 'FCLASS_NL', 'FCLASS_SE': 'FCLASS_SE', 'FCLASS_BD': 'FCLASS_BD', 'FCLASS_UA': 'FCLASS_UA', });
lyr_ai_relations_1.set('fieldAliases', {'id': 'id', 'from_id': 'from_id', 'from_name': 'from_name', 'from_type': 'from_type', 'to_id': 'to_id', 'to_name': 'to_name', 'to_type': 'to_type', 'relation_type': 'relation_type', 'relation_label': 'relation_label', 'source': 'source', 'notes': 'notes', });
lyr_ai_factories_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'short_name': 'short_name', 'country': 'country', 'city': 'city', 'factory_type': 'factory_type', 'selection_batch': 'selection_batch', 'host_entity': 'host_entity', 'supercomputer_or_system': 'supercomputer_or_system', 'compute_note': 'compute_note', 'key_sectors': 'key_sectors', 'partner_countries': 'partner_countries', 'antennas': 'antennas', 'services_available_from': 'services_available_from', 'status': 'status', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_ai_actors_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'short_name': 'short_name', 'actor_type': 'actor_type', 'country': 'country', 'city': 'city', 'main_domain': 'main_domain', 'role': 'role', 'related_factories': 'related_factories', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_qt_relations_4.set('fieldAliases', {'id': 'id', 'from_id': 'from_id', 'from_name': 'from_name', 'from_type': 'from_type', 'to_id': 'to_id', 'to_name': 'to_name', 'to_type': 'to_type', 'relation_type': 'relation_type', 'relation_label': 'relation_label', 'source': 'source', 'notes': 'notes', });
lyr_qt_infrastructures_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'host': 'host', 'city': 'city', 'country': 'country', 'technology': 'technology', 'platform': 'platform', 'topology': 'topology', 'qubits': 'qubits', 'supplier': 'supplier', 'hosting_supercomputer': 'hosting_supercomputer', 'power_consumption': 'power_consumption', 'cooling_system': 'cooling_system', 'status': 'status', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_qt_actors_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'short_name': 'short_name', 'actor_type': 'actor_type', 'city': 'city', 'country': 'country', 'main_domain': 'main_domain', 'platform': 'platform', 'role': 'role', 'developed_what': 'developed_what', 'related_infrastructures': 'related_infrastructures', 'status': 'status', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_cnoteurope_7.set('fieldAliases', {'fid': 'fid', 'featurecla': 'featurecla', 'scalerank': 'scalerank', 'labelrank': 'labelrank', 'sovereignt': 'sovereignt', 'sov_a3': 'sov_a3', 'adm0_dif': 'adm0_dif', 'level': 'level', 'type': 'type', 'tlc': 'tlc', 'admin': 'admin', 'adm0_a3': 'adm0_a3', 'geou_dif': 'geou_dif', 'geounit': 'geounit', 'gu_a3': 'gu_a3', 'su_dif': 'su_dif', 'subunit': 'subunit', 'su_a3': 'su_a3', 'brk_diff': 'brk_diff', 'name': 'name', 'name_long': 'name_long', 'brk_a3': 'brk_a3', 'brk_name': 'brk_name', 'brk_group': 'brk_group', 'abbrev': 'abbrev', 'postal': 'postal', 'formal_en': 'formal_en', 'formal_fr': 'formal_fr', 'name_ciawf': 'name_ciawf', 'note_adm0': 'note_adm0', 'note_brk': 'note_brk', 'name_sort': 'name_sort', 'name_alt': 'name_alt', 'mapcolor7': 'mapcolor7', 'mapcolor8': 'mapcolor8', 'mapcolor9': 'mapcolor9', 'mapcolor13': 'mapcolor13', 'pop_est': 'pop_est', 'pop_rank': 'pop_rank', 'pop_year': 'pop_year', 'gdp_md': 'gdp_md', 'gdp_year': 'gdp_year', 'economy': 'economy', 'income_grp': 'income_grp', 'fips_10': 'fips_10', 'iso_a2': 'iso_a2', 'iso_a2_eh': 'iso_a2_eh', 'iso_a3': 'iso_a3', 'iso_a3_eh': 'iso_a3_eh', 'iso_n3': 'iso_n3', 'iso_n3_eh': 'iso_n3_eh', 'un_a3': 'un_a3', 'wb_a2': 'wb_a2', 'wb_a3': 'wb_a3', 'woe_id': 'woe_id', 'woe_id_eh': 'woe_id_eh', 'woe_note': 'woe_note', 'adm0_iso': 'adm0_iso', 'adm0_diff': 'adm0_diff', 'adm0_tlc': 'adm0_tlc', 'adm0_a3_us': 'adm0_a3_us', 'adm0_a3_fr': 'adm0_a3_fr', 'adm0_a3_ru': 'adm0_a3_ru', 'adm0_a3_es': 'adm0_a3_es', 'adm0_a3_cn': 'adm0_a3_cn', 'adm0_a3_tw': 'adm0_a3_tw', 'adm0_a3_in': 'adm0_a3_in', 'adm0_a3_np': 'adm0_a3_np', 'adm0_a3_pk': 'adm0_a3_pk', 'adm0_a3_de': 'adm0_a3_de', 'adm0_a3_gb': 'adm0_a3_gb', 'adm0_a3_br': 'adm0_a3_br', 'adm0_a3_il': 'adm0_a3_il', 'adm0_a3_ps': 'adm0_a3_ps', 'adm0_a3_sa': 'adm0_a3_sa', 'adm0_a3_eg': 'adm0_a3_eg', 'adm0_a3_ma': 'adm0_a3_ma', 'adm0_a3_pt': 'adm0_a3_pt', 'adm0_a3_ar': 'adm0_a3_ar', 'adm0_a3_jp': 'adm0_a3_jp', 'adm0_a3_ko': 'adm0_a3_ko', 'adm0_a3_vn': 'adm0_a3_vn', 'adm0_a3_tr': 'adm0_a3_tr', 'adm0_a3_id': 'adm0_a3_id', 'adm0_a3_pl': 'adm0_a3_pl', 'adm0_a3_gr': 'adm0_a3_gr', 'adm0_a3_it': 'adm0_a3_it', 'adm0_a3_nl': 'adm0_a3_nl', 'adm0_a3_se': 'adm0_a3_se', 'adm0_a3_bd': 'adm0_a3_bd', 'adm0_a3_ua': 'adm0_a3_ua', 'adm0_a3_un': 'adm0_a3_un', 'adm0_a3_wb': 'adm0_a3_wb', 'continent': 'continent', 'region_un': 'region_un', 'subregion': 'subregion', 'region_wb': 'region_wb', 'name_len': 'name_len', 'long_len': 'long_len', 'abbrev_len': 'abbrev_len', 'tiny': 'tiny', 'homepart': 'homepart', 'min_zoom': 'min_zoom', 'min_label': 'min_label', 'max_label': 'max_label', 'label_x': 'label_x', 'label_y': 'label_y', 'ne_id': 'ne_id', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fa': 'name_fa', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_he': 'name_he', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'name_zht': 'name_zht', 'fclass_iso': 'fclass_iso', 'tlc_diff': 'tlc_diff', 'fclass_tlc': 'fclass_tlc', 'fclass_us': 'fclass_us', 'fclass_fr': 'fclass_fr', 'fclass_ru': 'fclass_ru', 'fclass_es': 'fclass_es', 'fclass_cn': 'fclass_cn', 'fclass_tw': 'fclass_tw', 'fclass_in': 'fclass_in', 'fclass_np': 'fclass_np', 'fclass_pk': 'fclass_pk', 'fclass_de': 'fclass_de', 'fclass_gb': 'fclass_gb', 'fclass_br': 'fclass_br', 'fclass_il': 'fclass_il', 'fclass_ps': 'fclass_ps', 'fclass_sa': 'fclass_sa', 'fclass_eg': 'fclass_eg', 'fclass_ma': 'fclass_ma', 'fclass_pt': 'fclass_pt', 'fclass_ar': 'fclass_ar', 'fclass_jp': 'fclass_jp', 'fclass_ko': 'fclass_ko', 'fclass_vn': 'fclass_vn', 'fclass_tr': 'fclass_tr', 'fclass_id': 'fclass_id', 'fclass_pl': 'fclass_pl', 'fclass_gr': 'fclass_gr', 'fclass_it': 'fclass_it', 'fclass_nl': 'fclass_nl', 'fclass_se': 'fclass_se', 'fclass_bd': 'fclass_bd', 'fclass_ua': 'fclass_ua', 'filename': 'filename', });
lyr_ne_10m_admin_0_countries_0.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'TLC': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'POP_YEAR': 'Range', 'GDP_MD': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A2_EH': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'ISO_N3_EH': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_ISO': 'TextEdit', 'ADM0_DIFF': 'TextEdit', 'ADM0_TLC': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_FR': 'TextEdit', 'ADM0_A3_RU': 'TextEdit', 'ADM0_A3_ES': 'TextEdit', 'ADM0_A3_CN': 'TextEdit', 'ADM0_A3_TW': 'TextEdit', 'ADM0_A3_IN': 'TextEdit', 'ADM0_A3_NP': 'TextEdit', 'ADM0_A3_PK': 'TextEdit', 'ADM0_A3_DE': 'TextEdit', 'ADM0_A3_GB': 'TextEdit', 'ADM0_A3_BR': 'TextEdit', 'ADM0_A3_IL': 'TextEdit', 'ADM0_A3_PS': 'TextEdit', 'ADM0_A3_SA': 'TextEdit', 'ADM0_A3_EG': 'TextEdit', 'ADM0_A3_MA': 'TextEdit', 'ADM0_A3_PT': 'TextEdit', 'ADM0_A3_AR': 'TextEdit', 'ADM0_A3_JP': 'TextEdit', 'ADM0_A3_KO': 'TextEdit', 'ADM0_A3_VN': 'TextEdit', 'ADM0_A3_TR': 'TextEdit', 'ADM0_A3_ID': 'TextEdit', 'ADM0_A3_PL': 'TextEdit', 'ADM0_A3_GR': 'TextEdit', 'ADM0_A3_IT': 'TextEdit', 'ADM0_A3_NL': 'TextEdit', 'ADM0_A3_SE': 'TextEdit', 'ADM0_A3_BD': 'TextEdit', 'ADM0_A3_UA': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'LABEL_X': 'TextEdit', 'LABEL_Y': 'TextEdit', 'NE_ID': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FA': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HE': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_UK': 'TextEdit', 'NAME_UR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'NAME_ZHT': 'TextEdit', 'FCLASS_ISO': 'TextEdit', 'TLC_DIFF': 'TextEdit', 'FCLASS_TLC': 'TextEdit', 'FCLASS_US': 'TextEdit', 'FCLASS_FR': 'TextEdit', 'FCLASS_RU': 'TextEdit', 'FCLASS_ES': 'TextEdit', 'FCLASS_CN': 'TextEdit', 'FCLASS_TW': 'TextEdit', 'FCLASS_IN': 'TextEdit', 'FCLASS_NP': 'TextEdit', 'FCLASS_PK': 'TextEdit', 'FCLASS_DE': 'TextEdit', 'FCLASS_GB': 'TextEdit', 'FCLASS_BR': 'TextEdit', 'FCLASS_IL': 'TextEdit', 'FCLASS_PS': 'TextEdit', 'FCLASS_SA': 'TextEdit', 'FCLASS_EG': 'TextEdit', 'FCLASS_MA': 'TextEdit', 'FCLASS_PT': 'TextEdit', 'FCLASS_AR': 'TextEdit', 'FCLASS_JP': 'TextEdit', 'FCLASS_KO': 'TextEdit', 'FCLASS_VN': 'TextEdit', 'FCLASS_TR': 'TextEdit', 'FCLASS_ID': 'TextEdit', 'FCLASS_PL': 'TextEdit', 'FCLASS_GR': 'TextEdit', 'FCLASS_IT': 'TextEdit', 'FCLASS_NL': 'TextEdit', 'FCLASS_SE': 'TextEdit', 'FCLASS_BD': 'TextEdit', 'FCLASS_UA': 'TextEdit', });
lyr_ai_relations_1.set('fieldImages', {'id': 'TextEdit', 'from_id': 'TextEdit', 'from_name': 'TextEdit', 'from_type': 'TextEdit', 'to_id': 'TextEdit', 'to_name': 'TextEdit', 'to_type': 'TextEdit', 'relation_type': 'TextEdit', 'relation_label': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_ai_factories_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'short_name': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'factory_type': 'TextEdit', 'selection_batch': 'TextEdit', 'host_entity': 'TextEdit', 'supercomputer_or_system': 'TextEdit', 'compute_note': 'TextEdit', 'key_sectors': 'TextEdit', 'partner_countries': 'TextEdit', 'antennas': 'TextEdit', 'services_available_from': 'TextEdit', 'status': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_ai_actors_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'short_name': 'TextEdit', 'actor_type': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'main_domain': 'TextEdit', 'role': 'TextEdit', 'related_factories': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_qt_relations_4.set('fieldImages', {'id': 'TextEdit', 'from_id': 'TextEdit', 'from_name': 'TextEdit', 'from_type': 'TextEdit', 'to_id': 'TextEdit', 'to_name': 'TextEdit', 'to_type': 'TextEdit', 'relation_type': 'TextEdit', 'relation_label': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_qt_infrastructures_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'host': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'technology': 'TextEdit', 'platform': 'TextEdit', 'topology': 'TextEdit', 'qubits': 'Range', 'supplier': 'TextEdit', 'hosting_supercomputer': 'TextEdit', 'power_consumption': 'TextEdit', 'cooling_system': 'TextEdit', 'status': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_qt_actors_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'short_name': 'TextEdit', 'actor_type': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'main_domain': 'TextEdit', 'platform': 'TextEdit', 'role': 'TextEdit', 'developed_what': 'TextEdit', 'related_infrastructures': 'TextEdit', 'status': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_cnoteurope_7.set('fieldImages', {'fid': 'TextEdit', 'featurecla': 'TextEdit', 'scalerank': 'Range', 'labelrank': 'Range', 'sovereignt': 'TextEdit', 'sov_a3': 'TextEdit', 'adm0_dif': 'Range', 'level': 'Range', 'type': 'TextEdit', 'tlc': 'TextEdit', 'admin': 'TextEdit', 'adm0_a3': 'TextEdit', 'geou_dif': 'Range', 'geounit': 'TextEdit', 'gu_a3': 'TextEdit', 'su_dif': 'Range', 'subunit': 'TextEdit', 'su_a3': 'TextEdit', 'brk_diff': 'Range', 'name': 'TextEdit', 'name_long': 'TextEdit', 'brk_a3': 'TextEdit', 'brk_name': 'TextEdit', 'brk_group': 'TextEdit', 'abbrev': 'TextEdit', 'postal': 'TextEdit', 'formal_en': 'TextEdit', 'formal_fr': 'TextEdit', 'name_ciawf': 'TextEdit', 'note_adm0': 'TextEdit', 'note_brk': 'TextEdit', 'name_sort': 'TextEdit', 'name_alt': 'TextEdit', 'mapcolor7': 'Range', 'mapcolor8': 'Range', 'mapcolor9': 'Range', 'mapcolor13': 'Range', 'pop_est': 'Range', 'pop_rank': 'Range', 'pop_year': 'Range', 'gdp_md': 'Range', 'gdp_year': 'Range', 'economy': 'TextEdit', 'income_grp': 'TextEdit', 'fips_10': 'TextEdit', 'iso_a2': 'TextEdit', 'iso_a2_eh': 'TextEdit', 'iso_a3': 'TextEdit', 'iso_a3_eh': 'TextEdit', 'iso_n3': 'TextEdit', 'iso_n3_eh': 'TextEdit', 'un_a3': 'TextEdit', 'wb_a2': 'TextEdit', 'wb_a3': 'TextEdit', 'woe_id': 'Range', 'woe_id_eh': 'Range', 'woe_note': 'TextEdit', 'adm0_iso': 'TextEdit', 'adm0_diff': 'TextEdit', 'adm0_tlc': 'TextEdit', 'adm0_a3_us': 'TextEdit', 'adm0_a3_fr': 'TextEdit', 'adm0_a3_ru': 'TextEdit', 'adm0_a3_es': 'TextEdit', 'adm0_a3_cn': 'TextEdit', 'adm0_a3_tw': 'TextEdit', 'adm0_a3_in': 'TextEdit', 'adm0_a3_np': 'TextEdit', 'adm0_a3_pk': 'TextEdit', 'adm0_a3_de': 'TextEdit', 'adm0_a3_gb': 'TextEdit', 'adm0_a3_br': 'TextEdit', 'adm0_a3_il': 'TextEdit', 'adm0_a3_ps': 'TextEdit', 'adm0_a3_sa': 'TextEdit', 'adm0_a3_eg': 'TextEdit', 'adm0_a3_ma': 'TextEdit', 'adm0_a3_pt': 'TextEdit', 'adm0_a3_ar': 'TextEdit', 'adm0_a3_jp': 'TextEdit', 'adm0_a3_ko': 'TextEdit', 'adm0_a3_vn': 'TextEdit', 'adm0_a3_tr': 'TextEdit', 'adm0_a3_id': 'TextEdit', 'adm0_a3_pl': 'TextEdit', 'adm0_a3_gr': 'TextEdit', 'adm0_a3_it': 'TextEdit', 'adm0_a3_nl': 'TextEdit', 'adm0_a3_se': 'TextEdit', 'adm0_a3_bd': 'TextEdit', 'adm0_a3_ua': 'TextEdit', 'adm0_a3_un': 'Range', 'adm0_a3_wb': 'Range', 'continent': 'TextEdit', 'region_un': 'TextEdit', 'subregion': 'TextEdit', 'region_wb': 'TextEdit', 'name_len': 'Range', 'long_len': 'Range', 'abbrev_len': 'Range', 'tiny': 'Range', 'homepart': 'Range', 'min_zoom': 'Range', 'min_label': 'TextEdit', 'max_label': 'TextEdit', 'label_x': 'TextEdit', 'label_y': 'TextEdit', 'ne_id': 'Range', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fa': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_he': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'name_zht': 'TextEdit', 'fclass_iso': 'TextEdit', 'tlc_diff': 'TextEdit', 'fclass_tlc': 'TextEdit', 'fclass_us': 'TextEdit', 'fclass_fr': 'TextEdit', 'fclass_ru': 'TextEdit', 'fclass_es': 'TextEdit', 'fclass_cn': 'TextEdit', 'fclass_tw': 'TextEdit', 'fclass_in': 'TextEdit', 'fclass_np': 'TextEdit', 'fclass_pk': 'TextEdit', 'fclass_de': 'TextEdit', 'fclass_gb': 'TextEdit', 'fclass_br': 'TextEdit', 'fclass_il': 'TextEdit', 'fclass_ps': 'TextEdit', 'fclass_sa': 'TextEdit', 'fclass_eg': 'TextEdit', 'fclass_ma': 'TextEdit', 'fclass_pt': 'TextEdit', 'fclass_ar': 'TextEdit', 'fclass_jp': 'TextEdit', 'fclass_ko': 'TextEdit', 'fclass_vn': 'TextEdit', 'fclass_tr': 'TextEdit', 'fclass_id': 'TextEdit', 'fclass_pl': 'TextEdit', 'fclass_gr': 'TextEdit', 'fclass_it': 'TextEdit', 'fclass_nl': 'TextEdit', 'fclass_se': 'TextEdit', 'fclass_bd': 'TextEdit', 'fclass_ua': 'TextEdit', 'filename': 'TextEdit', });
lyr_ne_10m_admin_0_countries_0.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'TLC': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'POP_YEAR': 'no label', 'GDP_MD': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'FIPS_10': 'no label', 'ISO_A2': 'no label', 'ISO_A2_EH': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'ISO_N3_EH': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_ISO': 'no label', 'ADM0_DIFF': 'no label', 'ADM0_TLC': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_FR': 'no label', 'ADM0_A3_RU': 'no label', 'ADM0_A3_ES': 'no label', 'ADM0_A3_CN': 'no label', 'ADM0_A3_TW': 'no label', 'ADM0_A3_IN': 'no label', 'ADM0_A3_NP': 'no label', 'ADM0_A3_PK': 'no label', 'ADM0_A3_DE': 'no label', 'ADM0_A3_GB': 'no label', 'ADM0_A3_BR': 'no label', 'ADM0_A3_IL': 'no label', 'ADM0_A3_PS': 'no label', 'ADM0_A3_SA': 'no label', 'ADM0_A3_EG': 'no label', 'ADM0_A3_MA': 'no label', 'ADM0_A3_PT': 'no label', 'ADM0_A3_AR': 'no label', 'ADM0_A3_JP': 'no label', 'ADM0_A3_KO': 'no label', 'ADM0_A3_VN': 'no label', 'ADM0_A3_TR': 'no label', 'ADM0_A3_ID': 'no label', 'ADM0_A3_PL': 'no label', 'ADM0_A3_GR': 'no label', 'ADM0_A3_IT': 'no label', 'ADM0_A3_NL': 'no label', 'ADM0_A3_SE': 'no label', 'ADM0_A3_BD': 'no label', 'ADM0_A3_UA': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', 'LABEL_X': 'no label', 'LABEL_Y': 'no label', 'NE_ID': 'no label', 'WIKIDATAID': 'no label', 'NAME_AR': 'no label', 'NAME_BN': 'no label', 'NAME_DE': 'no label', 'NAME_EN': 'no label', 'NAME_ES': 'no label', 'NAME_FA': 'no label', 'NAME_FR': 'no label', 'NAME_EL': 'no label', 'NAME_HE': 'no label', 'NAME_HI': 'no label', 'NAME_HU': 'no label', 'NAME_ID': 'no label', 'NAME_IT': 'no label', 'NAME_JA': 'no label', 'NAME_KO': 'no label', 'NAME_NL': 'no label', 'NAME_PL': 'no label', 'NAME_PT': 'no label', 'NAME_RU': 'no label', 'NAME_SV': 'no label', 'NAME_TR': 'no label', 'NAME_UK': 'no label', 'NAME_UR': 'no label', 'NAME_VI': 'no label', 'NAME_ZH': 'no label', 'NAME_ZHT': 'no label', 'FCLASS_ISO': 'no label', 'TLC_DIFF': 'no label', 'FCLASS_TLC': 'no label', 'FCLASS_US': 'no label', 'FCLASS_FR': 'no label', 'FCLASS_RU': 'no label', 'FCLASS_ES': 'no label', 'FCLASS_CN': 'no label', 'FCLASS_TW': 'no label', 'FCLASS_IN': 'no label', 'FCLASS_NP': 'no label', 'FCLASS_PK': 'no label', 'FCLASS_DE': 'no label', 'FCLASS_GB': 'no label', 'FCLASS_BR': 'no label', 'FCLASS_IL': 'no label', 'FCLASS_PS': 'no label', 'FCLASS_SA': 'no label', 'FCLASS_EG': 'no label', 'FCLASS_MA': 'no label', 'FCLASS_PT': 'no label', 'FCLASS_AR': 'no label', 'FCLASS_JP': 'no label', 'FCLASS_KO': 'no label', 'FCLASS_VN': 'no label', 'FCLASS_TR': 'no label', 'FCLASS_ID': 'no label', 'FCLASS_PL': 'no label', 'FCLASS_GR': 'no label', 'FCLASS_IT': 'no label', 'FCLASS_NL': 'no label', 'FCLASS_SE': 'no label', 'FCLASS_BD': 'no label', 'FCLASS_UA': 'no label', });
lyr_ai_relations_1.set('fieldLabels', {'id': 'no label', 'from_id': 'no label', 'from_name': 'no label', 'from_type': 'no label', 'to_id': 'no label', 'to_name': 'no label', 'to_type': 'no label', 'relation_type': 'no label', 'relation_label': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_ai_factories_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'short_name': 'no label', 'country': 'no label', 'city': 'no label', 'factory_type': 'no label', 'selection_batch': 'no label', 'host_entity': 'no label', 'supercomputer_or_system': 'no label', 'compute_note': 'no label', 'key_sectors': 'no label', 'partner_countries': 'no label', 'antennas': 'no label', 'services_available_from': 'no label', 'status': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_ai_actors_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'short_name': 'no label', 'actor_type': 'no label', 'country': 'no label', 'city': 'no label', 'main_domain': 'no label', 'role': 'no label', 'related_factories': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_qt_relations_4.set('fieldLabels', {'id': 'no label', 'from_id': 'no label', 'from_name': 'no label', 'from_type': 'no label', 'to_id': 'no label', 'to_name': 'no label', 'to_type': 'no label', 'relation_type': 'no label', 'relation_label': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_qt_infrastructures_5.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'host': 'no label', 'city': 'no label', 'country': 'no label', 'technology': 'no label', 'platform': 'no label', 'topology': 'no label', 'qubits': 'no label', 'supplier': 'no label', 'hosting_supercomputer': 'no label', 'power_consumption': 'no label', 'cooling_system': 'no label', 'status': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_qt_actors_6.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'short_name': 'no label', 'actor_type': 'no label', 'city': 'no label', 'country': 'no label', 'main_domain': 'no label', 'platform': 'no label', 'role': 'no label', 'developed_what': 'no label', 'related_infrastructures': 'no label', 'status': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_cnoteurope_7.set('fieldLabels', {'fid': 'no label', 'featurecla': 'no label', 'scalerank': 'no label', 'labelrank': 'no label', 'sovereignt': 'no label', 'sov_a3': 'no label', 'adm0_dif': 'no label', 'level': 'no label', 'type': 'no label', 'tlc': 'no label', 'admin': 'no label', 'adm0_a3': 'no label', 'geou_dif': 'no label', 'geounit': 'no label', 'gu_a3': 'no label', 'su_dif': 'no label', 'subunit': 'no label', 'su_a3': 'no label', 'brk_diff': 'no label', 'name': 'no label', 'name_long': 'no label', 'brk_a3': 'no label', 'brk_name': 'no label', 'brk_group': 'no label', 'abbrev': 'no label', 'postal': 'no label', 'formal_en': 'no label', 'formal_fr': 'no label', 'name_ciawf': 'no label', 'note_adm0': 'no label', 'note_brk': 'no label', 'name_sort': 'no label', 'name_alt': 'no label', 'mapcolor7': 'no label', 'mapcolor8': 'no label', 'mapcolor9': 'no label', 'mapcolor13': 'no label', 'pop_est': 'no label', 'pop_rank': 'no label', 'pop_year': 'no label', 'gdp_md': 'no label', 'gdp_year': 'no label', 'economy': 'no label', 'income_grp': 'no label', 'fips_10': 'no label', 'iso_a2': 'no label', 'iso_a2_eh': 'no label', 'iso_a3': 'no label', 'iso_a3_eh': 'no label', 'iso_n3': 'no label', 'iso_n3_eh': 'no label', 'un_a3': 'no label', 'wb_a2': 'no label', 'wb_a3': 'no label', 'woe_id': 'no label', 'woe_id_eh': 'no label', 'woe_note': 'no label', 'adm0_iso': 'no label', 'adm0_diff': 'no label', 'adm0_tlc': 'no label', 'adm0_a3_us': 'no label', 'adm0_a3_fr': 'no label', 'adm0_a3_ru': 'no label', 'adm0_a3_es': 'no label', 'adm0_a3_cn': 'no label', 'adm0_a3_tw': 'no label', 'adm0_a3_in': 'no label', 'adm0_a3_np': 'no label', 'adm0_a3_pk': 'no label', 'adm0_a3_de': 'no label', 'adm0_a3_gb': 'no label', 'adm0_a3_br': 'no label', 'adm0_a3_il': 'no label', 'adm0_a3_ps': 'no label', 'adm0_a3_sa': 'no label', 'adm0_a3_eg': 'no label', 'adm0_a3_ma': 'no label', 'adm0_a3_pt': 'no label', 'adm0_a3_ar': 'no label', 'adm0_a3_jp': 'no label', 'adm0_a3_ko': 'no label', 'adm0_a3_vn': 'no label', 'adm0_a3_tr': 'no label', 'adm0_a3_id': 'no label', 'adm0_a3_pl': 'no label', 'adm0_a3_gr': 'no label', 'adm0_a3_it': 'no label', 'adm0_a3_nl': 'no label', 'adm0_a3_se': 'no label', 'adm0_a3_bd': 'no label', 'adm0_a3_ua': 'no label', 'adm0_a3_un': 'no label', 'adm0_a3_wb': 'no label', 'continent': 'no label', 'region_un': 'no label', 'subregion': 'no label', 'region_wb': 'no label', 'name_len': 'no label', 'long_len': 'no label', 'abbrev_len': 'no label', 'tiny': 'no label', 'homepart': 'no label', 'min_zoom': 'no label', 'min_label': 'no label', 'max_label': 'no label', 'label_x': 'no label', 'label_y': 'no label', 'ne_id': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fa': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_he': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'name_zht': 'no label', 'fclass_iso': 'no label', 'tlc_diff': 'no label', 'fclass_tlc': 'no label', 'fclass_us': 'no label', 'fclass_fr': 'no label', 'fclass_ru': 'no label', 'fclass_es': 'no label', 'fclass_cn': 'no label', 'fclass_tw': 'no label', 'fclass_in': 'no label', 'fclass_np': 'no label', 'fclass_pk': 'no label', 'fclass_de': 'no label', 'fclass_gb': 'no label', 'fclass_br': 'no label', 'fclass_il': 'no label', 'fclass_ps': 'no label', 'fclass_sa': 'no label', 'fclass_eg': 'no label', 'fclass_ma': 'no label', 'fclass_pt': 'no label', 'fclass_ar': 'no label', 'fclass_jp': 'no label', 'fclass_ko': 'no label', 'fclass_vn': 'no label', 'fclass_tr': 'no label', 'fclass_id': 'no label', 'fclass_pl': 'no label', 'fclass_gr': 'no label', 'fclass_it': 'no label', 'fclass_nl': 'no label', 'fclass_se': 'no label', 'fclass_bd': 'no label', 'fclass_ua': 'no label', 'filename': 'no label', });
lyr_cnoteurope_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});