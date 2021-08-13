// This array contains the coordinates for all BART stops between SF and San Jose

const bartStops = [
  [-122.401587, 37.789173], 
  [-122.397037, 37.792762], 
  [-122.295234, 37.804564], 
  [-122.265247, 37.797322], 
  [-122.224081, 37.774841],
  [-122.196716, 37.753576],
  [-122.160740, 37.721784],
  [-122.125835, 37.696592],
  [-122.057182, 37.634340],
  [-122.017248, 37.590735],
  [-121.976619, 37.557480],
  [-121.939395, 37.502285],
  [-121.874681, 37.368473],
  // [-121.889910, 37.335279] 
];



// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYi1zZWJlIiwiYSI6ImNrczg0bnM4NTBscjYybm8yMWVqYWp3Y2kifQ.6ZbuMId34XsGbDapIiqi2Q';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-day-v1',
  center: [-121.90537394807535, 37.44864688417591],  
  zoom: 9.8,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat([-122.401587, 37.789173]).addTo(map);


// counter here represents the index of the current bus stop
let index = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout( () => {
    if (index >= bartStops.length) { // ha az index nagyon vagy egyenlő a busStop array hosszával
      return; // return
    } else { // ha meg kisebb
      marker.setLngLat(bartStops[index]); // set marker (iránytű thingy) length/latitude to the array’s index
      index++; // index növekedjen
      move(); // hívja meg a functiont s csinálja megint amíg elér az array végére
    }
  }, 1000); // 1 másodpercenként
}










