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
var format_20240103_3_janv_2024_12_10_14tracks_3 = new ol.format.GeoJSON();
var features_20240103_3_janv_2024_12_10_14tracks_3 = format_20240103_3_janv_2024_12_10_14tracks_3.readFeatures(json_20240103_3_janv_2024_12_10_14tracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20240103_3_janv_2024_12_10_14tracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20240103_3_janv_2024_12_10_14tracks_3.addFeatures(features_20240103_3_janv_2024_12_10_14tracks_3);
var lyr_20240103_3_janv_2024_12_10_14tracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20240103_3_janv_2024_12_10_14tracks_3, 
                style: style_20240103_3_janv_2024_12_10_14tracks_3,
                interactive: true,
                title: '<img src="styles/legend/20240103_3_janv_2024_12_10_14tracks_3.png" /> 2024-01-03_3_janv._2024_12_10_14 — tracks'
            });
var format_20240103_3_janv_2024_12_10_143janv2024121014_4 = new ol.format.GeoJSON();
var features_20240103_3_janv_2024_12_10_143janv2024121014_4 = format_20240103_3_janv_2024_12_10_143janv2024121014_4.readFeatures(json_20240103_3_janv_2024_12_10_143janv2024121014_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20240103_3_janv_2024_12_10_143janv2024121014_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20240103_3_janv_2024_12_10_143janv2024121014_4.addFeatures(features_20240103_3_janv_2024_12_10_143janv2024121014_4);
var lyr_20240103_3_janv_2024_12_10_143janv2024121014_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20240103_3_janv_2024_12_10_143janv2024121014_4, 
                style: style_20240103_3_janv_2024_12_10_143janv2024121014_4,
                interactive: true,
                title: '2024-01-03_3_janv._2024_12_10_14 — 3 janv. 2024 12:10:14'
            });
var format_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5 = new ol.format.GeoJSON();
var features_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5 = format_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5.readFeatures(json_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5.addFeatures(features_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5);
var lyr_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5, 
                style: style_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5,
                interactive: true,
                title: '<img src="styles/legend/TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5.png" /> TronconHydrograElt_06_Rhône-Méditerranée-Corse — TronconHydrograElt_06_Rhône-Méditerranée-Corse.shp'
            });
var format_20240103_3_janv_2024_12_10_14track_points_6 = new ol.format.GeoJSON();
var features_20240103_3_janv_2024_12_10_14track_points_6 = format_20240103_3_janv_2024_12_10_14track_points_6.readFeatures(json_20240103_3_janv_2024_12_10_14track_points_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20240103_3_janv_2024_12_10_14track_points_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20240103_3_janv_2024_12_10_14track_points_6.addFeatures(features_20240103_3_janv_2024_12_10_14track_points_6);
var lyr_20240103_3_janv_2024_12_10_14track_points_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20240103_3_janv_2024_12_10_14track_points_6, 
                style: style_20240103_3_janv_2024_12_10_14track_points_6,
                interactive: true,
                title: '<img src="styles/legend/20240103_3_janv_2024_12_10_14track_points_6.png" /> 2024-01-03_3_janv._2024_12_10_14 — track_points'
            });
var format_partie_canyon_7 = new ol.format.GeoJSON();
var features_partie_canyon_7 = format_partie_canyon_7.readFeatures(json_partie_canyon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_partie_canyon_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_partie_canyon_7.addFeatures(features_partie_canyon_7);
var lyr_partie_canyon_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_partie_canyon_7, 
                style: style_partie_canyon_7,
                interactive: true,
                title: '<img src="styles/legend/partie_canyon_7.png" /> partie_canyon'
            });
var format_marche_8 = new ol.format.GeoJSON();
var features_marche_8 = format_marche_8.readFeatures(json_marche_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marche_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marche_8.addFeatures(features_marche_8);
var lyr_marche_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_marche_8, 
                style: style_marche_8,
                interactive: true,
                title: '<img src="styles/legend/marche_8.png" /> marche'
            });
var format_output_9 = new ol.format.GeoJSON();
var features_output_9 = format_output_9.readFeatures(json_output_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_output_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_output_9.addFeatures(features_output_9);
var lyr_output_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_output_9, 
                style: style_output_9,
                interactive: true,
                title: '<img src="styles/legend/output_9.png" /> output'
            });
