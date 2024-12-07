// script.js

88888888888888888888;

function currentTime() {
  var date = new Date();
  var now = date.toLocaleString("en-IN", {
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
  document.getElementById("currentTime").innerHTML = now;
}

setInterval(currentTime, 1);

var alarmSound = new Audio("digital-alarm-clock.mp3");

function setAlarm() {
  var alarmTime = document.getElementById("alarmTime").value;
  var now = new Date();
  var alarm = new Date(now.toDateString() + " " + alarmTime);

  var timeRemaining = alarm - now;

  setTimeout(playAlarm, timeRemaining);

  document.getElementById("alarmTime").disabled = true;
}

function playAlarm() {
  alarmSound.play();
  document.getElementById("alarmTime").disabled = false;
}
