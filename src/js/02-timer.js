import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/material_green.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  // Не зміг прибрати дублювання. Якщо винести в окрему функцію, то не можу видалити інтервал.
  // Якщо не додавати цей код, то відлік починається через секунду, а не одразу після натискання
  refs.startBtn.disabled = true;
  const deltaTime = new Date(refs.input.value) - new Date();
  const convertedDeltaTime = convertMs(deltaTime);
  Object.entries(convertedDeltaTime).forEach(([name, value]) => {
    refs[name].textContent = pad(value);
  });

  const intervalId = setInterval(() => {
    const deltaTime = new Date(refs.input.value) - new Date();
    if (deltaTime <= 1000) {
      Notiflix.Notify.success('Time is out');
      clearInterval(intervalId);
    }
    const convertedDeltaTime = convertMs(deltaTime);
    Object.entries(convertedDeltaTime).forEach(([name, value]) => {
      refs[name].textContent = pad(value);
    });
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.input.disabled = true;
    refs.startBtn.disabled = false;
    return selectedDates[0];
  },
};

flatpickr(refs.input, options);

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.refs = {
//       days: document.querySelector('[data-days]'),
//       hours: document.querySelector('[data-hours]'),
//       minutes: document.querySelector('[data-minutes]'),
//       seconds: document.querySelector('[data-seconds]'),
//     };
//   }

//   getDeltaTime(endtime) {
//     const deltaTime = this.convertMs(
//       Date.parse(endtime) - Date.parse(new Date())
//     );
//     const { days, hours, minutes, seconds } = deltaTime;
//     return { deltaTime, days, hours, minutes, seconds };
//   }

//   updateTimer({ days, hours, minutes, seconds }) {
//     this.refs.days.textContent = days;
//     this.refs.hours.textContent = hours;
//     this.refs.minutes.textContent = minutes;
//     this.refs.seconds.textContent = seconds;
//   }

//   start() {
//     const timer = this.getDeltaTime(this.targetDate);

//     this.updateTimer(timer);

//     const intervalId = setInterval(() => {
//       const timer = this.getDeltaTime(this.targetDate);
//       this.updateTimer(timer);
//     }, 1000);
//   }

//   convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const days = this.pad(Math.floor(ms / day));
//     const hours = this.pad(Math.floor((ms % day) / hour));
//     const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
//     const seconds = this.pad(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );
//     return { days, hours, minutes, seconds };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const countdownTimer = new CountdownTimer({
//   selector: '#datetime-picker',
//   targetDate: new Date('December, 9 2022 4:45:45'),
// });

// countdownTimer.start();