var format_partie_canyon_10 = new ol.format.GeoJSON();
var features_partie_canyon_10 = format_partie_canyon_10.readFeatures(json_partie_canyon_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_partie_canyon_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_partie_canyon_10.addFeatures(features_partie_canyon_10);
var lyr_partie_canyon_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_partie_canyon_10, 
                style: style_partie_canyon_10,
                interactive: true,
                title: '<img src="styles/legend/partie_canyon_10.png" /> partie_canyon'
            });
var format_marche_11 = new ol.format.GeoJSON();
var features_marche_11 = format_marche_11.readFeatures(json_marche_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marche_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marche_11.addFeatures(features_marche_11);
var lyr_marche_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_marche_11, 
                style: style_marche_11,
                interactive: true,
                title: '<img src="styles/legend/marche_11.png" /> marche'
            });
var format_Marche_12 = new ol.format.GeoJSON();
var features_Marche_12 = format_Marche_12.readFeatures(json_Marche_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_12.addFeatures(features_Marche_12);
var lyr_Marche_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_12, 
                style: style_Marche_12,
                interactive: true,
                title: '<img src="styles/legend/Marche_12.png" /> Marche'
            });
var format_Marche_13 = new ol.format.GeoJSON();
var features_Marche_13 = format_Marche_13.readFeatures(json_Marche_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marche_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marche_13.addFeatures(features_Marche_13);
var lyr_Marche_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Marche_13, 
                style: style_Marche_13,
                interactive: true,
                title: '<img src="styles/legend/Marche_13.png" /> Marche'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_CartetopographiqueIGNScan25_1,lyr_tracking_test_2,lyr_20240103_3_janv_2024_12_10_14tracks_3,lyr_20240103_3_janv_2024_12_10_143janv2024121014_4,lyr_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5,lyr_20240103_3_janv_2024_12_10_14track_points_6,lyr_partie_canyon_7,lyr_marche_8,lyr_output_9,lyr_partie_canyon_10,lyr_marche_11,lyr_Marche_12,lyr_Marche_13,],
                                title: "group1"});

