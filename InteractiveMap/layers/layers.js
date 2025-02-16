var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SaltLakeCounty_1 = new ol.format.GeoJSON();
var features_SaltLakeCounty_1 = format_SaltLakeCounty_1.readFeatures(json_SaltLakeCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLakeCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLakeCounty_1.addFeatures(features_SaltLakeCounty_1);
var lyr_SaltLakeCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLakeCounty_1, 
                style: style_SaltLakeCounty_1,
                popuplayertitle: 'Salt Lake County',
                interactive: false,
                title: '<img src="styles/legend/SaltLakeCounty_1.png" /> Salt Lake County'
            });
var format_Censustract_2 = new ol.format.GeoJSON();
var features_Censustract_2 = format_Censustract_2.readFeatures(json_Censustract_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Censustract_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Censustract_2.addFeatures(features_Censustract_2);
var lyr_Censustract_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Censustract_2, 
                style: style_Censustract_2,
                popuplayertitle: 'Census tract',
                interactive: false,
                title: '<img src="styles/legend/Censustract_2.png" /> Census tract'
            });
var format_Pedestrian_Crash_2019_3 = new ol.format.GeoJSON();
var features_Pedestrian_Crash_2019_3 = format_Pedestrian_Crash_2019_3.readFeatures(json_Pedestrian_Crash_2019_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crash_2019_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crash_2019_3.addFeatures(features_Pedestrian_Crash_2019_3);
var lyr_Pedestrian_Crash_2019_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crash_2019_3, 
                style: style_Pedestrian_Crash_2019_3,
                popuplayertitle: 'Pedestrian_Crash_2019',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crash_2019_3.png" /> Pedestrian_Crash_2019'
            });
var format_Pedestrian_Crash_2018_4 = new ol.format.GeoJSON();
var features_Pedestrian_Crash_2018_4 = format_Pedestrian_Crash_2018_4.readFeatures(json_Pedestrian_Crash_2018_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crash_2018_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crash_2018_4.addFeatures(features_Pedestrian_Crash_2018_4);
var lyr_Pedestrian_Crash_2018_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crash_2018_4, 
                style: style_Pedestrian_Crash_2018_4,
                popuplayertitle: 'Pedestrian_Crash_2018',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crash_2018_4.png" /> Pedestrian_Crash_2018'
            });
var format_Pedestrian_Crash_2017_5 = new ol.format.GeoJSON();
var features_Pedestrian_Crash_2017_5 = format_Pedestrian_Crash_2017_5.readFeatures(json_Pedestrian_Crash_2017_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crash_2017_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crash_2017_5.addFeatures(features_Pedestrian_Crash_2017_5);
var lyr_Pedestrian_Crash_2017_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crash_2017_5, 
                style: style_Pedestrian_Crash_2017_5,
                popuplayertitle: 'Pedestrian_Crash_2017',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crash_2017_5.png" /> Pedestrian_Crash_2017'
            });
var format_Pedestrian_Crash_2016_6 = new ol.format.GeoJSON();
var features_Pedestrian_Crash_2016_6 = format_Pedestrian_Crash_2016_6.readFeatures(json_Pedestrian_Crash_2016_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crash_2016_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crash_2016_6.addFeatures(features_Pedestrian_Crash_2016_6);
var lyr_Pedestrian_Crash_2016_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crash_2016_6, 
                style: style_Pedestrian_Crash_2016_6,
                popuplayertitle: 'Pedestrian_Crash_2016',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crash_2016_6.png" /> Pedestrian_Crash_2016'
            });
var format_Pedestrian_Crash_2015_7 = new ol.format.GeoJSON();
var features_Pedestrian_Crash_2015_7 = format_Pedestrian_Crash_2015_7.readFeatures(json_Pedestrian_Crash_2015_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crash_2015_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crash_2015_7.addFeatures(features_Pedestrian_Crash_2015_7);
var lyr_Pedestrian_Crash_2015_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crash_2015_7, 
                style: style_Pedestrian_Crash_2015_7,
                popuplayertitle: 'Pedestrian_Crash_2015',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crash_2015_7.png" /> Pedestrian_Crash_2015'
            });

