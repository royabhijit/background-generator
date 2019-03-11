var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Gradient");
var colorButton = document.getElementById("colorButton");


// console.log(css);
console.log(color1.value);
console.log(color2.value);
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
//console.log(body);
css.textContent = body.style.background + ";";
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var randomValue = Math.floor((Math.random() * 256) + 0);
  	return randomValue;
}
// console.log(randomColor());
// console.log(color1.value);

function randomColorClick() {
	var color1 = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + "), ";
	var color2 = " rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + "))";
	body.style.background = "linear-gradient(to right," + color1 + color2;
	css.textContent = body.style.background + ";";
}

console.log();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

colorButton.addEventListener("click", randomColorClick);
