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
  var syntaxCheck = checkModalPass();
  var passCheck = checkCookiePass();
  if ((syntaxCheck === true && passCheck === true) && (checkCookieMail() === true)) {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    //Display values in page
    document.getElementById("username").innerHTML = getCookie("usr");
  } else {
    if (syntaxCheck === false) {
      return false;
    }
    window.location = "Exercise4.html";
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
    } else {
      alert("Invalid mail, try again.");
      return false;
    }
  }
  //Now we dont have to set the cookie, just redirect to ex1
}

function counterLike() {
  var likes = parseInt(document.getElementById("likes").innerHTML);
  likes++;
  document.getElementById("likes").innerHTML = likes + " likes";
}

function counterShare() {
  var shares = parseInt(document.getElementById("shares").innerHTML);
  shares++;
  document.getElementById("shares").innerHTML = shares + " shares";
}

function display1(){
  document.getElementById("description1").style.visibility= "visible";
}

function display2(){
  document.getElementById("description2").style.visibility= "visible";
}

function display3(){
  document.getElementById("description3").style.visibility= "visible";
}

$(document).ready(function(){
  $('#dragtest').draggable( {
      cursor: 'move',
      revert:true
      //helper: 'clone'
  });

  $('#dragtest2').draggable( {
      cursor: 'move',
      revert: true
      //helper: 'clone'
  });

  $('#test').droppable( {
    drop: function( event, ui ) {
      // var draggableId = ui.draggable.attr("id");
      // var droppableId = $(this).attr("id");

      var dragContent = ui.draggable.html();
      var dropContent = $(this).find("p").html();
      alert($(this).html());
      ui.draggable.html(dropContent);
      $(this).find("p").html(dragContent);

      // ui.draggable.attr("id", droppableId);
      // $(this).attr("id", droppableId);
    }
  });

  $('#test2').droppable( {
    drop: function( event, ui ) {
      // var draggableId = ui.draggable.attr("id");
      // var droppableId = $(this).attr("id");

      var dragContent = ui.draggable.html();
      var dropContent = $(this).find("p").html();
      alert($(this).html());
      ui.draggable.html(dropContent);
      $(this).find("p").html(dragContent);

      // ui.draggable.attr("id", droppableId);
      // $(this).attr("id", droppableId);
    }
  });

});
