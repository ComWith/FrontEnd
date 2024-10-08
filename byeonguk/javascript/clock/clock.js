const clock = document.getElementById("clock");
const day = document.querySelector(".date");

const showDate = () => {
  const date = new Date();
  let today = date.getDay();

  if (today === 0) {
    today = "일요일";
  } else if (today === 1) {
    today = "월요일";
  } else if (today === 2) {
    today = "화요일";
  } else if (today === 3) {
    today = "수요일";
  } else if (today === 4) {
    today = "목요일";
  } else if (today === 5) {
    today = "금요일";
  } else {
    today = "토요일";
  }

  day.innerText = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()} ${today}`;
};

const showClock = () => {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());

  clock.innerText = `${hours.padStart(2, "0")} : ${minutes.padStart(
    2,
    "0"
  )} : ${seconds.padStart(2, "0")}`;
};

showDate();
showClock();
setInterval(showClock, 1000);
