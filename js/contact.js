window.onload = function() {

	// Check to see if the browser supports the GeoLocation API.
	if (navigator.geolocation) {
		// Get the location
		navigator.geolocation.getCurrentPosition(function(position) {
            const lat = 21.028607693336436;
            const lon = 105.78202510971597;

			// Show the map
			showMap(lat, lon);
		});
	} else {
		// Print out a message to the user.
		alert('Your browser does not support GeoLocation :(');
	}

}

// Show the user's position on a Google map.
function showMap(lat, lon) {
	// Create a LatLng object with the GPS coordinates.
	var myLatLng = new google.maps.LatLng(lat, lon);

	// Create the Map Options
  var mapOptions = {
    zoom: 15,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // Generate the Map
  var map = new google.maps.Map(document.getElementById('googleMapContainer'), mapOptions);

  // Add a Marker to the Map
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
	  title: '',

  });
}