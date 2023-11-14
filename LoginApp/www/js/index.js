document.addEventListener("deviceready", onDeviceReady, false);

document.getElementById("login-button").addEventListener("click", function () {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("pwd").value;

  // Add your login logic here
  if (username === "Dayita" && password === "password") {
    alert("Login successful");
  } else {
    alert("Login failed. Please try again.");
  }
});
document.getElementById("reset-button").addEventListener("click", function () {
  const username = document.getElementById("uname");
  const password = document.getElementById("pwd");
  username.value = "";
  password.value = "";
});

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}
