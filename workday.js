/*
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
add event listeners to create events within boxes
save text entered in local storage to make sure information is saved when refreshing*/


//variables and function for displaying Date and Time in Header
const currentDay = document.getElementById("currentDay")
function updateTime(){
    const now = moment().format('LLLL');
    currentDay.textContent = now
}
setInterval(updateTime, 1000);
updateTime();

//Function to pull data hour from each time block to assign hour compared to current hour of day and change the background of each time block
    $(".time-block").each(function() {
        if(parseInt($(this).data("hour")) < currentHour){
            $(this).addClass("past")
            } else if (parseInt($(this).data("hour")) === currentHour){
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
            console.log(currentHour)
            console.log(parseInt($(this).data("hour")))
            console.log($(this).data("hour"))
        })

//making each button link to text box and upload onto local storage
$("#btn1").on("click", function(event) {
    alert("I've been clicked!");
    event.preventDefault();
    localStorage.setItem("textBox1", JSON.stringify(textBox1));
    var eventCreated1 = JSON.parse(localStorage.getitem(textBox1));
    textBox1.textContent = eventCreated1
    console.log(event)
    console.log(textBox1)
    console.log(eventCreated1)
  });
/*document.getElementById("btn1").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("textBox1", JSON.stringify(textBox1));
    var eventCreated1 = JSON.parse(localStorage.getitem("textBox1"));
    textBox1.textCont = eventCreated1
    console.log(event)
    console.log(textBox1)
    console.log(eventCreated1)

})
//save text to localstorage.

// data goes back and stays in text*/