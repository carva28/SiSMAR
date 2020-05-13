$(function() {
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
        return _colors[_colorIdx++%10];
    }

    // =====================================================
    // =============== Playback ============================
    // =====================================================

    // Playback options
    var playbackOptions = {        
        // layer and marker options
        layer: {
            pointToLayer : function(featureData, latlng){
                var result = {};

                if (featureData && featureData.properties && featureData.properties.path_options){
                    result = featureData.properties.path_options;
                }

                if (!result.radius){
                    result.radius = 5;
                }

                return new L.CircleMarker(latlng, result);
            }
        },

        marker: function(){
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

    var tillicum = {
        "type": "Feature",
        "geometry": {
            "type": "MultiPoint",
            "coordinates": [
                [-8.73929 ,40.61388    ],
                [-8.739138 ,40.627096    ],
                [-0.3686 ,43.3017    ],
                [-0.579541 ,44.837912    ],
                [5.369889 ,43.296346    ],
                [7.424616 ,43.738418    ]
            ]
        },
        "properties": {
            "title" : "tillicum",
            "path_options" : { "color" : "red" },
            "time": [
                1369786338000,
                1369786340000,
                1369786342000,
                 1369786342000,
                 1369786342000,
                 1369786342000,
            ],
            "speed": [
                85,
                88,
                90,
                85,
                88,
                200,
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

    // Add data
    //playback.addData(testeTracks);

});
