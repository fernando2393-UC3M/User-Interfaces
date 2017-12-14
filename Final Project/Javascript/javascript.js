var modalVar = 1;

function showBar() {
  if (document.getElementById("Menu").style.display == "block") {
    document.getElementById("Menu").style.display = "none";
    document.getElementById("Menu1").style.display = "block";
  } else {
    document.getElementById("Menu").style.display = "block";
    document.getElementById("Menu1").style.display = "none";
  }
}

function modalBox() {
  if (modalVar === 1) {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
}
function modalBox2() {
  if (modalVar === 1) {
    var modal = document.getElementById('myModal2');
    modal.style.display = "block";
  }
}


function cancel() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  return false;
}

function cancel2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
  return false;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("content").style.display = "block";
}

function closeNav() {
  document.getElementById("content").style.display = "none";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("search").value = "";
  searchf();
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

function checkCookieMail() {
  var mail = getCookie("mail");
  if (mail != "") {
    if (mail === document.getElementById("modalmail").value) {
      return true;
    } else {
      alert("Invalid mail, try again.");
      return false;
    }
  } else {
    mail = document.getElementById("modalmail").value;
    if (mail != "" && mail != null) {
      setCookie("mail", mail, 30);
      return true;
    }
    return false;
  }
}

function checkCookiePass() {
  var password = getCookie("password");
  if (password != "") {
    if (password === document.getElementById("modalpass").value) {
      return true;
    } else {
      alert("Invalid password, try again.");
      return false;
    }
  } else {
    password = document.getElementById("modalpass").value;
    if (password != "" && password != null) {
      setCookie("password", password, 30);
      return true;
    }
    return false;
  }
}

function checkModalPass() {
  var pw = document.getElementById("modalpass").value;
  if (pw.length < 8) {
    alert("Your password must be at least 8 characters");
    return false;
  }
  if (pw.length > 15) {
    alert("Your password must be at most 15 characters");
    return false;
  }
  if (pw.search(/[a-z]/i) < 0) {
    alert("Your password must contain at least one letter.");
    return false;
  }
  if (pw.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
    return false;
  }
  return true;
}

function modalBoxHide() {
  if ((checkModalPass() === true && checkCookiePass() === true) && (checkCookieMail() === true)) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.getElementById("signin").innerHTML = '<a href="#" onclick="logOut()" onmouseover="showLogOut()" onmouseout="hideLogOut()">' + getCookie("mail") + '</a>'+'<div id="logOut"> Click to Log Out </div>'
    document.getElementById("getaccount").innerHTML = "Account Info.";
    /*We modify the register modal to make it work as an Account Information Display*/
    document.getElementById("optiondiv").innerHTML = '<div class="submitModal2"><input type="submit" id="btn-SM2" value="Display/Save Info" onclick="setPass(); setAddress(); setAccountNum(); modalBoxHide2(); return false;"></div><div class="cancelModal2"><input type="submit" id="btn-CM2" value="Cancel" onclick="cancel2(); return false;"></div>'
  }
}

/*Cookies for Redister Modal (myModal2)*/
function checkCookieMail2() {
  var mail = getCookie("mail");
  if (mail != "") {
    if (mail === document.getElementById("modalmail2").value) {
      return true;
    } else {
      alert("Invalid mail, try again.");
      return false;
    }
  } else {
    mail = document.getElementById("modalmail2").value;
    if (mail != "" && mail != null) {
      setCookie("mail", mail, 30);
      return true;
    }
    return false;
  }
}

function checkCookiePass2() {
  var password = getCookie("password");
  if (password != "") {
    if (password === document.getElementById("modalpass2").value) {
      return true;
    } else {
      alert("Invalid password, try again.");
      return false;
    }
  } else {
    password = document.getElementById("modalpass2").value;
    if (password != "" && password != null) {
      setCookie("password", password, 30);
      return true;
    }
    return false;
  }
}

function checkCookieAddress() {
    var address = getCookie("address");
    if (address != "") {
      if (address === document.getElementById("modaladdress").value) {
        return true;
      } else {
        alert("Invalid Address, try again.");
        return false;
      }
    } else {
      address = document.getElementById("modaladdress").value;
      if (address != "" && address != null) {
        setCookie("address", address, 30);
        return true;
      }
      return false;
    }
}

function checkCookieAccount() {
    var account = getCookie("account");
    if (account != "") {
      if (account === document.getElementById("account").value) {
        return true;
      } else {
        alert("Invalid Account, try again.");
        return false;
      }
    } else {
      account = document.getElementById("account").value;
      if (account != "" && account != null) {
        setCookie("account", account, 30);
        return true;
      }
      return true;
    }
}

/*Checks the conditions for the password are fullfilled*/
function checkModalPass2() {
  var pw = document.getElementById("modalpass2").value;
  if (pw.length < 8) {
    alert("Your password must be at least 8 characters");
    return false;
  }
  if (pw.length > 15) {
    alert("Your password must be at most 15 characters");
    return false;
  }
  if (pw.search(/[a-z]/i) < 0) {
    alert("Your password must contain at least one letter.");
    return false;
  }
  if (pw.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
    return false;
  }
  return true;
}
function modalBoxHide2() {
  if ((checkModalPass2() === true && checkCookiePass2() === true) && (checkCookieMail2() === true && checkCookieAddress()=== true) && (checkCookieAccount())) {
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
    /*In order to display the user name we change the HTML directly and add the onmouseover condition to logOut*/
    document.getElementById("signin").innerHTML = '<a href="#" onclick="logOut()" onmouseover="showLogOut()" onmouseout="hideLogOut()">' + getCookie("mail") + '</a>'+'<div id="logOut"> Click to Log Out </div>'
    document.getElementById("getaccount").innerHTML = "Account Info.";
    document.getElementById("optiondiv").innerHTML = '<div class="submitModal2"><input type="submit" id="btn-SM2" value="Display/Save Info" onclick="setPass(); setAddress(); setAccountNum(); modalBoxHide2(); return false;"></div><div class="cancelModal2"><input type="submit" id="btn-CM2" value="Cancel" onclick="cancel2(); return false;"></div>'
  }
}

