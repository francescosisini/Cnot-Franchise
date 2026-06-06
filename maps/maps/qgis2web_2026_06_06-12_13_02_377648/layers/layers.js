var wms_layers = [];

var format_alice_prologostory_points_0 = new ol.format.GeoJSON();
var features_alice_prologostory_points_0 = format_alice_prologostory_points_0.readFeatures(json_alice_prologostory_points_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alice_prologostory_points_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alice_prologostory_points_0.addFeatures(features_alice_prologostory_points_0);
var lyr_alice_prologostory_points_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alice_prologostory_points_0, 
                style: style_alice_prologostory_points_0,
                popuplayertitle: 'alice_prologo — story_points',
                interactive: true,
                title: '<img src="styles/legend/alice_prologostory_points_0.png" /> alice_prologo — story_points'
            });
var format_casa_caterina_1 = new ol.format.GeoJSON();
var features_casa_caterina_1 = format_casa_caterina_1.readFeatures(json_casa_caterina_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_caterina_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_caterina_1.addFeatures(features_casa_caterina_1);
var lyr_casa_caterina_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casa_caterina_1, 
                style: style_casa_caterina_1,
                popuplayertitle: 'casa_caterina',
                interactive: true,
                title: '<img src="styles/legend/casa_caterina_1.png" /> casa_caterina'
            });
var format_casa_caterina_2 = new ol.format.GeoJSON();
var features_casa_caterina_2 = format_casa_caterina_2.readFeatures(json_casa_caterina_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_caterina_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_caterina_2.addFeatures(features_casa_caterina_2);
var lyr_casa_caterina_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casa_caterina_2, 
                style: style_casa_caterina_2,
                popuplayertitle: 'casa_caterina',
                interactive: true,
                title: '<img src="styles/legend/casa_caterina_2.png" /> casa_caterina'
            });
var format_tiny_laura_3 = new ol.format.GeoJSON();
var features_tiny_laura_3 = format_tiny_laura_3.readFeatures(json_tiny_laura_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tiny_laura_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tiny_laura_3.addFeatures(features_tiny_laura_3);
var lyr_tiny_laura_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tiny_laura_3, 
                style: style_tiny_laura_3,
                popuplayertitle: 'tiny_laura',
                interactive: true,
                title: '<img src="styles/legend/tiny_laura_3.png" /> tiny_laura'
            });
var format_tiny_laura_4 = new ol.format.GeoJSON();
var features_tiny_laura_4 = format_tiny_laura_4.readFeatures(json_tiny_laura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tiny_laura_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tiny_laura_4.addFeatures(features_tiny_laura_4);
var lyr_tiny_laura_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tiny_laura_4, 
                style: style_tiny_laura_4,
                popuplayertitle: 'tiny_laura',
                interactive: true,
                title: '<img src="styles/legend/tiny_laura_4.png" /> tiny_laura'
            });
var format_stanza_Aliceroom_Alice_5 = new ol.format.GeoJSON();
var features_stanza_Aliceroom_Alice_5 = format_stanza_Aliceroom_Alice_5.readFeatures(json_stanza_Aliceroom_Alice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stanza_Aliceroom_Alice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stanza_Aliceroom_Alice_5.addFeatures(features_stanza_Aliceroom_Alice_5);
var lyr_stanza_Aliceroom_Alice_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stanza_Aliceroom_Alice_5, 
                style: style_stanza_Aliceroom_Alice_5,
                popuplayertitle: 'stanza_Alice — room_Alice',
                interactive: true,
                title: '<img src="styles/legend/stanza_Aliceroom_Alice_5.png" /> stanza_Alice — room_Alice'
            });
var format_stanza_Aliceroom_Alice_6 = new ol.format.GeoJSON();
var features_stanza_Aliceroom_Alice_6 = format_stanza_Aliceroom_Alice_6.readFeatures(json_stanza_Aliceroom_Alice_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stanza_Aliceroom_Alice_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stanza_Aliceroom_Alice_6.addFeatures(features_stanza_Aliceroom_Alice_6);
var lyr_stanza_Aliceroom_Alice_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stanza_Aliceroom_Alice_6, 
                style: style_stanza_Aliceroom_Alice_6,
                popuplayertitle: 'stanza_Alice — room_Alice',
                interactive: true,
                title: '<img src="styles/legend/stanza_Aliceroom_Alice_6.png" /> stanza_Alice — room_Alice'
            });
var format_legacy_infrastructure_2050_7 = new ol.format.GeoJSON();
var features_legacy_infrastructure_2050_7 = format_legacy_infrastructure_2050_7.readFeatures(json_legacy_infrastructure_2050_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_legacy_infrastructure_2050_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_legacy_infrastructure_2050_7.addFeatures(features_legacy_infrastructure_2050_7);
var lyr_legacy_infrastructure_2050_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_legacy_infrastructure_2050_7, 
                style: style_legacy_infrastructure_2050_7,
                popuplayertitle: 'legacy_infrastructure_2050',
                interactive: true,
                title: '<img src="styles/legend/legacy_infrastructure_2050_7.png" /> legacy_infrastructure_2050'
            });
var format_cnot17_events_8 = new ol.format.GeoJSON();
var features_cnot17_events_8 = format_cnot17_events_8.readFeatures(json_cnot17_events_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnot17_events_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnot17_events_8.addFeatures(features_cnot17_events_8);
var lyr_cnot17_events_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnot17_events_8, 
                style: style_cnot17_events_8,
                popuplayertitle: 'cnot17_events',
                interactive: true,
                title: '<img src="styles/legend/cnot17_events_8.png" /> cnot17_events'
            });
var format_visa_data_flows_9 = new ol.format.GeoJSON();
var features_visa_data_flows_9 = format_visa_data_flows_9.readFeatures(json_visa_data_flows_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_visa_data_flows_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_visa_data_flows_9.addFeatures(features_visa_data_flows_9);
var lyr_visa_data_flows_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_visa_data_flows_9, 
                style: style_visa_data_flows_9,
                popuplayertitle: 'visa_data_flows',
                interactive: true,
                title: '<img src="styles/legend/visa_data_flows_9.png" /> visa_data_flows'
            });
var format_building_10 = new ol.format.GeoJSON();
var features_building_10 = format_building_10.readFeatures(json_building_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_10.addFeatures(features_building_10);
var lyr_building_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_10, 
                style: style_building_10,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_10.png" /> building'
            });
var format_cnotscuole_11 = new ol.format.GeoJSON();
var features_cnotscuole_11 = format_cnotscuole_11.readFeatures(json_cnotscuole_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotscuole_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotscuole_11.addFeatures(features_cnotscuole_11);
var lyr_cnotscuole_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotscuole_11, 
                style: style_cnotscuole_11,
                popuplayertitle: 'cnot — scuole',
                interactive: true,
                title: '<img src="styles/legend/cnotscuole_11.png" /> cnot — scuole'
            });
var format_convitto_base_localConvittoCardinalMoraesempiobase_12 = new ol.format.GeoJSON();
var features_convitto_base_localConvittoCardinalMoraesempiobase_12 = format_convitto_base_localConvittoCardinalMoraesempiobase_12.readFeatures(json_convitto_base_localConvittoCardinalMoraesempiobase_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_12.addFeatures(features_convitto_base_localConvittoCardinalMoraesempiobase_12);
var lyr_convitto_base_localConvittoCardinalMoraesempiobase_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_12, 
                style: style_convitto_base_localConvittoCardinalMoraesempiobase_12,
                popuplayertitle: 'convitto_base_local — Convitto Cardinal Mora - esempio base',
                interactive: true,
                title: '<img src="styles/legend/convitto_base_localConvittoCardinalMoraesempiobase_12.png" /> convitto_base_local — Convitto Cardinal Mora - esempio base'
            });
var format_convitto_base_localConvittoCardinalMoraesempiobase_13 = new ol.format.GeoJSON();
var features_convitto_base_localConvittoCardinalMoraesempiobase_13 = format_convitto_base_localConvittoCardinalMoraesempiobase_13.readFeatures(json_convitto_base_localConvittoCardinalMoraesempiobase_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_13.addFeatures(features_convitto_base_localConvittoCardinalMoraesempiobase_13);
var lyr_convitto_base_localConvittoCardinalMoraesempiobase_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_13, 
                style: style_convitto_base_localConvittoCardinalMoraesempiobase_13,
                popuplayertitle: 'convitto_base_local — Convitto Cardinal Mora - esempio base',
                interactive: true,
                title: '<img src="styles/legend/convitto_base_localConvittoCardinalMoraesempiobase_13.png" /> convitto_base_local — Convitto Cardinal Mora - esempio base'
            });
var format_cnotstrade_1_14 = new ol.format.GeoJSON();
var features_cnotstrade_1_14 = format_cnotstrade_1_14.readFeatures(json_cnotstrade_1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotstrade_1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotstrade_1_14.addFeatures(features_cnotstrade_1_14);
var lyr_cnotstrade_1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotstrade_1_14, 
                style: style_cnotstrade_1_14,
                popuplayertitle: 'cnot — strade_1',
                interactive: true,
                title: '<img src="styles/legend/cnotstrade_1_14.png" /> cnot — strade_1'
            });
var format_cnotbuilding_15 = new ol.format.GeoJSON();
var features_cnotbuilding_15 = format_cnotbuilding_15.readFeatures(json_cnotbuilding_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotbuilding_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotbuilding_15.addFeatures(features_cnotbuilding_15);
var lyr_cnotbuilding_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotbuilding_15, 
                style: style_cnotbuilding_15,
                popuplayertitle: 'cnot — building',
                interactive: true,
                title: '<img src="styles/legend/cnotbuilding_15.png" /> cnot — building'
            });
