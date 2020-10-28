
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
            console.log(parseInt($(this).data("hour")))
        })
        
//making each button link to text box and upload onto local storage
/*$('button').each.on("click", function(event){
localStorage.setItem(this.id,$('form').val())
})*/

$('form').each(function(el){
    console.log(this)
    $(this).find('input[type="text"]').val(inputValues[this.id])
    console.log(this.id)
})

  $('form').on('submit'), function(e){
      e.preventDefault()
      var item= this.id
      var val = $(this).find('inputs').val()
      inputValues[item] = val
        localStorage.setItem('inputs', JSON.stringify(inputValues))
      
  }
  var inputValues = JSON.parse(localStorage.getitem("inputs"));
  console.log("inputs")


  //localStorage.setItem(this.id, $(this).find('input').val() )
    //  $(this).find("input").val
      //console.log(this)
/*document.getElementById("btn1").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("textBox1", JSON.stringify(textBox1));
    var eventCreated1 = JSON.parse(localStorage.getitem("textBox1"));
    textBox1.textCont = eventCreated1
    console.log(event)
    console.log(textBox1)
    console.log(eventCreated1)
$("#btn1").on("", function(event) {
    alert("I've been clicked!");
    event.preventDefault();
    localStorage.setItem("textBox1", JSON.stringify(textBox1));
    
    textBox1.textContent = eventCreated1
    console.log(event)
    console.log(textBox1)
    console.log(eventCreated1)
})
//save text to localstorage.

// data goes back and stays in text*/