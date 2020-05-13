function testing() {
    // Colors for AwesomeMarkers
    var _colorIdx = 0,
        _colors = [
            'orange',
            'green',
            'blue',
            'purple',
            'darkred',
            'cadetblue',
            'red',
            'darkgreen',
            'darkblue',
            'darkpurple'
        ];

    function _assignColor() {
        return _colors[_colorIdx++ % 10];
    }

    // =====================================================
    // =============== Playback ============================
    // =====================================================

    // Playback options
    var playbackOptions = {
        // layer and marker options
        layer: {
            pointToLayer: function (featureData, latlng) {
                var result = {};

                if (featureData && featureData.properties && featureData.properties.path_options) {
                    result = featureData.properties.path_options;
                }

                if (!result.radius) {
                    result.radius = 5;
                }

                return new L.CircleMarker(latlng, result);
            }
        },

        marker: function () {
            if (DefaultIcon) {
                mymap.removeLayer(DefaultIcon);
            }
            var DefaultIcon = L.icon({
                iconUrl: './user_marker.png',
                iconSize: [28, 40],
                iconAnchor: [16, 30],
            });
            return {
                // icon: L.AwesomeMarkers.icon({
                //     prefix: 'fa',
                //     icon: 'bullseye', 
                //     markerColor: _assignColor()
                // })                 
            };
        }
    };

    console.log(AnimarBarco_ComSLider)
    console.log(AnimarBarco_ComSLider.length)
    console.log(AnimarBarco)

    if (AnimarBarco_ComSLider.length > 0) {
        var tillicum = {
            "type": "Feature",
            "geometry": {
                "type": "MultiPoint",
                "coordinates": [
                    AnimarBarco_ComSLider[0],
                    AnimarBarco_ComSLider[1],
                    AnimarBarco_ComSLider[2],
                    AnimarBarco_ComSLider[3],
                    AnimarBarco_ComSLider[4],
                    AnimarBarco_ComSLider[5],
                    AnimarBarco_ComSLider[6],
                    AnimarBarco_ComSLider[7],
                    AnimarBarco_ComSLider[8],
                    AnimarBarco_ComSLider[9],
                    AnimarBarco_ComSLider[10],
                    AnimarBarco_ComSLider[11],
                    AnimarBarco_ComSLider[12],
                    AnimarBarco_ComSLider[13],
                    AnimarBarco_ComSLider[14],
                    AnimarBarco_ComSLider[15],
                    AnimarBarco_ComSLider[16],

                ]
            },
            "properties": {
                "title": "tillicum",
                "path_options": { "color": "red" },
                "time": [
                    1369786339000,
                    1369786340000,
                    1369786341000,
                    1369786342000,
                    1369786343000,
                    1369786344000,
                    1369786345000,
                    1369786339000,
                    1369786340000,
                    1369786341000,
                    1369786342000,
                    1369786343000,
                    1369786344000,
                    1369786345000,
                    1369786339000,
                    1369786340000,
                    1369786341000,
                    1369786342000,
                    1369786343000,
                    1369786344000,
                    1369786345000,
                    1369786339000,
                    1369786340000,
                    1369786341000,
                    1369786342000,
                    1369786343000,
                    1369786344000,
                    1369786345000,
                    1369786339000,
                    1369786340000,
                    1369786341000,
                    1369786342000,
                    1369786343000,
                    1369786344000,
                    1369786345000,
                

                ],
                "speed": [
                    variavelVelocidadeAnimBarco
                ],

                "raw": []
            },

        };

        var testeTracks = [tillicum];


        // Initialize playback
        //var playback = new L.Playback(map, demoTracks, null, playbackOptions);
        var playback = new L.Playback(mymap, testeTracks, null, playbackOptions);

        // Initialize custom control
        var control = new L.Playback.Control(playback);
        control.addTo(mymap);

        //Add data
        playback.addData(testeTracks);
    } else {
        console.log('esperar')
    }


}
