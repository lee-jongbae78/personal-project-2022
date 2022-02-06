var comScore = 0;
var comPercent2 = 0.5;
var comPercent3 = 0.33;

var userScore = 0;
var userPercent2 = 0.5;
var userPercent3 = 0.33;

var isComputerTurn = true;
var shotsLeft = 15;


function showText(s) {
  var textElem = document.getElementById("text");
  textElem.innerHTML = s;
}

function updateComputerScore(score) {
  comScore += score;
  var comScoreElem = document.getElementById("computer-score");
  comScoreElem.innerHTML = comScore;
}

function updateUserScore(score) {
  userScore += score;
  var userScoreElem = document.getElementById("user-score");
  userScoreElem.innerHTML = userScore;
}

function disableComputerButtons(flag) {
  var computerButtons = document.getElementsByClassName("btn-computer");

  for (var i = 0; i < computerButtons.length; i++) {
    computerButtons[i].disabled = flag;
  }
}

function disableUserButtons(flag) {
  var userButtons = document.getElementsByClassName("btn-user");

  for (var i = 0; i < userButtons.length; i++) {
    userButtons[i].disabled = flag;
  }
}

function onComputerShoot() {
  var textElem = document.getElementById("text");
  if (!isComputerTurn) return;

  var shootType = Math.random() < 0.5 ? 2 : 3;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText("컴퓨터가 2점슛을 성공");
      updateComputerScore(2);
    } else {
      showText("컴퓨터가 2점슛을 실패");
    }
  } else {
    if (Math.random() < 0.33) {
      showText("컴퓨터가 3점슛을 성공");
      updateComputerScore(3);
    } else {
      showText("컴퓨터가 3점슛을 실패");
    }
  }
  isComputerTurn = false;

  disableComputerButtons(true);
  disableUserButtons(false);
}

function onUserShoot(shootType) {
  var textElem = document.getElementById("text");
  var userScoreElem = document.getElementById("user-score");
  if (isComputerTurn) return;

  if (shootType === 2) {
    if (Math.random() < 0.5) {
      showText("사용자가 2점슛을 성공");
      updateUserScore(2);
    } else {
      showText("사용자가 2점슛을 실패");
    }
  } else {
    if (Math.random() < 0.33) {
      showText("사용자가 3점슛을 성공");
      updateUserScore(3);
    } else {
      showText("사용자가 3점슛을 실패");
    }
  }

  shotsLeft--;

  var shotsLeftElem = document.getElementById("shots-left");
  shotsLeftElem.innerHTML = shotsLeft;

  if (shotsLeft === 0) {
    if (userScore > comScore) textElem.innerHTML = "승리했습니다!";
    else if (userScore < comScore) textElem.innerHTML = "아쉽게도 졌습니다.. ";
    else textElem.innerHTML = "비겼습니다.";

    for (var i = 0; i < computerButtons.length; i++) {
      computerButtons[i].disabled = true;
    }

    for (var i = 0; i < userButtons.length; i++) {
      userButtons[i].disabled = true;
    }
  }

  isComputerTurn = true;
  disableComputerButtons(false);
  disableUserButtons(true);
}