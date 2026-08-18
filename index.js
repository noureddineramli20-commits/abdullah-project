// Changing Favicon 

const favicon = document.getElementById("favicon");
const icons = ["one.png", "two.png", "three.png", "four.png", "five.png"];
let index = 0;

function changeFavicon()
{
	favicon.setAttribute("href", icons[index]);	
	if(++index > 4)	index = 0;
}

setInterval(changeFavicon, 120);

// Logic for Game
const btn2 = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
let nummer = 0;
let min = 1;
let max = 100;
let counter = 0;
let text2 = document.getElementById("text");
let text = document.getElementById("reveal");
let text3 = document.getElementById("text3");
let input = document.getElementById("input");

nummer = Math.trunc(Math.random() * max - min) + min;
console.log(nummer);

btn2.onclick = function () {
  text.textContent = "";
  counter += 1;
  if (input.value == "") {
    text2.textContent = "you have to write something";
    counter--;
    console.log(`you have tried ${counter} times`);
  } else if (input.value <= 0) {
    text2.textContent = "its only numbers between 1 and 100";
    counter--;
    console.log(`you have tried ${counter} times`);
  } else if (input.value >= 101) {
    text2.textContent = "its only numbers between 1 and 100";
    counter--;
    console.log(`you have tried ${counter} times`);
  } else if (input.value > nummer) {
    text2.textContent = "the number is lower";
    console.log(`you have tried ${counter} times`);
  } else if (input.value < nummer) {
    text2.textContent = "the number is higher";
    console.log(`you have tried ${counter} times`);
  } else if (input.value == nummer) {
    text.textContent = `the number was ${nummer}!!`;
    text2.textContent = "you have got the number!";
    text3.textContent = `you needed ${counter} tries for that!`;
    console.log(`you needed ${counter} tries for that!`);
  } else {
    text2.textContent = "you can only do numbers";
    counter--;
    console.log(`you have tried ${counter} times`);
  }
  if (counter > 10) {
    text2.textContent = "pres on restart";
    text.textContent = `number was ${nummer}`;
    input.value = "";
    text3.textContent = `you did more then 10 tries so you lost!!`;
    console.log(`you have tried ${counter} times`);
  }
};
reset.onclick = function () {
  text2.textContent = "";
  nummer = 0;
  text.textContent =
    "   here will be the random number after you have written it you have 10 tries if you did you lost and have to restart!!!";
  input.value = "";
  text3.textContent = ``;
  nummer = Math.trunc(Math.random() * max - min) + min;
  counter = 0;
  console.log(nummer);
  console.log(`you have tried ${counter} times`);
};
