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
const btn = document.getElementById("btn");
let player = document.getElementById("playerInput");
let triesText = document.getElementById("triesLeft");
let tipsText = document.getElementById("lowerOrHigher");
let min = 1;
let max = 100;
let pressed = 0;
let attemps = 0;
let running = false;
let randomNmbr = 0;
let gameEnds = document.getElementById("gameEnds");

player.style.display = "none";

btn.onclick = function () {
  pressed++;
  if (!running && pressed === 1) {
    running = true;

    player.value
      ? window.alert(
          "you can not write enything if the game didn't began yet!!"
        )
      : (player.value = "");

    randomNmbr = Math.trunc(Math.random() * max - min) + min;

    player.style.display = "block";

    btn.textContent = "Sumbit";

    player.value = "";

    gameEnds.textContent = "";

    tipsText.textContent = "The game began";

    triesText.textContent = `you have ${10 - attemps} tries left`;
  }
  if (pressed >= 2 && running) {
    attemps++;
    btn.textContent = "try again!";
    if (player.value === "") {
      window.alert("you have to write something!!");
      attemps--;
      player.value = "";
    } else if (attemps === 10 && player.value == randomNmbr) {
      tipsText.textContent = `GOOD JOB YOU HAD THE NUMBER, THE NUMBER WAS INDEED ${randomNmbr}`;
      triesText.textContent = `YOU HAVE TRIED ${attemps} TIMES`;
      btn.textContent = "restart";
      gameEnds.textContent = "THE GAME END";
      running = false;
      pressed = 0;
      attemps = 0;
      player.style.display = "none";
      player.value = "";
    } else if (attemps === 10) {
      tipsText.textContent = `YOU LOST!! THE NUMBER WAS ${randomNmbr}!`;
      triesText.textContent = `YOU USED ALL YOUR TRIES`;
      btn.textContent = "restart";
      gameEnds.textContent = "THE GAME END";
      running = false;
      pressed = 0;
      attemps = 0;
      player.style.display = "none";
      player.value = "";
    } else if (player.value > max || player.value < min) {
      window.alert("The number is only between 1 and 100");
      attemps--;
      player.value = "";
    } else if (player.value > randomNmbr) {
      tipsText.textContent = "The random number is lower";
      player.value = "";
      triesText.textContent = `you have ${10 - attemps} tries left`;
    } else if (player.value < randomNmbr) {
      tipsText.textContent = "The random number is higher";
      player.value = "";
      triesText.textContent = `you have ${10 - attemps} tries left`;
    } else if (player.value == randomNmbr) {
      tipsText.textContent = `GOOD JOB YOU HAD THE NUMBER, THE NUMBER WAS INDEED ${randomNmbr}`;
      triesText.textContent = `YOU HAVE TRIED ${attemps} TIMES`;
      btn.textContent = "restart";
      gameEnds.textContent = "THE GAME END";
      running = false;
      pressed = 0;
      attemps = 0;
      player.style.display = "none";
      player.value = "";
    }
  }
};
