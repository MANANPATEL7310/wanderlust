let mapboxToken = window.mapboxToken;
mapboxgl.accessToken = mapboxToken;

// Prevent auto-scroll to map when popup opens
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: window.listingCoords, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(window.listingCoords)
  .addTo(map);

const popup = new mapboxgl.Popup({
  closeButton: true,  
  anchor: "top",
  maxWidth: "300px",
})
  .setLngLat(window.listingCoords)
  .setHTML( 
    "<p>Exact Location provided after booking.</p>")
  .addTo(map);

// Prevent auto-scroll to the map by resetting scroll position after DOM updates
requestAnimationFrame(function() {
  requestAnimationFrame(function() {
    window.scrollTo(0, 0);
  });
});

 
