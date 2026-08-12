var size = 0;
var placement = 'point';

var style_09_hydrogen_incremental_test_81 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var labelFont = "bold 14.0px 'Open Sans', sans-serif";
    var labelFill = "#ffff00";
    var bufferColor = "#000000";
    var bufferWidth = 2;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }

    var style = [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 8.0 + size,
            displacement: [0, 0],
            stroke: new ol.style.Stroke({
                color: 'rgba(255,255,255,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 2.0
            }),
            fill: new ol.style.Fill({
                color: 'rgba(255,0,255,1.0)'
            })
        }),
        text: createTextStyle(
            feature, resolution, labelText, labelFont,
            labelFill, placement, bufferColor, bufferWidth
        )
    })];

    return style;
};
