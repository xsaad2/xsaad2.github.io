let nameList = document.getElementById("name-list");
let nameInput = document.getElementById("name-input");
let addNameButton = document.getElementById("add-name");
let currentStopwatch;
let list = [];

addNameButton.addEventListener("click", function () {
  let name = nameInput.value;
  if (name === "") {
    return;
  }

  if (currentStopwatch) {
    currentStopwatch.stop();
  }

  let newName = document.createElement("div");
  newName.innerHTML = name + " ";
  let newStopwatch = new Stopwatch(newName, name);
  currentStopwatch = newStopwatch;
  currentStopwatch.start();
  list.push(currentStopwatch);

  nameList.appendChild(newName);
});

function Stopwatch(elem, name) {
  this.name = name;
  let time = 0;
  let interval;
  let offset;

  this.startButton = document.createElement("button");

  function update() {
    if (this.isOn) {
      time += delta();
    }
    this.startButton.addEventListener("click", () => {
      this.isOn ? this.stop() : this.start();
    });
    elem.innerHTML = name + " " + timeFormatter(time) + " ";

    elem.appendChild(this.startButton);
  }

  function delta() {
    let now = Date.now();
    let timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(timeInMilliseconds) {
    let time = new Date(timeInMilliseconds);

    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    let hours = time.getHours().toString();

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    if (hours.length < 2) {
      hours = "0" + hours;
    }

    return hours + " : " + minutes + " : " + seconds;
  }

  this.isOn = false;

  this.start = function () {
    list.forEach((l) => {
      l.stop();
    });
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
      this.startButton.innerHTML = "Stop!!";
    }
  };
  this.stop = function () {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
      this.startButton.innerHTML = "Start!";
    }
  };

  this.reset = function () {
    if (!this.isOn) {
      time = 0;
      update();
    }
  };
}
