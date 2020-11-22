
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
        
//setting each save button and adding corresponding textArea to local storage. saves and gets when reloads

  let textArea1 = $("#ta1")
  let textArea2 = $("#ta2")
  let textArea3 = $("#ta3")
  let textArea4 = $("#ta4")
  let textArea5 = $("#ta5")
  let textArea6 = $("#ta6")
  let textArea7 = $("#ta7")
  let textArea8 = $("#ta8")
  let textArea9 = $("#ta9")
  let textArea10 = $("#ta10")

  $("#btn1").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea1.val())
      console.log(this.id)
      console.log(textArea1.val())
  });

  textArea1.val(localStorage.getItem("btn1"))

  $("#btn2").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea2.val())
      console.log(this.id)
      console.log(textArea2.val())
  });

  textArea2.val(localStorage.getItem("btn2"))

  $("#btn3").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea3.val())
      console.log(this.id)
      console.log(textArea3.val())
  });

  textArea3.val(localStorage.getItem("btn3"))

  $("#btn4").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea4.val())
      console.log(this.id)
      console.log(textArea4.val())
  });

  textArea4.val(localStorage.getItem("btn4"))

  $("#btn5").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea5.val())
      console.log(this.id)
      console.log(textArea5.val())
  });

  textArea5.val(localStorage.getItem("btn5"))

  $("#btn6").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea6.val())
      console.log(this.id)
      console.log(textArea6.val())
  });

  textArea6.val(localStorage.getItem("btn6"))

  $("#btn7").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea7.val())
      console.log(this.id)
      console.log(textArea7.val())
  });

  textArea7.val(localStorage.getItem("btn8"))

  $("#btn8").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea8.val())
      console.log(this.id)
      console.log(textArea8.val())
  });

  textArea8.val(localStorage.getItem("btn8"))

  $("#btn9").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea9.val())
      console.log(this.id)
      console.log(textArea9.val())
  });

  textArea9.val(localStorage.getItem("btn9"))

  $("#btn10").on("click", function(e){
    e.preventDefault()
      localStorage.setItem(this.id, textArea10.val())
      console.log(this.id)
      console.log(textArea10.val())
  });

  textArea10.val(localStorage.getItem("btn10"))



