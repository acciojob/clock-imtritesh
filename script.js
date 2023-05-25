//your JS code here. If required.
function updateTimer() {
      var timerElement = document.getElementById("timer");
      var currentDate = new Date();
      var time = currentDate.toLocaleTimeString();
      var date = currentDate.toLocaleDateString();
      var dateTime = date + ", " + time;
      timerElement.textContent = dateTime;
    }

    setInterval(updateTimer, 1000); // Update every second