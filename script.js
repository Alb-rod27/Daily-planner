//add current day to the top of the calender.
let day = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(day);

auditTask(tasks);

        var tasks = {
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

    //indicate whether the the time blocks are past, present, future. If/else statment might help, use military time.
        
            var currentHour = moment().hour() 
        
            if ((currentTask) > currentTime) {
                $("#text").addClass("past");
                $("#text").removeClass("future");
                $("#text").removeClass("present");
            }
            else if ((currentTask) < currentTime) {
                $("#text").removeClass("future");
                $("#text").removeClass("past");
                $("#text").addClass("present");
            }
            else ((currentTask) === currentTime); {
                $("#text").removeClass("past");
                $("#text").removeClass("present");
                $("#text").addClass("future");
                
            }
        
    
            //add entered text into local storage with the save button. 
            
    
// });
    

    



