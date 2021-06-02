// added todays date 
var date = moment();
$("#currentDay").text(date.format("dddd: MMM Do, YYYY"));
var timeSlot = new Date();
 hours = timeSlot.getHours(8);
 console.log(hours);

 var nineAm = $("9am");
 var time = moment().format("h:mm:ss a");
 console.log(time);

 function timeUpdate(){
 time = moment().format("h:mm:ss a");
currentTime = $("#currentTime");
 currentTime.text(time);
};

var scheduleTime = $(".row");

var startTime = moment("8:00", "HH:mm, a");
console.log(startTime);

var endTime = moment("17:00", "HH:mm, A");
console.log(endTime);

var notes = document.querySelector(".time-block");
var saveBtn = document.querySelector(".saveBtn");
var scheduleNotes = notes.value
// added function to save last notes
function saveNotes (){
     scheduleNotes = {
         notes: notes.value,
};

console.log(scheduleNotes);
 localStorage.setItem("scheduleNotes",JSON.stringify(scheduleNotes));
}

function rendersaveNotes(){
    var lastNotes = JSON.parse(localStorage.getItem("scheduleNotes"));
    document.querySelector(".time-block").innerHTML = lastNotes.notes
    console.log(lastNotes);
};

saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    saveNotes();
    rendersaveNotes();
});

function init(){
    rendersaveNotes();
};
init();







setInterval(timeUpdate, 1000);