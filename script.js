// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -35.66875078858062, lng: -63.74478092325523 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;