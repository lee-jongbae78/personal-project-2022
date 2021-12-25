
var SCISSERS = "가위";
var ROCK = "바위";
var PAPER = "보";


function onButtonClick(userInput){


var comInput;
var rnd = Math.random();
if (rnd <0.33){
    comInput = SCISSERS;
} else if (rnd < 0.66){
    comInput = ROCK;
} else{
    comInput = PAPER;
}

var result = '컴퓨터:  ' + comInput;

if(userInput === SCISSERS){
    if(comInput === SCISSERS){
    result += "  컴퓨터와 비겼습니다.";
} else if(comInput === ROCK){
    result += "  컴퓨터에게 졌습니다.";

} else{
    result +=  "  컴퓨터를 이겼습니다.";
}
}


if(userInput === ROCK){
    if(comInput === SCISSERS){
        result += "  컴퓨터와 이겼습니다.";
} else if(comInput === ROCK){
    result +="  컴퓨터에게 비겼습니다.";

} else{
    result += "  컴퓨터와 졌습니다.";
}
}

if(userInput === PAPER){
    if(comInput === SCISSERS){
        result += "  컴퓨터와 졌습니다.";
} else if(comInput === ROCK){
    result +="  컴퓨터를 이겼습니다.";

} else{
    result += "  컴퓨터와 비겼습니다.";
}
}



alert(result);

}


var lottoList =[];

for (var i = 1; i <= 45; i ++){
    lottoList.push(i);
}


var result = [];
for (var i = 0; i < 6; i ++){
    var index = Math.floor(Math.random() * lottoList.length);

    var num = lottoList[index];

    lottoList.splice(index, 1);

    result.push(num);
}

//오름차순으로 배열을 정렬하기
function compare(a, b){
    return a - b;

}

result.sort(compare);

for (var i = 0; i <6; i++){
    document.write('<span class = "ball"> '+ result[i] + '</span>');
}

var comScore = 0;
var userScore = 0;

function onComputerShoot(){
    
    var textElem = document.getElementById('text');
    var comScoreElem = document.getElementById('computer-score');

    var shootType = Math.random() < 0.5 ? 2 : 3;


    if(shootType === 2){
        if(Math.random() < 0.5){
            textElem.innerHTML = "컴퓨터가 2점슛을 성공";
            comScore += 2;
            comScoreElem.innerHTML = comScore;
        }
        else{
            textElem.innerHTML = "컴퓨터가 2점슛을 실패";

        }
    } else{
        if(Math.random() < 0.33){
            textElem.innerHTML = "컴퓨터가 3점슛을 성공";
            comScore += 3;
            comScoreElem.innerHTML = comScore;
        }
        else{
            textElem.innerHTML = "컴퓨터가 3점슛을 실패";
        }
    }
    console.log(comScore);
}


function onUserShoot(shootType){
    var textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');

    
}