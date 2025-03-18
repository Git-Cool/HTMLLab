var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good evening';
} else if (hourNow > 12) {
  greeting = 'Good afternoon';
} else if (hourNow > 0) {
  greeting = 'Good morning';
} else {
  greeting = 'Welcome';
}

document.write(greeting);
document.write("<br>");

// Get the current time in the format HH:MM:SS
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var timeString = today.getHours() + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

document.write("Current time: " + timeString);