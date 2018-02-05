function myMap() {
  var charlies3 = new google.maps.LatLng(53.34621513935568, -6.258858290794933);
  var charlies4 = new google.maps.LatLng(53.3435342118087, -6.264218685511196);
  var charlies5 = new google.maps.LatLng(53.33673285878003, -6.2654015396867635);
  var mapOptions = {
    center: charlies4,
    zoom: 14,
    mapTypeId: 'roadmap'
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker1 = new google.maps.Marker({
      position: charlies3,
      animation: google.maps.Animation.BOUNCE
      });
    var marker2 = new google.maps.Marker({
      position: charlies4,
      animation: google.maps.Animation.BOUNCE
    });
    var marker3 = new google.maps.Marker({
      position: charlies5,
      animation: google.maps.Animation.BOUNCE
      });
      marker1.setMap(map);
      marker2.setMap(map);
      marker3.setMap(map);

      google.maps.event.addListener(marker1,'click',function() {
        map.setZoom(19);
        map.setCenter(marker1.getPosition());
      });

      google.maps.event.addListener(marker2,'click',function() {
        map.setZoom(19);
        map.setCenter(marker2.getPosition());
      });
      
      google.maps.event.addListener(marker3,'click',function() {
        map.setZoom(19);
        map.setCenter(marker3.getPosition());
      });
}