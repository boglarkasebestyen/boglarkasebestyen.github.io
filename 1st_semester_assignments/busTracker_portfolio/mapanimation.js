let busses = [];
let map = null;

function setupMap() {
    map = new mapboxgl.Map({
        accessToken: "pk.eyJ1IjoiYi1zZWJlIiwiYSI6ImNrczg0bnM4NTBscjYybm8yMWVqYWp3Y2kifQ.6ZbuMId34XsGbDapIiqi2Q",
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        center: [-71.091542,42.358862],
        zoom: 12
    });
}

function findBus(id, busses) {
    for (busIndex in busses) {
        let bus = busses[busIndex];
        if (bus.id === id) {
            return bus;
        }
    }
    return null;
}

// request bus data from MBTA
async function getBusLocations() {
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}


async function run() {
    // get bus data    
    const locations = await getBusLocations();
    // console.log(new Date());
    // console.log(locations);


    locations.forEach( bus => {
        const busRecord = findBus(bus.id, busses);
        if (busRecord) {
            console.log("Updating position for bus:" + bus.id);
            busRecord.marker.setLngLat([bus.attributes.longitude, bus.attributes.latitude]);
        } else {
            console.log("Adding new marker for " + bus.id);
            var el = document.createElement('div');
            el.className = "customMarker";
            var marker = new mapboxgl.Marker(el).setLngLat([bus.attributes.longitude, bus.attributes.latitude]).addTo(map);
            busses.push({
                id: bus.id,
                marker: marker
            });
        }
    });

    setTimeout(run, 15000);
}

setupMap();
run();
