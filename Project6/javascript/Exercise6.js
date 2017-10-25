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



$(document).ready(function(){
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

  for (var y = 1; y < 3 ; y++) {  //Appends the images twice (one div per image)
  	$.each(ImgSource, function(i, val) {
  		$(Source).append("<div id=card" + y + i + "><img src=" + val + "/>");
  	});
  }
	$(Source + " div").click(OpenCard); //Image clicked
	ShuffleImages();
});

function OpenCard() {
	var id = $(this).attr("id"); //Id of openned card
	if ($("#"+id+" img").is(":hidden")) { //Only on hidden images
		$("#" + id + " img").slideDown('fast'); //Animation

		if (ImgOpened == ""){
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src"); //Get source of 1º openned img
		}
    else{
		    CurrentOpened = $("#" + id + " img").attr("src"); //Get source of 2º openned img

			  if (ImgOpened != CurrentOpened) {//Images do NOT match
  			     setTimeout(function() {
					     $("#" + id + " img").slideUp('fast');
				       $("#" + BoxOpened + " img").slideUp('fast');
        		   BoxOpened = "";
        		   ImgOpened = "";
				     },400);
			   }
         else {//Images MATCH
    				$("#" + id + " img").parent().css("visibility", "hidden");  //Delete images already paired
    				$("#" + BoxOpened + " img").parent().css("visibility", "hidden");
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
		ImgArr.splice(RandomNumber, 1);  //Removes 1 item located at RandomNumber-->Removes the src which have already been assigned
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

function checkWin(){
  if (ImgFound == ImgSource.length) { //Check if user has won
    alert("WINNER WINNER CHICKEN DINER");
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
    alert("The number must be between 3 and 10")
    return false;
  }
  n = imagesn * 2;
  return true;
}

function checkTime() {
  var time = document.getElementById('Time').value;
  if (time === "") {
    alert("The time field cannot be empty");
    return false;
  }
  var timen = parseInt(document.getElementById('Time').value);
  if (timen < 10 || timen > 120) {
    alert("The time must be between 10 and 120")
    return false;
  }
  chrono = timen;
  return true;
}
