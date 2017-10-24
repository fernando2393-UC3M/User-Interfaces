//Global varibales
var n = 0;
var timer = 0;
var counter = 0;

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function modalBox() {
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
}

function modalBoxHide() {
  if (checkImages() === true && checkTime() === true) {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
}

function checkImages() {
  var images = document.getElementById('Images').value;
  if(images === ""){
    alert("The images field cannot be empty");
    return false;
  }
  var imagesn = parseInt(document.getElementById('Images').value);
  if(imagesn<3 || imagesn>10){
    alert("The number must be between 3 and 10")
    return false;
  }
  var cimage = getCookie("cimage");
  if(cimage === ""){
    setCookie("cimage", images, 30);
  }
  if(cimage != ""){
    document.cookie = "cimage=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("cimage", images, 30);
  }
  n = imagesn*2;
  return true;
}

function checkTime() {
  var time = document.getElementById('Time').value;
  if(time === ""){
    alert("The time field cannot be empty");
    return false;
  }
  var timen = parseInt(document.getElementById('Time').value);
  if(timen<10 || timen>120){
    alert("The time must be between 10 and 120")
    return false;
  }
  var ctimer = getCookie("ctimer");
  if(ctimer === ""){
    setCookie("ctimer", time, 30);
  }
  if(ctimer != ""){
    document.cookie = "ctimer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("ctimer", time, 30);
  }
  timer = timen;
  return true;
}

function timer(){
  var x = setInterval(function() {
  var diff = new Date(timer);
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById('Timer').innerHTML = Minutes + "m " + Seconds + "s ";
  if (timer < 0) {
        clearInterval(x);
        document.getElementById('Timer').innerHTML = "EXPIRED";
        alert("Time has Expired!");
        location.reload();
    }
  }, 1000);
}

function hidePlay(){
  document.getElementById("Play").style.visibility = "hidden";
  document.getElementById("Restart").style.visibility = "visible";
}
function hideRestart(){
  document.getElementById("Restart").style.visibility = "hidden";
  document.getElementById("Play").style.visibility = "visible";
}
function hideTimer(){
  document.getElementById("Timer").style.visibility = "hidden";
}

function showTimer(){
  document.getElementById("Timer").style.visibility = "visible";
}

function restart(){

}

function computeBoard(){

}
