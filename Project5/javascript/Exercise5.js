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
  if ((checkModalPass() === true && checkCookiePass() === true) && (checkCookieMail() === true)) {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    //Display values in page
  }
  else{
    alert("HEY");
    //Redirect to ex1
  }
}

function checkModalPass() {
  var pw = document.getElementById("modalpass").value;
  if (pw.length > 8) {
    alert("Your password must be at most 8 characters");
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

function checkCookiePass() {
  var password = getCookie("password");
  if (password != "") {
    if (password === document.getElementById("modalpass").value) {
      return true;
    } else {
      alert("Invalid password, try again.");
      return false;
    }
  }
  //Now we dont have to set the cookie, just redirect to ex1
}

function checkCookieMail() {
  var mail = getCookie("mail");
  if (mail != "") {
    if (mail === document.getElementById("modalmail").value) {
      return true;
    }
    else {
      alert("Invalid mail, try again.");
      return false;
    }
  }
  //Now we dont have to set the cookie, just redirect to ex1
}
