function deleteAlarm(alarm_id) {
  console.log(alarm_id)
    fetch("/api/delete-alarm", {
      method: "POST",
      body: JSON.stringify({ alarm_id: alarm_id }),
    }).then((_res) => {
      window.location.href = "/";
    });
}

function toggleAlarm(alarm_id) {
  console.log(alarm_id)
        fetch("/api/toggle-alarm", {
      method: "POST",
      body: JSON.stringify({ alarm_id: alarm_id }),
    }).then((_res) => {
      window.location.href = "/";
    });
}
 

(function () {

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  var nextalarm = document.getElementById('next_alarm').innerText;
  console.log(nextalarm);
  nextalarm = JSON.parse(nextalarm);

  
  const countDown = new Date(nextalarm.alarm_time).getTime(),

      intervalid = setInterval(function() {    

        const now = new Date().getTime(),
              diff = countDown - now;
      if (diff < 1) {
                clearInterval(intervalid);
                window.location.href = "/";
                return;
      }
        document.getElementById("days").innerText = Math.floor(diff / (day)),
        document.getElementById("hours").innerText = Math.floor((diff % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((diff % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((diff % (minute)) / second);
      }, 1000)
  }());


(function () {

    setInterval(function() {

    const now = new Date();

    document.querySelector(".time").textContent = now.toLocaleTimeString([],{ hour: "2-digit", minute: "2-digit" });
    document.querySelector(".date").textContent = now.toLocaleDateString("de-DE", {year: "numeric", month: "2-digit", day: "2-digit"});

    }, 1000) 

  }());

  