var format_cnotstrade_2_16 = new ol.format.GeoJSON();
var features_cnotstrade_2_16 = format_cnotstrade_2_16.readFeatures(json_cnotstrade_2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotstrade_2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotstrade_2_16.addFeatures(features_cnotstrade_2_16);
var lyr_cnotstrade_2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotstrade_2_16, 
                style: style_cnotstrade_2_16,
                popuplayertitle: 'cnot — strade_2',
                interactive: true,
                title: '<img src="styles/legend/cnotstrade_2_16.png" /> cnot — strade_2'
            });
var format_highway_17 = new ol.format.GeoJSON();
var features_highway_17 = format_highway_17.readFeatures(json_highway_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_17.addFeatures(features_highway_17);
var lyr_highway_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_17, 
                style: style_highway_17,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_17.png" /> highway'
            });
var format_highway_18 = new ol.format.GeoJSON();
var features_highway_18 = format_highway_18.readFeatures(json_highway_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_18.addFeatures(features_highway_18);
var lyr_highway_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_18, 
                style: style_highway_18,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_18.png" /> highway'
            });
var format_highway_19 = new ol.format.GeoJSON();
var features_highway_19 = format_highway_19.readFeatures(json_highway_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_19.addFeatures(features_highway_19);
var lyr_highway_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_19, 
                style: style_highway_19,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_19.png" /> highway'
            });
var format_building_20 = new ol.format.GeoJSON();
var features_building_20 = format_building_20.readFeatures(json_building_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_20.addFeatures(features_building_20);
var lyr_building_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_20, 
                style: style_building_20,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_20.png" /> building'
            });
var format_building_21 = new ol.format.GeoJSON();
var features_building_21 = format_building_21.readFeatures(json_building_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_21.addFeatures(features_building_21);
var lyr_building_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_21, 
                style: style_building_21,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_21.png" /> building'
            });
var format_cnotEdifici_22 = new ol.format.GeoJSON();
var features_cnotEdifici_22 = format_cnotEdifici_22.readFeatures(json_cnotEdifici_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotEdifici_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotEdifici_22.addFeatures(features_cnotEdifici_22);
var lyr_cnotEdifici_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotEdifici_22, 
                style: style_cnotEdifici_22,
                popuplayertitle: 'cnot — Edifici',
                interactive: true,
                title: '<img src="styles/legend/cnotEdifici_22.png" /> cnot — Edifici'
            });
var format_Telecamere_23 = new ol.format.GeoJSON();
var features_Telecamere_23 = format_Telecamere_23.readFeatures(json_Telecamere_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telecamere_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telecamere_23.addFeatures(features_Telecamere_23);
var lyr_Telecamere_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Telecamere_23, 
                style: style_Telecamere_23,
                popuplayertitle: 'Telecamere',
                interactive: true,
                title: '<img src="styles/legend/Telecamere_23.png" /> Telecamere'
            });
var format_Semafori_24 = new ol.format.GeoJSON();
var features_Semafori_24 = format_Semafori_24.readFeatures(json_Semafori_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semafori_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semafori_24.addFeatures(features_Semafori_24);
var lyr_Semafori_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Semafori_24, 
                style: style_Semafori_24,
                popuplayertitle: 'Semafori',
                interactive: true,
                title: '<img src="styles/legend/Semafori_24.png" /> Semafori'
            });
var format_cnotTinyhouses_25 = new ol.format.GeoJSON();
var features_cnotTinyhouses_25 = format_cnotTinyhouses_25.readFeatures(json_cnotTinyhouses_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotTinyhouses_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotTinyhouses_25.addFeatures(features_cnotTinyhouses_25);
var lyr_cnotTinyhouses_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotTinyhouses_25, 
                style: style_cnotTinyhouses_25,
                popuplayertitle: 'cnot — Tiny houses',
                interactive: true,
                title: '<img src="styles/legend/cnotTinyhouses_25.png" /> cnot — Tiny houses'
            });
var format_cnotparcheggiodroni_26 = new ol.format.GeoJSON();
var features_cnotparcheggiodroni_26 = format_cnotparcheggiodroni_26.readFeatures(json_cnotparcheggiodroni_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotparcheggiodroni_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotparcheggiodroni_26.addFeatures(features_cnotparcheggiodroni_26);
var lyr_cnotparcheggiodroni_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotparcheggiodroni_26, 
                style: style_cnotparcheggiodroni_26,
                popuplayertitle: 'cnot — parcheggio droni',
                interactive: true,
                title: '<img src="styles/legend/cnotparcheggiodroni_26.png" /> cnot — parcheggio droni'
            });
var format_cnoteurope_27 = new ol.format.GeoJSON();
var features_cnoteurope_27 = format_cnoteurope_27.readFeatures(json_cnoteurope_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnoteurope_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnoteurope_27.addFeatures(features_cnoteurope_27);
var lyr_cnoteurope_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnoteurope_27, 
                style: style_cnoteurope_27,
                popuplayertitle: 'cnot — europe',
                interactive: true,
                title: '<img src="styles/legend/cnoteurope_27.png" /> cnot — europe'
            });
var group_01_DATI_INFRASTRUTTURA_DIGITALE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '01_DATI_INFRASTRUTTURA_DIGITALE'});
var group_02_ENERGIA = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '02_ENERGIA'});
var group_05_SALUTE_MEDICINA = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '05_SALUTE_MEDICINA'});
var group_Admin_region = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Admin_region'});
var group_tinyhouses = new ol.layer.Group({
                                layers: [lyr_cnotTinyhouses_25,lyr_cnotparcheggiodroni_26,],
                                fold: 'close',
                                title: 'tiny houses'});
var group_Sorveglianza = new ol.layer.Group({
                                layers: [lyr_Telecamere_23,lyr_Semafori_24,],
                                fold: 'close',
                                title: 'Sorveglianza'});
var group_Zonadimenticata = new ol.layer.Group({
                                layers: [lyr_cnotEdifici_22,],
                                fold: 'close',
                                title: 'Zona dimenticata'});
var group_Topografia = new ol.layer.Group({
                                layers: [lyr_cnotstrade_1_14,lyr_cnotbuilding_15,lyr_cnotstrade_2_16,lyr_highway_17,lyr_highway_18,lyr_highway_19,lyr_building_20,lyr_building_21,],
                                fold: 'close',
                                title: 'Topografia'});
var group_Strutture_dismesse = new ol.layer.Group({
                                layers: [lyr_cnotscuole_11,lyr_convitto_base_localConvittoCardinalMoraesempiobase_12,lyr_convitto_base_localConvittoCardinalMoraesempiobase_13,],
                                fold: 'close',
                                title: 'Strutture_dismesse'});
var group_2041 = new ol.layer.Group({
                                layers: [lyr_building_10,],
                                fold: 'open',
                                title: '2041'});
var group_TimelineCNOT17 = new ol.layer.Group({
                                layers: [lyr_legacy_infrastructure_2050_7,lyr_cnot17_events_8,lyr_visa_data_flows_9,],
                                fold: 'close',
                                title: 'Timeline CNOT 1.7'});
var group_casepersonaggi = new ol.layer.Group({
                                layers: [lyr_casa_caterina_1,lyr_casa_caterina_2,lyr_tiny_laura_3,lyr_tiny_laura_4,lyr_stanza_Aliceroom_Alice_5,lyr_stanza_Aliceroom_Alice_6,],
                                fold: 'open',
                                title: 'case personaggi'});
var group_stories = new ol.layer.Group({
                                layers: [lyr_alice_prologostory_points_0,],
                                fold: 'open',
                                title: 'stories'});

