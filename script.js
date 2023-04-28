var map;

function initMap() {
    map = new Microsoft.Maps.Map('#myMap', {
        credentials: '<Your Bing Maps Key>',
        center: new Microsoft.Maps.Location(40.747, -73.985),
        zoom: 12
    });
}