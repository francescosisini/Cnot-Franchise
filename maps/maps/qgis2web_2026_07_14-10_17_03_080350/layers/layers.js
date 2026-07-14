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
var format_eu_membership_timeline_1 = new ol.format.GeoJSON();
var features_eu_membership_timeline_1 = format_eu_membership_timeline_1.readFeatures(json_eu_membership_timeline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eu_membership_timeline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eu_membership_timeline_1.addFeatures(features_eu_membership_timeline_1);
var lyr_eu_membership_timeline_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eu_membership_timeline_1, 
                style: style_eu_membership_timeline_1,
                popuplayertitle: 'eu_membership_timeline',
                interactive: true,
    title: 'eu_membership_timeline<br />\
    <img src="styles/legend/eu_membership_timeline_1_0.png" /> <br />\
    <img src="styles/legend/eu_membership_timeline_1_1.png" /> eu_membership_aut<br />\
    <img src="styles/legend/eu_membership_timeline_1_2.png" /> eu_membership_bel<br />\
    <img src="styles/legend/eu_membership_timeline_1_3.png" /> eu_membership_bgr<br />\
    <img src="styles/legend/eu_membership_timeline_1_4.png" /> eu_membership_cyp<br />\
    <img src="styles/legend/eu_membership_timeline_1_5.png" /> eu_membership_cze<br />\
    <img src="styles/legend/eu_membership_timeline_1_6.png" /> eu_membership_deu<br />\
    <img src="styles/legend/eu_membership_timeline_1_7.png" /> eu_membership_dnk<br />\
    <img src="styles/legend/eu_membership_timeline_1_8.png" /> eu_membership_esp<br />\
    <img src="styles/legend/eu_membership_timeline_1_9.png" /> eu_membership_est<br />\
    <img src="styles/legend/eu_membership_timeline_1_10.png" /> eu_membership_fin<br />\
    <img src="styles/legend/eu_membership_timeline_1_11.png" /> eu_membership_fra<br />\
    <img src="styles/legend/eu_membership_timeline_1_12.png" /> eu_membership_gbr<br />\
    <img src="styles/legend/eu_membership_timeline_1_13.png" /> eu_membership_grc<br />\
    <img src="styles/legend/eu_membership_timeline_1_14.png" /> eu_membership_hrv<br />\
    <img src="styles/legend/eu_membership_timeline_1_15.png" /> eu_membership_hun<br />\
    <img src="styles/legend/eu_membership_timeline_1_16.png" /> eu_membership_irl<br />\
    <img src="styles/legend/eu_membership_timeline_1_17.png" /> eu_membership_ita<br />\
    <img src="styles/legend/eu_membership_timeline_1_18.png" /> eu_membership_ltu<br />\
    <img src="styles/legend/eu_membership_timeline_1_19.png" /> eu_membership_lux<br />\
    <img src="styles/legend/eu_membership_timeline_1_20.png" /> eu_membership_lva<br />\
    <img src="styles/legend/eu_membership_timeline_1_21.png" /> eu_membership_mlt<br />\
    <img src="styles/legend/eu_membership_timeline_1_22.png" /> eu_membership_nld<br />\
    <img src="styles/legend/eu_membership_timeline_1_23.png" /> eu_membership_pol<br />\
    <img src="styles/legend/eu_membership_timeline_1_24.png" /> eu_membership_prt<br />\
    <img src="styles/legend/eu_membership_timeline_1_25.png" /> eu_membership_rou<br />\
    <img src="styles/legend/eu_membership_timeline_1_26.png" /> eu_membership_svk<br />\
    <img src="styles/legend/eu_membership_timeline_1_27.png" /> eu_membership_svn<br />\
    <img src="styles/legend/eu_membership_timeline_1_28.png" /> eu_membership_swe<br />' });
var format_european_integration_places_2 = new ol.format.GeoJSON();
var features_european_integration_places_2 = format_european_integration_places_2.readFeatures(json_european_integration_places_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_european_integration_places_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_european_integration_places_2.addFeatures(features_european_integration_places_2);
var lyr_european_integration_places_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_european_integration_places_2, 
                style: style_european_integration_places_2,
                popuplayertitle: 'european_integration_places',
                interactive: true,
                title: '<img src="styles/legend/european_integration_places_2.png" /> european_integration_places'
            });
var format_european_capitals_3 = new ol.format.GeoJSON();
var features_european_capitals_3 = format_european_capitals_3.readFeatures(json_european_capitals_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_european_capitals_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_european_capitals_3.addFeatures(features_european_capitals_3);
var lyr_european_capitals_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_european_capitals_3, 
                style: style_european_capitals_3,
                popuplayertitle: 'european_capitals',
                interactive: true,
                title: '<img src="styles/legend/european_capitals_3.png" /> european_capitals'
            });
var format_digital_infrastructureFRONTEX_digital_infrastructure_4 = new ol.format.GeoJSON();
var features_digital_infrastructureFRONTEX_digital_infrastructure_4 = format_digital_infrastructureFRONTEX_digital_infrastructure_4.readFeatures(json_digital_infrastructureFRONTEX_digital_infrastructure_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digital_infrastructureFRONTEX_digital_infrastructure_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digital_infrastructureFRONTEX_digital_infrastructure_4.addFeatures(features_digital_infrastructureFRONTEX_digital_infrastructure_4);
var lyr_digital_infrastructureFRONTEX_digital_infrastructure_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digital_infrastructureFRONTEX_digital_infrastructure_4, 
                style: style_digital_infrastructureFRONTEX_digital_infrastructure_4,
                popuplayertitle: 'digital_infrastructure — FRONTEX_digital_infrastructure',
                interactive: true,
                title: '<img src="styles/legend/digital_infrastructureFRONTEX_digital_infrastructure_4.png" /> digital_infrastructure — FRONTEX_digital_infrastructure'
            });
var format_relationsFRONTEX_relations_5 = new ol.format.GeoJSON();
var features_relationsFRONTEX_relations_5 = format_relationsFRONTEX_relations_5.readFeatures(json_relationsFRONTEX_relations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_relationsFRONTEX_relations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_relationsFRONTEX_relations_5.addFeatures(features_relationsFRONTEX_relations_5);
var lyr_relationsFRONTEX_relations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_relationsFRONTEX_relations_5, 
                style: style_relationsFRONTEX_relations_5,
                popuplayertitle: 'relations — FRONTEX_relations',
                interactive: true,
                title: '<img src="styles/legend/relationsFRONTEX_relations_5.png" /> relations — FRONTEX_relations'
            });
var format_sitesFRONTEX_sites_6 = new ol.format.GeoJSON();
var features_sitesFRONTEX_sites_6 = format_sitesFRONTEX_sites_6.readFeatures(json_sitesFRONTEX_sites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitesFRONTEX_sites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitesFRONTEX_sites_6.addFeatures(features_sitesFRONTEX_sites_6);
var lyr_sitesFRONTEX_sites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitesFRONTEX_sites_6, 
                style: style_sitesFRONTEX_sites_6,
                popuplayertitle: 'sites — FRONTEX_sites',
                interactive: true,
                title: '<img src="styles/legend/sitesFRONTEX_sites_6.png" /> sites — FRONTEX_sites'
            });
var format_digital_infrastructureEUROJUST_digital_infrastructure_7 = new ol.format.GeoJSON();
var features_digital_infrastructureEUROJUST_digital_infrastructure_7 = format_digital_infrastructureEUROJUST_digital_infrastructure_7.readFeatures(json_digital_infrastructureEUROJUST_digital_infrastructure_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digital_infrastructureEUROJUST_digital_infrastructure_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digital_infrastructureEUROJUST_digital_infrastructure_7.addFeatures(features_digital_infrastructureEUROJUST_digital_infrastructure_7);
var lyr_digital_infrastructureEUROJUST_digital_infrastructure_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digital_infrastructureEUROJUST_digital_infrastructure_7, 
                style: style_digital_infrastructureEUROJUST_digital_infrastructure_7,
                popuplayertitle: 'digital_infrastructure — EUROJUST_digital_infrastructure',
                interactive: true,
                title: '<img src="styles/legend/digital_infrastructureEUROJUST_digital_infrastructure_7.png" /> digital_infrastructure — EUROJUST_digital_infrastructure'
            });
var format_relationsEUROJUST_relations_8 = new ol.format.GeoJSON();
var features_relationsEUROJUST_relations_8 = format_relationsEUROJUST_relations_8.readFeatures(json_relationsEUROJUST_relations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_relationsEUROJUST_relations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_relationsEUROJUST_relations_8.addFeatures(features_relationsEUROJUST_relations_8);
var lyr_relationsEUROJUST_relations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_relationsEUROJUST_relations_8, 
                style: style_relationsEUROJUST_relations_8,
                popuplayertitle: 'relations — EUROJUST_relations',
                interactive: true,
                title: '<img src="styles/legend/relationsEUROJUST_relations_8.png" /> relations — EUROJUST_relations'
            });
var format_sitesEUROJUST_sites_9 = new ol.format.GeoJSON();
var features_sitesEUROJUST_sites_9 = format_sitesEUROJUST_sites_9.readFeatures(json_sitesEUROJUST_sites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitesEUROJUST_sites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitesEUROJUST_sites_9.addFeatures(features_sitesEUROJUST_sites_9);
var lyr_sitesEUROJUST_sites_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitesEUROJUST_sites_9, 
                style: style_sitesEUROJUST_sites_9,
                popuplayertitle: 'sites — EUROJUST_sites',
                interactive: true,
                title: '<img src="styles/legend/sitesEUROJUST_sites_9.png" /> sites — EUROJUST_sites'
            });
var format_digital_infrastructureeuLISA_digital_infrastructure_10 = new ol.format.GeoJSON();
var features_digital_infrastructureeuLISA_digital_infrastructure_10 = format_digital_infrastructureeuLISA_digital_infrastructure_10.readFeatures(json_digital_infrastructureeuLISA_digital_infrastructure_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digital_infrastructureeuLISA_digital_infrastructure_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digital_infrastructureeuLISA_digital_infrastructure_10.addFeatures(features_digital_infrastructureeuLISA_digital_infrastructure_10);
var lyr_digital_infrastructureeuLISA_digital_infrastructure_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digital_infrastructureeuLISA_digital_infrastructure_10, 
                style: style_digital_infrastructureeuLISA_digital_infrastructure_10,
                popuplayertitle: 'digital_infrastructure — eu-LISA_digital_infrastructure',
                interactive: true,
                title: '<img src="styles/legend/digital_infrastructureeuLISA_digital_infrastructure_10.png" /> digital_infrastructure — eu-LISA_digital_infrastructure'
            });
var format_relationseuLISA_relations_11 = new ol.format.GeoJSON();
var features_relationseuLISA_relations_11 = format_relationseuLISA_relations_11.readFeatures(json_relationseuLISA_relations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_relationseuLISA_relations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_relationseuLISA_relations_11.addFeatures(features_relationseuLISA_relations_11);
var lyr_relationseuLISA_relations_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_relationseuLISA_relations_11, 
                style: style_relationseuLISA_relations_11,
                popuplayertitle: 'relations — eu-LISA_relations',
                interactive: true,
                title: '<img src="styles/legend/relationseuLISA_relations_11.png" /> relations — eu-LISA_relations'
            });
var format_siteseuLISA_sites_12 = new ol.format.GeoJSON();
var features_siteseuLISA_sites_12 = format_siteseuLISA_sites_12.readFeatures(json_siteseuLISA_sites_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siteseuLISA_sites_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siteseuLISA_sites_12.addFeatures(features_siteseuLISA_sites_12);
var lyr_siteseuLISA_sites_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siteseuLISA_sites_12, 
                style: style_siteseuLISA_sites_12,
                popuplayertitle: 'sites — eu-LISA_sites',
                interactive: true,
                title: '<img src="styles/legend/siteseuLISA_sites_12.png" /> sites — eu-LISA_sites'
            });
var format_digital_infrastructureENISA_digital_infrastructure_13 = new ol.format.GeoJSON();
var features_digital_infrastructureENISA_digital_infrastructure_13 = format_digital_infrastructureENISA_digital_infrastructure_13.readFeatures(json_digital_infrastructureENISA_digital_infrastructure_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digital_infrastructureENISA_digital_infrastructure_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digital_infrastructureENISA_digital_infrastructure_13.addFeatures(features_digital_infrastructureENISA_digital_infrastructure_13);
var lyr_digital_infrastructureENISA_digital_infrastructure_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digital_infrastructureENISA_digital_infrastructure_13, 
                style: style_digital_infrastructureENISA_digital_infrastructure_13,
                popuplayertitle: 'digital_infrastructure — ENISA_digital_infrastructure',
                interactive: true,
                title: '<img src="styles/legend/digital_infrastructureENISA_digital_infrastructure_13.png" /> digital_infrastructure — ENISA_digital_infrastructure'
            });
var format_relationsENISA_relations_14 = new ol.format.GeoJSON();
var features_relationsENISA_relations_14 = format_relationsENISA_relations_14.readFeatures(json_relationsENISA_relations_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_relationsENISA_relations_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_relationsENISA_relations_14.addFeatures(features_relationsENISA_relations_14);
var lyr_relationsENISA_relations_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_relationsENISA_relations_14, 
                style: style_relationsENISA_relations_14,
                popuplayertitle: 'relations — ENISA_relations',
                interactive: true,
                title: '<img src="styles/legend/relationsENISA_relations_14.png" /> relations — ENISA_relations'
            });
var format_sitesENISA_sites_15 = new ol.format.GeoJSON();
var features_sitesENISA_sites_15 = format_sitesENISA_sites_15.readFeatures(json_sitesENISA_sites_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitesENISA_sites_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitesENISA_sites_15.addFeatures(features_sitesENISA_sites_15);
var lyr_sitesENISA_sites_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitesENISA_sites_15, 
                style: style_sitesENISA_sites_15,
                popuplayertitle: 'sites — ENISA_sites',
                interactive: true,
                title: '<img src="styles/legend/sitesENISA_sites_15.png" /> sites — ENISA_sites'
            });
var format_digital_infrastructureCommissione_Europea_digital_infrastructure_16 = new ol.format.GeoJSON();
var features_digital_infrastructureCommissione_Europea_digital_infrastructure_16 = format_digital_infrastructureCommissione_Europea_digital_infrastructure_16.readFeatures(json_digital_infrastructureCommissione_Europea_digital_infrastructure_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digital_infrastructureCommissione_Europea_digital_infrastructure_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digital_infrastructureCommissione_Europea_digital_infrastructure_16.addFeatures(features_digital_infrastructureCommissione_Europea_digital_infrastructure_16);
var lyr_digital_infrastructureCommissione_Europea_digital_infrastructure_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digital_infrastructureCommissione_Europea_digital_infrastructure_16, 
                style: style_digital_infrastructureCommissione_Europea_digital_infrastructure_16,
                popuplayertitle: 'digital_infrastructure — Commissione_Europea_digital_infrastructure',
                interactive: true,
                title: '<img src="styles/legend/digital_infrastructureCommissione_Europea_digital_infrastructure_16.png" /> digital_infrastructure — Commissione_Europea_digital_infrastructure'
            });
var format_relationsCommissione_Europea_relations_17 = new ol.format.GeoJSON();
var features_relationsCommissione_Europea_relations_17 = format_relationsCommissione_Europea_relations_17.readFeatures(json_relationsCommissione_Europea_relations_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_relationsCommissione_Europea_relations_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_relationsCommissione_Europea_relations_17.addFeatures(features_relationsCommissione_Europea_relations_17);
var lyr_relationsCommissione_Europea_relations_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_relationsCommissione_Europea_relations_17, 
                style: style_relationsCommissione_Europea_relations_17,
                popuplayertitle: 'relations — Commissione_Europea_relations',
                interactive: true,
                title: '<img src="styles/legend/relationsCommissione_Europea_relations_17.png" /> relations — Commissione_Europea_relations'
            });
var format_sitesCommissione_Europea_sites_18 = new ol.format.GeoJSON();
var features_sitesCommissione_Europea_sites_18 = format_sitesCommissione_Europea_sites_18.readFeatures(json_sitesCommissione_Europea_sites_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitesCommissione_Europea_sites_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitesCommissione_Europea_sites_18.addFeatures(features_sitesCommissione_Europea_sites_18);
var lyr_sitesCommissione_Europea_sites_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitesCommissione_Europea_sites_18, 
                style: style_sitesCommissione_Europea_sites_18,
                popuplayertitle: 'sites — Commissione_Europea_sites',
                interactive: true,
                title: '<img src="styles/legend/sitesCommissione_Europea_sites_18.png" /> sites — Commissione_Europea_sites'
            });
var format_digital_infrastructureBCE_digital_infrastructure_19 = new ol.format.GeoJSON();
var features_digital_infrastructureBCE_digital_infrastructure_19 = format_digital_infrastructureBCE_digital_infrastructure_19.readFeatures(json_digital_infrastructureBCE_digital_infrastructure_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digital_infrastructureBCE_digital_infrastructure_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digital_infrastructureBCE_digital_infrastructure_19.addFeatures(features_digital_infrastructureBCE_digital_infrastructure_19);
var lyr_digital_infrastructureBCE_digital_infrastructure_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digital_infrastructureBCE_digital_infrastructure_19, 
                style: style_digital_infrastructureBCE_digital_infrastructure_19,
                popuplayertitle: 'digital_infrastructure — BCE_digital_infrastructure',
                interactive: true,
                title: '<img src="styles/legend/digital_infrastructureBCE_digital_infrastructure_19.png" /> digital_infrastructure — BCE_digital_infrastructure'
            });
var format_relationsBCE_relations_20 = new ol.format.GeoJSON();
var features_relationsBCE_relations_20 = format_relationsBCE_relations_20.readFeatures(json_relationsBCE_relations_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_relationsBCE_relations_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_relationsBCE_relations_20.addFeatures(features_relationsBCE_relations_20);
var lyr_relationsBCE_relations_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_relationsBCE_relations_20, 
                style: style_relationsBCE_relations_20,
                popuplayertitle: 'relations — BCE_relations',
                interactive: true,
                title: '<img src="styles/legend/relationsBCE_relations_20.png" /> relations — BCE_relations'
            });
var format_sitesBCE_sites_21 = new ol.format.GeoJSON();
var features_sitesBCE_sites_21 = format_sitesBCE_sites_21.readFeatures(json_sitesBCE_sites_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitesBCE_sites_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitesBCE_sites_21.addFeatures(features_sitesBCE_sites_21);
var lyr_sitesBCE_sites_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitesBCE_sites_21, 
                style: style_sitesBCE_sites_21,
                popuplayertitle: 'sites — BCE_sites',
                interactive: true,
                title: '<img src="styles/legend/sitesBCE_sites_21.png" /> sites — BCE_sites'
            });
var format_digital_infrastructureEUROPOL_digital_infrastructure_22 = new ol.format.GeoJSON();
var features_digital_infrastructureEUROPOL_digital_infrastructure_22 = format_digital_infrastructureEUROPOL_digital_infrastructure_22.readFeatures(json_digital_infrastructureEUROPOL_digital_infrastructure_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digital_infrastructureEUROPOL_digital_infrastructure_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digital_infrastructureEUROPOL_digital_infrastructure_22.addFeatures(features_digital_infrastructureEUROPOL_digital_infrastructure_22);
var lyr_digital_infrastructureEUROPOL_digital_infrastructure_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digital_infrastructureEUROPOL_digital_infrastructure_22, 
                style: style_digital_infrastructureEUROPOL_digital_infrastructure_22,
                popuplayertitle: 'digital_infrastructure — EUROPOL_digital_infrastructure',
                interactive: true,
                title: '<img src="styles/legend/digital_infrastructureEUROPOL_digital_infrastructure_22.png" /> digital_infrastructure — EUROPOL_digital_infrastructure'
            });
