// added todays date 
var date = moment();
$("#currentDay").text(date.format("dddd: MMM Do, YYYY"));

var time = moment();
$("#currentTime").text(time.format('h:mm:ss a'));

