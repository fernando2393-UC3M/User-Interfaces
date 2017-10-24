//Global varibales
var n = 0;
var chrono = 0;
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
  if (images === "") {
    alert("The images field cannot be empty");
    return false;
  }
  var imagesn = parseInt(document.getElementById('Images').value);
  if (imagesn < 3 || imagesn > 10) {
    alert("The number must be between 3 and 10")
    return false;
  }
  var cimage = getCookie("cimage");
  if (cimage === "") {
    setCookie("cimage", images, 30);
  }
  if (cimage != "") {
    document.cookie = "cimage=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("cimage", images, 30);
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
  var ctimer = getCookie("ctimer");
  if (ctimer === "") {
    setCookie("ctimer", time, 30);
  }
  if (ctimer != "") {
    document.cookie = "ctimer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("ctimer", time, 30);
  }
  chrono = timen;
  return true;
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function timer() {
  counter = chrono;
  var min = 0;
  var sec = 0;
  if (counter > 0) {
    var x = setInterval(function() {
      if (counter >= 60) {
        min = 1;
        sec = counter - 60;
        document.getElementById("Timer").innerHTML = min + " minute and " + sec + " seconds";
        counter--;
      }
      if (counter < 60) {
        sec = counter;
        document.getElementById("Timer").innerHTML = sec + " seconds";
        counter--;
      }
      if (counter < -1){
        document.getElementById("Timer").innerHTML = "EXPIRED!";
        alert("Time has expired!");
        clearInterval(x);
      }
    }, 1000);
  }
}


function hidePlay() {
  document.getElementById("Play").style.visibility = "hidden";
  document.getElementById("Restart").style.visibility = "visible";
}

function hideRestart() {
  document.getElementById("Restart").style.visibility = "hidden";
  document.getElementById("Play").style.visibility = "visible";
}

function hideTimer() {
  document.getElementById("Timer").style.visibility = "hidden";
}

function showTimer() {
  document.getElementById("Timer").style.visibility = "visible";
}

//------------------------------------------------------------------------------
/*
(function(){

	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.binding();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},

		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.$game.fadeOut();
			}, 1000);
		},

		reset: function(){
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "php",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
			id: 1,
		},
		{
			name: "css3",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
			id: 2
		},
		{
			name: "html5",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
			id: 3
		},
		{
			name: "jquery",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
			id: 4
		},
		{
			name: "javascript",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
			id: 5
		},
		{
			name: "node",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
			id: 6
		},
		{
			name: "photoshop",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
			id: 7
		},
		{
			name: "python",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
			id: 8
		},
		{
			name: "rails",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
			id: 9
		},
		{
			name: "sass",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
			id: 10
		},
		{
			name: "sublime",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
			id: 11
		},
		{
			name: "wordpress",
			img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
			id: 12
		},
	];

	Memory.init(cards);


})();

*/
