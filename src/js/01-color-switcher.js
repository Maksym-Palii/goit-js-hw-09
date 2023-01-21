const btnStartEl = document.querySelector('button[data-start]');
const btnStoptEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStartEl.addEventListener('click', startChangeColor);
btnStoptEl.addEventListener('click', stopChangeColor);

btnStoptEl.disabled = true;

const INTERVAL_DELAY = 1000;
let timerId = null;

function startChangeColor() {
  function bgColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }
  timerId = setInterval(bgColor, INTERVAL_DELAY);

  btnStartEl.disabled = true;
  btnStoptEl.disabled = false;
}

function stopChangeColor() {
  clearInterval(timerId);
  btnStoptEl.disabled = true;
  btnStartEl.disabled = false;
}
