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
√create time blocks for each hour of a standard work day. use bootstrap to create time blocks
√make time blocks editable, look into input boxes.used text boxes

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


//hour is < current hour then style .past. if in current hour, run style present. otherwise run style future
//
var currentHour = moment().format('H')
console.log(currentHour)
//need to add way to condense
var textBox1 = $('#9aBox')
var textBox1Val = 9

var textBox2 = $('#10aBox')
var textBox2Val = 10

var textBox3 = $('#11aBox')
var textBox3Val = 11

var textBox4 = $('#12pBox')
var textBox4Val = 12

var textBox5 = $('#1pBox')
var textBox5Val = 13

var textBox6 = $('#2pBox')
var textBox6Val = 14

var textBox7 = $('#3pBox')
var textBox7Val = 15

var textBox8 = $('#4pBox')
var textBox8Val = 16

var textBox9 = $('#5pBox')
var textBox9Val = 17

var textBox10 = $('#6pBox')
var textBox10Val = 18

console.log(textBox1)
console.log(textBox9Val)
//find way to combine into one
if(textBox1Val < currentHour){
    textBox1.attr("class", "past")
    } else if (textBox1Val === currentHour){
    textBox1.attr("class","present")
    }
    else if(textBox1Val > currentHour){
    textBox1.attr("class","future")
    }
    
    if(textBox2Val < currentHour){
        textBox2.attr("class", "past")
        } else if (textBox2Val === currentHour){
        textBox2.attr("class","present")
        }
        else if(textBox2Val > currentHour){
        textBox2.attr("class","future")
        }

        if(textBox3Val < currentHour){
            textBox3.attr("class", "past")
            } else if (textBox3Val === currentHour){
            textBox3.attr("class","present")
            }
            else if(textBox3Val > currentHour){
            textBox3.attr("class","future")
            }

            if(textBox4Val < currentHour){
                textBox4.attr("class", "past")
                } else if (textBox4Val === currentHour){
                textBox4.attr("class","present")
                }
                else if(textBox4Val > currentHour){
                textBox4.attr("class","future")
                }

                if(textBox5Val < currentHour){
                    textBox5.attr("class", "past")
                    } else if (textBox5Val === currentHour){
                    textBox5.attr("class","present")
                    }
                    else if(textBox5Val > currentHour){
                    textBox5.attr("class","future")
                    }

                    if(textBox6Val < currentHour){
                        textBox6.attr("class", "past")
                        } else if (textBox6Val === currentHour){
                        textBox6.attr("class","present")
                        }
                        else if(textBox6Val > currentHour){
                        textBox6.attr("class","future")
                        }

if(textBox7Val < currentHour){
   textBox7.attr("class", "past")
   } else if (textBox7Val === currentHour){
   textBox7.attr("class","present")
   }
   else if(textBox7Val > currentHour){
   textBox7.attr("class","future")
   }

   if(textBox8Val < currentHour){
 textBox8.attr("class", "past")
 } else if (textBox8Val === currentHour){
 textBox8.attr("class","present")
 }
 else if(textBox8Val > currentHour){
 textBox8.attr("class","future")
 }

 if(textBox9Val < currentHour){
     textBox9.attr("class", "past")

     } else if (textBox9Val == currentHour){
     textBox9.attr("class","present")
     }
    else if(textBox9Val > currentHour){
     textBox9.attr("class","future")
     }

    if(textBox10Val < currentHour){
       textBox10.attr("class", "past")
    } else if (textBox10Val === currentHour){
    textBox10.attr("class","present")
    } else if(textBox10Val > currentHour){
       textBox10.attr("class","future")
    }
/*
$("textarea").on('click',function(){
   
})
//linking buttons to forms
//when clicked btn num will save text area num to local storage. and save into text in box
$(".9a").on('click',function(){

})
*/