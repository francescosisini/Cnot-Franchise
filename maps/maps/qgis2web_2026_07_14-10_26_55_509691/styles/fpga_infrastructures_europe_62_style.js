var size = 0;
var placement = 'point';

var style_fpga_infrastructures_europe_62 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#e6f3f0";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("site_name") !== null) {
        labelText = String(feature.get("site_name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 4,
            angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(215,25,41,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 5.319999999999999}), fill: new ol.style.Fill({color: 'rgba(201,46,56,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