lyr_OpenStreetMap_0.setVisible(true);lyr_CartetopographiqueIGNScan25_1.setVisible(true);lyr_tracking_test_2.setVisible(true);lyr_20240103_3_janv_2024_12_10_14tracks_3.setVisible(true);lyr_20240103_3_janv_2024_12_10_143janv2024121014_4.setVisible(true);lyr_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5.setVisible(true);lyr_20240103_3_janv_2024_12_10_14track_points_6.setVisible(true);lyr_partie_canyon_7.setVisible(true);lyr_marche_8.setVisible(true);lyr_output_9.setVisible(true);lyr_partie_canyon_10.setVisible(true);lyr_marche_11.setVisible(true);lyr_Marche_12.setVisible(true);lyr_Marche_13.setVisible(true);
var layersList = [group_group1];
lyr_tracking_test_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_canyon': 'nom_canyon', 'date': 'date', });
lyr_20240103_3_janv_2024_12_10_14tracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'geotracker_meta': 'geotracker_meta', });
lyr_20240103_3_janv_2024_12_10_143janv2024121014_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5.set('fieldAliases', {'gid': 'gid', 'IdTronconH': 'IdTronconH', 'NumeroTron': 'NumeroTron', 'Etat': 'Etat', 'Sens': 'Sens', 'Largeur': 'Largeur', 'Nature': 'Nature', 'Navigable': 'Navigable', 'Gabarit': 'Gabarit', 'PosSol': 'PosSol', 'CdTronconH': 'CdTronconH', 'CdSousMili': 'CdSousMili', 'CdEntiteHy': 'CdEntiteHy', 'CdEntite_1': 'CdEntite_1', 'NomEntiteH': 'NomEntiteH', 'Candidat1': 'Candidat1', 'Toponyme2': 'Toponyme2', 'Candidat2': 'Candidat2', 'PkAmontTro': 'PkAmontTro', 'PkAvalTron': 'PkAvalTron', 'IDNoeudHyd': 'IDNoeudHyd', 'IDNoeudH_1': 'IDNoeudH_1', });
lyr_20240103_3_janv_2024_12_10_14track_points_6.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'geotracker_meta': 'geotracker_meta', });
lyr_partie_canyon_7.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_': 'track_seg_', 'track_se_1': 'track_se_1', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheigh': 'geoidheigh', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsd': 'ageofdgpsd', 'dgpsid': 'dgpsid', 'geotracker': 'geotracker', 'fid': 'fid', 'gid': 'gid', 'IdTronconH': 'IdTronconH', 'NumeroTron': 'NumeroTron', 'Etat': 'Etat', 'Sens': 'Sens', 'Largeur': 'Largeur', 'Nature': 'Nature', 'Navigable': 'Navigable', 'Gabarit': 'Gabarit', 'PosSol': 'PosSol', 'CdTronconH': 'CdTronconH', 'CdSousMili': 'CdSousMili', 'CdEntiteHy': 'CdEntiteHy', 'CdEntite_1': 'CdEntite_1', 'NomEntiteH': 'NomEntiteH', 'Candidat1': 'Candidat1', 'Toponyme2': 'Toponyme2', 'Candidat2': 'Candidat2', 'PkAmontTro': 'PkAmontTro', 'PkAvalTron': 'PkAvalTron', 'IDNoeudHyd': 'IDNoeudHyd', 'IDNoeudH_1': 'IDNoeudH_1', });
lyr_marche_8.set('fieldAliases', {'fid': 'fid', 'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'geotracker_meta': 'geotracker_meta', });
lyr_output_9.set('fieldAliases', {'gid': 'gid', 'IdTronconH': 'IdTronconH', 'NumeroTron': 'NumeroTron', 'Etat': 'Etat', 'Sens': 'Sens', 'Largeur': 'Largeur', 'Nature': 'Nature', 'Navigable': 'Navigable', 'Gabarit': 'Gabarit', 'PosSol': 'PosSol', 'CdTronconH': 'CdTronconH', 'CdSousMili': 'CdSousMili', 'CdEntiteHy': 'CdEntiteHy', 'CdEntite_1': 'CdEntite_1', 'NomEntiteH': 'NomEntiteH', 'Candidat1': 'Candidat1', 'Toponyme2': 'Toponyme2', 'Candidat2': 'Candidat2', 'PkAmontTro': 'PkAmontTro', 'PkAvalTron': 'PkAvalTron', 'IDNoeudHyd': 'IDNoeudHyd', 'IDNoeudH_1': 'IDNoeudH_1', });
lyr_partie_canyon_10.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'geotracker_meta': 'geotracker_meta', 'gid': 'gid', 'IdTronconH': 'IdTronconH', 'NumeroTron': 'NumeroTron', 'Etat': 'Etat', 'Sens': 'Sens', 'Largeur': 'Largeur', 'Nature': 'Nature', 'Navigable': 'Navigable', 'Gabarit': 'Gabarit', 'PosSol': 'PosSol', 'CdTronconH': 'CdTronconH', 'CdSousMili': 'CdSousMili', 'CdEntiteHy': 'CdEntiteHy', 'CdEntite_1': 'CdEntite_1', 'NomEntiteH': 'NomEntiteH', 'Candidat1': 'Candidat1', 'Toponyme2': 'Toponyme2', 'Candidat2': 'Candidat2', 'PkAmontTro': 'PkAmontTro', 'PkAvalTron': 'PkAvalTron', 'IDNoeudHyd': 'IDNoeudHyd', 'IDNoeudH_1': 'IDNoeudH_1', });
lyr_marche_11.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'geotracker_meta': 'geotracker_meta', });
lyr_Marche_12.set('fieldAliases', {'FID': 'FID', });
lyr_Marche_13.set('fieldAliases', {'FID': 'FID', });
lyr_tracking_test_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'nom_canyon': 'TextEdit', 'date': 'DateTime', });
lyr_20240103_3_janv_2024_12_10_14tracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'geotracker_meta': 'TextEdit', });
lyr_20240103_3_janv_2024_12_10_143janv2024121014_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5.set('fieldImages', {'gid': 'TextEdit', 'IdTronconH': 'TextEdit', 'NumeroTron': 'TextEdit', 'Etat': 'TextEdit', 'Sens': 'TextEdit', 'Largeur': 'TextEdit', 'Nature': 'TextEdit', 'Navigable': 'TextEdit', 'Gabarit': 'TextEdit', 'PosSol': 'TextEdit', 'CdTronconH': 'TextEdit', 'CdSousMili': 'TextEdit', 'CdEntiteHy': 'TextEdit', 'CdEntite_1': 'TextEdit', 'NomEntiteH': 'TextEdit', 'Candidat1': 'TextEdit', 'Toponyme2': 'TextEdit', 'Candidat2': 'TextEdit', 'PkAmontTro': 'TextEdit', 'PkAvalTron': 'TextEdit', 'IDNoeudHyd': 'TextEdit', 'IDNoeudH_1': 'TextEdit', });
lyr_20240103_3_janv_2024_12_10_14track_points_6.set('fieldImages', {'track_fid': 'Range', 'track_seg_id': 'Range', 'track_seg_point_id': 'Range', 'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', 'geotracker_meta': 'Range', });
lyr_partie_canyon_7.set('fieldImages', {'track_fid': '', 'track_seg_': '', 'track_se_1': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheigh': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsd': '', 'dgpsid': '', 'geotracker': '', 'fid': '', 'gid': '', 'IdTronconH': '', 'NumeroTron': '', 'Etat': '', 'Sens': '', 'Largeur': '', 'Nature': '', 'Navigable': '', 'Gabarit': '', 'PosSol': '', 'CdTronconH': '', 'CdSousMili': '', 'CdEntiteHy': '', 'CdEntite_1': '', 'NomEntiteH': '', 'Candidat1': '', 'Toponyme2': '', 'Candidat2': '', 'PkAmontTro': '', 'PkAvalTron': '', 'IDNoeudHyd': '', 'IDNoeudH_1': '', });
lyr_marche_8.set('fieldImages', {'fid': '', 'track_fid': '', 'track_seg_id': '', 'track_seg_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', 'geotracker_meta': '', });
lyr_output_9.set('fieldImages', {'gid': '', 'IdTronconH': '', 'NumeroTron': '', 'Etat': '', 'Sens': '', 'Largeur': '', 'Nature': '', 'Navigable': '', 'Gabarit': '', 'PosSol': '', 'CdTronconH': '', 'CdSousMili': '', 'CdEntiteHy': '', 'CdEntite_1': '', 'NomEntiteH': '', 'Candidat1': '', 'Toponyme2': '', 'Candidat2': '', 'PkAmontTro': '', 'PkAvalTron': '', 'IDNoeudHyd': '', 'IDNoeudH_1': '', });
lyr_partie_canyon_10.set('fieldImages', {'track_fid': '', 'track_seg_id': '', 'track_seg_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', 'geotracker_meta': '', 'gid': '', 'IdTronconH': '', 'NumeroTron': '', 'Etat': '', 'Sens': '', 'Largeur': '', 'Nature': '', 'Navigable': '', 'Gabarit': '', 'PosSol': '', 'CdTronconH': '', 'CdSousMili': '', 'CdEntiteHy': '', 'CdEntite_1': '', 'NomEntiteH': '', 'Candidat1': '', 'Toponyme2': '', 'Candidat2': '', 'PkAmontTro': '', 'PkAvalTron': '', 'IDNoeudHyd': '', 'IDNoeudH_1': '', });
lyr_marche_11.set('fieldImages', {'track_fid': '', 'track_seg_id': '', 'track_seg_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', 'geotracker_meta': '', });
lyr_Marche_12.set('fieldImages', {'FID': 'TextEdit', });
lyr_Marche_13.set('fieldImages', {'FID': '', });
lyr_tracking_test_2.set('fieldLabels', {});
lyr_20240103_3_janv_2024_12_10_14tracks_3.set('fieldLabels', {});
lyr_20240103_3_janv_2024_12_10_143janv2024121014_4.set('fieldLabels', {});
lyr_TronconHydrograElt_06_RhneMditerraneCorseTronconHydrograElt_06_RhneMditerraneCorseshp_5.set('fieldLabels', {});
lyr_20240103_3_janv_2024_12_10_14track_points_6.set('fieldLabels', {});
lyr_partie_canyon_7.set('fieldLabels', {});
lyr_marche_8.set('fieldLabels', {});
lyr_output_9.set('fieldLabels', {});
lyr_partie_canyon_10.set('fieldLabels', {});
lyr_marche_11.set('fieldLabels', {});
lyr_Marche_12.set('fieldLabels', {});
lyr_Marche_13.set('fieldLabels', {});
lyr_Marche_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});