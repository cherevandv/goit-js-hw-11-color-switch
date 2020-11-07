const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  buttonStart: document.querySelector(".button-start"),
  buttonStop: document.querySelector(".button-stop"),
};

refs.buttonStart.addEventListener("click", onBtnStart);
refs.buttonStop.addEventListener("click", onBtnStop);

let intervalId = null;

function onBtnStart() {
  if (!refs.buttonStart.classList.contains("active")) {
    refs.buttonStart.classList.add("active");
    intervalId = setInterval(() => {
      let colorBody = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.backgroundColor = `${colors[colorBody]}`;
    }, 1000);
  } else return;
}

function onBtnStop() {
  refs.buttonStart.classList.remove("active");
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
