// added todays date 
var date = moment();
$("#currentDay").text(date.format("dddd: MMM Do, YYYY"));
var timeSlot = new Date();
 hours = timeSlot.setHours(8);
 console.log(hours);

 var nineAm = document.getElementById("#9am");
 var NINEam = moment().format("09", "hh a");
 var tenAm = moment().format("10", "hh a");
 var elevanAm = moment().format("11", "hh a");
 var twelvePm = moment().format("12", "hh a");
 var onePm = moment().format("01", "hh a");
 var twoPm = moment().format("02", "hh a");
 var threePm = moment().format("03", "hh a");
 var fourPm = moment().format("04", "hh a");
 var fivePm = moment().format("05", "hh a");
 console.log(NINEam)
 var time = moment().format("h:mm:ss a");
 console.log(time);

 if (NINEam < nineAm){
     nineAm.classList.add("future");
 }



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