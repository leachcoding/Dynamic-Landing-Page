// Selects DOM Elements

const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options for AM or PM

const showAmPm = true;

// Creates a function Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12HR Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

// Set Background and Greeting
function setBackgroundGreet() {
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {
    // Morning Time
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon Time
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    // Evening Time
    document.body.style.backgroundImage = "url('img/evening.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if(e.type === 'keypress') {
    // Make Sure that Enter is Pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if(localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Name
function setFocus(e) {
  if(e.type === 'keypress') {
    // Make Sure that Enter is Pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Run

showTime();
setBackgroundGreet();
getName();
getFocus();
