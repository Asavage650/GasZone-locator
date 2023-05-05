
var map, pin, lineSource, pinSource;
var animation;
var apiKey = 'Ak995ryiMpPrE7ZdcMVJSr5LWE7TZQU60ENiPcM_Xgd--7K86ObS19g5Be6-_jVS';
var gasAPIkey = '2d96U0TddweUPR3CHhagCK:7uf3yA7ZYDJdhcm94qxjHU';

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
                var tokenServiceUrl = "h8ki5qv9n5Vu8ymtmoGd~ZS1TvnsHUkzni3IBwU76SQ~AlRjk7BumcvRSC5JxrsnXpNQ_9PG5XnnZB2y4knfyxq4F10SDmNodDJiXLhhcCyk";
            return tokenServiceUrl
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


function getGas(state) {
    const fakeResponse = {
        success: true,
        result: {
            state: {
                currency: 'usd',
                name: "California",
                lowerName: "washington",
                gasoline: 4.594,
                midGrade: 4.814,
                premium: 5.000,
                diesel: 4.989
            },
            cities: [
                {
                    currency: 'usd',
                    gasoline: 4.582,
                    midGrade: 4.774,
                    premium: 4.963,
                    diesel: 4.837,
                    name: 'Bellingham',
                    lowerName: 'bellingham'
                },
                {
                    currency: 'usd',
                    gasoline: 4.571,
                    midGrade: 4.775,
                    premium: 4.961,
                    diesel: 4.930,
                    name: 'Bremerton',
                    lowerName: 'bremerton'
                },
                {
                    currency: 'usd',
                    gasoline: 3.892,
                    midGrade: 0.000,
                    premium: 4.099,
                    diesel: 4.329,
                    name: 'Clarkson',
                    lowerName: 'clarkson'
                },
                {
                    currency: 'usd',
                    gasoline: 4.673,
                    midGrade: 4.787,
                    premium: 4.946,
                    diesel: 5.091,
                    name: 'Longview',
                    lowerName: 'longview'
                },
                {
                    currency: 'usd',
                    gasoline: 4.469,
                    midGrade: 4.649,
                    premium: 4.897,
                    diesel: 4.640,
                    name: 'Mount Vernon-Anacortes',
                    lowerName: 'mount vernon-anacortes'
                },
                {
                    currency: 'usd',
                    gasoline: 4.614,
                    midGrade: 4.785,
                    premium: 4.973,
                    diesel: 5.083,
                    name: 'Olympia',
                    lowerName: 'olympia'
                },
                {
                    currency: 'usd',
                    gasoline: 4.391,
                    midGrade: 4.626,
                    premium: 4.854,
                    diesel: 4.875,
                    name: 'Richland-Kennewick-Pasco',
                    lowerName: 'richland-kennewick-pasco'
                },
                {
                    currency: 'usd',
                    gasoline: 4.736,
                    midGrade: 4.944,
                    premium: 5.119,
                    diesel: 5.201,
                    name: 'Seattle-Bellevue-Everett',
                    lowerName: 'seattle-bellevue-everett'
                },
                {
                    currency: 'usd',
                    gasoline: 4.323,
                    midGrade: 4.555,
                    premium: 4.760,
                    diesel: 4.728,
                    name: 'Spokane',
                    lowerName: 'spokane'
                },
                {
                    currency: 'usd',
                    gasoline: 4.618,
                    midGrade: 4.847,
                    premium: 5.003,
                    diesel: 5.028,
                    name: 'Tacoma',
                    lowerName: 'tacoma'
                },
            ]
        }
    }
    // fetch("https://api.collectapi.com/gasPrice/stateUsaPrice?state=" + state, {
    //     method: "GET",

    //     headers: {
    //         'Authorization': '2d96U0TddweUPR3CHhagCK:7uf3yA7ZYDJdhcm94qxjHU',
    //         'Content-Type': 'application/json'




    //     }
    // }).then((res) => {
    //     return res.json()
    // }).then((data) => {
        // console.log(data)
        var sidebar = document.getElementById("sidebar")
        sidebar.innerHTML +=`
        <div>
            <h4>${fakeResponse.result.state.name}</h4>
            <p>Average Gas Price: Regular $${fakeResponse.result.state.gasoline}</p>
            <p>Average Gas Price: Premium $${fakeResponse.result.state.premium}</p>
            <p>Average Gas Price: Diesel $${fakeResponse.result.state.diesel}</p>
        </div>
        `
    // })
}
getGas("CA");

console.log(getGas)