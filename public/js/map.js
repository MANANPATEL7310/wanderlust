// public/js/map.js
function initMap() {
  const coords = window.listingCoords || { lat: 0, lng: 0 };
  // If coords are 0,0 you may want to avoid showing a map — but we render anyway.
  const map = new google.maps.Map(document.getElementById('map'), {
    center: coords,
    zoom: 12
  });

  new google.maps.Marker({
    position: coords,
    map: map
  });
}
