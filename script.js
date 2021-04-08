//add current day to the top of the calender.
let day = moment().format("dddd MMMM Do YYYY, h:mm a");
$("#currentDay").html(day);


// auditTask(tasks);

// var tasks = {
//     "9":[],
//     "10":[],
//     "11":[],
//     "12":[],
//     "13":[],
//     "14":[],
//     "15":[],
//     "16":[],
//     "17":[]
// }
$("saveBtn").click(function () {
    var input = $(this).child(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(input, time)
});

//indicate whether the the time blocks are past, present, future. If/else statment might help, use military time.
function timer() {

    var currentTime = moment().hour()

    $(".time-block").each(function () {
        var currentTask = parseInt($(this).attr("id"));

        if (currentTask < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (currentTask === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        }

    })
}
//add entered text into local storage with the save button. 


let loadItems = function() {
    for(let i = 9; i < 17; i++){
        $("#"+i + ".discription").val(localStorage.getItem(i));
    }
}

timer();
loadItems();






