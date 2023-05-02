
var map, pin, lineSource, pinSource;
var animation;
var apiKey = 'Ak995ryiMpPrE7ZdcMVJSr5LWE7TZQU60ENiPcM_Xgd--7K86ObS19g5Be6-_jVS';
// var gasAPIkey = '2d96U0TddweUPR3CHhagCK:7uf3yA7ZYDJdhcm94qxjHU';
// var setOptions= 'setOptions';

var routePoints = [
    new atlas.data.Feature(new atlas.data.Point([-122.34758, 47.62155]), { _timestamp: new Date('Tue, 18 Aug 2020 00:53:53 GMT').getTime() }),
    new atlas.data.Feature(new atlas.data.Point([-122.34764, 47.61859]), { _timestamp: new Date('Tue, 18 Aug 2020 00:54:53 GMT').getTime() }),
    new atlas.data.Feature(new atlas.data.Point([-122.33787, 47.61295]), { _timestamp: new Date('Tue, 18 Aug 2020 00:56:53 GMT').getTime() }),
    new atlas.data.Feature(new atlas.data.Point([-122.34217, 47.60964]), { _timestamp: new Date('Tue, 18 Aug 2020 00:59:53 GMT').getTime() })
];

function GetMap() {
    map = new atlas.Map('myMap', {
        center: [-122.345, 47.615],
        zoom: 14,
        view: 'Auto',

        authOptions: {
            authType: 'anonymous',
            clientId: 'e6b6ab59-eb5d-4d25-aa57-581135b927f0', 
            getToken: function (resolve, reject, map) {
                var tokenServiceUrl = "https://samples.azuremaps.com/api/GetAzureMapsToken";

                fetch(tokenServiceUrl).then(r => r.text()).then(token => resolve(token));
            }

            
        }
    });
   
    map.events.add('ready', function () {

        map.imageSprite.createFromTemplate('arrow-icon', 'marker-arrow', 'teal', '#fff').then(function () {

            lineSource = new atlas.source.DataSource();
            pinSource = new atlas.source.DataSource();
            map.sources.add([lineSource, pinSource]);

            map.layers.add(new atlas.layer.LineLayer(lineSource, null, {
                strokeColor: 'DodgerBlue',
                strokeWidth: 3
            }));

            var path = [];

            routePoints.forEach(f => {
                path.push(f.geometry.coordinates);
            });

            lineSource.add(new atlas.data.LineString(path));

            map.layers.add(new atlas.layer.SymbolLayer(pinSource, null, {
                iconOptions: {
                    image: 'arrow-icon',

                    anchor: 'center',

                    rotation: ['+', 180, ['get', 'heading']],

                    rotationAlignment: 'map',

                    ignorePlacement: true,

                    allowOverlap: true
                },
                textOptions: {
                    ignorePlacement: true,

                    allowOverlap: true
                }
            }));

            pin = new atlas.Shape(routePoints[0]);
            pinSource.add(pin);

            animation = atlas.animations.moveAlongRoute(routePoints, pin, { 
                timestampProperty: 'timestamp',

                captureMetadata: true,
                
                loop: document.getElementById('loopAnimation').checked,
                reverse: document.getElementById('reverseAnimation').checked,
                rotationOffset: (document.getElementById('reverseAnimation').checked)? 90: 0,
                
                speedMultiplier: 60,

                map: (document.getElementById('followSymbol').checked)? map: null,

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
var map;

        function initMap() 
          navigator.geolocation.getCurrentPosition(function (location) {
              map = new Microsoft.Maps.Map('#myMap', {
                  credentials: 'h8ki5qv9n5Vu8ymtmoGd~ZS1TvnsHUkzni3IBwU76SQ~AlRjk7BumcvRSC5JxrsnXpNQ_9PG5XnnZB2y4knfyxq4F10SDmNodDJiXLhhcCyk',


                  center: new Microsoft.Maps.Location(location.coords.latitude, location.coords.longitude),
                  zoom: 12
              });
          })
          
          (async () => {
              let script = document.createElement("script");
              let bingKey = await fetch("https://samples.azuremaps.com/api/GetBingMapsKey").then(r => r.text()).then(key => { return key });
              script.setAttribute("src", `https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${bingKey}&branch=experimental`);
              document.body.appendChild(script);
          })();
         
// async function logJSONData() {
    // const response = await fetch("2d96U0TddweUPR3CHhagCK:7uf3yA7ZYDJdhcm94qxjHU"+'apiKey');
    // const jsonData = await response.json();
    // console.log(jsonData);
//   }
