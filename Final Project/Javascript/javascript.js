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
//
// function checkPass() {
//   var pw = document.getElementById("pass").value;
//   if (pw.length < 8) {
//     window.alert("Your password must be at least 8 characters");
//     return false;
//   }
//   if (pw.length > 15) {
//     window.alert("Your password must be at most 15 characters");
//     return false;
//   }
//   if (pw.search(/[a-z]/i) < 0) {
//     window.alert("Your password must contain at least one letter.");
//     return false;
//   }
//   if (pw.search(/[0-9]/) < 0) {
//     window.alert("Your password must contain at least one digit.");
//     return false;
//   }
//   return true;
// }

function modalBox() {
  if (modalVar === 1) {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  }
}

// function hideModal() {
//   if (checkPass() === true) {
//     var modal = document.getElementById("myModal");
//     modalVar = 0;
//     modal.style.display = "none";
//   }
// }

function cancel() {
  var modal = document.getElementById("myModal");
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
    }
    else {
      alert("Invalid mail, try again.");
      return false;
    }
  } else {
    mail = document.getElementById("modalmail").value;
    if (mail != "" && mail != null) {
      setCookie("mail", mail, 30);
    }
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
    document.getElementById("signin").innerHTML='<a href="#">'+ getCookie("mail") +'</a>'
  }
}

function resetAllCookies() {
  document.cookie = "mail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.alert("Cookies Removed");
}
