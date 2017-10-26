var Source = "#boxcard";
var ImgSource = [
  "images/samsung.jpg",
  "images/lg.jpg",
  "images/onplus.jpg",
  "images/apple.jpg",
  "images/huawei.jpg",
  "images/oppo.jpg",
  "images/vivo.jpg",
  "images/xiaomi.jpg",
  "images/zte.jpg",
  "images/htc.jpg",
];
var BoxOpened = ""; //Holds id of 2º image openned
var ImgOpened = ""; //Holds id of 1º image openned
var clickNum = 0;
var ImgFound = 0;
var numImg;
var counter;

var x; //For the timer
var chrono = 0;


function start() {
  numImg = subArray();
  for (var y = 1; y < 3; y++) { //Appends the images twice (one div per image)
    numImg.map(function(val, i) {
      $(Source).append("<div id=card" + y + i + "><img class='srcImg' src=" + val + "/>");
    });
  }
  $(Source + " div").click(OpenCard); //Image clicked
  ShuffleImages();
}

function subArray() {
  var num = $("#Images").val();
  var subar = [];
  for (var i = 0; i < num; i++) {
    subar[i] = ImgSource[i];
  }
  // var subar=ImgSource.slice(1, num);
  return subar;
}

function OpenCard() {
  var id = $(this).attr("id"); //Id of openned card
  if ($("#" + id + " img").is(":hidden")) { //Only on hidden images
    $("#" + id + " img").slideDown('fast'); //Animation

    if (ImgOpened == "") {
      BoxOpened = id;
      ImgOpened = $("#" + id + " img").attr("src"); //Get source of 1º openned img
    } else {
      CurrentOpened = $("#" + id + " img").attr("src"); //Get source of 2º openned img

      if (ImgOpened != CurrentOpened) { //Images do NOT match
        setTimeout(function() {
          $("#" + id + " img").slideUp('fast');
          $("#" + BoxOpened + " img").slideUp('fast');
          BoxOpened = "";
          ImgOpened = "";
        }, 400);
      } else { //Images MATCH
        $("#" + id + " img").parent().css("visibility", "visible"); //Delete images already paired
        $("#" + BoxOpened + " img").parent().css("visibility", "visible");
        ImgFound++;
        checkWin();
        BoxOpened = "";
        ImgOpened = ""; //Reset the selected images
      }
    }

    clickNum++;
    $("#clickNum").html("" + clickNum); //Display updated clickNum

  }
}

function ShuffleImages() {
  var ImgAll = $(Source).children();
  var ImgThis = $(Source + " div:first-child");
  var ImgArr = new Array(); //Contains the src of the images

  for (var i = 0; i < ImgAll.length; i++) { //Gets src of each image and stores them in ImgArr
    ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
    ImgThis = ImgThis.next();
  }

  ImgThis = $(Source + " div:first-child"); //We go back to first child

  for (var z = 0; z < ImgAll.length; z++) { //Gives a random value
    var RandomNumber = RandomFunction(0, ImgArr.length - 1);
    $("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]); //Changes the src to a random one coming from ImgArr
    ImgArr.splice(RandomNumber, 1); //Removes 1 item located at RandomNumber-->Removes the src which have already been assigned
    ImgThis = ImgThis.next();
  }
}

function RandomFunction(MaxValue, MinValue) {
  return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
}

function ResetGame() {
  ShuffleImages();
  $(Source + " div img").hide(); //Hide image???
  $(Source + " div").css("visibility", "visible"); //Set the div to visible
  clickNum = 0;
  $("#success").remove(); //Removes success
  $("#clickNum").html("" + clickNum); //Display clickNum as 0
  BoxOpened = "";
  ImgOpened = "";
  ImgFound = 0;
  return false;
}

function checkWin() {
  BoxOpened = ""; //Reset the selected images (in order to avoid malfunctioning)
  ImgOpened = "";
  if (ImgFound == numImg.length) { //Check if user has won
    document.getElementById("Timer").innerHTML = "Congratulations";
    alert("WINNER WINNER CHICKEN DINER");
    alert("The game has lasted "+(chrono-counter-1)+" seconds");
    clearInterval(x);

  }
}


//MODAL BOX
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
  if (images === "") {
    alert("The images field cannot be empty");
    return false;
  }
  var imagesn = parseInt(document.getElementById('Images').value);
  if (imagesn < 3 || imagesn > 10) {
    alert("The number must be between 3 and 10");
    location.reload();
    return false;
  }
  if(imagesn > 2 || imagesn < 11){
    n = imagesn * 2;
    return true;
  }
}

function checkTime() {
  /*Check time introduced, first check if empty*/
  var time = document.getElementById('Time').value;
  if (time === "") {
    alert("The time field cannot be empty");
    return false;
  }
  /*Parse the field to integer and check values*/
  var timen = parseInt(document.getElementById('Time').value);
  if (timen < 10 || timen > 120) {
    alert("The time must be between 10 and 120")
    return false;
  }
  /*Store time number into a global variable*/
  chrono = timen;
  return true;
}

function timer() {
  /*Clear timer if any*/
  clearInterval(x);
  counter = chrono;
  var min = 0;
  var sec = 0;
  if (counter > 0) {
    x = setInterval(function() {
      if (counter > 60) {
        /*When there are more than 60 seconds, 1 minute and remaining seconds*/
        min = 1;
        sec = counter - 60;
        document.getElementById("Timer").innerHTML = min + " minute and " + sec + " seconds";
        counter--;
      }
      if (counter === 60) {
        /*Only display minutes when exactly one*/
        min = 1;
        document.getElementById("Timer").innerHTML = min + " minute";
        counter--;
      }
      if (counter < 60) {
        /*Display only seconds when lower than 60*/
        sec = counter;
        document.getElementById("Timer").innerHTML = sec + " seconds";
        counter--;
      }
      if (counter < 0) {
        /*When counter arrives to 0, Expired time*/
        document.getElementById("Timer").innerHTML = "EXPIRED!";
        alert("Time has expired!");
        clearInterval(x);
        location.reload();
      }
    }, 1000);
  }
}