var format_relationsEUROPOL_relations_23 = new ol.format.GeoJSON();
var features_relationsEUROPOL_relations_23 = format_relationsEUROPOL_relations_23.readFeatures(json_relationsEUROPOL_relations_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_relationsEUROPOL_relations_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_relationsEUROPOL_relations_23.addFeatures(features_relationsEUROPOL_relations_23);
var lyr_relationsEUROPOL_relations_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_relationsEUROPOL_relations_23, 
                style: style_relationsEUROPOL_relations_23,
                popuplayertitle: 'relations — EUROPOL_relations',
                interactive: true,
                title: '<img src="styles/legend/relationsEUROPOL_relations_23.png" /> relations — EUROPOL_relations'
            });
var format_sitesEUROPOL_sites_24 = new ol.format.GeoJSON();
var features_sitesEUROPOL_sites_24 = format_sitesEUROPOL_sites_24.readFeatures(json_sitesEUROPOL_sites_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sitesEUROPOL_sites_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sitesEUROPOL_sites_24.addFeatures(features_sitesEUROPOL_sites_24);
var lyr_sitesEUROPOL_sites_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sitesEUROPOL_sites_24, 
                style: style_sitesEUROPOL_sites_24,
                popuplayertitle: 'sites — EUROPOL_sites',
                interactive: true,
                title: '<img src="styles/legend/sitesEUROPOL_sites_24.png" /> sites — EUROPOL_sites'
            });
var format_FilieraAlimentarepuntodidistribuzione_25 = new ol.format.GeoJSON();
var features_FilieraAlimentarepuntodidistribuzione_25 = format_FilieraAlimentarepuntodidistribuzione_25.readFeatures(json_FilieraAlimentarepuntodidistribuzione_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FilieraAlimentarepuntodidistribuzione_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FilieraAlimentarepuntodidistribuzione_25.addFeatures(features_FilieraAlimentarepuntodidistribuzione_25);
var lyr_FilieraAlimentarepuntodidistribuzione_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FilieraAlimentarepuntodidistribuzione_25, 
                style: style_FilieraAlimentarepuntodidistribuzione_25,
                popuplayertitle: 'Filiera Alimentare: punto di distribuzione',
                interactive: true,
                title: '<img src="styles/legend/FilieraAlimentarepuntodidistribuzione_25.png" /> Filiera Alimentare: punto di distribuzione'
            });
var format_alice_prologostory_points_26 = new ol.format.GeoJSON();
var features_alice_prologostory_points_26 = format_alice_prologostory_points_26.readFeatures(json_alice_prologostory_points_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alice_prologostory_points_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alice_prologostory_points_26.addFeatures(features_alice_prologostory_points_26);
var lyr_alice_prologostory_points_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alice_prologostory_points_26, 
                style: style_alice_prologostory_points_26,
                popuplayertitle: 'alice_prologo — story_points',
                interactive: true,
                title: '<img src="styles/legend/alice_prologostory_points_26.png" /> alice_prologo — story_points'
            });
var format_casa_caterina_27 = new ol.format.GeoJSON();
var features_casa_caterina_27 = format_casa_caterina_27.readFeatures(json_casa_caterina_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_caterina_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_caterina_27.addFeatures(features_casa_caterina_27);
var lyr_casa_caterina_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casa_caterina_27, 
                style: style_casa_caterina_27,
                popuplayertitle: 'casa_caterina',
                interactive: true,
                title: '<img src="styles/legend/casa_caterina_27.png" /> casa_caterina'
            });
var format_casa_caterina_28 = new ol.format.GeoJSON();
var features_casa_caterina_28 = format_casa_caterina_28.readFeatures(json_casa_caterina_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_caterina_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_caterina_28.addFeatures(features_casa_caterina_28);
var lyr_casa_caterina_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_casa_caterina_28, 
                style: style_casa_caterina_28,
                popuplayertitle: 'casa_caterina',
                interactive: true,
                title: '<img src="styles/legend/casa_caterina_28.png" /> casa_caterina'
            });
var format_tiny_laura_29 = new ol.format.GeoJSON();
var features_tiny_laura_29 = format_tiny_laura_29.readFeatures(json_tiny_laura_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tiny_laura_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tiny_laura_29.addFeatures(features_tiny_laura_29);
var lyr_tiny_laura_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tiny_laura_29, 
                style: style_tiny_laura_29,
                popuplayertitle: 'tiny_laura',
                interactive: true,
                title: '<img src="styles/legend/tiny_laura_29.png" /> tiny_laura'
            });
var format_tiny_laura_30 = new ol.format.GeoJSON();
var features_tiny_laura_30 = format_tiny_laura_30.readFeatures(json_tiny_laura_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tiny_laura_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tiny_laura_30.addFeatures(features_tiny_laura_30);
var lyr_tiny_laura_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tiny_laura_30, 
                style: style_tiny_laura_30,
                popuplayertitle: 'tiny_laura',
                interactive: true,
                title: '<img src="styles/legend/tiny_laura_30.png" /> tiny_laura'
            });
var format_stanza_Aliceroom_Alice_31 = new ol.format.GeoJSON();
var features_stanza_Aliceroom_Alice_31 = format_stanza_Aliceroom_Alice_31.readFeatures(json_stanza_Aliceroom_Alice_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stanza_Aliceroom_Alice_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stanza_Aliceroom_Alice_31.addFeatures(features_stanza_Aliceroom_Alice_31);
var lyr_stanza_Aliceroom_Alice_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stanza_Aliceroom_Alice_31, 
                style: style_stanza_Aliceroom_Alice_31,
                popuplayertitle: 'stanza_Alice — room_Alice',
                interactive: true,
                title: '<img src="styles/legend/stanza_Aliceroom_Alice_31.png" /> stanza_Alice — room_Alice'
            });
var format_stanza_Aliceroom_Alice_32 = new ol.format.GeoJSON();
var features_stanza_Aliceroom_Alice_32 = format_stanza_Aliceroom_Alice_32.readFeatures(json_stanza_Aliceroom_Alice_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stanza_Aliceroom_Alice_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stanza_Aliceroom_Alice_32.addFeatures(features_stanza_Aliceroom_Alice_32);
var lyr_stanza_Aliceroom_Alice_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stanza_Aliceroom_Alice_32, 
                style: style_stanza_Aliceroom_Alice_32,
                popuplayertitle: 'stanza_Alice — room_Alice',
                interactive: true,
                title: '<img src="styles/legend/stanza_Aliceroom_Alice_32.png" /> stanza_Alice — room_Alice'
            });
var format_legacy_infrastructure_2050_33 = new ol.format.GeoJSON();
var features_legacy_infrastructure_2050_33 = format_legacy_infrastructure_2050_33.readFeatures(json_legacy_infrastructure_2050_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_legacy_infrastructure_2050_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_legacy_infrastructure_2050_33.addFeatures(features_legacy_infrastructure_2050_33);
var lyr_legacy_infrastructure_2050_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_legacy_infrastructure_2050_33, 
                style: style_legacy_infrastructure_2050_33,
                popuplayertitle: 'legacy_infrastructure_2050',
                interactive: true,
                title: '<img src="styles/legend/legacy_infrastructure_2050_33.png" /> legacy_infrastructure_2050'
            });
var format_cnot17_events_34 = new ol.format.GeoJSON();
var features_cnot17_events_34 = format_cnot17_events_34.readFeatures(json_cnot17_events_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnot17_events_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnot17_events_34.addFeatures(features_cnot17_events_34);
var lyr_cnot17_events_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnot17_events_34, 
                style: style_cnot17_events_34,
                popuplayertitle: 'cnot17_events',
                interactive: true,
                title: '<img src="styles/legend/cnot17_events_34.png" /> cnot17_events'
            });
var format_visa_data_flows_35 = new ol.format.GeoJSON();
var features_visa_data_flows_35 = format_visa_data_flows_35.readFeatures(json_visa_data_flows_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_visa_data_flows_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_visa_data_flows_35.addFeatures(features_visa_data_flows_35);
var lyr_visa_data_flows_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_visa_data_flows_35, 
                style: style_visa_data_flows_35,
                popuplayertitle: 'visa_data_flows',
                interactive: true,
                title: '<img src="styles/legend/visa_data_flows_35.png" /> visa_data_flows'
            });
var format_convitto_base_localConvittoCardinalMoraesempiobase_36 = new ol.format.GeoJSON();
var features_convitto_base_localConvittoCardinalMoraesempiobase_36 = format_convitto_base_localConvittoCardinalMoraesempiobase_36.readFeatures(json_convitto_base_localConvittoCardinalMoraesempiobase_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_36.addFeatures(features_convitto_base_localConvittoCardinalMoraesempiobase_36);
var lyr_convitto_base_localConvittoCardinalMoraesempiobase_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_36, 
                style: style_convitto_base_localConvittoCardinalMoraesempiobase_36,
                popuplayertitle: 'convitto_base_local — Convitto Cardinal Mora - esempio base',
                interactive: true,
                title: '<img src="styles/legend/convitto_base_localConvittoCardinalMoraesempiobase_36.png" /> convitto_base_local — Convitto Cardinal Mora - esempio base'
            });
var format_convitto_base_localConvittoCardinalMoraesempiobase_37 = new ol.format.GeoJSON();
var features_convitto_base_localConvittoCardinalMoraesempiobase_37 = format_convitto_base_localConvittoCardinalMoraesempiobase_37.readFeatures(json_convitto_base_localConvittoCardinalMoraesempiobase_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_37.addFeatures(features_convitto_base_localConvittoCardinalMoraesempiobase_37);
var lyr_convitto_base_localConvittoCardinalMoraesempiobase_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convitto_base_localConvittoCardinalMoraesempiobase_37, 
                style: style_convitto_base_localConvittoCardinalMoraesempiobase_37,
                popuplayertitle: 'convitto_base_local — Convitto Cardinal Mora - esempio base',
                interactive: true,
                title: '<img src="styles/legend/convitto_base_localConvittoCardinalMoraesempiobase_37.png" /> convitto_base_local — Convitto Cardinal Mora - esempio base'
            });
var format_cnotstrade_1_38 = new ol.format.GeoJSON();
var features_cnotstrade_1_38 = format_cnotstrade_1_38.readFeatures(json_cnotstrade_1_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotstrade_1_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotstrade_1_38.addFeatures(features_cnotstrade_1_38);
var lyr_cnotstrade_1_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotstrade_1_38, 
                style: style_cnotstrade_1_38,
                popuplayertitle: 'cnot — strade_1',
                interactive: true,
                title: '<img src="styles/legend/cnotstrade_1_38.png" /> cnot — strade_1'
            });
var format_cnotbuilding_39 = new ol.format.GeoJSON();
var features_cnotbuilding_39 = format_cnotbuilding_39.readFeatures(json_cnotbuilding_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotbuilding_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotbuilding_39.addFeatures(features_cnotbuilding_39);
var lyr_cnotbuilding_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotbuilding_39, 
                style: style_cnotbuilding_39,
                popuplayertitle: 'cnot — building',
                interactive: true,
                title: '<img src="styles/legend/cnotbuilding_39.png" /> cnot — building'
            });
var format_cnotstrade_2_40 = new ol.format.GeoJSON();
var features_cnotstrade_2_40 = format_cnotstrade_2_40.readFeatures(json_cnotstrade_2_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotstrade_2_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotstrade_2_40.addFeatures(features_cnotstrade_2_40);
var lyr_cnotstrade_2_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotstrade_2_40, 
                style: style_cnotstrade_2_40,
                popuplayertitle: 'cnot — strade_2',
                interactive: true,
                title: '<img src="styles/legend/cnotstrade_2_40.png" /> cnot — strade_2'
            });
var format_highway_41 = new ol.format.GeoJSON();
var features_highway_41 = format_highway_41.readFeatures(json_highway_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_41.addFeatures(features_highway_41);
var lyr_highway_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_41, 
                style: style_highway_41,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_41.png" /> highway'
            });
var format_highway_42 = new ol.format.GeoJSON();
var features_highway_42 = format_highway_42.readFeatures(json_highway_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_42.addFeatures(features_highway_42);
var lyr_highway_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_42, 
                style: style_highway_42,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_42.png" /> highway'
            });
var format_highway_43 = new ol.format.GeoJSON();
var features_highway_43 = format_highway_43.readFeatures(json_highway_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_43.addFeatures(features_highway_43);
var lyr_highway_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_43, 
                style: style_highway_43,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_43.png" /> highway'
            });
var format_building_44 = new ol.format.GeoJSON();
var features_building_44 = format_building_44.readFeatures(json_building_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_44.addFeatures(features_building_44);
var lyr_building_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_44, 
                style: style_building_44,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_44.png" /> building'
            });
var format_building_45 = new ol.format.GeoJSON();
var features_building_45 = format_building_45.readFeatures(json_building_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_45.addFeatures(features_building_45);
var lyr_building_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_45, 
                style: style_building_45,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_45.png" /> building'
            });
var format_cnotEdifici_46 = new ol.format.GeoJSON();
var features_cnotEdifici_46 = format_cnotEdifici_46.readFeatures(json_cnotEdifici_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotEdifici_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotEdifici_46.addFeatures(features_cnotEdifici_46);
var lyr_cnotEdifici_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotEdifici_46, 
                style: style_cnotEdifici_46,
                popuplayertitle: 'cnot — Edifici',
                interactive: true,
                title: '<img src="styles/legend/cnotEdifici_46.png" /> cnot — Edifici'
            });
var format_Telecamere_47 = new ol.format.GeoJSON();
var features_Telecamere_47 = format_Telecamere_47.readFeatures(json_Telecamere_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Telecamere_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Telecamere_47.addFeatures(features_Telecamere_47);
var lyr_Telecamere_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Telecamere_47, 
                style: style_Telecamere_47,
                popuplayertitle: 'Telecamere',
                interactive: true,
                title: '<img src="styles/legend/Telecamere_47.png" /> Telecamere'
            });
var format_Semafori_48 = new ol.format.GeoJSON();
var features_Semafori_48 = format_Semafori_48.readFeatures(json_Semafori_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semafori_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Semafori_48.addFeatures(features_Semafori_48);
var lyr_Semafori_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Semafori_48, 
                style: style_Semafori_48,
                popuplayertitle: 'Semafori',
                interactive: true,
                title: '<img src="styles/legend/Semafori_48.png" /> Semafori'
            });
var format_cnotTinyhouses_49 = new ol.format.GeoJSON();
var features_cnotTinyhouses_49 = format_cnotTinyhouses_49.readFeatures(json_cnotTinyhouses_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotTinyhouses_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotTinyhouses_49.addFeatures(features_cnotTinyhouses_49);
var lyr_cnotTinyhouses_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotTinyhouses_49, 
                style: style_cnotTinyhouses_49,
                popuplayertitle: 'cnot — Tiny houses',
                interactive: true,
                title: '<img src="styles/legend/cnotTinyhouses_49.png" /> cnot — Tiny houses'
            });
var format_cnotparcheggiodroni_50 = new ol.format.GeoJSON();
var features_cnotparcheggiodroni_50 = format_cnotparcheggiodroni_50.readFeatures(json_cnotparcheggiodroni_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnotparcheggiodroni_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnotparcheggiodroni_50.addFeatures(features_cnotparcheggiodroni_50);
var lyr_cnotparcheggiodroni_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnotparcheggiodroni_50, 
                style: style_cnotparcheggiodroni_50,
                popuplayertitle: 'cnot — parcheggio droni',
                interactive: true,
                title: '<img src="styles/legend/cnotparcheggiodroni_50.png" /> cnot — parcheggio droni'
            });
var format_nuclear_reactors_europe_all_51 = new ol.format.GeoJSON();
var features_nuclear_reactors_europe_all_51 = format_nuclear_reactors_europe_all_51.readFeatures(json_nuclear_reactors_europe_all_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nuclear_reactors_europe_all_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nuclear_reactors_europe_all_51.addFeatures(features_nuclear_reactors_europe_all_51);
var lyr_nuclear_reactors_europe_all_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nuclear_reactors_europe_all_51, 
                style: style_nuclear_reactors_europe_all_51,
                popuplayertitle: 'nuclear_reactors_europe_all',
                interactive: true,
                title: '<img src="styles/legend/nuclear_reactors_europe_all_51.png" /> nuclear_reactors_europe_all'
            });
var format_energy_opsd_all_except_nuclear_52 = new ol.format.GeoJSON();
var features_energy_opsd_all_except_nuclear_52 = format_energy_opsd_all_except_nuclear_52.readFeatures(json_energy_opsd_all_except_nuclear_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_energy_opsd_all_except_nuclear_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_energy_opsd_all_except_nuclear_52.addFeatures(features_energy_opsd_all_except_nuclear_52);
var lyr_energy_opsd_all_except_nuclear_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_energy_opsd_all_except_nuclear_52, 
                style: style_energy_opsd_all_except_nuclear_52,
                popuplayertitle: 'energy_opsd_all_except_nuclear',
                interactive: true,
    title: 'energy_opsd_all_except_nuclear<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_0.png" /> Coal<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_1.png" /> Hydro<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_2.png" /> Lignite<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_3.png" /> Natural gas<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_4.png" /> Oil<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_5.png" /> Other<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_6.png" /> Waste<br />\
    <img src="styles/legend/energy_opsd_all_except_nuclear_52_7.png" /> <br />' });
var format_ai_compute_relations_53 = new ol.format.GeoJSON();
var features_ai_compute_relations_53 = format_ai_compute_relations_53.readFeatures(json_ai_compute_relations_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_compute_relations_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_compute_relations_53.addFeatures(features_ai_compute_relations_53);
var lyr_ai_compute_relations_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_compute_relations_53, 
                style: style_ai_compute_relations_53,
                popuplayertitle: 'ai_compute_relations',
                interactive: true,
                title: '<img src="styles/legend/ai_compute_relations_53.png" /> ai_compute_relations'
            });
var format_ai_supercomputers_54 = new ol.format.GeoJSON();
var features_ai_supercomputers_54 = format_ai_supercomputers_54.readFeatures(json_ai_supercomputers_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_supercomputers_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_supercomputers_54.addFeatures(features_ai_supercomputers_54);
var lyr_ai_supercomputers_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_supercomputers_54, 
                style: style_ai_supercomputers_54,
                popuplayertitle: 'ai_supercomputers',
                interactive: true,
                title: '<img src="styles/legend/ai_supercomputers_54.png" /> ai_supercomputers'
            });
var format_ai_relations_55 = new ol.format.GeoJSON();
var features_ai_relations_55 = format_ai_relations_55.readFeatures(json_ai_relations_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_relations_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_relations_55.addFeatures(features_ai_relations_55);
var lyr_ai_relations_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_relations_55, 
                style: style_ai_relations_55,
                popuplayertitle: 'ai_relations',
                interactive: true,
                title: '<img src="styles/legend/ai_relations_55.png" /> ai_relations'
            });
var format_ai_factories_56 = new ol.format.GeoJSON();
var features_ai_factories_56 = format_ai_factories_56.readFeatures(json_ai_factories_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_factories_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_factories_56.addFeatures(features_ai_factories_56);
var lyr_ai_factories_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_factories_56, 
                style: style_ai_factories_56,
                popuplayertitle: 'ai_factories',
                interactive: true,
                title: '<img src="styles/legend/ai_factories_56.png" /> ai_factories'
            });
var format_ai_actors_57 = new ol.format.GeoJSON();
var features_ai_actors_57 = format_ai_actors_57.readFeatures(json_ai_actors_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ai_actors_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ai_actors_57.addFeatures(features_ai_actors_57);
var lyr_ai_actors_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ai_actors_57, 
                style: style_ai_actors_57,
                popuplayertitle: 'ai_actors',
                interactive: true,
    title: 'ai_actors<br />\
    <img src="styles/legend/ai_actors_57_0.png" /> <br />\
    <img src="styles/legend/ai_actors_57_1.png" /> ai_hpc_integration<br />\
    <img src="styles/legend/ai_actors_57_2.png" /> ai_policy_regulation<br />\
    <img src="styles/legend/ai_actors_57_3.png" /> hpc_ai_infrastructure<br />' });
