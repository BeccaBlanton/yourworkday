
//variables and function for displaying Date and Time in Header
const currentDay = document.getElementById("currentDay")
function updateTime(){
    const now = moment().format('LLLL');
    currentDay.textContent = now
}
setInterval(updateTime, 1000);
updateTime();

//Function to pull data hour from each time block to assign hour compared to current hour of day and change the background of each time block
var currentHour = moment().format('H')
console.log(currentHour)

    $(".time-block").each(function() {
        if(parseInt($(this).data("hour")) < currentHour){
            $(this).addClass("past")
            } else if (parseInt($(this).data("hour")) == currentHour){
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }
        })
        
//pulls up text from local storage to fill text area from previous input
var textValues=JSON.parse(localStorage.getItem("textareas"))

$("form").each(function(){
    var item = this.id
    var input = textValues[item]
    $(this).find('textarea[type="text"]').val(input)
    if(!input){
        input=""
        console.log(input)
    }
})

//sets all buttons on each time block to submit corresponding text area. 
//saves text in text areas into local storage
  $('form').on('submit', function(e){
      e.preventDefault()
      var item= this.id
      console.log(item)
      var val = $(this).find('textarea').val()
      textValues[item] = val
      console.log(textValues[item])
      console.log(textValues)
      localStorage.setItem('textareas', JSON.stringify(textValues))
  })