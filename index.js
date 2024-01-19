// index.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([0, 0], 2); // Centered at (0, 0) with zoom level 2
  
    // Add a tile layer (you can use a different tile layer if needed)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
    // Sample marker data with coordinates and external URLs
    var markerData = [
      { lat: 40.7128, lng: -74.0060, url: 'https://www.epa.gov/sustainability/learn-about-sustainability' },
    
      // Add more markers as needed
    ];
  
    // Add markers to the map
    var markers = L.markerClusterGroup();
    markerData.forEach(function (marker) {
      var markerPopup = '<a href="' + marker.url + '" target="_blank">Know more</a>';
      L.marker([marker.lat, marker.lng]).bindPopup(markerPopup).addTo(markers);
    });
  
    // Add the marker cluster group to the map
    map.addLayer(markers);
  });

  