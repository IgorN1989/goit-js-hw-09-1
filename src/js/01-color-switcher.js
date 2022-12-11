const refs = {
  startBtn: document.querySelector('[data-start'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;

class ColorSwitcher {
  constructor({ onSwitch, startBtn, stopBtn, body }) {
    this.startBtn = startBtn;
    this.stopBtn = stopBtn;
    this.body = body;
    this.intervalId = null;
    this.isActive = false;
    this.onSwitch = onSwitch;
  }

  start() {
    if (this.isActive) {
      return;
    }
    this.startBtn.disabled = true;
    this.stopBtn.disabled = false;
    this.onSwitch();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      this.onSwitch();
    }, 1000);
  }

  stop() {
    this.startBtn.disabled = false;
    this.stopBtn.disabled = true;
    this.body.style.backgroundColor = '';
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher({
  onSwitch: changeBodyColor,
  startBtn: refs.startBtn,
  stopBtn: refs.stopBtn,
  body: refs.body,
});

refs.startBtn.addEventListener(
  'click',
  colorSwitcher.start.bind(colorSwitcher)
);
refs.stopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
