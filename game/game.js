function moveUp() {
  var element = document.getElementById('player');
  currentUp = parseInt(player.offsetTop);
  element.style.top = currentUp - 1 + 'px';
}
function moveDown() {
  var element = document.getElementById('player');
  currentUp = parseInt(player.offsetTop);
  element.style.top = currentUp + 1 + 'px';
}
function moveLeft() {
  var element = document.getElementById('player');
  currentLeft = parseInt(player.offsetLeft);
  element.style.left = currentLeft - 1 + 'px';
  }
function moveRight() {
  var element = document.getElementById('player');
  currentLeft=parseInt(player.offsetLeft);
  element.style.left = currentLeft + 1 + 'px';
}

var interval;
var leftPressed = false; var rightPressed = false;
var topPressed = false; var downPressed = false; 
function myKeyDown(event) {
   if (event.keyCode == 37) {leftPressed=true; }
   if (event.keyCode == 39) {rightPressed=true; }
   if (event.keyCode == 38) {topPressed=true; }
   if (event.keyCode == 40) {downPressed=true; }
 }
function myKeyUp(event){  
  if (event.keyCode == 37) {leftPressed=false;}
  if (event.keyCode == 39) {rightPressed=false; }
  if (event.keyCode == 38) {topPressed=false; }
  if (event.keyCode == 40) {downPressed=false; }
  }  
function animation(){
  if(leftPressed==true) moveLeft(); if(rightPressed==true) moveRight();
  if(topPressed==true) moveUp(); if(downPressed==true) moveDown();
  }

function setHead(){
	element = document.getElementsByClassName('head');
	element[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
}
function setBody(){
	element = document.getElementsByClassName('body');
	element[0].style.backgroundImage = 'url(images/' + this.id + '.png)';
}
function hideSidebar(){
	var element = document.getElementsByTagName('aside');
	element[0].style.display = 'none';	
}
function showSidebar(){
	var element = document.getElementsByTagName('aside');
	element[0].style.display = 'block';	
}
function myLoad(){
	document.addEventListener('keydown', myKeyDown);
    document.addEventListener('keyup', myKeyUp);
    interval=setInterval(animation, 5)

	//hide sidebar
	var element = document.getElementById('closeside');
	element.addEventListener('click', hideSidebar);

	//show sidebar
	var element = document.getElementById('player');
	element.addEventListener('click', showSidebar);


    //set heads
	element = document.getElementsByClassName('heads');
	heads = element[0].getElementsByTagName('li');
	for (var i = 0; i < heads.length; i++) {
		heads[i].addEventListener('click', setHead);
	}
	
    //set bodies
	element = document.getElementsByClassName('bodies');
	bodies = element[0].getElementsByTagName('li');
	for (var i = 0; i < bodies.length; i++) {
		bodies[i].addEventListener('click', setBody);
	}
}
document.addEventListener('DOMContentLoaded', myLoad);