lyr_CartoLight_0.setVisible(true);lyr_SaltLakeCounty_1.setVisible(true);lyr_Censustract_2.setVisible(true);lyr_Pedestrian_Crash_2019_3.setVisible(true);lyr_Pedestrian_Crash_2018_4.setVisible(true);lyr_Pedestrian_Crash_2017_5.setVisible(true);lyr_Pedestrian_Crash_2016_6.setVisible(true);lyr_Pedestrian_Crash_2015_7.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_SaltLakeCounty_1,lyr_Censustract_2,lyr_Pedestrian_Crash_2019_3,lyr_Pedestrian_Crash_2018_4,lyr_Pedestrian_Crash_2017_5,lyr_Pedestrian_Crash_2016_6,lyr_Pedestrian_Crash_2015_7];
lyr_SaltLakeCounty_1.set('fieldAliases', {'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', });
lyr_Censustract_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'TRACTCE10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'FUNCSTAT10': 'FUNCSTAT10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'LOGRECNO': 'LOGRECNO', 'AREALAND': 'AREALAND', 'AREAWATR': 'AREAWATR', 'POP100': 'POP100', 'HU100': 'HU100', 'P0020001': 'P0020001', 'P0020002': 'P0020002', 'P0020003': 'P0020003', 'P0020004': 'P0020004', 'P0020005': 'P0020005', 'P0020006': 'P0020006', 'P0020007': 'P0020007', 'P0020008': 'P0020008', 'P0020009': 'P0020009', 'P0020010': 'P0020010', 'MTFCC': 'MTFCC', 'P0010011': 'P0010011', 'P0010012': 'P0010012', 'P0010013': 'P0010013', 'P0010014': 'P0010014', 'SqMiles': 'SqMiles', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pedestrian_Crash_2019_3.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crash_2018_4.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crash_2017_5.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crash_2016_6.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crash_2015_7.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_SaltLakeCounty_1.set('fieldImages', {'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'TextEdit', 'POP_CURRES': 'TextEdit', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', });
lyr_Censustract_2.set('fieldImages', {'OBJECTID': 'Range', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'TRACTCE10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'LOGRECNO': 'TextEdit', 'AREALAND': 'TextEdit', 'AREAWATR': 'TextEdit', 'POP100': 'TextEdit', 'HU100': 'TextEdit', 'P0020001': 'TextEdit', 'P0020002': 'TextEdit', 'P0020003': 'TextEdit', 'P0020004': 'TextEdit', 'P0020005': 'TextEdit', 'P0020006': 'TextEdit', 'P0020007': 'TextEdit', 'P0020008': 'TextEdit', 'P0020009': 'TextEdit', 'P0020010': 'TextEdit', 'MTFCC': 'TextEdit', 'P0010011': 'Range', 'P0010012': 'Range', 'P0010013': 'Range', 'P0010014': 'Range', 'SqMiles': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Pedestrian_Crash_2019_3.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crash_2018_4.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crash_2017_5.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crash_2016_6.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crash_2015_7.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_SaltLakeCounty_1.set('fieldLabels', {'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', });
lyr_Censustract_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATEFP10': 'no label', 'COUNTYFP10': 'no label', 'TRACTCE10': 'no label', 'GEOID10': 'no label', 'NAME10': 'no label', 'FUNCSTAT10': 'no label', 'INTPTLAT10': 'no label', 'INTPTLON10': 'no label', 'LOGRECNO': 'no label', 'AREALAND': 'no label', 'AREAWATR': 'no label', 'POP100': 'no label', 'HU100': 'no label', 'P0020001': 'no label', 'P0020002': 'no label', 'P0020003': 'no label', 'P0020004': 'no label', 'P0020005': 'no label', 'P0020006': 'no label', 'P0020007': 'no label', 'P0020008': 'no label', 'P0020009': 'no label', 'P0020010': 'no label', 'MTFCC': 'no label', 'P0010011': 'no label', 'P0010012': 'no label', 'P0010013': 'no label', 'P0010014': 'no label', 'SqMiles': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pedestrian_Crash_2019_3.set('fieldLabels', {'objectid': 'inline label - always visible', 'YEAR': 'inline label - always visible', });
lyr_Pedestrian_Crash_2018_4.set('fieldLabels', {'objectid': 'inline label - always visible', 'YEAR': 'inline label - always visible', });
lyr_Pedestrian_Crash_2017_5.set('fieldLabels', {'objectid': 'inline label - always visible', 'YEAR': 'inline label - always visible', });
lyr_Pedestrian_Crash_2016_6.set('fieldLabels', {'objectid': 'inline label - always visible', 'YEAR': 'inline label - always visible', });
lyr_Pedestrian_Crash_2015_7.set('fieldLabels', {'objectid': 'inline label - always visible', 'YEAR': 'inline label - always visible', });
lyr_Pedestrian_Crash_2015_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});