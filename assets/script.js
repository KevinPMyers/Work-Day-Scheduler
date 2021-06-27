// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// variable for current date
var todayDate = moment().format("dddd, MMM Do YYYY");
$('#currentDay').html(todayDate);

var todayTime = moment().format("h:mm a");
$('#currentTime').html(todayTime);

var currentHour = moment().format("H")

// clear button

// Function to save all items on schedule, and display the current color coded time-block 
$(document).ready(function() {
    
    var textAreas = $('.description')
    var arrTime = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    var arrNum = [9, 10, 11, 12 ,13, 14 , 15 , 16 , 17]
    for (i=0; i<textAreas.length; i++){
        
        textAreas[i].value = localStorage.getItem(arrTime[i])

        if(currentHour > arrNum[i]){
            textAreas[i].setAttribute("class", "col-md-10 description past")
        } else if (currentHour == arrNum[i]){
            textAreas[i].setAttribute("class", "col-md-10 description present")
        } else {
            textAreas[i].setAttribute("class", "col-md-10 description future")
        }
        
    } 

    $('.saveBtn').click(function(){
        
        var value= $(this).prev().val()
        localStorage.setItem($(this).prev().prev().text(), value)
    }
)});


console.log(moment().format("H"))