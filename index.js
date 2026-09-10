// Changing Favicon

const favicon = document.getElementById("favicon");
const icons = ["one.png", "two.png", "three.png", "four.png", "five.png"];
let index = 0;

function changeFavicon() {
  favicon.setAttribute("href", icons[index]);
  if (++index > 4) index = 0;
}

setInterval(changeFavicon, 120);

//this is to escape the intro
function startintro() {
  let introDiv = document.getElementById("intro");
  introDiv.style.display = "none";
}
//this is if your choosing to play singleplayer
function singleplayergamechoice() {
  let secondPage = document.getElementById("singleOrMultyplayerDiv");
  let singleplayerpage = document.getElementById("divOfSingleplayer");
  secondPage.style.display = "none";
  singleplayerpage.style.display = "flex";
}

//from here is the single player program
const btnForSingleplayerStart = document.getElementById(
  "startGameSingleplayer"
);
const btnforreplayinmenusingleplayer = document.getElementById(
  "replaySingleplayerBtn"
);
let playerInSingleplayer = document.getElementById("playerInputSingleplayer");
let triesTextInSingleplayer = document.getElementById("triesLeftSingleplayer");
let tipsTextInSingleplayer = document.getElementById("lowerOrHigherSingleplayer");

let triesTextInMenusingleplayer = document.getElementById(
  "lowerOrHigherInMenu"
);
let tipsTextInMenusingleplayer = document.getElementById("triesLeftInMenu");
let leavemenusingleplayer = document.getElementById("backToMenuSingleplayer");
let singleplayerpage = document.getElementById("divOfSingleplayer");

let minOfSingleplayer = 1;
let maxOfSingleplayer = 100;
let pressedInSingleplayer = 0;
let attempsInSingleplayer = 0;
let runningInSingleplayer = false;
let randomNmbrInSingleplayer = 0;