var format_qt_relations_58 = new ol.format.GeoJSON();
var features_qt_relations_58 = format_qt_relations_58.readFeatures(json_qt_relations_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qt_relations_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qt_relations_58.addFeatures(features_qt_relations_58);
var lyr_qt_relations_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qt_relations_58, 
                style: style_qt_relations_58,
                popuplayertitle: 'qt_relations',
                interactive: true,
    title: 'qt_relations<br />\
    <img src="styles/legend/qt_relations_58_0.png" /> component_supplier_for<br />\
    <img src="styles/legend/qt_relations_58_1.png" /> hosts<br />\
    <img src="styles/legend/qt_relations_58_2.png" /> hosts_or_operates<br />\
    <img src="styles/legend/qt_relations_58_3.png" /> supplier_of<br />\
    <img src="styles/legend/qt_relations_58_4.png" /> <br />' });
var format_qt_infrastructures_59 = new ol.format.GeoJSON();
var features_qt_infrastructures_59 = format_qt_infrastructures_59.readFeatures(json_qt_infrastructures_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qt_infrastructures_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qt_infrastructures_59.addFeatures(features_qt_infrastructures_59);
var lyr_qt_infrastructures_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qt_infrastructures_59, 
                style: style_qt_infrastructures_59,
                popuplayertitle: 'qt_infrastructures',
                interactive: true,
    title: 'qt_infrastructures<br />\
    <img src="styles/legend/qt_infrastructures_59_0.png" /> 12 - 21,6<br />\
    <img src="styles/legend/qt_infrastructures_59_1.png" /> 21,6 - 24,8<br />\
    <img src="styles/legend/qt_infrastructures_59_2.png" /> 24,8 - 63,2<br />\
    <img src="styles/legend/qt_infrastructures_59_3.png" /> 63,2 - 100<br />\
    <img src="styles/legend/qt_infrastructures_59_4.png" /> 100 - 140<br />' });
var format_qt_actors_60 = new ol.format.GeoJSON();
var features_qt_actors_60 = format_qt_actors_60.readFeatures(json_qt_actors_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qt_actors_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qt_actors_60.addFeatures(features_qt_actors_60);
var lyr_qt_actors_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qt_actors_60, 
                style: style_qt_actors_60,
                popuplayertitle: 'qt_actors',
                interactive: true,
    title: 'qt_actors<br />\
    <img src="styles/legend/qt_actors_60_0.png" /> company<br />\
    <img src="styles/legend/qt_actors_60_1.png" /> european_public_institution<br />\
    <img src="styles/legend/qt_actors_60_2.png" /> european_research_initiative<br />\
    <img src="styles/legend/qt_actors_60_3.png" /> hpc_research_center<br />\
    <img src="styles/legend/qt_actors_60_4.png" /> national_consortium<br />\
    <img src="styles/legend/qt_actors_60_5.png" /> <br />' });
var format_datacenter_61 = new ol.format.GeoJSON();
var features_datacenter_61 = format_datacenter_61.readFeatures(json_datacenter_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datacenter_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_datacenter_61.addFeatures(features_datacenter_61);
var lyr_datacenter_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_datacenter_61, 
                style: style_datacenter_61,
                popuplayertitle: 'datacenter',
                interactive: true,
                title: '<img src="styles/legend/datacenter_61.png" /> datacenter'
            });
var format_fpga_infrastructures_europe_62 = new ol.format.GeoJSON();
var features_fpga_infrastructures_europe_62 = format_fpga_infrastructures_europe_62.readFeatures(json_fpga_infrastructures_europe_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fpga_infrastructures_europe_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fpga_infrastructures_europe_62.addFeatures(features_fpga_infrastructures_europe_62);
var lyr_fpga_infrastructures_europe_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fpga_infrastructures_europe_62, 
                style: style_fpga_infrastructures_europe_62,
                popuplayertitle: 'fpga_infrastructures_europe',
                interactive: true,
                title: '<img src="styles/legend/fpga_infrastructures_europe_62.png" /> fpga_infrastructures_europe'
            });
var format_cnoteurope_63 = new ol.format.GeoJSON();
var features_cnoteurope_63 = format_cnoteurope_63.readFeatures(json_cnoteurope_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cnoteurope_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cnoteurope_63.addFeatures(features_cnoteurope_63);
var lyr_cnoteurope_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cnoteurope_63, 
                style: style_cnoteurope_63,
                popuplayertitle: 'cnot — europe',
                interactive: true,
                title: '<img src="styles/legend/cnoteurope_63.png" /> cnot — europe'
            });
var group_01_DATI_INFRASTRUTTURA_DIGITALE = new ol.layer.Group({
                                layers: [lyr_datacenter_61,lyr_fpga_infrastructures_europe_62,],
                                fold: 'open',
                                title: '01_DATI_INFRASTRUTTURA_DIGITALE'});
var group_quantum = new ol.layer.Group({
                                layers: [lyr_qt_relations_58,lyr_qt_infrastructures_59,lyr_qt_actors_60,],
                                fold: 'open',
                                title: 'quantum'});
var group_AI = new ol.layer.Group({
                                layers: [lyr_ai_relations_55,lyr_ai_factories_56,lyr_ai_actors_57,],
                                fold: 'open',
                                title: 'AI'});
var group_Supercomputer = new ol.layer.Group({
                                layers: [lyr_ai_compute_relations_53,lyr_ai_supercomputers_54,],
                                fold: 'open',
                                title: 'Supercomputer'});
var group_02_ENERGIA = new ol.layer.Group({
                                layers: [lyr_nuclear_reactors_europe_all_51,lyr_energy_opsd_all_except_nuclear_52,],
                                fold: 'close',
                                title: '02_ENERGIA'});
var group_05_SALUTE_MEDICINA = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '05_SALUTE_MEDICINA'});
var group_Admin_region = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Admin_region'});
var group_tinyhouses = new ol.layer.Group({
                                layers: [lyr_cnotTinyhouses_49,lyr_cnotparcheggiodroni_50,],
                                fold: 'close',
                                title: 'tiny houses'});
var group_Sorveglianza = new ol.layer.Group({
                                layers: [lyr_Telecamere_47,lyr_Semafori_48,],
                                fold: 'close',
                                title: 'Sorveglianza'});
var group_Zonadimenticata = new ol.layer.Group({
                                layers: [lyr_cnotEdifici_46,],
                                fold: 'close',
                                title: 'Zona dimenticata'});
var group_Topografia = new ol.layer.Group({
                                layers: [lyr_cnotstrade_1_38,lyr_cnotbuilding_39,lyr_cnotstrade_2_40,lyr_highway_41,lyr_highway_42,lyr_highway_43,lyr_building_44,lyr_building_45,],
                                fold: 'close',
                                title: 'Topografia'});
var group_Strutture_dismesse = new ol.layer.Group({
                                layers: [lyr_convitto_base_localConvittoCardinalMoraesempiobase_36,lyr_convitto_base_localConvittoCardinalMoraesempiobase_37,],
                                fold: 'close',
                                title: 'Strutture_dismesse'});
var group_TimelineCNOT17 = new ol.layer.Group({
                                layers: [lyr_legacy_infrastructure_2050_33,lyr_cnot17_events_34,lyr_visa_data_flows_35,],
                                fold: 'close',
                                title: 'Timeline CNOT 1.7'});
var group_casepersonaggi = new ol.layer.Group({
                                layers: [lyr_casa_caterina_27,lyr_casa_caterina_28,lyr_tiny_laura_29,lyr_tiny_laura_30,lyr_stanza_Aliceroom_Alice_31,lyr_stanza_Aliceroom_Alice_32,],
                                fold: 'close',
                                title: 'case personaggi'});
var group_stories = new ol.layer.Group({
                                layers: [lyr_alice_prologostory_points_26,],
                                fold: 'close',
                                title: 'stories'});
var group_distribuzionecibo = new ol.layer.Group({
                                layers: [lyr_FilieraAlimentarepuntodidistribuzione_25,],
                                fold: 'open',
                                title: 'distribuzione cibo'});
var group_EUROPOL = new ol.layer.Group({
                                layers: [lyr_digital_infrastructureEUROPOL_digital_infrastructure_22,lyr_relationsEUROPOL_relations_23,lyr_sitesEUROPOL_sites_24,],
                                fold: 'open',
                                title: 'EUROPOL'});
var group_BCE = new ol.layer.Group({
                                layers: [lyr_digital_infrastructureBCE_digital_infrastructure_19,lyr_relationsBCE_relations_20,lyr_sitesBCE_sites_21,],
                                fold: 'open',
                                title: 'BCE'});
var group_Commissione_Europea = new ol.layer.Group({
                                layers: [lyr_digital_infrastructureCommissione_Europea_digital_infrastructure_16,lyr_relationsCommissione_Europea_relations_17,lyr_sitesCommissione_Europea_sites_18,],
                                fold: 'open',
                                title: 'Commissione_Europea'});
var group_ENISA = new ol.layer.Group({
                                layers: [lyr_digital_infrastructureENISA_digital_infrastructure_13,lyr_relationsENISA_relations_14,lyr_sitesENISA_sites_15,],
                                fold: 'open',
                                title: 'ENISA'});
var group_euLISA = new ol.layer.Group({
                                layers: [lyr_digital_infrastructureeuLISA_digital_infrastructure_10,lyr_relationseuLISA_relations_11,lyr_siteseuLISA_sites_12,],
                                fold: 'open',
                                title: 'eu-LISA'});
var group_EUROJUST = new ol.layer.Group({
                                layers: [lyr_digital_infrastructureEUROJUST_digital_infrastructure_7,lyr_relationsEUROJUST_relations_8,lyr_sitesEUROJUST_sites_9,],
                                fold: 'open',
                                title: 'EUROJUST'});
var group_FRONTEX = new ol.layer.Group({
                                layers: [lyr_digital_infrastructureFRONTEX_digital_infrastructure_4,lyr_relationsFRONTEX_relations_5,lyr_sitesFRONTEX_sites_6,],
                                fold: 'open',
                                title: 'FRONTEX'});
var group_Capitalieuropee = new ol.layer.Group({
                                layers: [lyr_european_capitals_3,],
                                fold: 'open',
                                title: 'Capitali europee'});
var group_PAESI = new ol.layer.Group({
                                layers: [lyr_ne_10m_admin_0_countries_0,lyr_eu_membership_timeline_1,lyr_european_integration_places_2,],
                                fold: 'close',
                                title: 'PAESI'});

