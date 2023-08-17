// Project 1 - Digital clock -----------------------------------------

function time() {

  var date = new Date();

  //Getting hours, minutes and seconds

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  //Variable storing AM/PM depending on time of day

  var period ="";

  //This is where AM/PM is assigned

  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  //Updating the time variables as long as they are below 10

  hour = update(hour);
  minute = update(minute);
  second = update(second);

  //Adding the clock to the div in the HTML file

  document.getElementById("digital-clock").innerText = hour + ":" + minute + ":" + second + " " + period;


  //Making the function run every second

  setTimeout(time, 1000);
  }

  //Updates the time elements as long as they are lower than 10
  
  function update(t) {
    if (t < 10) {
      return "0" + t;
    }
    else {
      return t;
    }
  }

  //Calling the function

  time();
