

function myMap() {
      var mapCanvas = document.getElementById("map");

      var mapOptions = {
        center: new google.maps.LatLng(-27.455612, 153.023389), zoom: 10
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    

}