function gamePlaySingleplayer() {
  pressedInSingleplayer++;

  if (!runningInSingleplayer && pressedInSingleplayer === 1) {
    runningInSingleplayer = true;


    randomNmbrInSingleplayer = Math.trunc(Math.random() * maxOfSingleplayer - minOfSingleplayer) + minOfSingleplayer;

    playerInSingleplayer.style.display = "block";

    btnForSingleplayerStart.textContent = "Sumbit";

    playerInSingleplayer.value = "";

    tipsTextInSingleplayer.textContent = "The game began";

    triesTextInSingleplayer.textContent = `you have ${10 - attempsInSingleplayer} tries left`;
  }
  if (pressedInSingleplayer >= 2 && runningInSingleplayer) {
    attempsInSingleplayer++;
    btnForSingleplayerStart.textContent = "try again!";
    if (playerInSingleplayer.value === "") {
      window.alert("you have to write something!!");
      attempsInSingleplayer--;
      playerInSingleplayer.value = "";
      singleplayerpage.style.backgroundColor = "blue";
    } else if (attempsInSingleplayer === 10 && playerInSingleplayer.value == randomNmbrInSingleplayer) {
      tipsTextInMenusingleplayer.textContent = `GOOD JOB YOU HAVE GOT THE NUMBER, THE NUMBER WAS INDEED ${randomNmbrInSingleplayer}`;
      triesTextInMenusingleplayer.textContent = `YOU HAVE TRIED ${attempsInSingleplayer} TIMES`;
      btnForSingleplayerStart.style.display = "none";
      leavemenusingleplayer.style.display = "flex";
      triesTextInSingleplayer.textContent = "";
      tipsTextInSingleplayer.textContent = "";
      let btn2 = document.getElementById("leaveGameSingleplayer");
      let btn3 = document.getElementById("moreInfoForSingleplayerGame");
      btn2.style.pointerEvents = "none";
      singleplayerpage.style.backgroundColor = "lime";
      btnForSingleplayerStart.textContent = "start";
      btn3.style.pointerEvents = "none";

      runningInSingleplayer = false;
      pressedInSingleplayer = 0;
      attempsInSingleplayer = 0;
      playerInSingleplayer.style.display = "none";
      playerInSingleplayer.value = "";
    } else if (attempsInSingleplayer === 10) {
      tipsTextInMenusingleplayer.textContent = `YOU LOST!! THE NUMBER WAS ${randomNmbrInSingleplayer}!`;
      triesTextInMenusingleplayer.textContent = `YOU USED ALL YOUR TRIES`;
      btnForSingleplayerStart.textContent = "start";
      btnForSingleplayerStart.style.display = "none";
      leavemenusingleplayer.style.display = "flex";
      let btn2 = document.getElementById("leaveGameSingleplayer");
      let btn3 = document.getElementById("moreInfoForSingleplayerGame");
      btn2.style.pointerEvents = "none";
      btn3.style.pointerEvents = "none";
      singleplayerpage.style.backgroundColor = "red";
      triesTextInSingleplayer.textContent = "";
      tipsTextInSingleplayer.textContent = "";
      runningInSingleplayer = false;
      pressedInSingleplayer = 0;
      attempsInSingleplayer = 0;
      plaplayerInSingleplayeryer.style.display = "none";
      playerInSingleplayer.value = "";
    } else if (playerInSingleplayer.value > maxOfSingleplayer || playerInSingleplayer.value < minOfSingleplayer) {
      window.alert("The number is only between 1 and 100");
      attempsInSingleplayer--;
      singleplayerpage.style.backgroundColor = "blue";
      playerInSingleplayer.value = "";
    } else if (playerInSingleplayer.value > randomNmbrInSingleplayer) {
      tipsTextInSingleplayer.textContent = "The random number is lower";
      playerInSingleplayer.value = "";
      singleplayerpage.style.backgroundColor = "hsl(64, 100%, 70%)";
      triesTextInSingleplayer.textContent = `you have ${10 - attempsInSingleplayer} tries left`;
    } else if (playerInSingleplayer.value < randomNmbrInSingleplayer) {
      tipsTextInSingleplayer.textContent = "The random number is higher";
      playerInSingleplayer.value = "";
      singleplayerpage.style.backgroundColor = "hsl(64, 100%, 50%)";
      triesTextInSingleplayer.textContent = `you have ${10 - attempsInSingleplayer} tries left`;
    } else if (playerInSingleplayer.value == randomNmbrInSingleplayer) {
      tipsTextInMenusingleplayer.textContent = `GOOD JOB YOU HAVE GOT THE NUMBER, THE NUMBER WAS INDEED ${randomNmbrInSingleplayer}`;
      triesTextInMenusingleplayer.textContent = `YOU HAVE TRIED ${attempsInSingleplayer} TIMES`;
      btnForSingleplayerStart.style.display = "none";
       btnForSingleplayerStart.textContent = "start";
      leavemenusingleplayer.style.display = "flex";
      triesTextInSingleplayer.textContent = "";
      tipsTextInSingleplayer.textContent = "";
      let btn2 = document.getElementById("leaveGameSingleplayer");
      let btn3 = document.getElementById("moreInfoForSingleplayerGame");
      btn2.style.pointerEvents = "none";
      btn3.style.pointerEvents = "none";
      singleplayerpage.style.backgroundColor = "lime";
      runningInSingleplayer = false;
      pressedInSingleplayer = 0;
      attempsInSingleplayer = 0;
      playerInSingleplayer.style.display = "none";
      playerInSingleplayer.value = "";
    }
  }
}
// to leave the game out of no were in singleplayer
function leavesingleplayer() {
  let secondPage = document.getElementById("singleOrMultyplayerDiv");
  let singleplayerpage = document.getElementById("divOfSingleplayer");
  secondPage.style.display = "flex";
  singleplayerpage.style.display = "none";
  btnForSingleplayerStart.textContent = "start";
  runningInSingleplayer = false;
  pressedInSingleplayer = 0;
  attempsInSingleplayer = 0;
  playerInSingleplayer.style.display = "none";
  playerInSingleplayer.value = "";
  triesTextInSingleplayer.textContent = `you have ${10 - attempsInSingleplayer} tries left`;
  tipsTextInSingleplayer.textContent = "";
  singleplayerpage.style.backgroundColor = "hsl(236, 82%, 76%)";
}
// to open an info box how to play the game in single player
function openInfoDiv() {
  let div = document.getElementById("infoSingleplayerGame");
  let btn1 = document.getElementById("startGameSingleplayer");
  let btn2 = document.getElementById("leaveGameSingleplayer");
  let btn3 = document.getElementById("moreInfoForSingleplayerGame");
  div.style.display = "flex";
  btn1.style.pointerEvents = "none";
  btn2.style.pointerEvents = "none";
  btn3.style.pointerEvents = "none";
  playerInSingleplayer.disabled = true;

  btn1.style.opacity = "0.9";
  btn2.style.opacity = "0.9";
  btn3.style.opacity = "0.9";
}
// to close an info box how to play the game in single player
function closeInfoDiv() {
  let div = document.getElementById("infoSingleplayerGame");
  let btn1 = document.getElementById("startGameSingleplayer");
  let btn2 = document.getElementById("leaveGameSingleplayer");
  let btn3 = document.getElementById("moreInfoForSingleplayerGame");
  div.style.display = "none";
  btn1.style.pointerEvents = "auto";
  btn2.style.pointerEvents = "auto";
  btn3.style.pointerEvents = "auto";
  playerInSingleplayer.disabled = false;

  btn1.style.opacity = "1";
  btn2.style.opacity = "1";
  btn3.style.opacity = "1";
}
//this is if the game is done that you can play again. in single player!!
function restartInMenuSingleplayer() {
  btnForSingleplayerStart.style.display = "flex";
  leavemenusingleplayer.style.display = "none";
  let btn2 = document.getElementById("leaveGameSingleplayer");
  let btn3 = document.getElementById("moreInfoForSingleplayerGame");
  btn2.style.pointerEvents = "auto";
  btn3.style.pointerEvents = "auto";
  triesTextInSingleplayer.textContent = "you have 10 tries left";
  tipsTextInSingleplayer.textContent = "";
  singleplayerpage.style.backgroundColor = "hsl(236, 82%, 76%)";
}
//if the game is over and you want to go back to the menu in single player
function goBackToMenuSingleplayer() {
  btnForSingleplayerStart.style.display = "flex";
  leavemenusingleplayer.style.display = "none";
  let btn2 = document.getElementById("leaveGameSingleplayer");
  let btn3 = document.getElementById("moreInfoForSingleplayerGame");
  btn2.style.pointerEvents = "auto";
  btn3.style.pointerEvents = "auto";
  triesTextInSingleplayer.textContent = "you have 10 tries left";
  tipsTextInSingleplayer.textContent = "";
  let secondPage = document.getElementById("singleOrMultyplayerDiv");
  let singleplayerpage = document.getElementById("divOfSingleplayer");
  secondPage.style.display = "flex";
  singleplayerpage.style.display = "none";
  singleplayerpage.style.backgroundColor = "hsl(236, 82%, 76%)";
}
/////////////////////////////////////////////////////////////
//this is the 2player game
