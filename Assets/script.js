// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for (i = 0; i < 9; i++) {
    document.getElementsByClassName('time-block')[i].children[1].value = localStorage.getItem(i);
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on('click', function () {
    console.log("button clicked");
    var thisTextArea = this.parentElement.childNodes[3].value;
    var storageId = this.parentElement.id;
    if (thisTextArea) {
      console.log(thisTextArea);
      console.log(storageId);
      localStorage.setItem(storageId, thisTextArea);
    }
    else {
      console.log("Nothing here!");
      console.log(storageId);
    }
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var currentHour = dayjs().get('hour') - 9;
  console.log(currentHour);
  for (i = 0; i < 9; i++) {
    var block = document.getElementsByClassName('time-block')[i].id;
    if (block < currentHour) {
      document.getElementsByClassName('time-block')[i].classList.add("past");
    }
    else if (block == currentHour) {
      document.getElementsByClassName('time-block')[i].classList.add("present");
    }
    else if (block > currentHour) {
      document.getElementsByClassName('time-block')[i].classList.add("future");
    }
  }

  // TODO: Add code to display the current date in the header of the page.
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  currentDayText = document.getElementById("currentDay");
  currentDayText.textContent = weekdays[dayjs().get('day')] + ", " + months[dayjs().get('month')] + " " + dayjs().get('date') + ", " + dayjs().get('year');
});

