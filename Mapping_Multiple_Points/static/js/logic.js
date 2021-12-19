// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);
//let map = L.map('mapid').setView([34.0522, -118.2437], 4);
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
/*let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];*/

let line = [
  [37.6213, -122.3790], // San Francisco Airpoort
  [19.4363, -99.0718],  // Mexico City Airport
  [30.1976, -97.6663],  // Austin-Bergstrom International Airport (AUS)
  [43.6775, -79.6248],  // Toronto Pearson International Airport (YYZ)
  [40.6414, -73.77800]  // JFK Airport
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: "2,10"
}).addTo(map);

// Get data from cities.js
//let cityData = cities;

// Loop through the cities array and create one marker for each city.
/*cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000,
    color: "orange",
    fillColor: "orange"
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});*/

// Create the map object with a center and zoom level.
/*let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });*/

// We create the tile layer that will be the background of our map.
/*let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);*/

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

/*L.circle([34.0522, -118.2437], {
  color: 'black',
  fillColor: 'yellow',
  fillOpacity: 0.1,
  radius: 300
}).addTo(map);

L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: "black",
  fillColor: '#ffffa1'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data © <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery (c) <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    accessToken: API_KEY
});*/

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data © <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery (c) <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    accessToken: API_KEY
});

/*let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "Map data © <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery (c) <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    accessToken: API_KEY
});

/*let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});*/

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);