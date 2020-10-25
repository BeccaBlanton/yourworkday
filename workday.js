/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Begin PseudoCode
build out HTML using bootstrap with boxes first
√ display current day at top of page, need to use moment.js
create time blocks for each hour of a standard work day. use bootstrap to create time blocks
make time blocks editable, look into input boxes.

use moment.js to keep track of current time in day and format textboxes background color to change once time passes.

add event listeners to create events within boxes

save text entered in local storage to make sure information is saved when refreshing*/


//variables and function for displaying Date and Time in Header
const currentDay = document.getElementById("currentDay")
function updateTime(){
    const now = moment().format('LLLL');
    currentDay.textContent = now
    console.log(now)
}
setInterval(updateTime, 1000);
updateTime();



//calendar mode. to add time from now.
const eventMoment = moment().add(2, "hours");
console.log(eventMoment.calendar())
//diff method show time from now until 
