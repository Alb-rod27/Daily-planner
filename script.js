//add current day to the top of the calender.
var toDo = {};

$(document).ready(function() {
$("#currentDay").html(moment().format('LLLL'));


var currentHour = {
    "9":[],
    "10":[],
    "11":[],
    "12":[],
    "13":[],
    "14":[],
    "15":[],
    "16":[],
    "17":[]
}
        {
        auditTasks()
        }
    //indicate whether the the time blocks are past, present, future. If/else statment might help, use military time.
    var auditTasks = function() {
        /* update the background of each row based on the time of day */
    
        var currentHour = moment().hour();
        $(".task-info").each( function() {
            var elementHour = parseInt($(this).attr("id"));
    
            // handle past, present, and future
            if ( elementHour < currentHour ) {
                $(this).removeClass(["present", "future"]).addClass("past");
            }
            else if ( elementHour === currentHour ) {
                $(this).removeClass(["past", "future"]).addClass("present");
            }
            else {
                $(this).removeClass(["past", "present"]).addClass("future");
            }
        })
    };
    
    //add entered text into local storage with the save button. 
    var currentHour = function() {
        localStorage.setItem("toDo", JSON.stringify(toDo));
        console.log(toDo);
      };
    
});
    

    



