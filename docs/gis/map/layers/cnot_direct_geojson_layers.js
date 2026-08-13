/*
 * CNOT GIS — direct GeoJSON layer test
 *
 * First layer loaded directly by OpenLayers, without qgis2web export.
 * Data source:
 *   geojson/04_robotics_deployment.geojson
 *
 * This file must be loaded AFTER layers/layers.js
 * and BEFORE resources/qgis2web.js.
 */

var source_04_robotics_deployment = new ol.source.Vector({
    url: './geojson/04_robotics_deployment.geojson',
    format: new ol.format.GeoJSON()
});

var lyr_04_robotics_deployment = new ol.layer.Vector({
    source: source_04_robotics_deployment,
    title: '04_robotics_deployment',
    popuplayertitle: '04_robotics_deployment',
    interactive: true
});

lyr_04_robotics_deployment.set('cnotId', 'robotics_deployment');

lyr_04_robotics_deployment.set('fieldAliases', {
    'id': 'id',
    'name': 'name',
    'country': 'country',
    'city': 'city',
    'stage': 'stage',
    'category': 'category',
    'organisation': 'organisation',
    'robot_system': 'robot_system',
    'technology_provider': 'technology_provider',
    'function': 'function',
    'application': 'application',
    'status': 'status',
    'year': 'year',
    'description': 'description',
    'address': 'address',
    'source_label': 'source_label',
    'source_url': 'source_url',
    'coordinate_source_label': 'coordinate_source_label',
    'coordinate_precision': 'coordinate_precision'
});

lyr_04_robotics_deployment.set('fieldImages', {
    'id': 'TextEdit',
    'name': 'TextEdit',
    'country': 'TextEdit',
    'city': 'TextEdit',
    'stage': 'TextEdit',
    'category': 'TextEdit',
    'organisation': 'TextEdit',
    'robot_system': 'TextEdit',
    'technology_provider': 'TextEdit',
    'function': 'TextEdit',
    'application': 'TextEdit',
    'status': 'TextEdit',
    'year': 'TextEdit',
    'description': 'TextEdit',
    'address': 'TextEdit',
    'source_label': 'TextEdit',
    'source_url': 'TextEdit',
    'coordinate_source_label': 'TextEdit',
    'coordinate_precision': 'TextEdit'
});

lyr_04_robotics_deployment.set('fieldLabels', {
    'id': 'no label',
    'name': 'no label',
    'country': 'no label',
    'city': 'no label',
    'stage': 'no label',
    'category': 'no label',
    'organisation': 'no label',
    'robot_system': 'no label',
    'technology_provider': 'no label',
    'function': 'no label',
    'application': 'no label',
    'status': 'no label',
    'year': 'no label',
    'description': 'no label',
    'address': 'no label',
    'source_label': 'no label',
    'source_url': 'no label',
    'coordinate_source_label': 'no label',
    'coordinate_precision': 'no label'
});

lyr_04_robotics_deployment.setVisible(true);
if (!group_Robotics
        .getLayers()
        .getArray()
        .includes(lyr_04_robotics_deployment)) {

    group_Robotics
        .getLayers()
        .push(lyr_04_robotics_deployment);
}

if (!layersList.includes(group_Robotics)) {
    layersList.push(group_Robotics);
}
