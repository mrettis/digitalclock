
window.onload  = setInterval(clock,1000);
function clock() {
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth()+1;


  var year = now.getFullYear();
  var today = now.getDay();
  var listDay = ["Sunday, ", "Monday, ","Tuesday, ","Wednesday, ","Thursday, ","Friday, ","Saturday, "];
  var day = listDay[today];

  var hour = now.getHours();
  var min  = now.getMinutes();
  var sec = now.getSeconds();
  var session = (hour>12)?" PM":" AM";
  hour = (hour ==0)? Hour=12: hour;
  hour = (hour>12)? hour -12: hour;
  hour = (hour < 10)?"0"+hour: hour;
  min = (min < 10)?"0"+ min: min;
  sec = (sec < 10)?"0"+ sec: sec;

  document.getElementById('date').innerHTML = day +""+ month +"/"+date+"/"+year;
  document.getElementById('time').innerHTML = hour+ ":"+min+":"+sec+ session;










}
