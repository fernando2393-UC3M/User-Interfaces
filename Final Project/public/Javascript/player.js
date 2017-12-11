function getMovie(){
  if(checkCookieTitle()===true && checkCookieTrailer()===true){
    resetCookies();
  }
  else{
    window.location = "index.html";
  }
}

function goBack(){
  window.location = "index.html";
}

function pause(){
  document.getElementById("play").style.display="none";
  document.getElementById("pause").style.display="block";
  document.getElementById("loadingWrapper").style.display="block";
  document.getElementById("centre").style.display="none";
}

function play(){
  document.getElementById("pause").style.display="none";
  document.getElementById("play").style.display="block";
  document.getElementById("loadingWrapper").style.display="none";
}

function hideCentre(){
  document.getElementById("centre").style.display="none";
  document.getElementById("loadingWrapper").style.display="block";
}

function hidePlayer(){
  document.getElementById("headerWrapper").style.display="none";
  document.getElementById("footerWrapper").style.display="none";
}

function showPlayer(){
  document.getElementById("headerWrapper").style.display="block";
  document.getElementById("footerWrapper").style.display="block";
}


/*COOKIES*/
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

function checkCookieTitle() {
  var film = getCookie("film");
  if (film != "") {
    document.getElementById("title").innerHTML= film;
    return true;
  } else {
    return false;
  }
}

//Checks cookie and sets the background
function checkCookieTrailer() {
  var trailer = getCookie("trailer");
  if (trailer != "") {
    document.body.style.backgroundImage = "url('Images/"+trailer+"')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    return true;
  } else {
    return false;
  }
}

function resetCookies() {
  document.cookie = "film=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // document.cookie = "trailer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

}
