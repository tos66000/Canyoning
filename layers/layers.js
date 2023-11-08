var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

    var projection_CartetopographiqueIGNScan25_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_CartetopographiqueIGNScan25_1 = projection_CartetopographiqueIGNScan25_1.getExtent();
    var size_CartetopographiqueIGNScan25_1 = ol.extent.getWidth(projectionExtent_CartetopographiqueIGNScan25_1) / 256;
    var resolutions_CartetopographiqueIGNScan25_1 = new Array(14);
    var matrixIds_CartetopographiqueIGNScan25_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_CartetopographiqueIGNScan25_1[z] = size_CartetopographiqueIGNScan25_1 / Math.pow(2, z);
        matrixIds_CartetopographiqueIGNScan25_1[z] = z;
    }
    var lyr_CartetopographiqueIGNScan25_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://wxs.ign.fr/osb72ng7nucxdqey35fo5fpk/geoportail/wmts?SERVICE=WMTS&REQUEST=GetCapabilities",
    attributions: ' ',
                                "layer": "GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_CartetopographiqueIGNScan25_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_CartetopographiqueIGNScan25_1),
                resolutions: resolutions_CartetopographiqueIGNScan25_1,
                matrixIds: matrixIds_CartetopographiqueIGNScan25_1
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Carte topographique (IGN Scan25)",
                            opacity: 1.0,
                            
                            
                          });
var format_tracking_test_2 = new ol.format.GeoJSON();
var features_tracking_test_2 = format_tracking_test_2.readFeatures(json_tracking_test_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracking_test_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracking_test_2.addFeatures(features_tracking_test_2);
var lyr_tracking_test_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracking_test_2, 
                style: style_tracking_test_2,
                interactive: true,
                title: '<img src="styles/legend/tracking_test_2.png" /> tracking_test'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_CartetopographiqueIGNScan25_1,lyr_tracking_test_2,],
                                title: "group1"});

lyr_OpenStreetMap_0.setVisible(true);lyr_CartetopographiqueIGNScan25_1.setVisible(true);lyr_tracking_test_2.setVisible(true);
var layersList = [group_group1];
lyr_tracking_test_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_canyon': 'nom_canyon', 'date': 'date', });
lyr_tracking_test_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'nom_canyon': 'TextEdit', 'date': 'DateTime', });
lyr_tracking_test_2.set('fieldLabels', {});
lyr_tracking_test_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});