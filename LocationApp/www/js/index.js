document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Wait for the device to be ready before accessing Cordova APIs
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
  // Get the latitude and longitude from the position object
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Display the location information
  var locationElement = document.getElementById("location");
  locationElement.innerHTML =
    "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

function onError(error) {
  // Handle errors when getting the user's location
  var locationElement = document.getElementById("location");
  locationElement.innerHTML = "Error getting location: " + error.message;
}
