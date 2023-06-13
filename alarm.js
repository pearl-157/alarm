 var timeoutId;

    function setAlarm() {
      var alarmInput = document.getElementById('alarmTime').value;
      var alarmTime = new Date();
      var alarmParts = alarmInput.split(":");
      alarmTime.setHours(alarmParts[0]);
      alarmTime.setMinutes(alarmParts[1]);

      var currentTime = new Date();
      currentTime.setSeconds(0);

      if (alarmTime > currentTime) {
        var timeDifference = alarmTime - currentTime;

        timeoutId = setTimeout(function() {
          alert('Wake up!');
          location.reload();
          clearTimeout(timeoutId);
        }, timeDifference);

        document.getElementById('status').innerText = 'Alarm is set.';
      } else {
        document.getElementById('status').innerText = 'Please select a future time for the alarm.';
      }
    }