function setPass() {
  if(getCookie("password") != ""){
    /*We also put the email in case we logged in instea of created the account*/
    document.getElementById("modalmail2").value = getCookie("mail");
    document.getElementById("modalpass2").value = getCookie("password");
  }
}

function setAddress() {
  if(getCookie("address") != ""){
    document.getElementById("modaladdress").value = getCookie("address");
  }
}

function setAccountNum() {
  if(getCookie("account") != ""){
    document.getElementById("account").value = getCookie("account");
  }
}


function resetAllCookies() {
  document.cookie = "mail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "address=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.alert("Cookies Removed");
  location.reload();
}

/*Display the logOut information when hovering*/
function showLogOut() {
  var mess = document.getElementById("logOut");
  mess.style.display= "block";
}

function hideLogOut(){
  var mess = document.getElementById("logOut");
  mess.style.display= "none";
}

function logOut() {
  location.reload();
}

/*Redirection to video player using a cookie to let the player know which film is selected*/
function redirect(title, trailer) {
  setCookie("film", title, 30);
  setCookie("trailer", trailer, 30);
  window.location = "player.html";
}









//--------------------------------------SEARCH FIELD--------------------------------------//

function showResult(){
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  if(filter.length > 0){
    document.getElementById("result").style.display = "block";
  }
}

function searchf() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUl");
  li = ul.getElementsByTagName("li");
  if (filter.length > 0) {
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        showResult();
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }
    }
  } else {
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "none";
    }
  }
}

//--------------------------------------IMDB FILMS--------------------------------------//

function annabelle(){
  window.open("http://www.imdb.com/title/tt3322940/?ref_=fn_al_tt_1","_self");
}
function braveheart(){
  window.open("http://www.imdb.com/title/tt0112573/?ref_=nv_sr_3","_self");
}
function catch_it(){
  window.open("http://www.imdb.com/title/tt0264464/?ref_=nv_sr_1","_self");
}
function dunkirk(){
  window.open("http://www.imdb.com/title/tt5013056/?ref_=nv_sr_1","_self");
}
function forrest(){
  window.open("http://www.imdb.com/title/tt0109830/?ref_=nv_sr_1","_self");
}
function inception(){
  window.open("http://www.imdb.com/title/tt1375666/?ref_=nv_sr_1","_self");
}
function indiana(){
  window.open("http://www.imdb.com/title/tt0097576/?ref_=nv_sr_1","_self");
}
function time(){
  window.open("http://www.imdb.com/title/tt1637688/?ref_=nv_sr_2","_self");
}
function interstellar(){
  window.open("http://www.imdb.com/title/tt0816692/?ref_=nv_sr_1","_self");
}
function law(){
  window.open("http://www.imdb.com/title/tt1197624/?ref_=nv_sr_1","_self");
}
function lucy(){
  window.open("http://www.imdb.com/title/tt2872732/?ref_=nv_sr_3","_self");
}
function pearl(){
  window.open("http://www.imdb.com/title/tt0213149/?ref_=nv_sr_2","_self");
}
function philadelphia(){
  window.open("http://www.imdb.com/title/tt0107818/?ref_=nv_sr_2","_self");
}
function pursuit(){
  window.open("http://www.imdb.com/title/tt0454921/?ref_=nv_sr_1","_self");
}
function seven(){
  window.open("http://www.imdb.com/title/tt0114369/?ref_=fn_al_tt_1","_self");
}
function space(){
  window.open("http://www.imdb.com/title/tt0117705/?ref_=nv_sr_1","_self");
}
function starwars(){
  window.open("http://www.imdb.com/title/tt0076759/?ref_=nv_sr_5","_self");
}
function gallows(){
  window.open("http://www.imdb.com/title/tt2309260/?ref_=nv_sr_1","_self");
}
function godfather(){
  window.open("http://www.imdb.com/title/tt0068646/?ref_=nv_sr_1","_self");
}
function lambs(){
  window.open("http://www.imdb.com/title/tt0102926/?ref_=nv_sr_1","_self");
}


function credit(){
	var x= document.getElementById('paymentMethod');
	var y=x.options[x.selectedIndex].value;
	if(y=="creditcard"){
		document.getElementById('credit').style.display="block";
		document.getElementById('credit').style.visibility="visible";
		document.getElementById('payp').style.display="none";
		document.getElementById('trans').style.display="none";
	}
	else if (y=="Paypal") {
		document.getElementById('credit').style.display="none";
		document.getElementById('payp').style.display="block";
		document.getElementById('payp').style.visibility="visible";
		document.getElementById('trans').style.display="none";
	}
	else if(y=="transfer"){
		document.getElementById('credit').style.display="none";
		document.getElementById('payp').style.display="none";
		document.getElementById('trans').style.display="block";
		document.getElementById('trans').style.visibility="visible";
	}
}

