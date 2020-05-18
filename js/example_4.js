function GPX_Reader(){


            // Playback options
            // var playbackOptions = {
            //     playControl: true,
            //     //dateControl: true,
            //     sliderControl: true
            // };


            var playback;

            //playback = new L.Playback(map, null, null, playbackOptions); 

            //gpx_data = atob(rrayGPX[0]);



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
        
        

        //geoJsonData = L.Playback.Util.ParseGPX(arrayGPX[0]);
        geoJsonData = L.Playback.Util.ParseGPX(convertXML_String_2);

            var playback = new L.Playback(mymap, geoJsonData, null, playbackOptions);
    
            // Initialize custom control
            var control = new L.Playback.Control(playback);
            control.addTo(mymap);
    
            //Add data
            //playback.addData(testeTracks);
       




            
            // var control = new L.Playback.Control(playback);
            // control.addTo(mymap);
            
            // //playback.setData(geoJsonData);
            // /* ^^^^^^^apparently, the time slider is not updated correctly after calling setData,
            // while calling the next commented line here gives a correct slider. */
            // playback = new L.Playback(mymap, geoJsonData, null, playbackOptions);
}