// Variable declarations
var playerSprite= document.createElement("img");
	playerSprite.src="playerSprite.png";
var backgroundSprite = document.createElement("img");
	backgroundSprite.src="sprites.png";
var directionKey = 37;
var myReq;
var display = document.getElementById("time");
var last;
var now=0,dt;

//Returns Time
function timestamp(){
	return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

function onLoad(){
	last= timestamp();
	var gameObject = new Game();
	gameObject.canvasObject.assignMap();
	gameObject.playerObject.level = document.getElementById("level").innerHTML;
	gameObject.playerObject.points = Number(document.getElementById("points").innerHTML);
	gameObject.duration = (4.5 - gameObject.playerObject.level*0.5)*60;
	gameObject.startLoop();

}

function keypress(e){
	e=e|| window.event;
	switch(e.keyCode){
		case 37   : directionKey = 37;
					break;
		case 38   : directionKey=38;
					break;
		case 39   : directionKey=39;
					break;
		case 40   : directionKey=40;
					break;
	}
}


window.addEventListener("load", onLoad);
window.addEventListener("keydown",keypress);
