import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_green.css');

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(evt) {
  console.log(evt);
}

const futureDate = '2030-03-16T14:25:00';

class Timer {
  constructor(rootSelector, targetDate) {
    this.rootSelector = rootSelector;
    this.targetDate = targetDate;
  }
}

const timer = new Timer('.timer', futureDate);

console.log(timer);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr(refs.input, options);
// console.log(refs.input);