lyr_ne_10m_admin_0_countries_0.setVisible(true);lyr_eu_membership_timeline_1.setVisible(true);lyr_european_integration_places_2.setVisible(true);lyr_european_capitals_3.setVisible(true);lyr_digital_infrastructureFRONTEX_digital_infrastructure_4.setVisible(true);lyr_relationsFRONTEX_relations_5.setVisible(true);lyr_sitesFRONTEX_sites_6.setVisible(true);lyr_digital_infrastructureEUROJUST_digital_infrastructure_7.setVisible(true);lyr_relationsEUROJUST_relations_8.setVisible(true);lyr_sitesEUROJUST_sites_9.setVisible(true);lyr_digital_infrastructureeuLISA_digital_infrastructure_10.setVisible(true);lyr_relationseuLISA_relations_11.setVisible(true);lyr_siteseuLISA_sites_12.setVisible(true);lyr_digital_infrastructureENISA_digital_infrastructure_13.setVisible(true);lyr_relationsENISA_relations_14.setVisible(true);lyr_sitesENISA_sites_15.setVisible(true);lyr_digital_infrastructureCommissione_Europea_digital_infrastructure_16.setVisible(true);lyr_relationsCommissione_Europea_relations_17.setVisible(true);lyr_sitesCommissione_Europea_sites_18.setVisible(true);lyr_digital_infrastructureBCE_digital_infrastructure_19.setVisible(true);lyr_relationsBCE_relations_20.setVisible(true);lyr_sitesBCE_sites_21.setVisible(true);lyr_digital_infrastructureEUROPOL_digital_infrastructure_22.setVisible(true);lyr_relationsEUROPOL_relations_23.setVisible(true);lyr_sitesEUROPOL_sites_24.setVisible(true);lyr_FilieraAlimentarepuntodidistribuzione_25.setVisible(true);lyr_alice_prologostory_points_26.setVisible(true);lyr_casa_caterina_27.setVisible(true);lyr_casa_caterina_28.setVisible(true);lyr_tiny_laura_29.setVisible(true);lyr_tiny_laura_30.setVisible(true);lyr_stanza_Aliceroom_Alice_31.setVisible(true);lyr_stanza_Aliceroom_Alice_32.setVisible(true);lyr_legacy_infrastructure_2050_33.setVisible(true);lyr_cnot17_events_34.setVisible(true);lyr_visa_data_flows_35.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_36.setVisible(true);lyr_convitto_base_localConvittoCardinalMoraesempiobase_37.setVisible(true);lyr_cnotstrade_1_38.setVisible(true);lyr_cnotbuilding_39.setVisible(true);lyr_cnotstrade_2_40.setVisible(true);lyr_highway_41.setVisible(true);lyr_highway_42.setVisible(true);lyr_highway_43.setVisible(true);lyr_building_44.setVisible(true);lyr_building_45.setVisible(true);lyr_cnotEdifici_46.setVisible(true);lyr_Telecamere_47.setVisible(true);lyr_Semafori_48.setVisible(true);lyr_cnotTinyhouses_49.setVisible(true);lyr_cnotparcheggiodroni_50.setVisible(true);lyr_nuclear_reactors_europe_all_51.setVisible(true);lyr_energy_opsd_all_except_nuclear_52.setVisible(true);lyr_ai_compute_relations_53.setVisible(true);lyr_ai_supercomputers_54.setVisible(true);lyr_ai_relations_55.setVisible(true);lyr_ai_factories_56.setVisible(true);lyr_ai_actors_57.setVisible(true);lyr_qt_relations_58.setVisible(true);lyr_qt_infrastructures_59.setVisible(true);lyr_qt_actors_60.setVisible(true);lyr_datacenter_61.setVisible(true);lyr_fpga_infrastructures_europe_62.setVisible(true);lyr_cnoteurope_63.setVisible(true);
var layersList = [group_PAESI,group_Capitalieuropee,group_FRONTEX,group_EUROJUST,group_euLISA,group_ENISA,group_Commissione_Europea,group_BCE,group_EUROPOL,group_distribuzionecibo,group_stories,group_casepersonaggi,group_TimelineCNOT17,group_Strutture_dismesse,group_Topografia,group_Zonadimenticata,group_Sorveglianza,group_tinyhouses,group_02_ENERGIA,group_Supercomputer,group_AI,group_quantum,group_01_DATI_INFRASTRUTTURA_DIGITALE,lyr_cnoteurope_63];
lyr_ne_10m_admin_0_countries_0.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'LABELRANK': 'LABELRANK', 'SOVEREIGNT': 'SOVEREIGNT', 'SOV_A3': 'SOV_A3', 'ADM0_DIF': 'ADM0_DIF', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'TLC': 'TLC', 'ADMIN': 'ADMIN', 'ADM0_A3': 'ADM0_A3', 'GEOU_DIF': 'GEOU_DIF', 'GEOUNIT': 'GEOUNIT', 'GU_A3': 'GU_A3', 'SU_DIF': 'SU_DIF', 'SUBUNIT': 'SUBUNIT', 'SU_A3': 'SU_A3', 'BRK_DIFF': 'BRK_DIFF', 'NAME': 'NAME', 'NAME_LONG': 'NAME_LONG', 'BRK_A3': 'BRK_A3', 'BRK_NAME': 'BRK_NAME', 'BRK_GROUP': 'BRK_GROUP', 'ABBREV': 'ABBREV', 'POSTAL': 'POSTAL', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'NAME_CIAWF': 'NAME_CIAWF', 'NOTE_ADM0': 'NOTE_ADM0', 'NOTE_BRK': 'NOTE_BRK', 'NAME_SORT': 'NAME_SORT', 'NAME_ALT': 'NAME_ALT', 'MAPCOLOR7': 'MAPCOLOR7', 'MAPCOLOR8': 'MAPCOLOR8', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'POP_YEAR': 'POP_YEAR', 'GDP_MD': 'GDP_MD', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10': 'FIPS_10', 'ISO_A2': 'ISO_A2', 'ISO_A2_EH': 'ISO_A2_EH', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'ISO_N3_EH': 'ISO_N3_EH', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'WOE_ID': 'WOE_ID', 'WOE_ID_EH': 'WOE_ID_EH', 'WOE_NOTE': 'WOE_NOTE', 'ADM0_ISO': 'ADM0_ISO', 'ADM0_DIFF': 'ADM0_DIFF', 'ADM0_TLC': 'ADM0_TLC', 'ADM0_A3_US': 'ADM0_A3_US', 'ADM0_A3_FR': 'ADM0_A3_FR', 'ADM0_A3_RU': 'ADM0_A3_RU', 'ADM0_A3_ES': 'ADM0_A3_ES', 'ADM0_A3_CN': 'ADM0_A3_CN', 'ADM0_A3_TW': 'ADM0_A3_TW', 'ADM0_A3_IN': 'ADM0_A3_IN', 'ADM0_A3_NP': 'ADM0_A3_NP', 'ADM0_A3_PK': 'ADM0_A3_PK', 'ADM0_A3_DE': 'ADM0_A3_DE', 'ADM0_A3_GB': 'ADM0_A3_GB', 'ADM0_A3_BR': 'ADM0_A3_BR', 'ADM0_A3_IL': 'ADM0_A3_IL', 'ADM0_A3_PS': 'ADM0_A3_PS', 'ADM0_A3_SA': 'ADM0_A3_SA', 'ADM0_A3_EG': 'ADM0_A3_EG', 'ADM0_A3_MA': 'ADM0_A3_MA', 'ADM0_A3_PT': 'ADM0_A3_PT', 'ADM0_A3_AR': 'ADM0_A3_AR', 'ADM0_A3_JP': 'ADM0_A3_JP', 'ADM0_A3_KO': 'ADM0_A3_KO', 'ADM0_A3_VN': 'ADM0_A3_VN', 'ADM0_A3_TR': 'ADM0_A3_TR', 'ADM0_A3_ID': 'ADM0_A3_ID', 'ADM0_A3_PL': 'ADM0_A3_PL', 'ADM0_A3_GR': 'ADM0_A3_GR', 'ADM0_A3_IT': 'ADM0_A3_IT', 'ADM0_A3_NL': 'ADM0_A3_NL', 'ADM0_A3_SE': 'ADM0_A3_SE', 'ADM0_A3_BD': 'ADM0_A3_BD', 'ADM0_A3_UA': 'ADM0_A3_UA', 'ADM0_A3_UN': 'ADM0_A3_UN', 'ADM0_A3_WB': 'ADM0_A3_WB', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_LEN': 'NAME_LEN', 'LONG_LEN': 'LONG_LEN', 'ABBREV_LEN': 'ABBREV_LEN', 'TINY': 'TINY', 'HOMEPART': 'HOMEPART', 'MIN_ZOOM': 'MIN_ZOOM', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'LABEL_X': 'LABEL_X', 'LABEL_Y': 'LABEL_Y', 'NE_ID': 'NE_ID', 'WIKIDATAID': 'WIKIDATAID', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FA': 'NAME_FA', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HE': 'NAME_HE', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_UK': 'NAME_UK', 'NAME_UR': 'NAME_UR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'NAME_ZHT': 'NAME_ZHT', 'FCLASS_ISO': 'FCLASS_ISO', 'TLC_DIFF': 'TLC_DIFF', 'FCLASS_TLC': 'FCLASS_TLC', 'FCLASS_US': 'FCLASS_US', 'FCLASS_FR': 'FCLASS_FR', 'FCLASS_RU': 'FCLASS_RU', 'FCLASS_ES': 'FCLASS_ES', 'FCLASS_CN': 'FCLASS_CN', 'FCLASS_TW': 'FCLASS_TW', 'FCLASS_IN': 'FCLASS_IN', 'FCLASS_NP': 'FCLASS_NP', 'FCLASS_PK': 'FCLASS_PK', 'FCLASS_DE': 'FCLASS_DE', 'FCLASS_GB': 'FCLASS_GB', 'FCLASS_BR': 'FCLASS_BR', 'FCLASS_IL': 'FCLASS_IL', 'FCLASS_PS': 'FCLASS_PS', 'FCLASS_SA': 'FCLASS_SA', 'FCLASS_EG': 'FCLASS_EG', 'FCLASS_MA': 'FCLASS_MA', 'FCLASS_PT': 'FCLASS_PT', 'FCLASS_AR': 'FCLASS_AR', 'FCLASS_JP': 'FCLASS_JP', 'FCLASS_KO': 'FCLASS_KO', 'FCLASS_VN': 'FCLASS_VN', 'FCLASS_TR': 'FCLASS_TR', 'FCLASS_ID': 'FCLASS_ID', 'FCLASS_PL': 'FCLASS_PL', 'FCLASS_GR': 'FCLASS_GR', 'FCLASS_IT': 'FCLASS_IT', 'FCLASS_NL': 'FCLASS_NL', 'FCLASS_SE': 'FCLASS_SE', 'FCLASS_BD': 'FCLASS_BD', 'FCLASS_UA': 'FCLASS_UA', });
lyr_eu_membership_timeline_1.set('fieldAliases', {'id': 'id', 'country_en': 'country_en', 'country_it': 'country_it', 'iso2': 'iso2', 'iso3': 'iso3', 'entry_date': 'entry_date', 'exit_date': 'exit_date', 'temporal_start': 'temporal_start', 'temporal_end': 'temporal_end', 'membership_status': 'membership_status', 'is_current_member': 'is_current_member', 'founding_member': 'founding_member', 'accession_wave': 'accession_wave', 'accession_label': 'accession_label', 'members_after_accession_wave': 'members_after_accession_wave', 'joined_as': 'joined_as', 'label_lon': 'label_lon', 'label_lat': 'label_lat', 'notes': 'notes', });
lyr_european_integration_places_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'year': 'year', 'phase': 'phase', 'type': 'type', 'short_label': 'short_label', 'title': 'title', 'description': 'description', });
lyr_european_capitals_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'kind': 'kind', 'role': 'role', 'narrative_role': 'narrative_role', 'status': 'status', 'time': 'time', 'source': 'source', });
lyr_digital_infrastructureFRONTEX_digital_infrastructure_4.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'role': 'role', 'geometry_note': 'geometry_note', 'confidence': 'confidence', });
lyr_relationsFRONTEX_relations_5.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'group': 'group', 'source_status': 'source_status', 'relation_type': 'relation_type', });
lyr_sitesFRONTEX_sites_6.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'address': 'address', 'role': 'role', 'confidence': 'confidence', });
lyr_digital_infrastructureEUROJUST_digital_infrastructure_7.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'role': 'role', 'geometry_note': 'geometry_note', 'confidence': 'confidence', });
lyr_relationsEUROJUST_relations_8.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'group': 'group', 'source_status': 'source_status', 'relation_type': 'relation_type', });
lyr_sitesEUROJUST_sites_9.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'address': 'address', 'role': 'role', 'confidence': 'confidence', });
lyr_digital_infrastructureeuLISA_digital_infrastructure_10.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'role': 'role', 'confidence': 'confidence', });
lyr_relationseuLISA_relations_11.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'group': 'group', 'source_status': 'source_status', 'relation_type': 'relation_type', });
lyr_siteseuLISA_sites_12.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'address': 'address', 'role': 'role', 'confidence': 'confidence', });
lyr_digital_infrastructureENISA_digital_infrastructure_13.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'role': 'role', 'confidence': 'confidence', });
lyr_relationsENISA_relations_14.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'group': 'group', 'source_status': 'source_status', 'relation_type': 'relation_type', });
lyr_sitesENISA_sites_15.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'address': 'address', 'role': 'role', 'confidence': 'confidence', });
lyr_digital_infrastructureCommissione_Europea_digital_infrastructure_16.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'role': 'role', 'geometry_note': 'geometry_note', 'confidence': 'confidence', });
lyr_relationsCommissione_Europea_relations_17.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'group': 'group', 'source_status': 'source_status', 'relation_type': 'relation_type', });
lyr_sitesCommissione_Europea_sites_18.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'address': 'address', 'role': 'role', 'confidence': 'confidence', });
lyr_digital_infrastructureBCE_digital_infrastructure_19.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'role': 'role', 'geometry_note': 'geometry_note', 'confidence': 'confidence', });
lyr_relationsBCE_relations_20.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'group': 'group', 'source_status': 'source_status', 'relation_type': 'relation_type', });
lyr_sitesBCE_sites_21.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'address': 'address', 'role': 'role', 'confidence': 'confidence', });
lyr_digital_infrastructureEUROPOL_digital_infrastructure_22.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'role': 'role', 'geometry_note': 'geometry_note', 'confidence': 'confidence', });
lyr_relationsEUROPOL_relations_23.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'group': 'group', 'source_status': 'source_status', 'relation_type': 'relation_type', });
lyr_sitesEUROPOL_sites_24.set('fieldAliases', {'name': 'name', 'agency': 'agency', 'layer': 'layer', 'source_status': 'source_status', 'group': 'group', 'city': 'city', 'country': 'country', 'address': 'address', 'role': 'role', 'confidence': 'confidence', });
lyr_FilieraAlimentarepuntodidistribuzione_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', });
lyr_alice_prologostory_points_26.set('fieldAliases', {'id': 'id', 'reader_type': 'reader_type', 'kind': 'kind', 'story_title': 'story_title', 'story_url': 'story_url', 'target': 'target', });
lyr_casa_caterina_27.set('fieldAliases', {'label': 'label', 'segmento': 'segmento', 'tipo': 'tipo', 'universo': 'universo', 'descrizione': 'descrizione', 'show_label': 'show_label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', });
lyr_casa_caterina_28.set('fieldAliases', {'label': 'label', 'segmento': 'segmento', 'tipo': 'tipo', 'universo': 'universo', 'descrizione': 'descrizione', 'show_label': 'show_label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', });
lyr_tiny_laura_29.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'show_label': 'show_label', });
lyr_tiny_laura_30.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'show_label': 'show_label', });
lyr_stanza_Aliceroom_Alice_31.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'story_url': 'story_url', 'story_title': 'story_title', 'show_label': 'show_label', });
lyr_stanza_Aliceroom_Alice_32.set('fieldAliases', {'label': 'label', 'nome': 'nome', 'feature_role': 'feature_role', 'source': 'source', 'center_x': 'center_x', 'center_y': 'center_y', 'tipo': 'tipo', 'descrizione': 'descrizione', 'style': 'style', 'universo': 'universo', 'categoria': 'categoria', 'owner': 'owner', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'story_url': 'story_url', 'story_title': 'story_title', 'show_label': 'show_label', });
lyr_legacy_infrastructure_2050_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'stato': 'stato', 'proprietario': 'proprietario', 'livello_rischio': 'livello_rischio', 'funzione_narrativa': 'funzione_narrativa', 'note': 'note', 'anno_obsolescenza': 'anno_obsolescenza', 'anno_origine': 'anno_origine', });
lyr_cnot17_events_34.set('fieldAliases', {'fid': 'fid', 'event_id': 'event_id', 'titolo': 'titolo', 'timestamp_story': 'timestamp_story', 'capitolo': 'capitolo', 'luogo': 'luogo', 'personaggi': 'personaggi', 'tipo_evento': 'tipo_evento', 'oggetto_coinvolto': 'oggetto_coinvolto', 'stato_prima': 'stato_prima', 'stato_dopo': 'stato_dopo', 'conseguenza': 'conseguenza', 'visibile_al_lettore': 'visibile_al_lettore', 'note': 'note', 'artifact_json': 'artifact_json', });
lyr_visa_data_flows_35.set('fieldAliases', {'fid': 'fid', 'flow_id': 'flow_id', 'nome': 'nome', 'origine': 'origine', 'destinazione': 'destinazione', 'timestamp_story': 'timestamp_story', 'protocollo_narrativo': 'protocollo_narrativo', 'criticita': 'criticita', 'stato': 'stato', 'funzione_narrativa': 'funzione_narrativa', 'Note': 'Note', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_36.set('fieldAliases', {'nome': 'nome', 'tipo': 'tipo', 'piano': 'piano', 'funzione': 'funzione', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'note': 'note', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_37.set('fieldAliases', {'nome': 'nome', 'tipo': 'tipo', 'piano': 'piano', 'funzione': 'funzione', 'spatial_url': 'spatial_url', 'url_label': 'url_label', 'note': 'note', });
lyr_cnotstrade_1_38.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'turn:lanes': 'turn:lanes', 'crossing:island': 'crossing:island', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'bin': 'bin', 'bench': 'bench', 'public_transport': 'public_transport', 'network': 'network', 'departures_board': 'departures_board', 'bus': 'bus', 'crossing:markings': 'crossing:markings', 'maxweight:signed': 'maxweight:signed', 'crossing': 'crossing', 'smoothness': 'smoothness', 'covered': 'covered', 'maxheight:signed': 'maxheight:signed', 'maxheight': 'maxheight', 'ramp': 'ramp', 'handrail': 'handrail', 'sport': 'sport', 'area': 'area', 'short_name': 'short_name', 'footway': 'footway', 'ref': 'ref', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'service': 'service', 'name:etymology:wikidata': 'name:etymology:wikidata', 'parking:both': 'parking:both', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'cycleway:lane': 'cycleway:lane', 'motorcar': 'motorcar', 'tunnel': 'tunnel', 'junction': 'junction', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'check_date:surface': 'check_date:surface', 'old_ref': 'old_ref', 'width': 'width', 'incline': 'incline', 'bridge': 'bridge', 'access': 'access', 'busway': 'busway', 'historic': 'historic', 'cycleway:left': 'cycleway:left', 'sidewalk:both': 'sidewalk:both', 'maxspeed': 'maxspeed', 'cycleway': 'cycleway', 'segregated': 'segregated', 'loc_name': 'loc_name', 'foot': 'foot', 'bicycle': 'bicycle', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'lanes': 'lanes', 'alt_name': 'alt_name', 'cycleway:right': 'cycleway:right', 'sidewalk': 'sidewalk', 'layer': 'layer', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'surface': 'surface', 'source:def': 'source:def', 'oneway': 'oneway', 'name': 'name', 'motor_vehicle': 'motor_vehicle', });
lyr_cnotbuilding_39.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikimedia_commons': 'wikimedia_commons', 'building:levels:underground': 'building:levels:underground', 'isced:level': 'isced:level', 'education': 'education', 'outdoor_seating': 'outdoor_seating', 'indoor_seating': 'indoor_seating', 'check_date:opening_hours': 'check_date:opening_hours', 'roof:orientation': 'roof:orientation', 'min_height': 'min_height', 'parking': 'parking', 'capacity': 'capacity', 'roof:direction': 'roof:direction', 'building:part': 'building:part', 'status': 'status', 'material': 'material', 'operator:type': 'operator:type', 'diocese': 'diocese', 'internet_access': 'internet_access', 'brand:wikipedia': 'brand:wikipedia', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'covered': 'covered', 'military': 'military', 'landuse': 'landuse', 'sport': 'sport', 'operator': 'operator', 'check_date': 'check_date', 'start_date': 'start_date', 'museum': 'museum', 'fee': 'fee', 'description': 'description', 'basilica': 'basilica', 'tower:type': 'tower:type', 'tower:construction': 'tower:construction', 'architect': 'architect', 'telecom': 'telecom', 'building:colour': 'building:colour', 'healthcare': 'healthcare', 'defensive_works': 'defensive_works', 'shop': 'shop', 'source_1': 'source_1', 'roof:levels': 'roof:levels', 'man_made': 'man_made', 'leisure': 'leisure', 'wheelchair:description': 'wheelchair:description', 'denomination': 'denomination', 'surface': 'surface', 'lit': 'lit', 'highway': 'highway', 'roof:colour': 'roof:colour', 'fax': 'fax', 'contact:instagram': 'contact:instagram', 'loc_name': 'loc_name', 'emergency': 'emergency', 'layer': 'layer', 'roof:height': 'roof:height', 'religion': 'religion', 'amenity': 'amenity', 'tourism': 'tourism', 'building:levels': 'building:levels', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'website': 'website', 'type': 'type', 'toilets:wheelchair': 'toilets:wheelchair', 'ruins': 'ruins', 'roof:shape': 'roof:shape', 'roof:material': 'roof:material', 'phone': 'phone', 'opening_hours': 'opening_hours', 'name:ru': 'name:ru', 'name:fr': 'name:fr', 'name:es': 'name:es', 'name:en': 'name:en', 'name': 'name', 'historic:civilization': 'historic:civilization', 'historic': 'historic', 'height': 'height', 'email': 'email', 'contact:facebook': 'contact:facebook', 'building:material': 'building:material', 'alt_name': 'alt_name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'access': 'access', });
lyr_cnotstrade_2_40.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'level': 'level', 'operator': 'operator', 'network:wikidata': 'network:wikidata', 'horse': 'horse', 'golf': 'golf', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'arcade:right': 'arcade:right', 'departures_board': 'departures_board', 'bin': 'bin', 'public_transport': 'public_transport', 'bus': 'bus', 'placement': 'placement', 'maxspeed:type': 'maxspeed:type', 'turn:lanes:backward': 'turn:lanes:backward', 'maxheight': 'maxheight', 'crossing_ref': 'crossing_ref', 'maxweight:signed': 'maxweight:signed', 'covered': 'covered', 'parking:left:orientation': 'parking:left:orientation', 'parking:left': 'parking:left', 'tactile_paving': 'tactile_paving', 'footway': 'footway', 'step_count': 'step_count', 'cycleway:left': 'cycleway:left', 'ref': 'ref', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'informal': 'informal', 'junction': 'junction', 'sidewalk:right': 'sidewalk:right', 'sidewalk:left': 'sidewalk:left', 'motorcar': 'motorcar', 'tracktype': 'tracktype', 'hgv': 'hgv', 'tunnel': 'tunnel', 'smoothness': 'smoothness', 'width': 'width', 'source:maxspeed': 'source:maxspeed', 'vehicle:lanes': 'vehicle:lanes', 'psv:lanes:forward': 'psv:lanes:forward', 'lanes:backward': 'lanes:backward', 'access:lanes:forward': 'access:lanes:forward', 'shelter': 'shelter', 'network': 'network', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'bench': 'bench', 'turn:lanes': 'turn:lanes', 'old_ref': 'old_ref', 'bridge': 'bridge', 'segregated': 'segregated', 'check_date:surface': 'check_date:surface', 'historic': 'historic', 'access': 'access', 'cycleway:right': 'cycleway:right', 'parking:both:orientation': 'parking:both:orientation', 'parking:both': 'parking:both', 'layer': 'layer', 'cycleway': 'cycleway', 'parking:right:orientation': 'parking:right:orientation', 'parking:right': 'parking:right', 'sidewalk:both:surface': 'sidewalk:both:surface', 'loc_name': 'loc_name', 'area': 'area', 'short_name': 'short_name', 'maxspeed': 'maxspeed', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:forward': 'lanes:forward', 'lanes': 'lanes', 'foot': 'foot', 'bicycle': 'bicycle', 'alt_name': 'alt_name', 'sidewalk:both': 'sidewalk:both', 'sidewalk': 'sidewalk', 'oneway': 'oneway', 'lit': 'lit', 'lane_markings': 'lane_markings', 'cycleway:both': 'cycleway:both', 'motor_vehicle': 'motor_vehicle', 'source:def': 'source:def', 'service': 'service', 'surface': 'surface', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', });
lyr_highway_41.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'informal': 'informal', 'public_transport': 'public_transport', 'network': 'network', 'bus': 'bus', 'maxweight:signed': 'maxweight:signed', 'cycleway:right': 'cycleway:right', 'ref': 'ref', 'sidewalk:both': 'sidewalk:both', 'junction': 'junction', 'destination:forward': 'destination:forward', 'destination:backward': 'destination:backward', 'tunnel': 'tunnel', 'access': 'access', 'service': 'service', 'destination:symbol': 'destination:symbol', 'destination:colour': 'destination:colour', 'destination': 'destination', 'turn:lanes': 'turn:lanes', 'segregated': 'segregated', 'cutting': 'cutting', 'sidewalk:right': 'sidewalk:right', 'cycleway:both': 'cycleway:both', 'lane_markings': 'lane_markings', 'oneway': 'oneway', 'motor_vehicle': 'motor_vehicle', 'layer': 'layer', 'horse': 'horse', 'foot': 'foot', 'bridge': 'bridge', 'width': 'width', 'surface': 'surface', 'source:maxspeed': 'source:maxspeed', 'name': 'name', 'maxspeed': 'maxspeed', 'lit': 'lit', 'lanes': 'lanes', 'bicycle': 'bicycle', });
lyr_highway_42.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'turn:lanes': 'turn:lanes', 'covered': 'covered', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'public_transport': 'public_transport', 'network': 'network', 'bus': 'bus', 'bin': 'bin', 'bench': 'bench', 'horse': 'horse', 'cycleway': 'cycleway', 'level': 'level', 'toilets': 'toilets', 'turn:lanes:forward': 'turn:lanes:forward', 'wheelchair': 'wheelchair', 'source:maxspeed': 'source:maxspeed', 'shoulder': 'shoulder', 'embankment': 'embankment', 'maxweight:signed': 'maxweight:signed', 'turn:lanes:backward': 'turn:lanes:backward', 'loc_name': 'loc_name', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'cycleway:left': 'cycleway:left', 'width': 'width', 'sidewalk:both': 'sidewalk:both', 'lit': 'lit', 'tunnel': 'tunnel', 'junction': 'junction', 'tracktype': 'tracktype', 'access': 'access', 'lane_markings': 'lane_markings', 'sidewalk': 'sidewalk', 'cycleway:both': 'cycleway:both', 'cycleway:right': 'cycleway:right', 'segregated': 'segregated', 'foot': 'foot', 'bicycle': 'bicycle', 'service': 'service', 'layer': 'layer', 'bridge': 'bridge', 'toll': 'toll', 'surface': 'surface', 'smoothness': 'smoothness', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'name': 'name', });
lyr_highway_43.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_building_44.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'power': 'power', 'design': 'design', 'amenity': 'amenity', 'shop': 'shop', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:housename': 'addr:housename', 'entrance': 'entrance', 'barrier': 'barrier', });
lyr_building_45.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'takeaway': 'takeaway', 'drive_through': 'drive_through', 'brand:wikipedia': 'brand:wikipedia', 'ref:mise': 'ref:mise', 'fuel:octane_95': 'fuel:octane_95', 'fuel:octane_100': 'fuel:octane_100', 'fuel:lpg': 'fuel:lpg', 'fuel:diesel': 'fuel:diesel', 'fuel:GTL_diesel': 'fuel:GTL_diesel', 'wikipedia': 'wikipedia', 'layer': 'layer', 'power': 'power', 'generator:source': 'generator:source', 'generator:output:electricity': 'generator:output:electricity', 'website': 'website', 'branch': 'branch', 'wheelchair': 'wheelchair', 'second_hand': 'second_hand', 'safety_inspection': 'safety_inspection', 'repair': 'repair', 'rental': 'rental', 'payment:visa_electron': 'payment:visa_electron', 'payment:visa_debit': 'payment:visa_debit', 'payment:visa': 'payment:visa', 'payment:notes': 'payment:notes', 'payment:mastercard': 'payment:mastercard', 'payment:maestro': 'payment:maestro', 'payment:diners_club': 'payment:diners_club', 'payment:contactless': 'payment:contactless', 'payment:coins': 'payment:coins', 'payment:bancomat': 'payment:bancomat', 'parts': 'parts', 'clothes': 'clothes', 'addr:province': 'addr:province', 'man_made': 'man_made', 'cuisine': 'cuisine', 'addr:postcode': 'addr:postcode', 'ruins': 'ruins', 'wikidata': 'wikidata', 'religion': 'religion', 'amenity': 'amenity', 'industrial': 'industrial', 'tourism': 'tourism', 'brand:wikidata': 'brand:wikidata', 'height': 'height', 'building:levels': 'building:levels', 'addr:city': 'addr:city', 'brand': 'brand', 'name': 'name', 'shop': 'shop', 'operator': 'operator', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'type': 'type', });
lyr_cnotEdifici_46.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'religion': 'religion', 'denomination': 'denomination', 'amenity': 'amenity', 'name': 'name', });
lyr_Telecamere_47.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nome': 'nome', 'tipo': 'tipo', 'note': 'note', });
lyr_Semafori_48.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:island': 'crossing:island', 'supervised': 'supervised', 'traffic_signals:direction': 'traffic_signals:direction', 'traffic_signals': 'traffic_signals', 'traffic_signals:vibration': 'traffic_signals:vibration', 'traffic_signals:sound': 'traffic_signals:sound', 'tactile_paving': 'tactile_paving', 'crossing': 'crossing', 'button_operated': 'button_operated', 'source:def': 'source:def', 'name': 'name', });
lyr_cnotTinyhouses_49.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Proprietario': 'Proprietario', });
lyr_cnotparcheggiodroni_50.set('fieldAliases', {'fid': 'fid', });
lyr_nuclear_reactors_europe_all_51.set('fieldAliases', {'id': 'id', 'name': 'name', 'country': 'country', 'country_code': 'country_code', 'status': 'status', 'status_class': 'status_class', 'reactor_type': 'reactor_type', 'reactor_model': 'reactor_model', 'construction_start_at': 'construction_start_at', 'operational_from': 'operational_from', 'operational_to': 'operational_to', 'temporal_start': 'temporal_start', 'temporal_end': 'temporal_end', 'capacity_mwe': 'capacity_mwe', 'last_updated_at': 'last_updated_at', 'source': 'source', 'iaea_id': 'iaea_id', 'dataset_region': 'dataset_region', 'geometry_note': 'geometry_note', });
lyr_energy_opsd_all_except_nuclear_52.set('fieldAliases', {'plant_id': 'plant_id', 'name': 'name', 'country': 'country', 'capacity_mw': 'capacity_mw', 'energy_source': 'energy_source', 'energy_group': 'energy_group', 'technology': 'technology', 'status': 'status', 'commissioned': 'commissioned', 'shutdown': 'shutdown', 'is_shutdown': 'is_shutdown', 'temporal_start': 'temporal_start', 'temporal_end': 'temporal_end', 'temporal_end_source': 'temporal_end_source', 'temporal_basis': 'temporal_basis', 'company': 'company', 'city': 'city', 'state': 'state', 'eic_code': 'eic_code', 'energy_source_level_1': 'energy_source_level_1', 'energy_source_level_2': 'energy_source_level_2', 'energy_source_level_3': 'energy_source_level_3', 'original_source': 'original_source', 'source_dataset': 'source_dataset', 'source_url': 'source_url', });
lyr_ai_compute_relations_53.set('fieldAliases', {'id': 'id', 'from_id': 'from_id', 'from_name': 'from_name', 'from_type': 'from_type', 'to_id': 'to_id', 'to_name': 'to_name', 'to_type': 'to_type', 'relation_type': 'relation_type', 'relation_label': 'relation_label', 'source': 'source', 'notes': 'notes', });
lyr_ai_supercomputers_54.set('fieldAliases', {'id': 'id', 'name': 'name', 'short_name': 'short_name', 'country': 'country', 'city': 'city', 'host_entity': 'host_entity', 'linked_ai_factory_ids': 'linked_ai_factory_ids', 'linked_ai_factories': 'linked_ai_factories', 'system_role': 'system_role', 'system_class': 'system_class', 'status': 'status', 'sustained_pf': 'sustained_pf', 'peak_pf': 'peak_pf', 'ai_peak_pf': 'ai_peak_pf', 'accelerator_or_gpu': 'accelerator_or_gpu', 'cpu': 'cpu', 'storage': 'storage', 'supplier': 'supplier', 'applications': 'applications', 'source': 'source', 'coordinate_precision': 'coordinate_precision', 'notes': 'notes', });
lyr_ai_relations_55.set('fieldAliases', {'id': 'id', 'from_id': 'from_id', 'from_name': 'from_name', 'from_type': 'from_type', 'to_id': 'to_id', 'to_name': 'to_name', 'to_type': 'to_type', 'relation_type': 'relation_type', 'relation_label': 'relation_label', 'source': 'source', 'notes': 'notes', });
lyr_ai_factories_56.set('fieldAliases', {'id': 'id', 'name': 'name', 'short_name': 'short_name', 'country': 'country', 'city': 'city', 'factory_type': 'factory_type', 'selection_batch': 'selection_batch', 'host_entity': 'host_entity', 'supercomputer_or_system': 'supercomputer_or_system', 'compute_note': 'compute_note', 'key_sectors': 'key_sectors', 'partner_countries': 'partner_countries', 'antennas': 'antennas', 'services_available_from': 'services_available_from', 'status': 'status', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_ai_actors_57.set('fieldAliases', {'id': 'id', 'name': 'name', 'short_name': 'short_name', 'actor_type': 'actor_type', 'country': 'country', 'city': 'city', 'main_domain': 'main_domain', 'role': 'role', 'related_factories': 'related_factories', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_qt_relations_58.set('fieldAliases', {'id': 'id', 'from_id': 'from_id', 'from_name': 'from_name', 'from_type': 'from_type', 'to_id': 'to_id', 'to_name': 'to_name', 'to_type': 'to_type', 'relation_type': 'relation_type', 'relation_label': 'relation_label', 'source': 'source', 'notes': 'notes', });
lyr_qt_infrastructures_59.set('fieldAliases', {'id': 'id', 'name': 'name', 'host': 'host', 'city': 'city', 'country': 'country', 'technology': 'technology', 'platform': 'platform', 'topology': 'topology', 'qubits': 'qubits', 'supplier': 'supplier', 'hosting_supercomputer': 'hosting_supercomputer', 'power_consumption': 'power_consumption', 'cooling_system': 'cooling_system', 'status': 'status', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_qt_actors_60.set('fieldAliases', {'id': 'id', 'name': 'name', 'short_name': 'short_name', 'actor_type': 'actor_type', 'city': 'city', 'country': 'country', 'main_domain': 'main_domain', 'platform': 'platform', 'role': 'role', 'developed_what': 'developed_what', 'related_infrastructures': 'related_infrastructures', 'status': 'status', 'coordinate_precision': 'coordinate_precision', 'source': 'source', 'notes': 'notes', });
lyr_datacenter_61.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'company': 'company', 'city': 'city', 'state': 'state', 'country': 'country', 'address': 'address', });
lyr_fpga_infrastructures_europe_62.set('fieldAliases', {'id': 'id', 'site_name': 'site_name', 'city': 'city', 'country': 'country', 'operator': 'operator', 'infra_type': 'infra_type', 'status': 'status', 'location_type': 'location_type', 'access_model': 'access_model', 'fpga_vendor': 'fpga_vendor', 'fpga_model': 'fpga_model', 'fpga_count': 'fpga_count', 'count_known': 'count_known', 'medical_ai': 'medical_ai', 'story_order': 'story_order', 'story_phase': 'story_phase', 'source_url': 'source_url', 'verified_on': 'verified_on', });
lyr_cnoteurope_63.set('fieldAliases', {'fid': 'fid', 'featurecla': 'featurecla', 'scalerank': 'scalerank', 'labelrank': 'labelrank', 'sovereignt': 'sovereignt', 'sov_a3': 'sov_a3', 'adm0_dif': 'adm0_dif', 'level': 'level', 'type': 'type', 'tlc': 'tlc', 'admin': 'admin', 'adm0_a3': 'adm0_a3', 'geou_dif': 'geou_dif', 'geounit': 'geounit', 'gu_a3': 'gu_a3', 'su_dif': 'su_dif', 'subunit': 'subunit', 'su_a3': 'su_a3', 'brk_diff': 'brk_diff', 'name': 'name', 'name_long': 'name_long', 'brk_a3': 'brk_a3', 'brk_name': 'brk_name', 'brk_group': 'brk_group', 'abbrev': 'abbrev', 'postal': 'postal', 'formal_en': 'formal_en', 'formal_fr': 'formal_fr', 'name_ciawf': 'name_ciawf', 'note_adm0': 'note_adm0', 'note_brk': 'note_brk', 'name_sort': 'name_sort', 'name_alt': 'name_alt', 'mapcolor7': 'mapcolor7', 'mapcolor8': 'mapcolor8', 'mapcolor9': 'mapcolor9', 'mapcolor13': 'mapcolor13', 'pop_est': 'pop_est', 'pop_rank': 'pop_rank', 'pop_year': 'pop_year', 'gdp_md': 'gdp_md', 'gdp_year': 'gdp_year', 'economy': 'economy', 'income_grp': 'income_grp', 'fips_10': 'fips_10', 'iso_a2': 'iso_a2', 'iso_a2_eh': 'iso_a2_eh', 'iso_a3': 'iso_a3', 'iso_a3_eh': 'iso_a3_eh', 'iso_n3': 'iso_n3', 'iso_n3_eh': 'iso_n3_eh', 'un_a3': 'un_a3', 'wb_a2': 'wb_a2', 'wb_a3': 'wb_a3', 'woe_id': 'woe_id', 'woe_id_eh': 'woe_id_eh', 'woe_note': 'woe_note', 'adm0_iso': 'adm0_iso', 'adm0_diff': 'adm0_diff', 'adm0_tlc': 'adm0_tlc', 'adm0_a3_us': 'adm0_a3_us', 'adm0_a3_fr': 'adm0_a3_fr', 'adm0_a3_ru': 'adm0_a3_ru', 'adm0_a3_es': 'adm0_a3_es', 'adm0_a3_cn': 'adm0_a3_cn', 'adm0_a3_tw': 'adm0_a3_tw', 'adm0_a3_in': 'adm0_a3_in', 'adm0_a3_np': 'adm0_a3_np', 'adm0_a3_pk': 'adm0_a3_pk', 'adm0_a3_de': 'adm0_a3_de', 'adm0_a3_gb': 'adm0_a3_gb', 'adm0_a3_br': 'adm0_a3_br', 'adm0_a3_il': 'adm0_a3_il', 'adm0_a3_ps': 'adm0_a3_ps', 'adm0_a3_sa': 'adm0_a3_sa', 'adm0_a3_eg': 'adm0_a3_eg', 'adm0_a3_ma': 'adm0_a3_ma', 'adm0_a3_pt': 'adm0_a3_pt', 'adm0_a3_ar': 'adm0_a3_ar', 'adm0_a3_jp': 'adm0_a3_jp', 'adm0_a3_ko': 'adm0_a3_ko', 'adm0_a3_vn': 'adm0_a3_vn', 'adm0_a3_tr': 'adm0_a3_tr', 'adm0_a3_id': 'adm0_a3_id', 'adm0_a3_pl': 'adm0_a3_pl', 'adm0_a3_gr': 'adm0_a3_gr', 'adm0_a3_it': 'adm0_a3_it', 'adm0_a3_nl': 'adm0_a3_nl', 'adm0_a3_se': 'adm0_a3_se', 'adm0_a3_bd': 'adm0_a3_bd', 'adm0_a3_ua': 'adm0_a3_ua', 'adm0_a3_un': 'adm0_a3_un', 'adm0_a3_wb': 'adm0_a3_wb', 'continent': 'continent', 'region_un': 'region_un', 'subregion': 'subregion', 'region_wb': 'region_wb', 'name_len': 'name_len', 'long_len': 'long_len', 'abbrev_len': 'abbrev_len', 'tiny': 'tiny', 'homepart': 'homepart', 'min_zoom': 'min_zoom', 'min_label': 'min_label', 'max_label': 'max_label', 'label_x': 'label_x', 'label_y': 'label_y', 'ne_id': 'ne_id', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fa': 'name_fa', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_he': 'name_he', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'name_zht': 'name_zht', 'fclass_iso': 'fclass_iso', 'tlc_diff': 'tlc_diff', 'fclass_tlc': 'fclass_tlc', 'fclass_us': 'fclass_us', 'fclass_fr': 'fclass_fr', 'fclass_ru': 'fclass_ru', 'fclass_es': 'fclass_es', 'fclass_cn': 'fclass_cn', 'fclass_tw': 'fclass_tw', 'fclass_in': 'fclass_in', 'fclass_np': 'fclass_np', 'fclass_pk': 'fclass_pk', 'fclass_de': 'fclass_de', 'fclass_gb': 'fclass_gb', 'fclass_br': 'fclass_br', 'fclass_il': 'fclass_il', 'fclass_ps': 'fclass_ps', 'fclass_sa': 'fclass_sa', 'fclass_eg': 'fclass_eg', 'fclass_ma': 'fclass_ma', 'fclass_pt': 'fclass_pt', 'fclass_ar': 'fclass_ar', 'fclass_jp': 'fclass_jp', 'fclass_ko': 'fclass_ko', 'fclass_vn': 'fclass_vn', 'fclass_tr': 'fclass_tr', 'fclass_id': 'fclass_id', 'fclass_pl': 'fclass_pl', 'fclass_gr': 'fclass_gr', 'fclass_it': 'fclass_it', 'fclass_nl': 'fclass_nl', 'fclass_se': 'fclass_se', 'fclass_bd': 'fclass_bd', 'fclass_ua': 'fclass_ua', 'filename': 'filename', });
lyr_ne_10m_admin_0_countries_0.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'LABELRANK': 'Range', 'SOVEREIGNT': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_DIF': 'Range', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'TLC': 'TextEdit', 'ADMIN': 'TextEdit', 'ADM0_A3': 'TextEdit', 'GEOU_DIF': 'Range', 'GEOUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'SU_DIF': 'Range', 'SUBUNIT': 'TextEdit', 'SU_A3': 'TextEdit', 'BRK_DIFF': 'Range', 'NAME': 'TextEdit', 'NAME_LONG': 'TextEdit', 'BRK_A3': 'TextEdit', 'BRK_NAME': 'TextEdit', 'BRK_GROUP': 'TextEdit', 'ABBREV': 'TextEdit', 'POSTAL': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'NAME_CIAWF': 'TextEdit', 'NOTE_ADM0': 'TextEdit', 'NOTE_BRK': 'TextEdit', 'NAME_SORT': 'TextEdit', 'NAME_ALT': 'TextEdit', 'MAPCOLOR7': 'Range', 'MAPCOLOR8': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'POP_YEAR': 'Range', 'GDP_MD': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A2_EH': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'ISO_N3_EH': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'WOE_ID': 'Range', 'WOE_ID_EH': 'Range', 'WOE_NOTE': 'TextEdit', 'ADM0_ISO': 'TextEdit', 'ADM0_DIFF': 'TextEdit', 'ADM0_TLC': 'TextEdit', 'ADM0_A3_US': 'TextEdit', 'ADM0_A3_FR': 'TextEdit', 'ADM0_A3_RU': 'TextEdit', 'ADM0_A3_ES': 'TextEdit', 'ADM0_A3_CN': 'TextEdit', 'ADM0_A3_TW': 'TextEdit', 'ADM0_A3_IN': 'TextEdit', 'ADM0_A3_NP': 'TextEdit', 'ADM0_A3_PK': 'TextEdit', 'ADM0_A3_DE': 'TextEdit', 'ADM0_A3_GB': 'TextEdit', 'ADM0_A3_BR': 'TextEdit', 'ADM0_A3_IL': 'TextEdit', 'ADM0_A3_PS': 'TextEdit', 'ADM0_A3_SA': 'TextEdit', 'ADM0_A3_EG': 'TextEdit', 'ADM0_A3_MA': 'TextEdit', 'ADM0_A3_PT': 'TextEdit', 'ADM0_A3_AR': 'TextEdit', 'ADM0_A3_JP': 'TextEdit', 'ADM0_A3_KO': 'TextEdit', 'ADM0_A3_VN': 'TextEdit', 'ADM0_A3_TR': 'TextEdit', 'ADM0_A3_ID': 'TextEdit', 'ADM0_A3_PL': 'TextEdit', 'ADM0_A3_GR': 'TextEdit', 'ADM0_A3_IT': 'TextEdit', 'ADM0_A3_NL': 'TextEdit', 'ADM0_A3_SE': 'TextEdit', 'ADM0_A3_BD': 'TextEdit', 'ADM0_A3_UA': 'TextEdit', 'ADM0_A3_UN': 'Range', 'ADM0_A3_WB': 'Range', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_LEN': 'Range', 'LONG_LEN': 'Range', 'ABBREV_LEN': 'Range', 'TINY': 'Range', 'HOMEPART': 'Range', 'MIN_ZOOM': 'TextEdit', 'MIN_LABEL': 'TextEdit', 'MAX_LABEL': 'TextEdit', 'LABEL_X': 'TextEdit', 'LABEL_Y': 'TextEdit', 'NE_ID': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FA': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HE': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_UK': 'TextEdit', 'NAME_UR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'NAME_ZHT': 'TextEdit', 'FCLASS_ISO': 'TextEdit', 'TLC_DIFF': 'TextEdit', 'FCLASS_TLC': 'TextEdit', 'FCLASS_US': 'TextEdit', 'FCLASS_FR': 'TextEdit', 'FCLASS_RU': 'TextEdit', 'FCLASS_ES': 'TextEdit', 'FCLASS_CN': 'TextEdit', 'FCLASS_TW': 'TextEdit', 'FCLASS_IN': 'TextEdit', 'FCLASS_NP': 'TextEdit', 'FCLASS_PK': 'TextEdit', 'FCLASS_DE': 'TextEdit', 'FCLASS_GB': 'TextEdit', 'FCLASS_BR': 'TextEdit', 'FCLASS_IL': 'TextEdit', 'FCLASS_PS': 'TextEdit', 'FCLASS_SA': 'TextEdit', 'FCLASS_EG': 'TextEdit', 'FCLASS_MA': 'TextEdit', 'FCLASS_PT': 'TextEdit', 'FCLASS_AR': 'TextEdit', 'FCLASS_JP': 'TextEdit', 'FCLASS_KO': 'TextEdit', 'FCLASS_VN': 'TextEdit', 'FCLASS_TR': 'TextEdit', 'FCLASS_ID': 'TextEdit', 'FCLASS_PL': 'TextEdit', 'FCLASS_GR': 'TextEdit', 'FCLASS_IT': 'TextEdit', 'FCLASS_NL': 'TextEdit', 'FCLASS_SE': 'TextEdit', 'FCLASS_BD': 'TextEdit', 'FCLASS_UA': 'TextEdit', });
lyr_eu_membership_timeline_1.set('fieldImages', {'id': 'TextEdit', 'country_en': 'TextEdit', 'country_it': 'TextEdit', 'iso2': 'TextEdit', 'iso3': 'TextEdit', 'entry_date': 'DateTime', 'exit_date': 'DateTime', 'temporal_start': 'DateTime', 'temporal_end': 'DateTime', 'membership_status': 'TextEdit', 'is_current_member': 'CheckBox', 'founding_member': 'CheckBox', 'accession_wave': 'Range', 'accession_label': 'TextEdit', 'members_after_accession_wave': 'Range', 'joined_as': 'TextEdit', 'label_lon': 'TextEdit', 'label_lat': 'TextEdit', 'notes': 'TextEdit', });
lyr_european_integration_places_2.set('fieldImages', {'id': '', 'name': '', 'country': '', 'year': '', 'phase': '', 'type': '', 'short_label': '', 'title': '', 'description': '', });
lyr_european_capitals_3.set('fieldImages', {'id': '', 'name': '', 'country': '', 'kind': '', 'role': '', 'narrative_role': '', 'status': '', 'time': '', 'source': '', });
lyr_digital_infrastructureFRONTEX_digital_infrastructure_4.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'role': 'TextEdit', 'geometry_note': 'TextEdit', 'confidence': 'TextEdit', });
lyr_relationsFRONTEX_relations_5.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'group': 'TextEdit', 'source_status': 'TextEdit', 'relation_type': 'TextEdit', });
lyr_sitesFRONTEX_sites_6.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_digital_infrastructureEUROJUST_digital_infrastructure_7.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'role': 'TextEdit', 'geometry_note': 'TextEdit', 'confidence': 'TextEdit', });
lyr_relationsEUROJUST_relations_8.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'group': 'TextEdit', 'source_status': 'TextEdit', 'relation_type': 'TextEdit', });
lyr_sitesEUROJUST_sites_9.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_digital_infrastructureeuLISA_digital_infrastructure_10.set('fieldImages', {'name': '', 'agency': '', 'layer': '', 'source_status': '', 'group': '', 'city': '', 'country': '', 'role': '', 'confidence': '', });
lyr_relationseuLISA_relations_11.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'group': 'TextEdit', 'source_status': 'TextEdit', 'relation_type': 'TextEdit', });
lyr_siteseuLISA_sites_12.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_digital_infrastructureENISA_digital_infrastructure_13.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_relationsENISA_relations_14.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'group': 'TextEdit', 'source_status': 'TextEdit', 'relation_type': 'TextEdit', });
lyr_sitesENISA_sites_15.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_digital_infrastructureCommissione_Europea_digital_infrastructure_16.set('fieldImages', {'name': '', 'agency': '', 'layer': '', 'source_status': '', 'group': '', 'city': '', 'country': '', 'role': '', 'geometry_note': '', 'confidence': '', });
lyr_relationsCommissione_Europea_relations_17.set('fieldImages', {'name': '', 'agency': '', 'layer': '', 'group': '', 'source_status': '', 'relation_type': '', });
lyr_sitesCommissione_Europea_sites_18.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_digital_infrastructureBCE_digital_infrastructure_19.set('fieldImages', {'name': '', 'agency': '', 'layer': '', 'source_status': '', 'group': '', 'city': '', 'country': '', 'role': '', 'geometry_note': '', 'confidence': '', });
lyr_relationsBCE_relations_20.set('fieldImages', {'name': '', 'agency': '', 'layer': '', 'group': '', 'source_status': '', 'relation_type': '', });
lyr_sitesBCE_sites_21.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_digital_infrastructureEUROPOL_digital_infrastructure_22.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'role': 'TextEdit', 'geometry_note': 'TextEdit', 'confidence': 'TextEdit', });
lyr_relationsEUROPOL_relations_23.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'group': 'TextEdit', 'source_status': 'TextEdit', 'relation_type': 'TextEdit', });
lyr_sitesEUROPOL_sites_24.set('fieldImages', {'name': 'TextEdit', 'agency': 'TextEdit', 'layer': 'TextEdit', 'source_status': 'TextEdit', 'group': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', 'role': 'TextEdit', 'confidence': 'TextEdit', });
lyr_FilieraAlimentarepuntodidistribuzione_25.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_alice_prologostory_points_26.set('fieldImages', {'id': 'TextEdit', 'reader_type': '', 'kind': 'TextEdit', 'story_title': '', 'story_url': '', 'target': 'TextEdit', });
lyr_casa_caterina_27.set('fieldImages', {'label': 'TextEdit', 'segmento': 'Range', 'tipo': 'TextEdit', 'universo': 'TextEdit', 'descrizione': 'TextEdit', 'show_label': 'CheckBox', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', });
lyr_casa_caterina_28.set('fieldImages', {'label': 'TextEdit', 'segmento': 'Range', 'tipo': 'TextEdit', 'universo': 'TextEdit', 'descrizione': 'TextEdit', 'show_label': 'CheckBox', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', });
lyr_tiny_laura_29.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'show_label': 'CheckBox', });
lyr_tiny_laura_30.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'show_label': 'CheckBox', });
lyr_stanza_Aliceroom_Alice_31.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'story_url': '', 'story_title': '', 'show_label': 'CheckBox', });
lyr_stanza_Aliceroom_Alice_32.set('fieldImages', {'label': 'TextEdit', 'nome': 'TextEdit', 'feature_role': 'TextEdit', 'source': 'TextEdit', 'center_x': 'TextEdit', 'center_y': 'TextEdit', 'tipo': 'TextEdit', 'descrizione': 'TextEdit', 'style': 'TextEdit', 'universo': 'TextEdit', 'categoria': 'TextEdit', 'owner': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'story_url': '', 'story_title': '', 'show_label': 'CheckBox', });
lyr_legacy_infrastructure_2050_33.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'stato': 'TextEdit', 'proprietario': 'TextEdit', 'livello_rischio': 'TextEdit', 'funzione_narrativa': 'TextEdit', 'note': 'TextEdit', 'anno_obsolescenza': 'Range', 'anno_origine': 'Range', });
lyr_cnot17_events_34.set('fieldImages', {'fid': '', 'event_id': '', 'titolo': '', 'timestamp_story': '', 'capitolo': '', 'luogo': '', 'personaggi': '', 'tipo_evento': '', 'oggetto_coinvolto': '', 'stato_prima': '', 'stato_dopo': '', 'conseguenza': '', 'visibile_al_lettore': '', 'note': '', 'artifact_json': '', });
lyr_visa_data_flows_35.set('fieldImages', {'fid': 'TextEdit', 'flow_id': 'TextEdit', 'nome': 'TextEdit', 'origine': 'TextEdit', 'destinazione': 'TextEdit', 'timestamp_story': 'TextEdit', 'protocollo_narrativo': 'TextEdit', 'criticita': 'TextEdit', 'stato': 'TextEdit', 'funzione_narrativa': 'TextEdit', 'Note': 'TextEdit', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_36.set('fieldImages', {'nome': 'TextEdit', 'tipo': 'TextEdit', 'piano': 'Range', 'funzione': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'note': 'TextEdit', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_37.set('fieldImages', {'nome': 'TextEdit', 'tipo': 'TextEdit', 'piano': 'Range', 'funzione': 'TextEdit', 'spatial_url': 'TextEdit', 'url_label': 'TextEdit', 'note': 'TextEdit', });
lyr_cnotstrade_1_38.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'turn:lanes': '', 'crossing:island': '', 'tactile_paving': '', 'shelter': '', 'bin': '', 'bench': '', 'public_transport': '', 'network': '', 'departures_board': '', 'bus': '', 'crossing:markings': '', 'maxweight:signed': '', 'crossing': '', 'smoothness': '', 'covered': '', 'maxheight:signed': '', 'maxheight': '', 'ramp': '', 'handrail': '', 'sport': '', 'area': '', 'short_name': '', 'footway': '', 'ref': '', 'sidewalk:right': '', 'sidewalk:left': '', 'service': '', 'name:etymology:wikidata': '', 'parking:both': '', 'footway:surface': '', 'cycleway:surface': '', 'cycleway:lane': '', 'motorcar': '', 'tunnel': '', 'junction': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes:backward': '', 'check_date:surface': '', 'old_ref': '', 'width': '', 'incline': '', 'bridge': '', 'access': '', 'busway': '', 'historic': '', 'cycleway:left': '', 'sidewalk:both': '', 'maxspeed': '', 'cycleway': '', 'segregated': '', 'loc_name': '', 'foot': '', 'bicycle': '', 'wikipedia': '', 'wikidata': '', 'lanes': '', 'alt_name': '', 'cycleway:right': '', 'sidewalk': '', 'layer': '', 'lit': '', 'lane_markings': '', 'cycleway:both': '', 'surface': '', 'source:def': '', 'oneway': '', 'name': '', 'motor_vehicle': '', });
lyr_cnotbuilding_39.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'wikimedia_commons': 'TextEdit', 'building:levels:underground': 'TextEdit', 'isced:level': 'TextEdit', 'education': 'TextEdit', 'outdoor_seating': 'TextEdit', 'indoor_seating': 'TextEdit', 'check_date:opening_hours': 'TextEdit', 'roof:orientation': 'TextEdit', 'min_height': 'TextEdit', 'parking': 'TextEdit', 'capacity': 'TextEdit', 'roof:direction': 'TextEdit', 'building:part': 'TextEdit', 'status': 'TextEdit', 'material': 'TextEdit', 'operator:type': 'TextEdit', 'diocese': 'TextEdit', 'internet_access': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'brand:wikidata': 'TextEdit', 'brand': 'TextEdit', 'covered': 'TextEdit', 'military': 'TextEdit', 'landuse': 'TextEdit', 'sport': 'TextEdit', 'operator': 'TextEdit', 'check_date': 'TextEdit', 'start_date': 'TextEdit', 'museum': 'TextEdit', 'fee': 'TextEdit', 'description': 'TextEdit', 'basilica': 'TextEdit', 'tower:type': 'TextEdit', 'tower:construction': 'TextEdit', 'architect': 'TextEdit', 'telecom': 'TextEdit', 'building:colour': 'TextEdit', 'healthcare': 'TextEdit', 'defensive_works': 'TextEdit', 'shop': 'TextEdit', 'source_1': 'TextEdit', 'roof:levels': 'TextEdit', 'man_made': 'TextEdit', 'leisure': 'TextEdit', 'wheelchair:description': 'TextEdit', 'denomination': 'TextEdit', 'surface': 'TextEdit', 'lit': 'TextEdit', 'highway': 'TextEdit', 'roof:colour': 'TextEdit', 'fax': 'TextEdit', 'contact:instagram': 'TextEdit', 'loc_name': 'TextEdit', 'emergency': 'TextEdit', 'layer': 'TextEdit', 'roof:height': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'tourism': 'TextEdit', 'building:levels': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'type': 'TextEdit', 'toilets:wheelchair': 'TextEdit', 'ruins': 'TextEdit', 'roof:shape': 'TextEdit', 'roof:material': 'TextEdit', 'phone': 'TextEdit', 'opening_hours': 'TextEdit', 'name:ru': 'TextEdit', 'name:fr': 'TextEdit', 'name:es': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'historic:civilization': 'TextEdit', 'historic': 'TextEdit', 'height': 'TextEdit', 'email': 'TextEdit', 'contact:facebook': 'TextEdit', 'building:material': 'TextEdit', 'alt_name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'access': 'TextEdit', });
lyr_cnotstrade_2_40.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'level': '', 'operator': '', 'network:wikidata': '', 'horse': '', 'golf': '', 'crossing:markings': '', 'crossing': '', 'arcade:right': '', 'departures_board': '', 'bin': '', 'public_transport': '', 'bus': '', 'placement': '', 'maxspeed:type': '', 'turn:lanes:backward': '', 'maxheight': '', 'crossing_ref': '', 'maxweight:signed': '', 'covered': '', 'parking:left:orientation': '', 'parking:left': '', 'tactile_paving': '', 'footway': '', 'step_count': '', 'cycleway:left': '', 'ref': '', 'ramp': '', 'incline': '', 'handrail': '', 'informal': '', 'junction': '', 'sidewalk:right': '', 'sidewalk:left': '', 'motorcar': '', 'tracktype': '', 'hgv': '', 'tunnel': '', 'smoothness': '', 'width': '', 'source:maxspeed': '', 'vehicle:lanes': '', 'psv:lanes:forward': '', 'lanes:backward': '', 'access:lanes:forward': '', 'shelter': '', 'network': '', 'footway:surface': '', 'cycleway:surface': '', 'bench': '', 'turn:lanes': '', 'old_ref': '', 'bridge': '', 'segregated': '', 'check_date:surface': '', 'historic': '', 'access': '', 'cycleway:right': '', 'parking:both:orientation': '', 'parking:both': '', 'layer': '', 'cycleway': '', 'parking:right:orientation': '', 'parking:right': '', 'sidewalk:both:surface': '', 'loc_name': '', 'area': '', 'short_name': '', 'maxspeed': '', 'wikipedia': '', 'wikidata': '', 'turn:lanes:forward': '', 'lanes:forward': '', 'lanes': '', 'foot': '', 'bicycle': '', 'alt_name': '', 'sidewalk:both': '', 'sidewalk': '', 'oneway': '', 'lit': '', 'lane_markings': '', 'cycleway:both': '', 'motor_vehicle': '', 'source:def': '', 'service': '', 'surface': '', 'name:etymology:wikidata': '', 'name': '', });
lyr_highway_41.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'informal': '', 'public_transport': '', 'network': '', 'bus': '', 'maxweight:signed': '', 'cycleway:right': '', 'ref': '', 'sidewalk:both': '', 'junction': '', 'destination:forward': '', 'destination:backward': '', 'tunnel': '', 'access': '', 'service': '', 'destination:symbol': '', 'destination:colour': '', 'destination': '', 'turn:lanes': '', 'segregated': '', 'cutting': '', 'sidewalk:right': '', 'cycleway:both': '', 'lane_markings': '', 'oneway': '', 'motor_vehicle': '', 'layer': '', 'horse': '', 'foot': '', 'bridge': '', 'width': '', 'surface': '', 'source:maxspeed': '', 'name': '', 'maxspeed': '', 'lit': '', 'lanes': '', 'bicycle': '', });
lyr_highway_42.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'turn:lanes': '', 'covered': '', 'footway:surface': '', 'cycleway:surface': '', 'tactile_paving': '', 'shelter': '', 'public_transport': '', 'network': '', 'bus': '', 'bin': '', 'bench': '', 'horse': '', 'cycleway': '', 'level': '', 'toilets': '', 'turn:lanes:forward': '', 'wheelchair': '', 'source:maxspeed': '', 'shoulder': '', 'embankment': '', 'maxweight:signed': '', 'turn:lanes:backward': '', 'loc_name': '', 'lanes:forward': '', 'lanes:backward': '', 'cycleway:left': '', 'width': '', 'sidewalk:both': '', 'lit': '', 'tunnel': '', 'junction': '', 'tracktype': '', 'access': '', 'lane_markings': '', 'sidewalk': '', 'cycleway:both': '', 'cycleway:right': '', 'segregated': '', 'foot': '', 'bicycle': '', 'service': '', 'layer': '', 'bridge': '', 'toll': '', 'surface': '', 'smoothness': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'lanes': '', 'name': '', });
lyr_highway_43.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_building_44.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:city': 'TextEdit', 'power': 'TextEdit', 'design': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:housename': 'TextEdit', 'entrance': 'TextEdit', 'barrier': 'TextEdit', });
lyr_building_45.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'takeaway': 'TextEdit', 'drive_through': 'TextEdit', 'brand:wikipedia': 'TextEdit', 'ref:mise': 'TextEdit', 'fuel:octane_95': 'TextEdit', 'fuel:octane_100': 'TextEdit', 'fuel:lpg': 'TextEdit', 'fuel:diesel': 'TextEdit', 'fuel:GTL_diesel': 'TextEdit', 'wikipedia': 'TextEdit', 'layer': 'TextEdit', 'power': 'TextEdit', 'generator:source': 'TextEdit', 'generator:output:electricity': 'TextEdit', 'website': 'TextEdit', 'branch': 'TextEdit', 'wheelchair': 'TextEdit', 'second_hand': 'TextEdit', 'safety_inspection': 'TextEdit', 'repair': 'TextEdit', 'rental': 'TextEdit', 'payment:visa_electron': 'TextEdit', 'payment:visa_debit': 'TextEdit', 'payment:visa': 'TextEdit', 'payment:notes': 'TextEdit', 'payment:mastercard': 'TextEdit', 'payment:maestro': 'TextEdit', 'payment:diners_club': 'TextEdit', 'payment:contactless': 'TextEdit', 'payment:coins': 'TextEdit', 'payment:bancomat': 'TextEdit', 'parts': 'TextEdit', 'clothes': 'TextEdit', 'addr:province': 'TextEdit', 'man_made': 'TextEdit', 'cuisine': 'TextEdit', 'addr:postcode': 'TextEdit', 'ruins': 'TextEdit', 'wikidata': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'industrial': 'TextEdit', 'tourism': 'TextEdit', 'brand:wikidata': 'TextEdit', 'height': 'TextEdit', 'building:levels': 'TextEdit', 'addr:city': 'TextEdit', 'brand': 'TextEdit', 'name': 'TextEdit', 'shop': 'TextEdit', 'operator': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'type': 'TextEdit', });
lyr_cnotEdifici_46.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'denomination': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Telecamere_47.set('fieldImages', {'fid': '', 'id': '', 'nome': '', 'tipo': '', 'note': '', });
lyr_Semafori_48.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing:island': '', 'supervised': '', 'traffic_signals:direction': '', 'traffic_signals': '', 'traffic_signals:vibration': '', 'traffic_signals:sound': '', 'tactile_paving': '', 'crossing': '', 'button_operated': '', 'source:def': '', 'name': '', });
lyr_cnotTinyhouses_49.set('fieldImages', {'fid': '', 'id': '', 'Proprietario': '', });
lyr_cnotparcheggiodroni_50.set('fieldImages', {'fid': '', });
lyr_nuclear_reactors_europe_all_51.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'country': 'TextEdit', 'country_code': 'TextEdit', 'status': 'TextEdit', 'status_class': 'TextEdit', 'reactor_type': 'TextEdit', 'reactor_model': 'TextEdit', 'construction_start_at': 'DateTime', 'operational_from': 'DateTime', 'operational_to': 'DateTime', 'temporal_start': 'DateTime', 'temporal_end': 'DateTime', 'capacity_mwe': 'TextEdit', 'last_updated_at': 'DateTime', 'source': 'TextEdit', 'iaea_id': 'TextEdit', 'dataset_region': 'TextEdit', 'geometry_note': 'TextEdit', });
lyr_energy_opsd_all_except_nuclear_52.set('fieldImages', {'plant_id': 'TextEdit', 'name': 'TextEdit', 'country': 'TextEdit', 'capacity_mw': 'TextEdit', 'energy_source': 'TextEdit', 'energy_group': 'TextEdit', 'technology': 'TextEdit', 'status': 'TextEdit', 'commissioned': 'Range', 'shutdown': 'TextEdit', 'is_shutdown': 'CheckBox', 'temporal_start': 'DateTime', 'temporal_end': 'DateTime', 'temporal_end_source': 'TextEdit', 'temporal_basis': 'TextEdit', 'company': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'eic_code': 'TextEdit', 'energy_source_level_1': 'TextEdit', 'energy_source_level_2': 'TextEdit', 'energy_source_level_3': 'TextEdit', 'original_source': 'TextEdit', 'source_dataset': 'TextEdit', 'source_url': 'TextEdit', });
lyr_ai_compute_relations_53.set('fieldImages', {'id': 'TextEdit', 'from_id': 'TextEdit', 'from_name': 'TextEdit', 'from_type': 'TextEdit', 'to_id': 'TextEdit', 'to_name': 'TextEdit', 'to_type': 'TextEdit', 'relation_type': 'TextEdit', 'relation_label': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_ai_supercomputers_54.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'short_name': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'host_entity': 'TextEdit', 'linked_ai_factory_ids': 'TextEdit', 'linked_ai_factories': 'TextEdit', 'system_role': 'TextEdit', 'system_class': 'TextEdit', 'status': 'TextEdit', 'sustained_pf': 'TextEdit', 'peak_pf': 'TextEdit', 'ai_peak_pf': 'TextEdit', 'accelerator_or_gpu': 'TextEdit', 'cpu': 'TextEdit', 'storage': 'TextEdit', 'supplier': 'TextEdit', 'applications': 'TextEdit', 'source': 'TextEdit', 'coordinate_precision': 'TextEdit', 'notes': 'TextEdit', });
lyr_ai_relations_55.set('fieldImages', {'id': 'TextEdit', 'from_id': 'TextEdit', 'from_name': 'TextEdit', 'from_type': 'TextEdit', 'to_id': 'TextEdit', 'to_name': 'TextEdit', 'to_type': 'TextEdit', 'relation_type': 'TextEdit', 'relation_label': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_ai_factories_56.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'short_name': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'factory_type': 'TextEdit', 'selection_batch': 'TextEdit', 'host_entity': 'TextEdit', 'supercomputer_or_system': 'TextEdit', 'compute_note': 'TextEdit', 'key_sectors': 'TextEdit', 'partner_countries': 'TextEdit', 'antennas': 'TextEdit', 'services_available_from': 'TextEdit', 'status': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_ai_actors_57.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'short_name': 'TextEdit', 'actor_type': 'TextEdit', 'country': 'TextEdit', 'city': 'TextEdit', 'main_domain': 'TextEdit', 'role': 'TextEdit', 'related_factories': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_qt_relations_58.set('fieldImages', {'id': 'TextEdit', 'from_id': 'TextEdit', 'from_name': 'TextEdit', 'from_type': 'TextEdit', 'to_id': 'TextEdit', 'to_name': 'TextEdit', 'to_type': 'TextEdit', 'relation_type': 'TextEdit', 'relation_label': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_qt_infrastructures_59.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'host': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'technology': 'TextEdit', 'platform': 'TextEdit', 'topology': 'TextEdit', 'qubits': 'Range', 'supplier': 'TextEdit', 'hosting_supercomputer': 'TextEdit', 'power_consumption': 'TextEdit', 'cooling_system': 'TextEdit', 'status': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_qt_actors_60.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'short_name': 'TextEdit', 'actor_type': 'TextEdit', 'city': 'TextEdit', 'country': 'TextEdit', 'main_domain': 'TextEdit', 'platform': 'TextEdit', 'role': 'TextEdit', 'developed_what': 'TextEdit', 'related_infrastructures': 'TextEdit', 'status': 'TextEdit', 'coordinate_precision': 'TextEdit', 'source': 'TextEdit', 'notes': 'TextEdit', });
lyr_datacenter_61.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'company': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'address': 'TextEdit', });
lyr_fpga_infrastructures_europe_62.set('fieldImages', {'id': '', 'site_name': '', 'city': '', 'country': '', 'operator': '', 'infra_type': '', 'status': '', 'location_type': '', 'access_model': '', 'fpga_vendor': '', 'fpga_model': '', 'fpga_count': '', 'count_known': '', 'medical_ai': '', 'story_order': '', 'story_phase': '', 'source_url': '', 'verified_on': '', });
lyr_cnoteurope_63.set('fieldImages', {'fid': 'TextEdit', 'featurecla': 'TextEdit', 'scalerank': 'Range', 'labelrank': 'Range', 'sovereignt': 'TextEdit', 'sov_a3': 'TextEdit', 'adm0_dif': 'Range', 'level': 'Range', 'type': 'TextEdit', 'tlc': 'TextEdit', 'admin': 'TextEdit', 'adm0_a3': 'TextEdit', 'geou_dif': 'Range', 'geounit': 'TextEdit', 'gu_a3': 'TextEdit', 'su_dif': 'Range', 'subunit': 'TextEdit', 'su_a3': 'TextEdit', 'brk_diff': 'Range', 'name': 'TextEdit', 'name_long': 'TextEdit', 'brk_a3': 'TextEdit', 'brk_name': 'TextEdit', 'brk_group': 'TextEdit', 'abbrev': 'TextEdit', 'postal': 'TextEdit', 'formal_en': 'TextEdit', 'formal_fr': 'TextEdit', 'name_ciawf': 'TextEdit', 'note_adm0': 'TextEdit', 'note_brk': 'TextEdit', 'name_sort': 'TextEdit', 'name_alt': 'TextEdit', 'mapcolor7': 'Range', 'mapcolor8': 'Range', 'mapcolor9': 'Range', 'mapcolor13': 'Range', 'pop_est': 'Range', 'pop_rank': 'Range', 'pop_year': 'Range', 'gdp_md': 'Range', 'gdp_year': 'Range', 'economy': 'TextEdit', 'income_grp': 'TextEdit', 'fips_10': 'TextEdit', 'iso_a2': 'TextEdit', 'iso_a2_eh': 'TextEdit', 'iso_a3': 'TextEdit', 'iso_a3_eh': 'TextEdit', 'iso_n3': 'TextEdit', 'iso_n3_eh': 'TextEdit', 'un_a3': 'TextEdit', 'wb_a2': 'TextEdit', 'wb_a3': 'TextEdit', 'woe_id': 'Range', 'woe_id_eh': 'Range', 'woe_note': 'TextEdit', 'adm0_iso': 'TextEdit', 'adm0_diff': 'TextEdit', 'adm0_tlc': 'TextEdit', 'adm0_a3_us': 'TextEdit', 'adm0_a3_fr': 'TextEdit', 'adm0_a3_ru': 'TextEdit', 'adm0_a3_es': 'TextEdit', 'adm0_a3_cn': 'TextEdit', 'adm0_a3_tw': 'TextEdit', 'adm0_a3_in': 'TextEdit', 'adm0_a3_np': 'TextEdit', 'adm0_a3_pk': 'TextEdit', 'adm0_a3_de': 'TextEdit', 'adm0_a3_gb': 'TextEdit', 'adm0_a3_br': 'TextEdit', 'adm0_a3_il': 'TextEdit', 'adm0_a3_ps': 'TextEdit', 'adm0_a3_sa': 'TextEdit', 'adm0_a3_eg': 'TextEdit', 'adm0_a3_ma': 'TextEdit', 'adm0_a3_pt': 'TextEdit', 'adm0_a3_ar': 'TextEdit', 'adm0_a3_jp': 'TextEdit', 'adm0_a3_ko': 'TextEdit', 'adm0_a3_vn': 'TextEdit', 'adm0_a3_tr': 'TextEdit', 'adm0_a3_id': 'TextEdit', 'adm0_a3_pl': 'TextEdit', 'adm0_a3_gr': 'TextEdit', 'adm0_a3_it': 'TextEdit', 'adm0_a3_nl': 'TextEdit', 'adm0_a3_se': 'TextEdit', 'adm0_a3_bd': 'TextEdit', 'adm0_a3_ua': 'TextEdit', 'adm0_a3_un': 'Range', 'adm0_a3_wb': 'Range', 'continent': 'TextEdit', 'region_un': 'TextEdit', 'subregion': 'TextEdit', 'region_wb': 'TextEdit', 'name_len': 'Range', 'long_len': 'Range', 'abbrev_len': 'Range', 'tiny': 'Range', 'homepart': 'Range', 'min_zoom': 'Range', 'min_label': 'TextEdit', 'max_label': 'TextEdit', 'label_x': 'TextEdit', 'label_y': 'TextEdit', 'ne_id': 'Range', 'wikidataid': 'TextEdit', 'name_ar': 'TextEdit', 'name_bn': 'TextEdit', 'name_de': 'TextEdit', 'name_en': 'TextEdit', 'name_es': 'TextEdit', 'name_fa': 'TextEdit', 'name_fr': 'TextEdit', 'name_el': 'TextEdit', 'name_he': 'TextEdit', 'name_hi': 'TextEdit', 'name_hu': 'TextEdit', 'name_id': 'TextEdit', 'name_it': 'TextEdit', 'name_ja': 'TextEdit', 'name_ko': 'TextEdit', 'name_nl': 'TextEdit', 'name_pl': 'TextEdit', 'name_pt': 'TextEdit', 'name_ru': 'TextEdit', 'name_sv': 'TextEdit', 'name_tr': 'TextEdit', 'name_uk': 'TextEdit', 'name_ur': 'TextEdit', 'name_vi': 'TextEdit', 'name_zh': 'TextEdit', 'name_zht': 'TextEdit', 'fclass_iso': 'TextEdit', 'tlc_diff': 'TextEdit', 'fclass_tlc': 'TextEdit', 'fclass_us': 'TextEdit', 'fclass_fr': 'TextEdit', 'fclass_ru': 'TextEdit', 'fclass_es': 'TextEdit', 'fclass_cn': 'TextEdit', 'fclass_tw': 'TextEdit', 'fclass_in': 'TextEdit', 'fclass_np': 'TextEdit', 'fclass_pk': 'TextEdit', 'fclass_de': 'TextEdit', 'fclass_gb': 'TextEdit', 'fclass_br': 'TextEdit', 'fclass_il': 'TextEdit', 'fclass_ps': 'TextEdit', 'fclass_sa': 'TextEdit', 'fclass_eg': 'TextEdit', 'fclass_ma': 'TextEdit', 'fclass_pt': 'TextEdit', 'fclass_ar': 'TextEdit', 'fclass_jp': 'TextEdit', 'fclass_ko': 'TextEdit', 'fclass_vn': 'TextEdit', 'fclass_tr': 'TextEdit', 'fclass_id': 'TextEdit', 'fclass_pl': 'TextEdit', 'fclass_gr': 'TextEdit', 'fclass_it': 'TextEdit', 'fclass_nl': 'TextEdit', 'fclass_se': 'TextEdit', 'fclass_bd': 'TextEdit', 'fclass_ua': 'TextEdit', 'filename': 'TextEdit', });
lyr_ne_10m_admin_0_countries_0.set('fieldLabels', {'featurecla': 'no label', 'scalerank': 'no label', 'LABELRANK': 'no label', 'SOVEREIGNT': 'no label', 'SOV_A3': 'no label', 'ADM0_DIF': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'TLC': 'no label', 'ADMIN': 'no label', 'ADM0_A3': 'no label', 'GEOU_DIF': 'no label', 'GEOUNIT': 'no label', 'GU_A3': 'no label', 'SU_DIF': 'no label', 'SUBUNIT': 'no label', 'SU_A3': 'no label', 'BRK_DIFF': 'no label', 'NAME': 'no label', 'NAME_LONG': 'no label', 'BRK_A3': 'no label', 'BRK_NAME': 'no label', 'BRK_GROUP': 'no label', 'ABBREV': 'no label', 'POSTAL': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'NAME_CIAWF': 'no label', 'NOTE_ADM0': 'no label', 'NOTE_BRK': 'no label', 'NAME_SORT': 'no label', 'NAME_ALT': 'no label', 'MAPCOLOR7': 'no label', 'MAPCOLOR8': 'no label', 'MAPCOLOR9': 'no label', 'MAPCOLOR13': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'POP_YEAR': 'no label', 'GDP_MD': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'FIPS_10': 'no label', 'ISO_A2': 'no label', 'ISO_A2_EH': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'ISO_N3_EH': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'WOE_ID': 'no label', 'WOE_ID_EH': 'no label', 'WOE_NOTE': 'no label', 'ADM0_ISO': 'no label', 'ADM0_DIFF': 'no label', 'ADM0_TLC': 'no label', 'ADM0_A3_US': 'no label', 'ADM0_A3_FR': 'no label', 'ADM0_A3_RU': 'no label', 'ADM0_A3_ES': 'no label', 'ADM0_A3_CN': 'no label', 'ADM0_A3_TW': 'no label', 'ADM0_A3_IN': 'no label', 'ADM0_A3_NP': 'no label', 'ADM0_A3_PK': 'no label', 'ADM0_A3_DE': 'no label', 'ADM0_A3_GB': 'no label', 'ADM0_A3_BR': 'no label', 'ADM0_A3_IL': 'no label', 'ADM0_A3_PS': 'no label', 'ADM0_A3_SA': 'no label', 'ADM0_A3_EG': 'no label', 'ADM0_A3_MA': 'no label', 'ADM0_A3_PT': 'no label', 'ADM0_A3_AR': 'no label', 'ADM0_A3_JP': 'no label', 'ADM0_A3_KO': 'no label', 'ADM0_A3_VN': 'no label', 'ADM0_A3_TR': 'no label', 'ADM0_A3_ID': 'no label', 'ADM0_A3_PL': 'no label', 'ADM0_A3_GR': 'no label', 'ADM0_A3_IT': 'no label', 'ADM0_A3_NL': 'no label', 'ADM0_A3_SE': 'no label', 'ADM0_A3_BD': 'no label', 'ADM0_A3_UA': 'no label', 'ADM0_A3_UN': 'no label', 'ADM0_A3_WB': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_LEN': 'no label', 'LONG_LEN': 'no label', 'ABBREV_LEN': 'no label', 'TINY': 'no label', 'HOMEPART': 'no label', 'MIN_ZOOM': 'no label', 'MIN_LABEL': 'no label', 'MAX_LABEL': 'no label', 'LABEL_X': 'no label', 'LABEL_Y': 'no label', 'NE_ID': 'no label', 'WIKIDATAID': 'no label', 'NAME_AR': 'no label', 'NAME_BN': 'no label', 'NAME_DE': 'no label', 'NAME_EN': 'no label', 'NAME_ES': 'no label', 'NAME_FA': 'no label', 'NAME_FR': 'no label', 'NAME_EL': 'no label', 'NAME_HE': 'no label', 'NAME_HI': 'no label', 'NAME_HU': 'no label', 'NAME_ID': 'no label', 'NAME_IT': 'no label', 'NAME_JA': 'no label', 'NAME_KO': 'no label', 'NAME_NL': 'no label', 'NAME_PL': 'no label', 'NAME_PT': 'no label', 'NAME_RU': 'no label', 'NAME_SV': 'no label', 'NAME_TR': 'no label', 'NAME_UK': 'no label', 'NAME_UR': 'no label', 'NAME_VI': 'no label', 'NAME_ZH': 'no label', 'NAME_ZHT': 'no label', 'FCLASS_ISO': 'no label', 'TLC_DIFF': 'no label', 'FCLASS_TLC': 'no label', 'FCLASS_US': 'no label', 'FCLASS_FR': 'no label', 'FCLASS_RU': 'no label', 'FCLASS_ES': 'no label', 'FCLASS_CN': 'no label', 'FCLASS_TW': 'no label', 'FCLASS_IN': 'no label', 'FCLASS_NP': 'no label', 'FCLASS_PK': 'no label', 'FCLASS_DE': 'no label', 'FCLASS_GB': 'no label', 'FCLASS_BR': 'no label', 'FCLASS_IL': 'no label', 'FCLASS_PS': 'no label', 'FCLASS_SA': 'no label', 'FCLASS_EG': 'no label', 'FCLASS_MA': 'no label', 'FCLASS_PT': 'no label', 'FCLASS_AR': 'no label', 'FCLASS_JP': 'no label', 'FCLASS_KO': 'no label', 'FCLASS_VN': 'no label', 'FCLASS_TR': 'no label', 'FCLASS_ID': 'no label', 'FCLASS_PL': 'no label', 'FCLASS_GR': 'no label', 'FCLASS_IT': 'no label', 'FCLASS_NL': 'no label', 'FCLASS_SE': 'no label', 'FCLASS_BD': 'no label', 'FCLASS_UA': 'no label', });
lyr_eu_membership_timeline_1.set('fieldLabels', {'id': 'no label', 'country_en': 'no label', 'country_it': 'no label', 'iso2': 'no label', 'iso3': 'no label', 'entry_date': 'no label', 'exit_date': 'no label', 'temporal_start': 'no label', 'temporal_end': 'no label', 'membership_status': 'no label', 'is_current_member': 'no label', 'founding_member': 'no label', 'accession_wave': 'no label', 'accession_label': 'no label', 'members_after_accession_wave': 'no label', 'joined_as': 'no label', 'label_lon': 'no label', 'label_lat': 'no label', 'notes': 'no label', });
lyr_european_integration_places_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'year': 'no label', 'phase': 'no label', 'type': 'no label', 'short_label': 'no label', 'title': 'no label', 'description': 'no label', });
lyr_european_capitals_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'kind': 'no label', 'role': 'no label', 'narrative_role': 'no label', 'status': 'no label', 'time': 'no label', 'source': 'no label', });
lyr_digital_infrastructureFRONTEX_digital_infrastructure_4.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'role': 'no label', 'geometry_note': 'no label', 'confidence': 'no label', });
lyr_relationsFRONTEX_relations_5.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'group': 'no label', 'source_status': 'no label', 'relation_type': 'no label', });
lyr_sitesFRONTEX_sites_6.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'address': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_digital_infrastructureEUROJUST_digital_infrastructure_7.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'role': 'no label', 'geometry_note': 'no label', 'confidence': 'no label', });
lyr_relationsEUROJUST_relations_8.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'group': 'no label', 'source_status': 'no label', 'relation_type': 'no label', });
lyr_sitesEUROJUST_sites_9.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'address': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_digital_infrastructureeuLISA_digital_infrastructure_10.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_relationseuLISA_relations_11.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'group': 'no label', 'source_status': 'no label', 'relation_type': 'no label', });
lyr_siteseuLISA_sites_12.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'address': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_digital_infrastructureENISA_digital_infrastructure_13.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_relationsENISA_relations_14.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'group': 'no label', 'source_status': 'no label', 'relation_type': 'no label', });
lyr_sitesENISA_sites_15.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'address': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_digital_infrastructureCommissione_Europea_digital_infrastructure_16.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'role': 'no label', 'geometry_note': 'no label', 'confidence': 'no label', });
lyr_relationsCommissione_Europea_relations_17.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'group': 'no label', 'source_status': 'no label', 'relation_type': 'no label', });
lyr_sitesCommissione_Europea_sites_18.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'address': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_digital_infrastructureBCE_digital_infrastructure_19.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'role': 'no label', 'geometry_note': 'no label', 'confidence': 'no label', });
lyr_relationsBCE_relations_20.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'group': 'no label', 'source_status': 'no label', 'relation_type': 'no label', });
lyr_sitesBCE_sites_21.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'address': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_digital_infrastructureEUROPOL_digital_infrastructure_22.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'role': 'no label', 'geometry_note': 'no label', 'confidence': 'no label', });
lyr_relationsEUROPOL_relations_23.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'group': 'no label', 'source_status': 'no label', 'relation_type': 'no label', });
lyr_sitesEUROPOL_sites_24.set('fieldLabels', {'name': 'no label', 'agency': 'no label', 'layer': 'no label', 'source_status': 'no label', 'group': 'no label', 'city': 'no label', 'country': 'no label', 'address': 'no label', 'role': 'no label', 'confidence': 'no label', });
lyr_FilieraAlimentarepuntodidistribuzione_25.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nome': 'no label', });
lyr_alice_prologostory_points_26.set('fieldLabels', {'id': 'no label', 'reader_type': 'no label', 'kind': 'no label', 'story_title': 'no label', 'story_url': 'no label', 'target': 'no label', });
lyr_casa_caterina_27.set('fieldLabels', {'label': 'no label', 'segmento': 'no label', 'tipo': 'no label', 'universo': 'no label', 'descrizione': 'no label', 'show_label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', });
lyr_casa_caterina_28.set('fieldLabels', {'label': 'no label', 'segmento': 'no label', 'tipo': 'no label', 'universo': 'no label', 'descrizione': 'no label', 'show_label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', });
lyr_tiny_laura_29.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'show_label': 'no label', });
lyr_tiny_laura_30.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'show_label': 'no label', });
lyr_stanza_Aliceroom_Alice_31.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'story_url': 'no label', 'story_title': 'no label', 'show_label': 'no label', });
lyr_stanza_Aliceroom_Alice_32.set('fieldLabels', {'label': 'no label', 'nome': 'no label', 'feature_role': 'no label', 'source': 'no label', 'center_x': 'no label', 'center_y': 'no label', 'tipo': 'no label', 'descrizione': 'no label', 'style': 'no label', 'universo': 'no label', 'categoria': 'no label', 'owner': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'story_url': 'no label', 'story_title': 'no label', 'show_label': 'no label', });
lyr_legacy_infrastructure_2050_33.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'tipo': 'no label', 'stato': 'no label', 'proprietario': 'no label', 'livello_rischio': 'no label', 'funzione_narrativa': 'no label', 'note': 'no label', 'anno_obsolescenza': 'no label', 'anno_origine': 'no label', });
lyr_cnot17_events_34.set('fieldLabels', {'fid': 'no label', 'event_id': 'no label', 'titolo': 'no label', 'timestamp_story': 'no label', 'capitolo': 'no label', 'luogo': 'no label', 'personaggi': 'no label', 'tipo_evento': 'no label', 'oggetto_coinvolto': 'no label', 'stato_prima': 'no label', 'stato_dopo': 'no label', 'conseguenza': 'no label', 'visibile_al_lettore': 'no label', 'note': 'no label', 'artifact_json': 'no label', });
lyr_visa_data_flows_35.set('fieldLabels', {'fid': 'no label', 'flow_id': 'no label', 'nome': 'no label', 'origine': 'no label', 'destinazione': 'no label', 'timestamp_story': 'no label', 'protocollo_narrativo': 'no label', 'criticita': 'no label', 'stato': 'no label', 'funzione_narrativa': 'no label', 'Note': 'no label', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_36.set('fieldLabels', {'nome': 'no label', 'tipo': 'no label', 'piano': 'no label', 'funzione': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'note': 'no label', });
lyr_convitto_base_localConvittoCardinalMoraesempiobase_37.set('fieldLabels', {'nome': 'no label', 'tipo': 'no label', 'piano': 'no label', 'funzione': 'no label', 'spatial_url': 'no label', 'url_label': 'no label', 'note': 'no label', });
lyr_cnotstrade_1_38.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'turn:lanes': 'no label', 'crossing:island': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'bin': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'network': 'no label', 'departures_board': 'no label', 'bus': 'no label', 'crossing:markings': 'no label', 'maxweight:signed': 'no label', 'crossing': 'no label', 'smoothness': 'no label', 'covered': 'no label', 'maxheight:signed': 'no label', 'maxheight': 'no label', 'ramp': 'no label', 'handrail': 'no label', 'sport': 'no label', 'area': 'no label', 'short_name': 'no label', 'footway': 'no label', 'ref': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'service': 'no label', 'name:etymology:wikidata': 'no label', 'parking:both': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'cycleway:lane': 'no label', 'motorcar': 'no label', 'tunnel': 'no label', 'junction': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'check_date:surface': 'no label', 'old_ref': 'no label', 'width': 'no label', 'incline': 'no label', 'bridge': 'no label', 'access': 'no label', 'busway': 'no label', 'historic': 'no label', 'cycleway:left': 'no label', 'sidewalk:both': 'no label', 'maxspeed': 'no label', 'cycleway': 'no label', 'segregated': 'no label', 'loc_name': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'lanes': 'no label', 'alt_name': 'no label', 'cycleway:right': 'no label', 'sidewalk': 'no label', 'layer': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'surface': 'no label', 'source:def': 'no label', 'oneway': 'no label', 'name': 'no label', 'motor_vehicle': 'no label', });
lyr_cnotbuilding_39.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikimedia_commons': 'no label', 'building:levels:underground': 'no label', 'isced:level': 'no label', 'education': 'no label', 'outdoor_seating': 'no label', 'indoor_seating': 'no label', 'check_date:opening_hours': 'no label', 'roof:orientation': 'no label', 'min_height': 'no label', 'parking': 'no label', 'capacity': 'no label', 'roof:direction': 'no label', 'building:part': 'no label', 'status': 'no label', 'material': 'no label', 'operator:type': 'no label', 'diocese': 'no label', 'internet_access': 'no label', 'brand:wikipedia': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'covered': 'no label', 'military': 'no label', 'landuse': 'no label', 'sport': 'no label', 'operator': 'no label', 'check_date': 'no label', 'start_date': 'no label', 'museum': 'no label', 'fee': 'no label', 'description': 'no label', 'basilica': 'no label', 'tower:type': 'no label', 'tower:construction': 'no label', 'architect': 'no label', 'telecom': 'no label', 'building:colour': 'no label', 'healthcare': 'no label', 'defensive_works': 'no label', 'shop': 'no label', 'source_1': 'no label', 'roof:levels': 'no label', 'man_made': 'no label', 'leisure': 'no label', 'wheelchair:description': 'no label', 'denomination': 'no label', 'surface': 'no label', 'lit': 'no label', 'highway': 'no label', 'roof:colour': 'no label', 'fax': 'no label', 'contact:instagram': 'no label', 'loc_name': 'no label', 'emergency': 'no label', 'layer': 'no label', 'roof:height': 'no label', 'religion': 'no label', 'amenity': 'no label', 'tourism': 'no label', 'building:levels': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'type': 'no label', 'toilets:wheelchair': 'no label', 'ruins': 'no label', 'roof:shape': 'no label', 'roof:material': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'name:ru': 'no label', 'name:fr': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name': 'no label', 'historic:civilization': 'no label', 'historic': 'no label', 'height': 'no label', 'email': 'no label', 'contact:facebook': 'no label', 'building:material': 'no label', 'alt_name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'access': 'no label', });
lyr_cnotstrade_2_40.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'level': 'no label', 'operator': 'no label', 'network:wikidata': 'no label', 'horse': 'no label', 'golf': 'no label', 'crossing:markings': 'no label', 'crossing': 'no label', 'arcade:right': 'no label', 'departures_board': 'no label', 'bin': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'placement': 'no label', 'maxspeed:type': 'no label', 'turn:lanes:backward': 'no label', 'maxheight': 'no label', 'crossing_ref': 'no label', 'maxweight:signed': 'no label', 'covered': 'no label', 'parking:left:orientation': 'no label', 'parking:left': 'no label', 'tactile_paving': 'no label', 'footway': 'no label', 'step_count': 'no label', 'cycleway:left': 'no label', 'ref': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'informal': 'no label', 'junction': 'no label', 'sidewalk:right': 'no label', 'sidewalk:left': 'no label', 'motorcar': 'no label', 'tracktype': 'no label', 'hgv': 'no label', 'tunnel': 'no label', 'smoothness': 'no label', 'width': 'no label', 'source:maxspeed': 'no label', 'vehicle:lanes': 'no label', 'psv:lanes:forward': 'no label', 'lanes:backward': 'no label', 'access:lanes:forward': 'no label', 'shelter': 'no label', 'network': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'bench': 'no label', 'turn:lanes': 'no label', 'old_ref': 'no label', 'bridge': 'no label', 'segregated': 'no label', 'check_date:surface': 'no label', 'historic': 'no label', 'access': 'no label', 'cycleway:right': 'no label', 'parking:both:orientation': 'no label', 'parking:both': 'no label', 'layer': 'no label', 'cycleway': 'no label', 'parking:right:orientation': 'no label', 'parking:right': 'no label', 'sidewalk:both:surface': 'no label', 'loc_name': 'no label', 'area': 'no label', 'short_name': 'no label', 'maxspeed': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'turn:lanes:forward': 'no label', 'lanes:forward': 'no label', 'lanes': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'alt_name': 'no label', 'sidewalk:both': 'no label', 'sidewalk': 'no label', 'oneway': 'no label', 'lit': 'no label', 'lane_markings': 'no label', 'cycleway:both': 'no label', 'motor_vehicle': 'no label', 'source:def': 'no label', 'service': 'no label', 'surface': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', });
lyr_highway_41.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'informal': 'no label', 'public_transport': 'no label', 'network': 'no label', 'bus': 'no label', 'maxweight:signed': 'no label', 'cycleway:right': 'no label', 'ref': 'no label', 'sidewalk:both': 'no label', 'junction': 'no label', 'destination:forward': 'no label', 'destination:backward': 'no label', 'tunnel': 'no label', 'access': 'no label', 'service': 'no label', 'destination:symbol': 'no label', 'destination:colour': 'no label', 'destination': 'no label', 'turn:lanes': 'no label', 'segregated': 'no label', 'cutting': 'no label', 'sidewalk:right': 'no label', 'cycleway:both': 'no label', 'lane_markings': 'no label', 'oneway': 'no label', 'motor_vehicle': 'no label', 'layer': 'no label', 'horse': 'no label', 'foot': 'no label', 'bridge': 'no label', 'width': 'no label', 'surface': 'no label', 'source:maxspeed': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lit': 'no label', 'lanes': 'no label', 'bicycle': 'no label', });
lyr_highway_42.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'turn:lanes': 'no label', 'covered': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'network': 'no label', 'bus': 'no label', 'bin': 'no label', 'bench': 'no label', 'horse': 'no label', 'cycleway': 'no label', 'level': 'no label', 'toilets': 'no label', 'turn:lanes:forward': 'no label', 'wheelchair': 'no label', 'source:maxspeed': 'no label', 'shoulder': 'no label', 'embankment': 'no label', 'maxweight:signed': 'no label', 'turn:lanes:backward': 'no label', 'loc_name': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'cycleway:left': 'no label', 'width': 'no label', 'sidewalk:both': 'no label', 'lit': 'no label', 'tunnel': 'no label', 'junction': 'no label', 'tracktype': 'no label', 'access': 'no label', 'lane_markings': 'no label', 'sidewalk': 'no label', 'cycleway:both': 'no label', 'cycleway:right': 'no label', 'segregated': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'service': 'no label', 'layer': 'no label', 'bridge': 'no label', 'toll': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'name': 'no label', });
lyr_highway_43.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_building_44.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'power': 'no label', 'design': 'no label', 'amenity': 'no label', 'shop': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:housename': 'no label', 'entrance': 'no label', 'barrier': 'no label', });
lyr_building_45.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'takeaway': 'no label', 'drive_through': 'no label', 'brand:wikipedia': 'no label', 'ref:mise': 'no label', 'fuel:octane_95': 'no label', 'fuel:octane_100': 'no label', 'fuel:lpg': 'no label', 'fuel:diesel': 'no label', 'fuel:GTL_diesel': 'no label', 'wikipedia': 'no label', 'layer': 'no label', 'power': 'no label', 'generator:source': 'no label', 'generator:output:electricity': 'no label', 'website': 'no label', 'branch': 'no label', 'wheelchair': 'no label', 'second_hand': 'no label', 'safety_inspection': 'no label', 'repair': 'no label', 'rental': 'no label', 'payment:visa_electron': 'no label', 'payment:visa_debit': 'no label', 'payment:visa': 'no label', 'payment:notes': 'no label', 'payment:mastercard': 'no label', 'payment:maestro': 'no label', 'payment:diners_club': 'no label', 'payment:contactless': 'no label', 'payment:coins': 'no label', 'payment:bancomat': 'no label', 'parts': 'no label', 'clothes': 'no label', 'addr:province': 'no label', 'man_made': 'no label', 'cuisine': 'no label', 'addr:postcode': 'no label', 'ruins': 'no label', 'wikidata': 'no label', 'religion': 'no label', 'amenity': 'no label', 'industrial': 'no label', 'tourism': 'no label', 'brand:wikidata': 'no label', 'height': 'no label', 'building:levels': 'no label', 'addr:city': 'no label', 'brand': 'no label', 'name': 'no label', 'shop': 'no label', 'operator': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'type': 'no label', });
lyr_cnotEdifici_46.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'religion': 'no label', 'denomination': 'no label', 'amenity': 'no label', 'name': 'no label', });
lyr_Telecamere_47.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nome': 'no label', 'tipo': 'no label', 'note': 'no label', });
lyr_Semafori_48.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'crossing:island': 'no label', 'supervised': 'no label', 'traffic_signals:direction': 'no label', 'traffic_signals': 'no label', 'traffic_signals:vibration': 'no label', 'traffic_signals:sound': 'no label', 'tactile_paving': 'no label', 'crossing': 'no label', 'button_operated': 'no label', 'source:def': 'no label', 'name': 'no label', });
lyr_cnotTinyhouses_49.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Proprietario': 'no label', });
lyr_cnotparcheggiodroni_50.set('fieldLabels', {'fid': 'no label', });
lyr_nuclear_reactors_europe_all_51.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'country': 'no label', 'country_code': 'no label', 'status': 'no label', 'status_class': 'no label', 'reactor_type': 'no label', 'reactor_model': 'no label', 'construction_start_at': 'no label', 'operational_from': 'no label', 'operational_to': 'no label', 'temporal_start': 'no label', 'temporal_end': 'no label', 'capacity_mwe': 'no label', 'last_updated_at': 'no label', 'source': 'no label', 'iaea_id': 'no label', 'dataset_region': 'no label', 'geometry_note': 'no label', });
lyr_energy_opsd_all_except_nuclear_52.set('fieldLabels', {'plant_id': 'no label', 'name': 'no label', 'country': 'no label', 'capacity_mw': 'no label', 'energy_source': 'no label', 'energy_group': 'no label', 'technology': 'no label', 'status': 'no label', 'commissioned': 'no label', 'shutdown': 'no label', 'is_shutdown': 'no label', 'temporal_start': 'no label', 'temporal_end': 'no label', 'temporal_end_source': 'no label', 'temporal_basis': 'no label', 'company': 'no label', 'city': 'no label', 'state': 'no label', 'eic_code': 'no label', 'energy_source_level_1': 'no label', 'energy_source_level_2': 'no label', 'energy_source_level_3': 'no label', 'original_source': 'no label', 'source_dataset': 'no label', 'source_url': 'no label', });
lyr_ai_compute_relations_53.set('fieldLabels', {'id': 'no label', 'from_id': 'no label', 'from_name': 'no label', 'from_type': 'no label', 'to_id': 'no label', 'to_name': 'no label', 'to_type': 'no label', 'relation_type': 'no label', 'relation_label': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_ai_supercomputers_54.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'short_name': 'no label', 'country': 'no label', 'city': 'no label', 'host_entity': 'no label', 'linked_ai_factory_ids': 'no label', 'linked_ai_factories': 'no label', 'system_role': 'no label', 'system_class': 'no label', 'status': 'no label', 'sustained_pf': 'no label', 'peak_pf': 'no label', 'ai_peak_pf': 'no label', 'accelerator_or_gpu': 'no label', 'cpu': 'no label', 'storage': 'no label', 'supplier': 'no label', 'applications': 'no label', 'source': 'no label', 'coordinate_precision': 'no label', 'notes': 'no label', });
lyr_ai_relations_55.set('fieldLabels', {'id': 'no label', 'from_id': 'no label', 'from_name': 'no label', 'from_type': 'no label', 'to_id': 'no label', 'to_name': 'no label', 'to_type': 'no label', 'relation_type': 'no label', 'relation_label': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_ai_factories_56.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'short_name': 'no label', 'country': 'no label', 'city': 'no label', 'factory_type': 'no label', 'selection_batch': 'no label', 'host_entity': 'no label', 'supercomputer_or_system': 'no label', 'compute_note': 'no label', 'key_sectors': 'no label', 'partner_countries': 'no label', 'antennas': 'no label', 'services_available_from': 'no label', 'status': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_ai_actors_57.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'short_name': 'no label', 'actor_type': 'no label', 'country': 'no label', 'city': 'no label', 'main_domain': 'no label', 'role': 'no label', 'related_factories': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_qt_relations_58.set('fieldLabels', {'id': 'no label', 'from_id': 'no label', 'from_name': 'no label', 'from_type': 'no label', 'to_id': 'no label', 'to_name': 'no label', 'to_type': 'no label', 'relation_type': 'no label', 'relation_label': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_qt_infrastructures_59.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'host': 'no label', 'city': 'no label', 'country': 'no label', 'technology': 'no label', 'platform': 'no label', 'topology': 'no label', 'qubits': 'no label', 'supplier': 'no label', 'hosting_supercomputer': 'no label', 'power_consumption': 'no label', 'cooling_system': 'no label', 'status': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_qt_actors_60.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'short_name': 'no label', 'actor_type': 'no label', 'city': 'no label', 'country': 'no label', 'main_domain': 'no label', 'platform': 'no label', 'role': 'no label', 'developed_what': 'no label', 'related_infrastructures': 'no label', 'status': 'no label', 'coordinate_precision': 'no label', 'source': 'no label', 'notes': 'no label', });
lyr_datacenter_61.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'company': 'no label', 'city': 'no label', 'state': 'no label', 'country': 'no label', 'address': 'no label', });
lyr_fpga_infrastructures_europe_62.set('fieldLabels', {'id': 'no label', 'site_name': 'no label', 'city': 'no label', 'country': 'no label', 'operator': 'no label', 'infra_type': 'no label', 'status': 'no label', 'location_type': 'no label', 'access_model': 'no label', 'fpga_vendor': 'no label', 'fpga_model': 'no label', 'fpga_count': 'no label', 'count_known': 'no label', 'medical_ai': 'no label', 'story_order': 'no label', 'story_phase': 'no label', 'source_url': 'no label', 'verified_on': 'no label', });
lyr_cnoteurope_63.set('fieldLabels', {'fid': 'no label', 'featurecla': 'no label', 'scalerank': 'no label', 'labelrank': 'no label', 'sovereignt': 'no label', 'sov_a3': 'no label', 'adm0_dif': 'no label', 'level': 'no label', 'type': 'no label', 'tlc': 'no label', 'admin': 'no label', 'adm0_a3': 'no label', 'geou_dif': 'no label', 'geounit': 'no label', 'gu_a3': 'no label', 'su_dif': 'no label', 'subunit': 'no label', 'su_a3': 'no label', 'brk_diff': 'no label', 'name': 'no label', 'name_long': 'no label', 'brk_a3': 'no label', 'brk_name': 'no label', 'brk_group': 'no label', 'abbrev': 'no label', 'postal': 'no label', 'formal_en': 'no label', 'formal_fr': 'no label', 'name_ciawf': 'no label', 'note_adm0': 'no label', 'note_brk': 'no label', 'name_sort': 'no label', 'name_alt': 'no label', 'mapcolor7': 'no label', 'mapcolor8': 'no label', 'mapcolor9': 'no label', 'mapcolor13': 'no label', 'pop_est': 'no label', 'pop_rank': 'no label', 'pop_year': 'no label', 'gdp_md': 'no label', 'gdp_year': 'no label', 'economy': 'no label', 'income_grp': 'no label', 'fips_10': 'no label', 'iso_a2': 'no label', 'iso_a2_eh': 'no label', 'iso_a3': 'no label', 'iso_a3_eh': 'no label', 'iso_n3': 'no label', 'iso_n3_eh': 'no label', 'un_a3': 'no label', 'wb_a2': 'no label', 'wb_a3': 'no label', 'woe_id': 'no label', 'woe_id_eh': 'no label', 'woe_note': 'no label', 'adm0_iso': 'no label', 'adm0_diff': 'no label', 'adm0_tlc': 'no label', 'adm0_a3_us': 'no label', 'adm0_a3_fr': 'no label', 'adm0_a3_ru': 'no label', 'adm0_a3_es': 'no label', 'adm0_a3_cn': 'no label', 'adm0_a3_tw': 'no label', 'adm0_a3_in': 'no label', 'adm0_a3_np': 'no label', 'adm0_a3_pk': 'no label', 'adm0_a3_de': 'no label', 'adm0_a3_gb': 'no label', 'adm0_a3_br': 'no label', 'adm0_a3_il': 'no label', 'adm0_a3_ps': 'no label', 'adm0_a3_sa': 'no label', 'adm0_a3_eg': 'no label', 'adm0_a3_ma': 'no label', 'adm0_a3_pt': 'no label', 'adm0_a3_ar': 'no label', 'adm0_a3_jp': 'no label', 'adm0_a3_ko': 'no label', 'adm0_a3_vn': 'no label', 'adm0_a3_tr': 'no label', 'adm0_a3_id': 'no label', 'adm0_a3_pl': 'no label', 'adm0_a3_gr': 'no label', 'adm0_a3_it': 'no label', 'adm0_a3_nl': 'no label', 'adm0_a3_se': 'no label', 'adm0_a3_bd': 'no label', 'adm0_a3_ua': 'no label', 'adm0_a3_un': 'no label', 'adm0_a3_wb': 'no label', 'continent': 'no label', 'region_un': 'no label', 'subregion': 'no label', 'region_wb': 'no label', 'name_len': 'no label', 'long_len': 'no label', 'abbrev_len': 'no label', 'tiny': 'no label', 'homepart': 'no label', 'min_zoom': 'no label', 'min_label': 'no label', 'max_label': 'no label', 'label_x': 'no label', 'label_y': 'no label', 'ne_id': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fa': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_he': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'name_zht': 'no label', 'fclass_iso': 'no label', 'tlc_diff': 'no label', 'fclass_tlc': 'no label', 'fclass_us': 'no label', 'fclass_fr': 'no label', 'fclass_ru': 'no label', 'fclass_es': 'no label', 'fclass_cn': 'no label', 'fclass_tw': 'no label', 'fclass_in': 'no label', 'fclass_np': 'no label', 'fclass_pk': 'no label', 'fclass_de': 'no label', 'fclass_gb': 'no label', 'fclass_br': 'no label', 'fclass_il': 'no label', 'fclass_ps': 'no label', 'fclass_sa': 'no label', 'fclass_eg': 'no label', 'fclass_ma': 'no label', 'fclass_pt': 'no label', 'fclass_ar': 'no label', 'fclass_jp': 'no label', 'fclass_ko': 'no label', 'fclass_vn': 'no label', 'fclass_tr': 'no label', 'fclass_id': 'no label', 'fclass_pl': 'no label', 'fclass_gr': 'no label', 'fclass_it': 'no label', 'fclass_nl': 'no label', 'fclass_se': 'no label', 'fclass_bd': 'no label', 'fclass_ua': 'no label', 'filename': 'no label', });
lyr_cnoteurope_63.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});