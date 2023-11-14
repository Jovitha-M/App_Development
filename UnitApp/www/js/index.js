document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}
document.getElementById("button").addEventListener("click", function () {
  var kilometers = document.getElementById("kilometers").value;

  // Perform conversion (1 kilometer is approximately 0.621371 miles)
  var miles = kilometers * 0.621371;

  // Display the result
  document.getElementById("result").innerHTML = "Miles: " + miles.toFixed(2);
});
