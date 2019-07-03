var gradient = document.getElementById("gradient");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var colorcode = document.querySelector("h3");
var randomgradient = document.getElementById("randomgradient")

function setRandomColor(){
	var a = (Math.random()*255)+1;
	var b = (Math.random()*255)+1;
	var c = (Math.random()*255)+1;
	var d = (Math.random()*255)+1;
	var e = (Math.random()*255)+1;
	var f = (Math.random()*255)+1;

	gradient.style.background = "linear-gradient(to right, RGB(" + a + ", " + b + ", " + c + ") , RGB(" + d + ", " + e + ", " + f + ")";
	colorcode.textContent = gradient.style.background;
}

function setColor(){
	gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	colorcode.textContent = gradient.style.background;
}

setColor();

color1.addEventListener("input", setColor)

color2.addEventListener("input", setColor)

randomgradient.addEventListener("click", setRandomColor);


