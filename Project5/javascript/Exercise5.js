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

function setBackground(){ //Allows to set a background image compatible with the Modal
  document.body.style.backgroundImage = "url('images/background.jpg')";
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


function counterLike(elem) {
  var child=elem.childNodes; //We will use the child nodes to get to the text to change
  var likes = parseInt(child[3].innerHTML); //child[3] corresponds to the div withy id=likes from which we get the number of likes
  likes++;
  child[3].innerHTML = likes + " likes";
}

function counterShare(elem) {
  var child=elem.childNodes;
  var shares = parseInt(child[3].innerHTML);
  shares++;
  child[3].innerHTML = shares + " shares";
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
  $('#video1').draggable( {
      cursor: 'move',
      revert:true,
      //helper: 'clone'
  });

  $('#video2').draggable( {
      cursor: 'move',
      revert: true,
      //iframeFix: true
      //helper: 'clone'
  });

  $('#video3').draggable( {
      cursor: 'move',
      revert: true,
      //iframeFix: true
      //helper: 'clone'
  });

  //REMEMBER TO DELETE HOLDVIDEO IF NOT USED

  $('#mainVideo').droppable( {
    drop: function( event, ui ) {

      var dragContentLink = ui.draggable.find("a").attr("href");
      var dropContentLink = $(this).find("#videoIFrame").attr("src");

      var dragContentImage = ui.draggable.find("a").find("img").attr("src");
      var dropContentImage = $(this).find("img").attr("src");

      var dragContentDescription;
      var dropContentDescription;

      var dragContentLikes;
      var dropContentLikes;

      var dragContentShares;
      var dropContentShares;

      var id=ui.draggable.attr("id");
      switch (id){
        case "video1":
            dragContentDescription= ui.draggable.find("#description1").attr("innerHTML");
            dropContentDescription= $(this).find("#descriptionIframe").attr("innerHTML");

            dragContentLikes= ui.draggable.find("#likesVid1").attr("innerHTML");
            dropContentLikes= $(this).find("#likesFrame").attr("innerHTML");

            dragContentShares= ui.draggable.find("#sharesVid1").attr("innerHTML");
            dropContentShares= $(this).find("#sharesFrame").attr("innerHTML");

            ui.draggable.find("#description1").attr("innerHTML", dropContentDescription);
            $(this).find("#descriptionIframe").attr("innerHTML", dragContentDescription);

            ui.draggable.find("#likesVid1").attr("innerHTML", dropContentLikes);
            $(this).find("#likesFrame").attr("innerHTML", dragContentLikes);

            ui.draggable.find("#sharesVid1").attr("innerHTML", dropContentShares);
            $(this).find("#sharesFrame").attr("innerHTML", dragContentShares);
          break;

        case "video2":
            dragContentDescription= ui.draggable.find("#description2").attr("innerHTML");
            dropContentDescription= $(this).find("#descriptionIframe").attr("innerHTML");

            dragContentLikes= ui.draggable.find("#likesVid2").attr("innerHTML");
            dropContentLikes= $(this).find("#likesFrame").attr("innerHTML");

            dragContentShares= ui.draggable.find("#sharesVid2").attr("innerHTML");
            dropContentShares= $(this).find("#sharesFrame").attr("innerHTML");

            ui.draggable.find("#description2").attr("innerHTML", dropContentDescription);
            $(this).find("#descriptionIframe").attr("innerHTML", dragContentDescription);

            ui.draggable.find("#likesVid2").attr("innerHTML", dropContentLikes);
            $(this).find("#likesFrame").attr("innerHTML", dragContentLikes);

            ui.draggable.find("#sharesVid2").attr("innerHTML", dropContentShares);
            $(this).find("#sharesFrame").attr("innerHTML", dragContentShares);
          break;

        default:
          dragContentDescription= ui.draggable.find("#description3").attr("innerHTML");
          dropContentDescription= $(this).find("#descriptionIframe").attr("innerHTML");

          dragContentLikes= ui.draggable.find("#likesVid3").attr("innerHTML");
          dropContentLikes= $(this).find("#likesFrame").attr("innerHTML");

          dragContentShares= ui.draggable.find("#sharesVid3").attr("innerHTML");
          dropContentShares= $(this).find("#sharesFrame").attr("innerHTML");

          ui.draggable.find("#description3").attr("innerHTML", dropContentDescription);
          $(this).find("#descriptionIframe").attr("innerHTML", dragContentDescription);

          ui.draggable.find("#likesVid3").attr("innerHTML", dropContentLikes);
          $(this).find("#likesFrame").attr("innerHTML", dragContentLikes);

          ui.draggable.find("#sharesVid3").attr("innerHTML", dropContentShares);
          $(this).find("#sharesFrame").attr("innerHTML", dragContentShares);
      break;
      }

      ui.draggable.find("a").attr("href", dropContentLink);
      $(this).find("#videoIFrame").attr("src", dragContentLink);

      ui.draggable.find("a").find("img").attr("src", dropContentImage);
      $(this).find("img").attr("src", dragContentImage);


    }
  });


  $('#dragtest').draggable( {
      cursor: 'move',
      revert:true,
      //helper: 'clone'
  });

  $('#dragtest2').draggable( {
      cursor: 'move',
      revert: true,
      //iframeFix: true
      //helper: 'clone'
  });

  $('#test').droppable( {
    drop: function( event, ui ) {
      // var draggableId = ui.draggable.attr("id");
      // var droppableId = $(this).attr("id");

      var dragContent = ui.draggable.html();
      var dropContent = $(this).find("p").html();
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
      ui.draggable.html(dropContent);
      $(this).find("p").html(dragContent);

      // ui.draggable.attr("id", droppableId);
      // $(this).attr("id", droppableId);
    }
  });


});
