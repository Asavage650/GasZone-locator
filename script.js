var map, pin, lineSource, pinSource;
var animation;
var apiKey = 'Ak995ryiMpPrE7ZdcMVJSr5LWE7TZQU60ENiPcM_Xgd--7K86ObS19g5Be6-_jVS';

//Create an array of point features with timestamp information to define a route to animate along.
//To animate a route, there must be a _timestamp property that has a value from Date.getTime().
var routePoints = [
    new atlas.data.Feature(new atlas.data.Point([-122.34758, 47.62155]), { _timestamp: new Date('Tue, 18 Aug 2020 00:53:53 GMT').getTime() }),
    new atlas.data.Feature(new atlas.data.Point([-122.34764, 47.61859]), { _timestamp: new Date('Tue, 18 Aug 2020 00:54:53 GMT').getTime() }),
    new atlas.data.Feature(new atlas.data.Point([-122.33787, 47.61295]), { _timestamp: new Date('Tue, 18 Aug 2020 00:56:53 GMT').getTime() }),
    new atlas.data.Feature(new atlas.data.Point([-122.34217, 47.60964]), { _timestamp: new Date('Tue, 18 Aug 2020 00:59:53 GMT').getTime() })
];

function GetMap() {
    //Initialize a map instance.
    map = new atlas.Map('myMap', {
        center: [-122.345, 47.615],
        zoom: 14,
        view: 'Auto',

        //Add authentication details for connecting to Azure Maps.
        authOptions: {
            //Use Azure Active Directory authentication.
            authType: 'anonymous',
            clientId: 'e6b6ab59-eb5d-4d25-aa57-581135b927f0', //Your Azure Maps client id for accessing your Azure Maps account.
            getToken: function (resolve, reject, map) {
                //URL to your authentication service that retrieves an Azure Active Directory Token.
                var tokenServiceUrl = "https://samples.azuremaps.com/api/GetAzureMapsToken";

                fetch(tokenServiceUrl).then(r => r.text()).then(token => resolve(token));
            }

            //Alternatively, use an Azure Maps key. Get an Azure Maps key at https://azure.com/maps. NOTE: The primary key should be used as the key.
            //authType: 'subscriptionKey',
            //subscriptionKey: '[YOUR_AZURE_MAPS_KEY]'
        }
    });

    //Wait until the map resources are ready.
    map.events.add('ready', function () {

        //Load a custom image icon into the map resources.
        map.imageSprite.createFromTemplate('arrow-icon', 'marker-arrow', 'teal', '#fff').then(function () {

            //Create data sources and add them to the map.
            lineSource = new atlas.source.DataSource();
            pinSource = new atlas.source.DataSource();
            map.sources.add([lineSource, pinSource]);

            //Create a layer to render the path.
            map.layers.add(new atlas.layer.LineLayer(lineSource, null, {
                strokeColor: 'DodgerBlue',
                strokeWidth: 3
            }));

            //Extract the positions to highlight the full route on the map as a line.
            var path = [];

            routePoints.forEach(f => {
                path.push(f.geometry.coordinates);
            });

            //Create a line for the path and add it to the data source.
            lineSource.add(new atlas.data.LineString(path));

            //Create a layer to render a symbol which we will animate.
            map.layers.add(new atlas.layer.SymbolLayer(pinSource, null, {
                iconOptions: {
                    //Pass in the id of the custom icon that was loaded into the map resources.
                    image: 'arrow-icon',

                    //Anchor the icon to the center of the image.
                    anchor: 'center',

                    //Rotate the icon based on the rotation property on the point data.
                    //The arrow icon being used in this case points down, so we have to rotate it 180 degrees.
                    rotation: ['+', 180, ['get', 'heading']],

                    //Have the rotation align with the map.
                    rotationAlignment: 'map',

                    //For smoother animation, ignore the placement of the icon. This skips the label collision calculations and allows the icon to overlap map labels. 
                    ignorePlacement: true,

                    //For smoother animation, allow symbol to overlap all other symbols on the map.
                    allowOverlap: true
                },
                textOptions: {
                    //For smoother animation, ignore the placement of the text. This skips the label collision calculations and allows the text to overlap map labels.
                    ignorePlacement: true,

                    //For smoother animation, allow text to overlap all other symbols on the map.
                    allowOverlap: true
                }
            }));

            //Create a pin and wrap with the shape class and add to data source.
            pin = new atlas.Shape(routePoints[0]);
            pinSource.add(pin);

            //Create the animation.
            animation = atlas.animations.moveAlongRoute(routePoints, pin, { 
                //Specify the property that contains the timestamp.
                timestampProperty: 'timestamp',

                //Capture metadata so that data driven styling can be done.
                captureMetadata: true,
                
                loop: document.getElementById('loopAnimation').checked,
                reverse: document.getElementById('reverseAnimation').checked,
                rotationOffset: (document.getElementById('reverseAnimation').checked)? 90: 0,
                
                //Animate such that 1 second of animation time = 1 minute of data time.
                speedMultiplier: 60,

                //If following enabled, add a map to the animation.
                map: (document.getElementById('followSymbol').checked)? map: null,

                //Camera options to use when following.
                zoom: 15,
                pitch: 45,
                rotate: true
            });
        });
    });
}

function toggleFollow(){
    animation.setOptions({
        map: (animation.getOptions().map)? null : map
    });
}

function toggleFollowOffset(){
    animation.setOptions({
        rotationOffset: (animation.getOptions().rotationOffset === 0)? 90 : 0
    });
}

function toggleLooping(){
    animation.setOptions({
        loop: !animation.getOptions().loop
    });
}

function toggleReverse(){
    animation.setOptions({
        reverse: !animation.getOptions().reverse
    });
}
