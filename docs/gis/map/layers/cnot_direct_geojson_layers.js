/*
 * CNOT GIS — direct GeoJSON layers
 *
 * Loaded directly by OpenLayers, without qgis2web export.
 *
 * This file must be loaded AFTER layers/layers.js
 * and BEFORE resources/qgis2web.js.
 */


/* ============================================================
 * ROBOTICS
 * ============================================================ */

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

lyr_04_robotics_deployment.set(
    'cnotId',
    'robotics_deployment'
);

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


/* ============================================================
 * DORSALE SPAZIO — utility gruppi
 * ============================================================ */

function cnotFindGroup(collection, title) {

    var items = (
        collection &&
        typeof collection.getArray === 'function'
    )
        ? collection.getArray()
        : collection;

    if (!items) {
        return null;
    }

    for (var i = 0; i < items.length; i++) {

        var item = items[i];

        if (
            item &&
            typeof item.get === 'function' &&
            item.get('title') === title &&
            typeof item.getLayers === 'function'
        ) {
            return item;
        }
    }

    return null;
}


function cnotEnsureTopLevelGroup(title, cnotId) {

    var existing = cnotFindGroup(
        layersList,
        title
    );

    if (existing) {
        return existing;
    }

    var group = new ol.layer.Group({
        layers: [],
        fold: 'open',
        title: title
    });

    group.set(
        'cnotId',
        cnotId
    );

    layersList.push(group);

    return group;
}


function cnotEnsureChildGroup(parentGroup, title, cnotId) {

    var collection =
        parentGroup.getLayers();

    var existing =
        cnotFindGroup(
            collection,
            title
        );

    if (existing) {
        return existing;
    }

    var group = new ol.layer.Group({
        layers: [],
        fold: 'open',
        title: title
    });

    group.set(
        'cnotId',
        cnotId
    );

    collection.push(group);

    return group;
}


function cnotAddLayerOnce(group, layer) {

    var collection =
        group.getLayers();

    if (
        !collection
            .getArray()
            .includes(layer)
    ) {
        collection.push(layer);
    }
}


/* ============================================================
 * STILE DORSALE SPAZIO
 *
 * Usa "label" se disponibile.
 * Altrimenti usa "name".
 * ============================================================ */

function cnotSpacePointStyle(feature) {

    var label =
        feature.get('label') ||
        feature.get('name') ||
        '';

    return new ol.style.Style({

        image: new ol.style.Circle({

            radius: 6,

            fill: new ol.style.Fill({
                color: '#39ff14'
            }),

            stroke: new ol.style.Stroke({
                color: '#071007',
                width: 2
            })
        }),

        text: new ol.style.Text({

            text: label,

            offsetY: -14,

            font: '600 12px sans-serif',

            fill: new ol.style.Fill({
                color: '#eaffea'
            }),

            stroke: new ol.style.Stroke({
                color: '#020402',
                width: 3
            }),

            padding: [
                2,
                3,
                2,
                3
            ]
        })
    });
}


/* ============================================================
 * 01_CENTRI_ESA
 * ============================================================ */

var source_spazio_centri_esa_2026 =
    new ol.source.Vector({

        url:
            './geojson/spazio_centri_esa_2026.geojson',

        format:
            new ol.format.GeoJSON()
    });


var lyr_spazio_centri_esa_2026 =
    new ol.layer.Vector({

        source:
            source_spazio_centri_esa_2026,

        title:
            'spazio_centri_esa_2026',

        popuplayertitle:
            'Centri ESA · 2026',

        interactive:
            true,

        style:
            cnotSpacePointStyle
    });


lyr_spazio_centri_esa_2026.set(
    'cnotId',
    'spazio_centri_esa_2026'
);


lyr_spazio_centri_esa_2026.set('fieldAliases', {
    'id': 'id',
    'name': 'name',
    'label': 'label',
    'dorsal': 'dorsal',
    'layer_status': 'layer_status',
    'place': 'place',
    'function': 'function',
    'coordinate_precision': 'coordinate_precision',
    'source': 'source'
});


lyr_spazio_centri_esa_2026.set('fieldImages', {
    'id': 'TextEdit',
    'name': 'TextEdit',
    'label': 'TextEdit',
    'dorsal': 'TextEdit',
    'layer_status': 'TextEdit',
    'place': 'TextEdit',
    'function': 'TextEdit',
    'coordinate_precision': 'TextEdit',
    'source': 'TextEdit'
});


lyr_spazio_centri_esa_2026.set('fieldLabels', {
    'id': 'no label',
    'name': 'no label',
    'label': 'no label',
    'dorsal': 'no label',
    'layer_status': 'no label',
    'place': 'no label',
    'function': 'no label',
    'coordinate_precision': 'no label',
    'source': 'no label'
});


lyr_spazio_centri_esa_2026
    .setVisible(true);


/* ============================================================
 * 02_GALILEO_EUSPA
 * ============================================================ */

var source_spazio_galileo_euspa_2026 =
    new ol.source.Vector({

        url:
            './geojson/spazio_galileo_euspa_2026.geojson',

        format:
            new ol.format.GeoJSON()
    });


var lyr_spazio_galileo_euspa_2026 =
    new ol.layer.Vector({

        source:
            source_spazio_galileo_euspa_2026,

        title:
            'spazio_galileo_euspa_2026',

        popuplayertitle:
            'Galileo / EUSPA · 2026',

        interactive:
            true,

        style:
            cnotSpacePointStyle
    });


