class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    const refs = {
      days: document.querySelector(`${this.selector} span[data-value="days"]`),
      hours: document.querySelector(
        `${this.selector} span[data-value="hours"]`
      ),
      mins: document.querySelector(`${this.selector} span[data-value="mins"]`),
      secs: document.querySelector(`${this.selector} span[data-value="secs"]`),
    };

    const dateTime = this.targetDate.getTime();
    setInterval(() => {
      const currentTime = Date.now();
      const remainderTime = dateTime - currentTime;
      const timeComponents = getTimeComponents(remainderTime);
      refs.days.textContent = timeComponents.days;
      refs.hours.textContent = timeComponents.hours;
      refs.mins.textContent = timeComponents.mins;
      refs.secs.textContent = timeComponents.secs;
    }, 1000);
  }
}
const timer = new CountdownTimer('#timer-1', new Date('Jul 01, 2021'));
timer.start();
function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