lyr_alice_prologostory_points_0.setVisible(true);lyr_casa_caterina_1.setVisible(true);lyr_casa_caterina_2.setVisible(true);lyr_tiny_laura_3.setVisible(true);lyr_tiny_laura_4.setVisible(true);lyr_stanza_Aliceroom_Alice_5.setVisible(true);lyr_stanza_Aliceroom_Alice_6.setVisible(true);lyr_legacy_infrastructure_2050_7.setVisible(true);lyr_cnot17_events_8.setVisible(true);lyr_visa_data_flows_9.setVisible(true);lyr_building_10.setVisible(true);lyr_cnotscuole_11.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_12.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_13.setVisible(true);lyr_cnotstrade_1_14.setVisible(true);lyr_cnotbuilding_15.setVisible(true);lyr_cnotstrade_2_16.setVisible(true);lyr_highway_17.setVisible(true);lyr_highway_18.setVisible(true);lyr_highway_19.setVisible(true);lyr_building_20.setVisible(true);lyr_building_21.setVisible(true);lyr_cnotEdifici_22.setVisible(true);lyr_Telecamere_23.setVisible(true);lyr_Semafori_24.setVisible(true);lyr_cnotTinyhouses_25.setVisible(true);lyr_cnotparcheggiodroni_26.setVisible(true);lyr_cnoteurope_27.setVisible(true);
var layersList = [group_stories,group_casepersonaggi,group_TimelineCNOT17,group_2041,group_Strutture_dismesse,group_Topografia,group_Zonadimenticata,group_Sorveglianza,group_tinyhouses,lyr_cnoteurope_27];
lyr_alice_prologostory_points_0.set('fieldAliases', {'id': 'id', 'kind': 'kind', 'story_title': 'story_title', 'story_url': 'story_url', 'target': 'target', });
lyr_casa_caterina_1.set('fieldAliases', {'label': 'label', 'segmento': 'segmento', 'tipo': 'tipo', 'universo': 'universo', 'descrizione': 'descrizione', 'show_label': 'show_label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', });
lyr_casa_caterina_2.set('fieldAliases', {'label': 'label', 'segmento': 'segmento', 'tipo': 'tipo', 'universo': 'universo', 'descrizione': 'descrizione', 'show_label': 'show_label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', });
lyr_tiny_laura_3.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'show_label': 'show_label', });
lyr_tiny_laura_4.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'show_label': 'show_label', });
lyr_stanza_Aliceroom_Alice_5.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'story_url': 'story_url', 'story_title': 'story_title', 'show_label': 'show_label', });
lyr_stanza_Aliceroom_Alice_6.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'story_url': 'story_url', 'story_title': 'story_title', 'show_label': 'show_label', });
lyr_legacy_infrastructure_2050_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'stato': 'stato', 'proprietario': 'proprietario', 'livello_rischio': 'livello_rischio', 'funzione_narrativa': 'funzione_narrativa', 'note': 'note', 'anno_obsolescenza': 'anno_obsolescenza', 'anno_origine': 'anno_origine', });
lyr_cnot17_events_8.set('fieldAliases', {'fid': 'fid', 'event_id': 'event_id', 'titolo': 'titolo', 'timestamp_story': 'timestamp_story', 'capitolo': 'capitolo', 'luogo': 'luogo', 'personaggi': 'personaggi', 'tipo_evento': 'tipo_evento', 'oggetto_coinvolto': 'oggetto_coinvolto', 'stato_prima': 'stato_prima', 'stato_dopo': 'stato_dopo', 'conseguenza': 'conseguenza', 'visibile_al_lettore': 'visibile_al_lettore', 'note': 'note', 'artifact_json': 'artifact_json', });
lyr_visa_data_flows_9.set('fieldAliases', {'fid': 'fid', 'flow_id': 'flow_id', 'nome': 'nome', 'origine': 'origine', 'destinazione': 'destinazione', 'timestamp_story': 'timestamp_story', 'protocollo_narrativo': 'protocollo_narrativo', 'criticita': 'criticita', 'stato': 'stato', 'funzione_narrativa': 'funzione_narrativa', 'Note': 'Note', });
lyr_building_10.set('fieldAliases', {});
lyr_cnotscuole_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'roof:colour': 'roof:colour', 'addr:housename': 'addr:housename', 'barrier': 'barrier', 'religion': 'religion', 'grades': 'grades', 'wheelchair': 'wheelchair', 'toilets:wheelchair': 'toilets:wheelchair', 'name_1': 'name_1', 'website': 'website', 'roof:levels': 'roof:levels', 'addr:postcode': 'addr:postcode', 'isced:level': 'isced:level', 'addr:hamlet': 'addr:hamlet', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'name:etymology:wikidata': 'name:etymology:wikidata', 'wikidata': 'wikidata', 'roof:shape': 'roof:shape', 'roof:material': 'roof:material', 'operator:type': 'operator:type', 'height': 'height', 'building:material': 'building:material', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'education': 'education', 'building': 'building', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_12.set('fieldAliases', {'nome': 'nome', 'tipo': 'tipo', 'piano': 'piano', 'funzione': 'funzione', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'note': 'note', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_13.set('fieldAliases', {'nome': 'nome', 'tipo': 'tipo', 'piano': 'piano', 'funzione': 'funzione', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'note': 'note', });
lyr_cnotstrade_1_14.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'turn:lanes': 'turn:lanes', 'crossing:island': 'crossing:island', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'bin': 'bin', 'bench': 'bench', 'public_transport': 'public_transport', 'network': 'network', 'departures_board': 'departures_board', 'bus': 'bus', 'crossing:markings': 'crossing:markings', 'maxweight:signed': 'maxweight:signed', 'crossing': 'crossing', 'smoothness': 'smoothness', 'covered': 'covered', 'maxheight:signed': 'maxheight:signed', 'maxheight': 'maxheight', 'ramp': 'ramp', 'handrail': 'handrail', 'sport': 'sport', 'area': 'area', 'short_name': 'short_name', 'footway': 'footway', 'ref': 'ref', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'service': 'service', 'name:etymology:wikidata': 'name:etymology:wikidata', 'parking:both': 'parking:both', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'cycleway:lane': 'cycleway:lane', 'motorcar': 'motorcar', 'tunnel': 'tunnel', 'junction': 'junction', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'check_date:surface': 'check_date:surface', 'old_ref': 'old_ref', 'width': 'width', 'incline': 'incline', 'bridge': 'bridge', 'access': 'access', 'busway': 'busway', 'historic': 'historic', 'cycleway:left': 'cycleway:left', 'sidewalk:both': 'sidewalk:both', 'maxspeed': 'maxspeed', 'cycleway': 'cycleway', 'segregated': 'segregated', 'loc_name': 'loc_name', 'foot': 'foot', 'bicycle': 'bicycle', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'lanes': 'lanes', 'alt_name': 'alt_name', 'cycleway:right': 'cycleway:right', 'sidewalk': 'sidewalk', 'layer': 'layer', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'surface': 'surface', 'source:def': 'source:def', 'oneway': 'oneway', 'name': 'name', 'motor_vehicle': 'motor_vehicle', });
lyr_cnotbuilding_15.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikimedia_commons': 'wikimedia_commons', 'building:levels:underground': 'building:levels:underground', 'isced:level': 'isced:level', 'education': 'education', 'outdoor_seating': 'outdoor_seating', 'indoor_seating': 'indoor_seating', 'check_date:opening_hours': 'check_date:opening_hours', 'roof:orientation': 'roof:orientation', 'min_height': 'min_height', 'parking': 'parking', 'capacity': 'capacity', 'roof:direction': 'roof:direction', 'building:part': 'building:part', 'status': 'status', 'material': 'material', 'operator:type': 'operator:type', 'diocese': 'diocese', 'internet_access': 'internet_access', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'covered': 'covered', 'military': 'military', 'landuse': 'landuse', 'sport': 'sport', 'operator': 'operator', 'check_date': 'check_date', 'start_date': 'start_date', 'museum': 'museum', 'fee': 'fee', 'description': 'description', 'basilica': 'basilica', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'architect': 'architect', 'telecom': 'telecom', 'building:colour': 'building:colour', 'healthcare': 'healthcare', 'defensive_works': 'defensive_works', 'shop': 'shop', 'source_1': 'source_1', 'roof:levels': 'roof:levels', 'man_made': 'man_made', 'leisure': 'leisure', 'wheelchair:description': 'wheelchair:description', 'denomination': 'denomination', 'surface': 'surface', 'lit': 'lit', 'highway': 'highway', 'roof:colour': 'roof:colour', 'fax': 'fax', 'contact:instagram': 'contact:instagram', 'loc_name': 'loc_name', 'emergency': 'emergency', 'layer': 'layer', 'roof:height': 'roof:height', 'religion': 'religion', 'amenity': 'amenity', 'tourism': 'tourism', 'building:levels': 'building:levels', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'website': 'website', 'type': 'type', 'toilets:wheelchair': 'toilets:wheelchair', 'ruins': 'ruins', 'roof:shape': 'roof:shape', 'roof:material': 'roof:material', 'phone': 'phone', 'opening_hours': 'opening_hours', 'name:ru': 'name:ru', 'name:fr': 'name:fr', 'name:es': 'name:es', 'name:en': 'name:en', 'name': 'name', 'historic:civilization': 'historic:civilization', 'historic': 'historic', 'height': 'height', 'email': 'email', 'contact:facebook': 'contact:facebook', 'building:material': 'building:material', 'alt_name': 'alt_name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'access': 'access', });
lyr_cnotstrade_2_16.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'level': 'level', 'operator': 'operator', 'network:wikidata': 'network:wikidata', 'horse': 'horse', 'golf': 'golf', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'arcade:right': 'arcade:right', 'departures_board': 'departures_board', 'bin': 'bin', 'public_transport': 'public_transport', 'bus': 'bus', 'placement': 'placement', 'maxspeed:type': 'maxspeed:type', 'turn:lanes:backward': 'turn:lanes:backward', 'maxheight': 'maxheight', 'crossing_ref': 'crossing_ref', 'maxweight:signed': 'maxweight:signed', 'covered': 'covered', 'parking:left:orientation': 'parking:left:orientation', 'parking:left': 'parking:left', 'tactile_paving': 'tactile_paving', 'footway': 'footway', 'step_count': 'step_count', 'cycleway:left': 'cycleway:left', 'ref': 'ref', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'informal': 'informal', 'junction': 'junction', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'motorcar': 'motorcar', 'tracktype': 'tracktype', 'hgv': 'hgv', 'tunnel': 'tunnel', 'smoothness': 'smoothness', 'width': 'width', 'source:maxspeed': 'source:maxspeed', 'vehicle:lanes': 'vehicle:lanes', 'psv:lanes:forward': 'psv:lanes:forward', 'lanes:backward': 'lanes:backward', 'access:lanes:forward': 'access:lanes:forward', 'shelter': 'shelter', 'network': 'network', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'bench': 'bench', 'turn:lanes': 'turn:lanes', 'old_ref': 'old_ref', 'bridge': 'bridge', 'segregated': 'segregated', 'check_date:surface': 'check_date:surface', 'historic': 'historic', 'access': 'access', 'cycleway:right': 'cycleway:right', 'parking:both:orientation': 'parking:both:orientation', 'parking:both': 'parking:both', 'layer': 'layer', 'cycleway': 'cycleway', 'parking:right:orientation': 'parking:right:orientation', 'parking:right': 'parking:right', 'sidewalk:both:surface': 'sidewalk:both:surface', 'loc_name': 'loc_name', 'area': 'area', 'short_name': 'short_name', 'maxspeed': 'maxspeed', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes': 'lanes', 'foot': 'foot', 'bicycle': 'bicycle', 'alt_name': 'alt_name', 'sidewalk:both': 'sidewalk:both', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'motor_vehicle': 'motor_vehicle', 'source:def': 'source:def', 'service': 'service', 'surface': 'surface', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_highway_17.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'informal': 'informal', 'public_transport': 'public_transport', 'network': 'network', 'bus': 'bus', 'maxweight:signed': 'maxweight:signed', 'cycleway:right': 'cycleway:right', 'ref': 'ref', 'sidewalk:both': 'sidewalk:both', 'junction': 'junction', 'destination:forward': 'destination:forward', 'destination:backward': 'destination:backward', 'tunnel': 'tunnel', 'access': 'access', 'service': 'service', 'destination:symbol': 'destination:symbol', 'destination:colour': 'destination:colour', 'destination': 'destination', 'turn:lanes': 'turn:lanes', 'segregated': 'segregated', 'cutting': 'cutting', 'sidewalk:right': 'sidewalk:right', 'cycleway:both': 'cycleway:both', 'lane_markings': 'lane_markings', 'oneway': 'oneway', 'motor_vehicle': 'motor_vehicle', 'layer': 'layer', 'horse': 'horse', 'foot': 'foot', 'bridge': 'bridge', 'width': 'width', 'surface': 'surface', 'source:maxspeed': 'source:maxspeed', 'name': 'name', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes': 'lanes', 'bicycle': 'bicycle', });
lyr_highway_18.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'turn:lanes': 'turn:lanes', 'covered': 'covered', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'public_transport': 'public_transport', 'network': 'network', 'bus': 'bus', 'bin': 'bin', 'bench': 'bench', 'horse': 'horse', 'cycleway': 'cycleway', 'level': 'level', 'toilets': 'toilets', 'turn:lanes:forward': 'turn:lanes:forward', 'wheelchair': 'wheelchair', 'source:maxspeed': 'source:maxspeed', 'shoulder': 'shoulder', 'embankment': 'embankment', 'maxweight:signed': 'maxweight:signed', 'turn:lanes:backward': 'turn:lanes:backward', 'loc_name': 'loc_name', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'cycleway:left': 'cycleway:left', 'width': 'width', 'sidewalk:both': 'sidewalk:both', 'lit': 'lit', 'tunnel': 'tunnel', 'junction': 'junction', 'tracktype': 'tracktype', 'access': 'access', 'lane_markings': 'lane_markings', 'sidewalk': 'sidewalk', 'cycleway:both': 'cycleway:both', 'cycleway:right': 'cycleway:right', 'segregated': 'segregated', 'foot': 'foot', 'bicycle': 'bicycle', 'service': 'service', 'layer': 'layer', 'bridge': 'bridge', 'toll': 'toll', 'surface': 'surface', 'smoothness': 'smoothness', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'name': 'name', });
lyr_highway_19.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_building_20.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'power': 'power', 'design': 'design', 'amenity': 'amenity', 'shop': 'shop', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:housename': 'addr:housename', 'entrance': 'entrance', 'barrier': 'barrier', });
lyr_building_21.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'takeaway': 'takeaway', 'drive_through': 'drive_through', 'brand:wikipedia': 'brand:wikipedia', 'ref:mise': 'ref:mise', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_100': 'fuel:octane_100', 'fuel:lpg': 'fuel:lpg', 'fuel:diesel': 'fuel:diesel', 'fuel:GTL_diesel': 'fuel:GTL_diesel', 'wikipedia': 'wikipedia', 'layer': 'layer', 'power': 'power', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'website': 'website', 'branch': 'branch', 'wheelchair': 'wheelchair', 'second_hand': 'second_hand', 'safety_inspection': 'safety_inspection', 'repair': 'repair', 'rental': 'rental', 'payment:visa_electron': 'payment:visa_electron', 'payment:visa_debit': 'payment:visa_debit', 'payment:visa': 'payment:visa', 'payment:notes': 'payment:notes', 'payment:mastercard': 'payment:mastercard', 'payment:maestro': 'payment:maestro', 'payment:diners_club': 'payment:diners_club', 'payment:contactless': 'payment:contactless', 'payment:coins': 'payment:coins', 'payment:bancomat': 'payment:bancomat', 'parts': 'parts', 'clothes': 'clothes', 'addr:province': 'addr:province', 'man_made': 'man_made', 'cuisine': 'cuisine', 'addr:postcode': 'addr:postcode', 'ruins': 'ruins', 'wikidata': 'wikidata', 'religion': 'religion', 'amenity': 'amenity', 'industrial': 'industrial', 'tourism': 'tourism', 'brand:wikidata': 'brand:wikidata', 'height': 'height', 'building:levels': 'building:levels', 'addr:city': 'addr:city', 'brand': 'brand', 'name': 'name', 'shop': 'shop', 'operator': 'operator', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'type': 'type', });
lyr_cnotEdifici_22.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'religion': 'religion', 'denomination': 'denomination', 'amenity': 'amenity', 'name': 'name', });
lyr_Telecamere_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'note': 'note', });
lyr_Semafori_24.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:island': 'crossing:island', 'supervised': 'supervised', 'traffic_signals:direction': 'traffic_signals:direction', 'traffic_signals': 'traffic_signals', 'traffic_signals:vibration': 'traffic_signals:vibration', 'traffic_signals:sound': 'traffic_signals:sound', 'tactile_paving': 'tactile_paving', 'crossing': 'crossing', 'button_operated': 'button_operated', 'source:def': 'source:def', 'name': 'name', });
lyr_cnotTinyhouses_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Proprietario': 'Proprietario', });
lyr_cnotparcheggiodroni_26.set('fieldAliases', {'fid': 'fid', });
lyr_cnoteurope_27.set('fieldAliases', {'fid': 'fid', 'featurecla': 'featurecla', 'scalerank': 'scalerank', 'labelrank': 'labelrank', 'sovereignt': 'sovereignt', 'sov_a3': 'sov_a3', 'adm0_dif': 'adm0_dif', 'level': 'level', 'type': 'type', 'tlc': 'tlc', 'admin': 'admin', 'adm0_a3': 'adm0_a3', 'geou_dif': 'geou_dif', 'geounit': 'geounit', 'gu_a3': 'gu_a3', 'su_dif': 'su_dif', 'subunit': 'subunit', 'su_a3': 'su_a3', 'brk_diff': 'brk_diff', 'name': 'name', 'name_long': 'name_long', 'brk_a3': 'brk_a3', 'brk_name': 'brk_name', 'brk_group': 'brk_group', 'abbrev': 'abbrev', 'postal': 'postal', 'formal_en': 'formal_en', 'formal_fr': 'formal_fr', 'name_ciawf': 'name_ciawf', 'note_adm0': 'note_adm0', 'note_brk': 'note_brk', 'name_sort': 'name_sort', 'name_alt': 'name_alt', 'mapcolor7': 'mapcolor7', 'mapcolor8': 'mapcolor8', 'mapcolor9': 'mapcolor9', 'mapcolor13': 'mapcolor13', 'pop_est': 'pop_est', 'pop_rank': 'pop_rank', 'pop_year': 'pop_year', 'gdp_md': 'gdp_md', 'gdp_year': 'gdp_year', 'economy': 'economy', 'income_grp': 'income_grp', 'fips_10': 'fips_10', 'iso_a2': 'iso_a2', 'iso_a2_eh': 'iso_a2_eh', 'iso_a3': 'iso_a3', 'iso_a3_eh': 'iso_a3_eh', 'iso_n3': 'iso_n3', 'iso_n3_eh': 'iso_n3_eh', 'un_a3': 'un_a3', 'wb_a2': 'wb_a2', 'wb_a3': 'wb_a3', 'woe_id': 'woe_id', 'woe_id_eh': 'woe_id_eh', 'woe_note': 'woe_note', 'adm0_iso': 'adm0_iso', 'adm0_diff': 'adm0_diff', 'adm0_tlc': 'adm0_tlc', 'adm0_a3_us': 'adm0_a3_us', 'adm0_a3_fr': 'adm0_a3_fr', 'adm0_a3_ru': 'adm0_a3_ru', 'adm0_a3_es': 'adm0_a3_es', 'adm0_a3_cn': 'adm0_a3_cn', 'adm0_a3_tw': 'adm0_a3_tw', 'adm0_a3_in': 'adm0_a3_in', 'adm0_a3_np': 'adm0_a3_np', 'adm0_a3_pk': 'adm0_a3_pk', 'adm0_a3_de': 'adm0_a3_de', 'adm0_a3_gb': 'adm0_a3_gb', 'adm0_a3_br': 'adm0_a3_br', 'adm0_a3_il': 'adm0_a3_il', 'adm0_a3_ps': 'adm0_a3_ps', 'adm0_a3_sa': 'adm0_a3_sa', 'adm0_a3_eg': 'adm0_a3_eg', 'adm0_a3_ma': 'adm0_a3_ma', 'adm0_a3_pt': 'adm0_a3_pt', 'adm0_a3_ar': 'adm0_a3_ar', 'adm0_a3_jp': 'adm0_a3_jp', 'adm0_a3_ko': 'adm0_a3_ko', 'adm0_a3_vn': 'adm0_a3_vn', 'adm0_a3_tr': 'adm0_a3_tr', 'adm0_a3_id': 'adm0_a3_id', 'adm0_a3_pl': 'adm0_a3_pl', 'adm0_a3_gr': 'adm0_a3_gr', 'adm0_a3_it': 'adm0_a3_it', 'adm0_a3_nl': 'adm0_a3_nl', 'adm0_a3_se': 'adm0_a3_se', 'adm0_a3_bd': 'adm0_a3_bd', 'adm0_a3_ua': 'adm0_a3_ua', 'adm0_a3_un': 'adm0_a3_un', 'adm0_a3_wb': 'adm0_a3_wb', 'continent': 'continent', 'region_un': 'region_un', 'subregion': 'subregion', 'region_wb': 'region_wb', 'name_len': 'name_len', 'long_len': 'long_len', 'abbrev_len': 'abbrev_len', 'tiny': 'tiny', 'homepart': 'homepart', 'min_zoom': 'min_zoom', 'min_label': 'min_label', 'max_label': 'max_label', 'label_x': 'label_x', 'label_y': 'label_y', 'ne_id': 'ne_id', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fa': 'name_fa', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_he': 'name_he', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'name_zht': 'name_zht', 'fclass_iso': 'fclass_iso', 'tlc_diff': 'tlc_diff', 'fclass_tlc': 'fclass_tlc', 'fclass_us': 'fclass_us', 'fclass_fr': 'fclass_fr', 'fclass_ru': 'fclass_ru', 'fclass_es': 'fclass_es', 'fclass_cn': 'fclass_cn', 'fclass_tw': 'fclass_tw', 'fclass_in': 'fclass_in', 'fclass_np': 'fclass_np', 'fclass_pk': 'fclass_pk', 'fclass_de': 'fclass_de', 'fclass_gb': 'fclass_gb', 'fclass_br': 'fclass_br', 'fclass_il': 'fclass_il', 'fclass_ps': 'fclass_ps', 'fclass_sa': 'fclass_sa', 'fclass_eg': 'fclass_eg', 'fclass_ma': 'fclass_ma', 'fclass_pt': 'fclass_pt', 'fclass_ar': 'fclass_ar', 'fclass_jp': 'fclass_jp', 'fclass_ko': 'fclass_ko', 'fclass_vn': 'fclass_vn', 'fclass_tr': 'fclass_tr', 'fclass_id': 'fclass_id', 'fclass_pl': 'fclass_pl', 'fclass_gr': 'fclass_gr', 'fclass_it': 'fclass_it', 'fclass_nl': 'fclass_nl', 'fclass_se': 'fclass_se', 'fclass_bd': 'fclass_bd', 'fclass_ua': 'fclass_ua', 'filename': 'filename', });
lyr_alice_prologostory_points_0.set('fieldImages', {'id': 'TextEdit', 'kind': 'TextEdit', 'story_title': '', 'story_url': '', 'target': 'TextEdit', });
lyr_casa_caterina_1.set('fieldImages', {'label': 'TextEdit', 'segmento': 'Range', 'tipo': 'TextEdit', 'universo': 'TextEdit', 'descrizione': 'TextEdit', 'show_label': 'CheckBox', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', });
lyr_casa_caterina_2.set('fieldImages', {'label': 'TextEdit', 'segmento': 'Range', 'tipo': 'TextEdit', 'universo': 'TextEdit', 'descrizione': 'TextEdit', 'show_label': 'CheckBox', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', });
lyr_tiny_laura_3.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'show_label': 'CheckBox', });
lyr_tiny_laura_4.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'show_label': 'CheckBox', });
lyr_stanza_Aliceroom_Alice_5.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'story_url': '', 'story_title': '', 'show_label': 'CheckBox', });
lyr_stanza_Aliceroom_Alice_6.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'story_url': '', 'story_title': '', 'show_label': 'CheckBox', });
lyr_legacy_infrastructure_2050_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'stato': 'TextEdit', 'proprietario': 'TextEdit', 'livello_rischio': 'TextEdit', 'funzione_narrativa': 'TextEdit', 'note': 'TextEdit', 'anno_obsolescenza': 'Range', 'anno_origine': 'Range', });
lyr_cnot17_events_8.set('fieldImages', {'fid': '', 'event_id': '', 'titolo': '', 'timestamp_story': '', 'capitolo': '', 'luogo': '', 'personaggi': '', 'tipo_evento': '', 'oggetto_coinvolto': '', 'stato_prima': '', 'stato_dopo': '', 'conseguenza': '', 'visibile_al_lettore': '', 'note': '', 'artifact_json': '', });
lyr_visa_data_flows_9.set('fieldImages', {'fid': 'TextEdit', 'flow_id': 'TextEdit', 'nome': 'TextEdit', 'origine': 'TextEdit', 'destinazione': 'TextEdit', 'timestamp_story': 'TextEdit', 'protocollo_narrativo': 'TextEdit', 'criticita': 'TextEdit', 'stato': 'TextEdit', 'funzione_narrativa': 'TextEdit', 'Note': 'TextEdit', });
lyr_building_10.set('fieldImages', {});
lyr_cnotscuole_11.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'roof:colour': '', 'addr:housename': '', 'barrier': '', 'religion': '', 'grades': '', 'wheelchair': '', 'toilets:wheelchair': '', 'name_1': '', 'website': '', 'roof:levels': '', 'addr:postcode': '', 'isced:level': '', 'addr:hamlet': '', 'addr:street': '', 'addr:housenumber': '', 'addr:city': '', 'name:etymology:wikidata': '', 'wikidata': '', 'roof:shape': '', 'roof:material': '', 'operator:type': '', 'height': '', 'building:material': '', 'building:levels': '', 'type': '', 'name': '', 'education': '', 'building': '', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_12.set('fieldImages', {'nome': 'TextEdit', 'tipo': 'TextEdit', 'piano': 'Range', 'funzione': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'note': 'TextEdit', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_13.set('fieldImages', {'nome': 'TextEdit', 'tipo': 'TextEdit', 'piano': 'Range', 'funzione': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'note': 'TextEdit', });
lyr_cnotstrade_1_14.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'turn:lanes': '', 'crossing:island': '', 'tactile_paving': '', 'shelter': '', 'bin': '', 'bench': '', 'public_transport': '', 'network': '', 'departures_board': '', 'bus': '', 'crossing:markings': '', 'maxweight:signed': '', 'crossing': '', 'smoothness': '', 'covered': '', 'maxheight:signed': '', 'maxheight': '', 'ramp': '', 'handrail': '', 'sport': '', 'area': '', 'short_name': '', 'footway': '', 'ref': '', 'sidewalk:right': '', 'sidewalk:left': '', 'service': '', 'name:etymology:wikidata': '', 'parking:both': '', 'footway:surface': '', 'cycleway:surface': '', 'cycleway:lane': '', 'motorcar': '', 'tunnel': '', 'junction': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes:backward': '', 'check_date:surface': '', 'old_ref': '', 'width': '', 'incline': '', 'bridge': '', 'access': '', 'busway': '', 'historic': '', 'cycleway:left': '', 'sidewalk:both': '', 'maxspeed': '', 'cycleway': '', 'segregated': '', 'loc_name': '', 'foot': '', 'bicycle': '', 'wikipedia': '', 'wikidata': '', 'lanes': '', 'alt_name': '', 'cycleway:right': '', 'sidewalk': '', 'layer': '', 'lit': '', 'lane_markings': '', 'cycleway:both': '', 'surface': '', 'source:def': '', 'oneway': '', 'name': '', 'motor_vehicle': '', });
lyr_cnotbuilding_15.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'wikimedia_commons': 'TextEdit', 'building:levels:underground': 'TextEdit', 'isced:level': 'TextEdit', 'education': 'TextEdit', 'outdoor_seating': 'TextEdit', 'indoor_seating': 'TextEdit', 'check_date:opening_hours': 'TextEdit', 'roof:orientation': 'TextEdit', 'min_height': 'TextEdit', 'parking': 'TextEdit', 'capacity': 'TextEdit', 'roof:direction': 'TextEdit', 'building:part': 'TextEdit', 'status': 'TextEdit', 'material': 'TextEdit', 'operator:type': 'TextEdit', 'diocese': 'TextEdit', 'internet_access': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand': 'TextEdit', 'covered': 'TextEdit', 'military': 'TextEdit', 'landuse': 'TextEdit', 'sport': 'TextEdit', 'operator': 'TextEdit', 'check_date': 'TextEdit', 'start_date': 'TextEdit', 'museum': 'TextEdit', 'fee': 'TextEdit', 'description': 'TextEdit', 'basilica': 'TextEdit', 'tower:type': 'TextEdit', 'tower:construction': 'TextEdit', 'architect': 'TextEdit', 'telecom': 'TextEdit', 'building:colour': 'TextEdit', 'healthcare': 'TextEdit', 'defensive_works': 'TextEdit', 'shop': 'TextEdit', 'source_1': 'TextEdit', 'roof:levels': 'TextEdit', 'man_made': 'TextEdit', 'leisure': 'TextEdit', 'wheelchair:description': 'TextEdit', 'denomination': 'TextEdit', 'surface': 'TextEdit', 'lit': 'TextEdit', 'highway': 'TextEdit', 'roof:colour': 'TextEdit', 'fax': 'TextEdit', 'contact:instagram': 'TextEdit', 'loc_name': 'TextEdit', 'emergency': 'TextEdit', 'layer': 'TextEdit', 'roof:height': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'tourism': 'TextEdit', 'building:levels': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'type': 'TextEdit', 'toilets:wheelchair': 'TextEdit', 'ruins': 'TextEdit', 'roof:shape': 'TextEdit', 'roof:material': 'TextEdit', 'phone': 'TextEdit', 'opening_hours': 'TextEdit', 'name:ru': 'TextEdit', 'name:fr': 'TextEdit', 'name:es': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'historic:civilization': 'TextEdit', 'historic': 'TextEdit', 'height': 'TextEdit', 'email': 'TextEdit', 'contact:facebook': 'TextEdit', 'building:material': 'TextEdit', 'alt_name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'access': 'TextEdit', });
lyr_cnotstrade_2_16.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'level': '', 'operator': '', 'network:wikidata': '', 'horse': '', 'golf': '', 'crossing:markings': '', 'crossing': '', 'arcade:right': '', 'departures_board': '', 'bin': '', 'public_transport': '', 'bus': '', 'placement': '', 'maxspeed:type': '', 'turn:lanes:backward': '', 'maxheight': '', 'crossing_ref': '', 'maxweight:signed': '', 'covered': '', 'parking:left:orientation': '', 'parking:left': '', 'tactile_paving': '', 'footway': '', 'step_count': '', 'cycleway:left': '', 'ref': '', 'ramp': '', 'incline': '', 'handrail': '', 'informal': '', 'junction': '', 'sidewalk:right': '', 'sidewalk:left': '', 'motorcar': '', 'tracktype': '', 'hgv': '', 'tunnel': '', 'smoothness': '', 'width': '', 'source:maxspeed': '', 'vehicle:lanes': '', 'psv:lanes:forward': '', 'lanes:backward': '', 'access:lanes:forward': '', 'shelter': '', 'network': '', 'footway:surface': '', 'cycleway:surface': '', 'bench': '', 'turn:lanes': '', 'old_ref': '', 'bridge': '', 'segregated': '', 'check_date:surface': '', 'historic': '', 'access': '', 'cycleway:right': '', 'parking:both:orientation': '', 'parking:both': '', 'layer': '', 'cycleway': '', 'parking:right:orientation': '', 'parking:right': '', 'sidewalk:both:surface': '', 'loc_name': '', 'area': '', 'short_name': '', 'maxspeed': '', 'wikipedia': '', 'wikidata': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes': '', 'foot': '', 'bicycle': '', 'alt_name': '', 'sidewalk:both': '', 'sidewalk': '', 'oneway': '', 'lit': '', 'lane_markings': '', 'cycleway:both': '', 'motor_vehicle': '', 'source:def': '', 'service': '', 'surface': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_highway_17.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'informal': '', 'public_transport': '', 'network': '', 'bus': '', 'maxweight:signed': '', 'cycleway:right': '', 'ref': '', 'sidewalk:both': '', 'junction': '', 'destination:forward': '', 'destination:backward': '', 'tunnel': '', 'access': '', 'service': '', 'destination:symbol': '', 'destination:colour': '', 'destination': '', 'turn:lanes': '', 'segregated': '', 'cutting': '', 'sidewalk:right': '', 'cycleway:both': '', 'lane_markings': '', 'oneway': '', 'motor_vehicle': '', 'layer': '', 'horse': '', 'foot': '', 'bridge': '', 'width': '', 'surface': '', 'source:maxspeed': '', 'name': '', 'maxspeed': '', 'lit': '', 'lanes': '', 'bicycle': '', });
lyr_highway_18.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'turn:lanes': '', 'covered': '', 'footway:surface': '', 'cycleway:surface': '', 'tactile_paving': '', 'shelter': '', 'public_transport': '', 'network': '', 'bus': '', 'bin': '', 'bench': '', 'horse': '', 'cycleway': '', 'level': '', 'toilets': '', 'turn:lanes:forward': '', 'wheelchair': '', 'source:maxspeed': '', 'shoulder': '', 'embankment': '', 'maxweight:signed': '', 'turn:lanes:backward': '', 'loc_name': '', 'lanes:forward': '', 'lanes:backward': '', 'cycleway:left': '', 'width': '', 'sidewalk:both': '', 'lit': '', 'tunnel': '', 'junction': '', 'tracktype': '', 'access': '', 'lane_markings': '', 'sidewalk': '', 'cycleway:both': '', 'cycleway:right': '', 'segregated': '', 'foot': '', 'bicycle': '', 'service': '', 'layer': '', 'bridge': '', 'toll': '', 'surface': '', 'smoothness': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'lanes': '', 'name': '', });
lyr_highway_19.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_building_20.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:city': 'TextEdit', 'power': 'TextEdit', 'design': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:housename': 'TextEdit', 'entrance': 'TextEdit', 'barrier': 'TextEdit', });
lyr_building_21.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'takeaway': 'TextEdit', 'drive_through': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'ref:mise': 'TextEdit', 'fuel:octane_95': 'TextEdit', 'fuel:octane_100': 'TextEdit', 'fuel:lpg': 'TextEdit', 'fuel:diesel': 'TextEdit', 'fuel:GTL_diesel': 'TextEdit', 'wikipedia': 'TextEdit', 'layer': 'TextEdit', 'power': 'TextEdit', 'generator:source': 'TextEdit', 'generator:output:electricity': 'TextEdit', 'website': 'TextEdit', 'branch': 'TextEdit', 'wheelchair': 'TextEdit', 'second_hand': 'TextEdit', 'safety_inspection': 'TextEdit', 'repair': 'TextEdit', 'rental': 'TextEdit', 'payment:visa_electron': 'TextEdit', 'payment:visa_debit': 'TextEdit', 'payment:visa': 'TextEdit', 'payment:notes': 'TextEdit', 'payment:mastercard': 'TextEdit', 'payment:maestro': 'TextEdit', 'payment:diners_club': 'TextEdit', 'payment:contactless': 'TextEdit', 'payment:coins': 'TextEdit', 'payment:bancomat': 'TextEdit', 'parts': 'TextEdit', 'clothes': 'TextEdit', 'addr:province': 'TextEdit', 'man_made': 'TextEdit', 'cuisine': 'TextEdit', 'addr:postcode': 'TextEdit', 'ruins': 'TextEdit', 'wikidata': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'industrial': 'TextEdit', 'tourism': 'TextEdit', 'brand:wikidata': 'TextEdit', 'height': 'TextEdit', 'building:levels': 'TextEdit', 'addr:city': 'TextEdit', 'brand': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'operator': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'type': 'TextEdit', });
lyr_cnotEdifici_22.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Telecamere_23.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'tipo': '', 'note': '', });
lyr_Semafori_24.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing:island': '', 'supervised': '', 'traffic_signals:direction': '', 'traffic_signals': '', 'traffic_signals:vibration': '', 'traffic_signals:sound': '', 'tactile_paving': '', 'crossing': '', 'button_operated': '', 'source:def': '', 'name': '', });
lyr_cnotTinyhouses_25.set('fieldImages', {'fid': '', 'id': '', 'Proprietario': '', });
lyr_cnotparcheggiodroni_26.set('fieldImages', {'fid': '', });
lyr_cnoteurope_27.set('fieldImages', {'fid': 'TextEdit', 'featurecla': 'TextEdit', 'scalerank': 'Range', 'labelrank': 'Range', 'sovereignt': 'TextEdit', 'sov_a3': 'TextEdit', 'adm0_dif': 'Range', 'level': 'Range', 'type': 'TextEdit', 'tlc': 'TextEdit', 'admin': 'TextEdit', 'adm0_a3': 'TextEdit', 'geou_dif': 'Range', 'geounit': 'TextEdit', 'gu_a3': 'TextEdit', 'su_dif': 'Range', 'subunit': 'TextEdit', 'su_a3': 'TextEdit', 'brk_diff': 'Range', 'name': 'TextEdit', 'name_long': 'TextEdit', 'brk_a3': 'TextEdit', 'brk_name': 'TextEdit', 'brk_group': 'TextEdit', 'abbrev': 'TextEdit', 'postal': 'TextEdit', 'formal_en': 'TextEdit', 'formal_fr': 'TextEdit', 'name_ciawf': 'TextEdit', 'note_adm0': 'TextEdit', 'note_brk': 'TextEdit', 'name_sort': 'TextEdit', 'name_alt': 'TextEdit', 'mapcolor7': 'Range', 'mapcolor8': 'Range', 'mapcolor9': 'Range', 'mapcolor13': 'Range', 'pop_est': 'Range', 'pop_rank': 'Range', 'pop_year': 'Range', 'gdp_md': 'Range', 'gdp_year': 'Range', 'economy': 'TextEdit', 'income_grp': 'TextEdit', 'fips_10': 'TextEdit', 'iso_a2': 'TextEdit', 'iso_a2_eh': 'TextEdit', 'iso_a3': 'TextEdit', 'iso_a3_eh': 'TextEdit', 'iso_n3': 'TextEdit', 'iso_n3_eh': 'TextEdit', 'un_a3': 'TextEdit', 'wb_a2': 'TextEdit', 'wb_a3': 'TextEdit', 'woe_id': 'Range', 'woe_id_eh': 'Range', 'woe_note': 'TextEdit', 'adm0_iso': 'TextEdit', 'adm0_diff': 'TextEdit', 'adm0_tlc': 'TextEdit', 'adm0_a3_us': 'TextEdit', 'adm0_a3_fr': 'TextEdit', 'adm0_a3_ru': 'TextEdit', 'adm0_a3_es': 'TextEdit', 'adm0_a3_cn': 'TextEdit', 'adm0_a3_tw': 'TextEdit', 'adm0_a3_in': 'TextEdit', 'adm0_a3_np': 'TextEdit', 'adm0_a3_pk': 'TextEdit', 'adm0_a3_de': 'TextEdit', 'adm0_a3_gb': 'TextEdit', 'adm0_a3_br': 'TextEdit', 'adm0_a3_il': 'TextEdit', 'adm0_a3_ps': 'TextEdit', 'adm0_a3_sa': 'TextEdit', 'adm0_a3_eg': 'TextEdit', 'adm0_a3_ma': 'TextEdit', 'adm0_a3_pt': 'TextEdit', 'adm0_a3_ar': 'TextEdit', 'adm0_a3_jp': 'TextEdit', 'adm0_a3_ko': 'TextEdit', 'adm0_a3_vn': 'TextEdit', 'adm0_a3_tr': 'TextEdit', 'adm0_a3_id': 'TextEdit', 'adm0_a3_pl': 'TextEdit', 'adm0_a3_gr': 'TextEdit', 'adm0_a3_it': 'TextEdit', 'adm0_a3_nl': 'TextEdit', 'adm0_a3_se': 'TextEdit', 'adm0_a3_bd': 'TextEdit', 'adm0_a3_ua': 'TextEdit', 'adm0_a3_un': 'Range', 'adm0_a3_wb': 'Range', 'continent': 'TextEdit', 'region_un': 'TextEdit', 'subregion': 'TextEdit', 'region_wb': 'TextEdit', 'name_len': 'Range', 'long_len': 'Range', 'abbrev_len': 'Range', 'tiny': 'Range', 'homepart': 'Range', 'min_zoom': 'Range', 'min_label': 'TextEdit', 'max_label': 'TextEdit', 'label_x': 'TextEdit', 'label_y': 'TextEdit', 'ne_id': 'Range', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fa': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_he': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'name_zht': 'TextEdit', 'fclass_iso': 'TextEdit', 'tlc_diff': 'TextEdit', 'fclass_tlc': 'TextEdit', 'fclass_us': 'TextEdit', 'fclass_fr': 'TextEdit', 'fclass_ru': 'TextEdit', 'fclass_es': 'TextEdit', 'fclass_cn': 'TextEdit', 'fclass_tw': 'TextEdit', 'fclass_in': 'TextEdit', 'fclass_np': 'TextEdit', 'fclass_pk': 'TextEdit', 'fclass_de': 'TextEdit', 'fclass_gb': 'TextEdit', 'fclass_br': 'TextEdit', 'fclass_il': 'TextEdit', 'fclass_ps': 'TextEdit', 'fclass_sa': 'TextEdit', 'fclass_eg': 'TextEdit', 'fclass_ma': 'TextEdit', 'fclass_pt': 'TextEdit', 'fclass_ar': 'TextEdit', 'fclass_jp': 'TextEdit', 'fclass_ko': 'TextEdit', 'fclass_vn': 'TextEdit', 'fclass_tr': 'TextEdit', 'fclass_id': 'TextEdit', 'fclass_pl': 'TextEdit', 'fclass_gr': 'TextEdit', 'fclass_it': 'TextEdit', 'fclass_nl': 'TextEdit', 'fclass_se': 'TextEdit', 'fclass_bd': 'TextEdit', 'fclass_ua': 'TextEdit', 'filename': 'TextEdit', });
lyr_alice_prologostory_points_0.set('fieldLabels', {'id': 'no label', 'kind': 'no label', 'story_title': 'no label', 'story_url': 'no label', 'target': 'no label', });
lyr_casa_caterina_1.set('fieldLabels', {'label': 'no label', 'segmento': 'no label', 'tipo': 'no label', 'universo': 'no label', 'descrizione': 'no label', 'show_label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', });
lyr_casa_caterina_2.set('fieldLabels', {'label': 'no label', 'segmento': 'no label', 'tipo': 'no label', 'universo': 'no label', 'descrizione': 'no label', 'show_label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', });
lyr_tiny_laura_3.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'show_label': 'no label', });
lyr_tiny_laura_4.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'show_label': 'no label', });
lyr_stanza_Aliceroom_Alice_5.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'story_url': 'no label', 'story_title': 'no label', 'show_label': 'no label', });
lyr_stanza_Aliceroom_Alice_6.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'story_url': 'no label', 'story_title': 'no label', 'show_label': 'no label', });
lyr_legacy_infrastructure_2050_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'tipo': 'no label', 'stato': 'no label', 'proprietario': 'no label', 'livello_rischio': 'no label', 'funzione_narrativa': 'no label', 'note': 'no label', 'anno_obsolescenza': 'no label', 'anno_origine': 'no label', });
lyr_cnot17_events_8.set('fieldLabels', {'fid': 'no label', 'event_id': 'no label', 'titolo': 'no label', 'timestamp_story': 'no label', 'capitolo': 'no label', 'luogo': 'no label', 'personaggi': 'no label', 'tipo_evento': 'no label', 'oggetto_coinvolto': 'no label', 'stato_prima': 'no label', 'stato_dopo': 'no label', 'conseguenza': 'no label', 'visibile_al_lettore': 'no label', 'note': 'no label', 'artifact_json': 'no label', });
lyr_visa_data_flows_9.set('fieldLabels', {'fid': 'no label', 'flow_id': 'no label', 'nome': 'no label', 'origine': 'no label', 'destinazione': 'no label', 'timestamp_story': 'no label', 'protocollo_narrativo': 'no label', 'criticita': 'no label', 'stato': 'no label', 'funzione_narrativa': 'no label', 'Note': 'no label', });
lyr_building_10.set('fieldLabels', {});
lyr_cnotscuole_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'roof:colour': 'no label', 'addr:housename': 'no label', 'barrier': 'no label', 'religion': 'no label', 'grades': 'no label', 'wheelchair': 'no label', 'toilets:wheelchair': 'no label', 'name_1': 'no label', 'website': 'no label', 'roof:levels': 'no label', 'addr:postcode': 'no label', 'isced:level': 'no label', 'addr:hamlet': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'name:etymology:wikidata': 'no label', 'wikidata': 'no label', 'roof:shape': 'no label', 'roof:material': 'no label', 'operator:type': 'no label', 'height': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'education': 'no label', 'building': 'no label', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_12.set('fieldLabels', {'nome': 'no label', 'tipo': 'no label', 'piano': 'no label', 'funzione': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'note': 'no label', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_13.set('fieldLabels', {'nome': 'no label', 'tipo': 'no label', 'piano': 'no label', 'funzione': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'note': 'no label', });
lyr_cnotstrade_1_14.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'turn:lanes': 'no label', 'crossing:island': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'bin': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'network': 'no label', 'departures_board': 'no label', 'bus': 'no label', 'crossing:markings': 'no label', 'maxweight:signed': 'no label', 'crossing': 'no label', 'smoothness': 'no label', 'covered': 'no label', 'maxheight:signed': 'no label', 'maxheight': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'sport': 'no label', 'area': 'no label', 'short_name': 'no label', 'footway': 'no label', 'ref': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'service': 'no label', 'name:etymology:wikidata': 'no label', 'parking:both': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'cycleway:lane': 'no label', 'motorcar': 'no label', 'tunnel': 'no label', 'junction': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'check_date:surface': 'no label', 'old_ref': 'no label', 'width': 'no label', 'incline': 'no label', 'bridge': 'no label', 'access': 'no label', 'busway': 'no label', 'historic': 'no label', 'cycleway:left': 'no label', 'sidewalk:both': 'no label', 'maxspeed': 'no label', 'cycleway': 'no label', 'segregated': 'no label', 'loc_name': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'lanes': 'no label', 'alt_name': 'no label', 'cycleway:right': 'no label', 'sidewalk': 'no label', 'layer': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'surface': 'no label', 'source:def': 'no label', 'oneway': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', });
lyr_cnotbuilding_15.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikimedia_commons': 'no label', 'building:levels:underground': 'no label', 'isced:level': 'no label', 'education': 'no label', 'outdoor_seating': 'no label', 'indoor_seating': 'no label', 'check_date:opening_hours': 'no label', 'roof:orientation': 'no label', 'min_height': 'no label', 'parking': 'no label', 'capacity': 'no label', 'roof:direction': 'no label', 'building:part': 'no label', 'status': 'no label', 'material': 'no label', 'operator:type': 'no label', 'diocese': 'no label', 'internet_access': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'covered': 'no label', 'military': 'no label', 'landuse': 'no label', 'sport': 'no label', 'operator': 'no label', 'check_date': 'no label', 'start_date': 'no label', 'museum': 'no label', 'fee': 'no label', 'description': 'no label', 'basilica': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'architect': 'no label', 'telecom': 'no label', 'building:colour': 'no label', 'healthcare': 'no label', 'defensive_works': 'no label', 'shop': 'no label', 'source_1': 'no label', 'roof:levels': 'no label', 'man_made': 'no label', 'leisure': 'no label', 'wheelchair:description': 'no label', 'denomination': 'no label', 'surface': 'no label', 'lit': 'no label', 'highway': 'no label', 'roof:colour': 'no label', 'fax': 'no label', 'contact:instagram': 'no label', 'loc_name': 'no label', 'emergency': 'no label', 'layer': 'no label', 'roof:height': 'no label', 'religion': 'no label', 'amenity': 'no label', 'tourism': 'no label', 'building:levels': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'type': 'no label', 'toilets:wheelchair': 'no label', 'ruins': 'no label', 'roof:shape': 'no label', 'roof:material': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'name:ru': 'no label', 'name:fr': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name': 'no label', 'historic:civilization': 'no label', 'historic': 'no label', 'height': 'no label', 'email': 'no label', 'contact:facebook': 'no label', 'building:material': 'no label', 'alt_name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'access': 'no label', });
lyr_cnotstrade_2_16.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'level': 'no label', 'operator': 'no label', 'network:wikidata': 'no label', 'horse': 'no label', 'golf': 'no label', 'crossing:markings': 'no label', 'crossing': 'no label', 'arcade:right': 'no label', 'departures_board': 'no label', 'bin': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'placement': 'no label', 'maxspeed:type': 'no label', 'turn:lanes:backward': 'no label', 'maxheight': 'no label', 'crossing_ref': 'no label', 'maxweight:signed': 'no label', 'covered': 'no label', 'parking:left:orientation': 'no label', 'parking:left': 'no label', 'tactile_paving': 'no label', 'footway': 'no label', 'step_count': 'no label', 'cycleway:left': 'no label', 'ref': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'informal': 'no label', 'junction': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'motorcar': 'no label', 'tracktype': 'no label', 'hgv': 'no label', 'tunnel': 'no label', 'smoothness': 'no label', 'width': 'no label', 'source:maxspeed': 'no label', 'vehicle:lanes': 'no label', 'psv:lanes:forward': 'no label', 'lanes:backward': 'no label', 'access:lanes:forward': 'no label', 'shelter': 'no label', 'network': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'bench': 'no label', 'turn:lanes': 'no label', 'old_ref': 'no label', 'bridge': 'no label', 'segregated': 'no label', 'check_date:surface': 'no label', 'historic': 'no label', 'access': 'no label', 'cycleway:right': 'no label', 'parking:both:orientation': 'no label', 'parking:both': 'no label', 'layer': 'no label', 'cycleway': 'no label', 'parking:right:orientation': 'no label', 'parking:right': 'no label', 'sidewalk:both:surface': 'no label', 'loc_name': 'no label', 'area': 'no label', 'short_name': 'no label', 'maxspeed': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'alt_name': 'no label', 'sidewalk:both': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'motor_vehicle': 'no label', 'source:def': 'no label', 'service': 'no label', 'surface': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_highway_17.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'informal': 'no label', 'public_transport': 'no label', 'network': 'no label', 'bus': 'no label', 'maxweight:signed': 'no label', 'cycleway:right': 'no label', 'ref': 'no label', 'sidewalk:both': 'no label', 'junction': 'no label', 'destination:forward': 'no label', 'destination:backward': 'no label', 'tunnel': 'no label', 'access': 'no label', 'service': 'no label', 'destination:symbol': 'no label', 'destination:colour': 'no label', 'destination': 'no label', 'turn:lanes': 'no label', 'segregated': 'no label', 'cutting': 'no label', 'sidewalk:right': 'no label', 'cycleway:both': 'no label', 'lane_markings': 'no label', 'oneway': 'no label', 'motor_vehicle': 'no label', 'layer': 'no label', 'horse': 'no label', 'foot': 'no label', 'bridge': 'no label', 'width': 'no label', 'surface': 'no label', 'source:maxspeed': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes': 'no label', 'bicycle': 'no label', });
lyr_highway_18.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'turn:lanes': 'no label', 'covered': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'network': 'no label', 'bus': 'no label', 'bin': 'no label', 'bench': 'no label', 'horse': 'no label', 'cycleway': 'no label', 'level': 'no label', 'toilets': 'no label', 'turn:lanes:forward': 'no label', 'wheelchair': 'no label', 'source:maxspeed': 'no label', 'shoulder': 'no label', 'embankment': 'no label', 'maxweight:signed': 'no label', 'turn:lanes:backward': 'no label', 'loc_name': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'cycleway:left': 'no label', 'width': 'no label', 'sidewalk:both': 'no label', 'lit': 'no label', 'tunnel': 'no label', 'junction': 'no label', 'tracktype': 'no label', 'access': 'no label', 'lane_markings': 'no label', 'sidewalk': 'no label', 'cycleway:both': 'no label', 'cycleway:right': 'no label', 'segregated': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'service': 'no label', 'layer': 'no label', 'bridge': 'no label', 'toll': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'name': 'no label', });
lyr_highway_19.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_building_20.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'power': 'no label', 'design': 'no label', 'amenity': 'no label', 'shop': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:housename': 'no label', 'entrance': 'no label', 'barrier': 'no label', });
lyr_building_21.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'takeaway': 'no label', 'drive_through': 'no label', 'brand:wikipedia': 'no label', 'ref:mise': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_100': 'no label', 'fuel:lpg': 'no label', 'fuel:diesel': 'no label', 'fuel:GTL_diesel': 'no label', 'wikipedia': 'no label', 'layer': 'no label', 'power': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'website': 'no label', 'branch': 'no label', 'wheelchair': 'no label', 'second_hand': 'no label', 'safety_inspection': 'no label', 'repair': 'no label', 'rental': 'no label', 'payment:visa_electron': 'no label', 'payment:visa_debit': 'no label', 'payment:visa': 'no label', 'payment:notes': 'no label', 'payment:mastercard': 'no label', 'payment:maestro': 'no label', 'payment:diners_club': 'no label', 'payment:contactless': 'no label', 'payment:coins': 'no label', 'payment:bancomat': 'no label', 'parts': 'no label', 'clothes': 'no label', 'addr:province': 'no label', 'man_made': 'no label', 'cuisine': 'no label', 'addr:postcode': 'no label', 'ruins': 'no label', 'wikidata': 'no label', 'religion': 'no label', 'amenity': 'no label', 'industrial': 'no label', 'tourism': 'no label', 'brand:wikidata': 'no label', 'height': 'no label', 'building:levels': 'no label', 'addr:city': 'no label', 'brand': 'no label', 'name': 'no label', 'shop': 'no label', 'operator': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', });
lyr_cnotEdifici_22.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'religion': 'no label', 'denomination': 'no label', 'amenity': 'no label', 'name': 'no label', });
lyr_Telecamere_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'tipo': 'no label', 'note': 'no label', });
lyr_Semafori_24.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing:island': 'no label', 'supervised': 'no label', 'traffic_signals:direction': 'no label', 'traffic_signals': 'no label', 'traffic_signals:vibration': 'no label', 'traffic_signals:sound': 'no label', 'tactile_paving': 'no label', 'crossing': 'no label', 'button_operated': 'no label', 'source:def': 'no label', 'name': 'no label', });
lyr_cnotTinyhouses_25.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Proprietario': 'no label', });
lyr_cnotparcheggiodroni_26.set('fieldLabels', {'fid': 'no label', });
lyr_cnoteurope_27.set('fieldLabels', {'fid': 'no label', 'featurecla': 'no label', 'scalerank': 'no label', 'labelrank': 'no label', 'sovereignt': 'no label', 'sov_a3': 'no label', 'adm0_dif': 'no label', 'level': 'no label', 'type': 'no label', 'tlc': 'no label', 'admin': 'no label', 'adm0_a3': 'no label', 'geou_dif': 'no label', 'geounit': 'no label', 'gu_a3': 'no label', 'su_dif': 'no label', 'subunit': 'no label', 'su_a3': 'no label', 'brk_diff': 'no label', 'name': 'no label', 'name_long': 'no label', 'brk_a3': 'no label', 'brk_name': 'no label', 'brk_group': 'no label', 'abbrev': 'no label', 'postal': 'no label', 'formal_en': 'no label', 'formal_fr': 'no label', 'name_ciawf': 'no label', 'note_adm0': 'no label', 'note_brk': 'no label', 'name_sort': 'no label', 'name_alt': 'no label', 'mapcolor7': 'no label', 'mapcolor8': 'no label', 'mapcolor9': 'no label', 'mapcolor13': 'no label', 'pop_est': 'no label', 'pop_rank': 'no label', 'pop_year': 'no label', 'gdp_md': 'no label', 'gdp_year': 'no label', 'economy': 'no label', 'income_grp': 'no label', 'fips_10': 'no label', 'iso_a2': 'no label', 'iso_a2_eh': 'no label', 'iso_a3': 'no label', 'iso_a3_eh': 'no label', 'iso_n3': 'no label', 'iso_n3_eh': 'no label', 'un_a3': 'no label', 'wb_a2': 'no label', 'wb_a3': 'no label', 'woe_id': 'no label', 'woe_id_eh': 'no label', 'woe_note': 'no label', 'adm0_iso': 'no label', 'adm0_diff': 'no label', 'adm0_tlc': 'no label', 'adm0_a3_us': 'no label', 'adm0_a3_fr': 'no label', 'adm0_a3_ru': 'no label', 'adm0_a3_es': 'no label', 'adm0_a3_cn': 'no label', 'adm0_a3_tw': 'no label', 'adm0_a3_in': 'no label', 'adm0_a3_np': 'no label', 'adm0_a3_pk': 'no label', 'adm0_a3_de': 'no label', 'adm0_a3_gb': 'no label', 'adm0_a3_br': 'no label', 'adm0_a3_il': 'no label', 'adm0_a3_ps': 'no label', 'adm0_a3_sa': 'no label', 'adm0_a3_eg': 'no label', 'adm0_a3_ma': 'no label', 'adm0_a3_pt': 'no label', 'adm0_a3_ar': 'no label', 'adm0_a3_jp': 'no label', 'adm0_a3_ko': 'no label', 'adm0_a3_vn': 'no label', 'adm0_a3_tr': 'no label', 'adm0_a3_id': 'no label', 'adm0_a3_pl': 'no label', 'adm0_a3_gr': 'no label', 'adm0_a3_it': 'no label', 'adm0_a3_nl': 'no label', 'adm0_a3_se': 'no label', 'adm0_a3_bd': 'no label', 'adm0_a3_ua': 'no label', 'adm0_a3_un': 'no label', 'adm0_a3_wb': 'no label', 'continent': 'no label', 'region_un': 'no label', 'subregion': 'no label', 'region_wb': 'no label', 'name_len': 'no label', 'long_len': 'no label', 'abbrev_len': 'no label', 'tiny': 'no label', 'homepart': 'no label', 'min_zoom': 'no label', 'min_label': 'no label', 'max_label': 'no label', 'label_x': 'no label', 'label_y': 'no label', 'ne_id': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fa': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_he': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'name_zht': 'no label', 'fclass_iso': 'no label', 'tlc_diff': 'no label', 'fclass_tlc': 'no label', 'fclass_us': 'no label', 'fclass_fr': 'no label', 'fclass_ru': 'no label', 'fclass_es': 'no label', 'fclass_cn': 'no label', 'fclass_tw': 'no label', 'fclass_in': 'no label', 'fclass_np': 'no label', 'fclass_pk': 'no label', 'fclass_de': 'no label', 'fclass_gb': 'no label', 'fclass_br': 'no label', 'fclass_il': 'no label', 'fclass_ps': 'no label', 'fclass_sa': 'no label', 'fclass_eg': 'no label', 'fclass_ma': 'no label', 'fclass_pt': 'no label', 'fclass_ar': 'no label', 'fclass_jp': 'no label', 'fclass_ko': 'no label', 'fclass_vn': 'no label', 'fclass_tr': 'no label', 'fclass_id': 'no label', 'fclass_pl': 'no label', 'fclass_gr': 'no label', 'fclass_it': 'no label', 'fclass_nl': 'no label', 'fclass_se': 'no label', 'fclass_bd': 'no label', 'fclass_ua': 'no label', 'filename': 'no label', });
lyr_cnoteurope_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});