const start = () => {
  let seconds = document.getElementById("seconds");
  let minutes = document.getElementById("minutes");
  let hours = document.getElementById("minutes");
  // variables

  let min = 0;
  let sec = 0;
  let hr = 0;

  // seconds

  let secInterval = setInterval(() => {
    if (sec === 60) {
      sec = 0;
    }
    sec = sec + 1;
    if (sec <= 9) {
      seconds.innerHTML = "0" + sec;
    } else {
      seconds.innerHTML = sec;
    }
  }, 10 * 100);

  // minutes

  let minInterval = setInterval(() => {
    if (min === 60) {
      min = 0;
    }
    min = min + 1;
    if (min <= 9) {
      minutes.innerHTML = "0" + min;
    } else {
      minutes.innerHTML = min;
    }
  }, 60 * 1000);

  // hours

  let hrsInterval = setInterval(() => {
    hr = hr + 1;
    if (hr <= 9) {
      hours.innerHTML = "0" + hr;
    } else {
      hours.innerHTML = hr;
    }
  }, 36 * 100 * 1000);

  // reset

  const reset = () => {
    clearInterval(secInterval);
    clearInterval(minInterval);
    clearInterval(hrsInterval);
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
  };

  document.getElementById("reset").addEventListener("click", reset);
};
