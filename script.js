//your JS code here. If required.
function updateTimer() {
      let timerElement = document.getElementById("timer");
      let currentDate = new Date();
      let time = currentDate.toLocaleTimeString();
      let date = currentDate.toLocaleDateString();
      let dateTime = date + ", " + time;
      timerElement.textContent = dateTime;
    }

    setInterval(updateTimer, 1000); // Update every second