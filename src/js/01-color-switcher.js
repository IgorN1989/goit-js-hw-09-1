const refs = {
  startBtn: document.querySelector('[data-start'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

class ColorSwitcher {
  constructor({ onSwitch }) {
    this.intervalId = null;
    this.isActive = false;
    this.onSwitch = onSwitch;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.onSwitch();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      this.onSwitch();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher({
  onSwitch: changeBodyColor,
});

function onStartBtn() {
  colorSwitcher.start();
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopBtn() {
  colorSwitcher.stop();
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  refs.body.style.backgroundColor = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