lyr_spazio_galileo_euspa_2026.set(
    'cnotId',
    'spazio_galileo_euspa_2026'
);


lyr_spazio_galileo_euspa_2026.set('fieldAliases', {
    'id': 'id',
    'name': 'name',
    'label': 'label',
    'dorsal': 'dorsal',
    'subgroup': 'subgroup',
    'layer_status': 'layer_status',
    'place': 'place',
    'function': 'function',
    'address': 'address',
    'coordinate_precision': 'coordinate_precision',
    'source_primary': 'source_primary',
    'source_coordinates': 'source_coordinates',
    'note': 'note'
});


lyr_spazio_galileo_euspa_2026.set('fieldImages', {
    'id': 'TextEdit',
    'name': 'TextEdit',
    'label': 'TextEdit',
    'dorsal': 'TextEdit',
    'subgroup': 'TextEdit',
    'layer_status': 'TextEdit',
    'place': 'TextEdit',
    'function': 'TextEdit',
    'address': 'TextEdit',
    'coordinate_precision': 'TextEdit',
    'source_primary': 'TextEdit',
    'source_coordinates': 'TextEdit',
    'note': 'TextEdit'
});


lyr_spazio_galileo_euspa_2026.set('fieldLabels', {
    'id': 'no label',
    'name': 'no label',
    'label': 'no label',
    'dorsal': 'no label',
    'subgroup': 'no label',
    'layer_status': 'no label',
    'place': 'no label',
    'function': 'no label',
    'address': 'no label',
    'coordinate_precision': 'no label',
    'source_primary': 'no label',
    'source_coordinates': 'no label',
    'note': 'no label'
});


lyr_spazio_galileo_euspa_2026
    .setVisible(true);


/* ============================================================
 * 03_COPERNICUS_EUMETSAT
 * ============================================================ */

var source_spazio_copernicus_eumetsat_2026 =
    new ol.source.Vector({

        url:
            './geojson/spazio_copernicus_eumetsat_2026.geojson',

        format:
            new ol.format.GeoJSON()
    });


var lyr_spazio_copernicus_eumetsat_2026 =
    new ol.layer.Vector({

        source:
            source_spazio_copernicus_eumetsat_2026,

        title:
            'spazio_copernicus_eumetsat_2026',

        popuplayertitle:
            'Copernicus / EUMETSAT · 2026',

        interactive:
            true,

        style:
            cnotSpacePointStyle
    });


lyr_spazio_copernicus_eumetsat_2026.set(
    'cnotId',
    'spazio_copernicus_eumetsat_2026'
);


lyr_spazio_copernicus_eumetsat_2026.set('fieldAliases', {
    'id': 'id',
    'name': 'name',
    'label': 'label',
    'place': 'place',
    'organisation': 'organisation',
    'role': 'role',
    'services': 'services',
    'layer_status': 'layer_status',
    'address': 'address',
    'coordinate_precision': 'coordinate_precision',
    'source_primary': 'source_primary',
    'source_address': 'source_address',
    'source_role': 'source_role'
});


lyr_spazio_copernicus_eumetsat_2026.set('fieldImages', {
    'id': 'TextEdit',
    'name': 'TextEdit',
    'label': 'TextEdit',
    'place': 'TextEdit',
    'organisation': 'TextEdit',
    'role': 'TextEdit',
    'services': 'TextEdit',
    'layer_status': 'TextEdit',
    'address': 'TextEdit',
    'coordinate_precision': 'TextEdit',
    'source_primary': 'TextEdit',
    'source_address': 'TextEdit',
    'source_role': 'TextEdit'
});


lyr_spazio_copernicus_eumetsat_2026.set('fieldLabels', {
    'id': 'no label',
    'name': 'no label',
    'label': 'no label',
    'place': 'no label',
    'organisation': 'no label',
    'role': 'no label',
    'services': 'no label',
    'layer_status': 'no label',
    'address': 'no label',
    'coordinate_precision': 'no label',
    'source_primary': 'no label',
    'source_address': 'no label',
    'source_role': 'no label'
});


lyr_spazio_copernicus_eumetsat_2026
    .setVisible(true);


/* ============================================================
 * STRUTTURA GRUPPI SPAZIO
 * ============================================================ */

var group_11_SPAZIO_direct =
    cnotEnsureTopLevelGroup(
        '11_SPAZIO',
        'spazio'
    );


var group_01_CENTRI_ESA_direct =
    cnotEnsureChildGroup(
        group_11_SPAZIO_direct,
        '01_CENTRI_ESA',
        'spazio_centri_esa'
    );


var group_02_GALILEO_EUSPA_direct =
    cnotEnsureChildGroup(
        group_11_SPAZIO_direct,
        '02_GALILEO_EUSPA',
        'spazio_galileo_euspa'
    );


var group_03_COPERNICUS_EUMETSAT_direct =
    cnotEnsureChildGroup(
        group_11_SPAZIO_direct,
        '03_COPERNICUS_EUMETSAT',
        'spazio_copernicus_eumetsat'
    );


/* ============================================================
 * INSERIMENTO LAYER NEI GRUPPI
 * ============================================================ */

cnotAddLayerOnce(
    group_01_CENTRI_ESA_direct,
    lyr_spazio_centri_esa_2026
);


cnotAddLayerOnce(
    group_02_GALILEO_EUSPA_direct,
    lyr_spazio_galileo_euspa_2026
);


cnotAddLayerOnce(
    group_03_COPERNICUS_EUMETSAT_direct,
    lyr_spazio_copernicus_eumetsat_2026
);
