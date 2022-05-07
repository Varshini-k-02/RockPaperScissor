function rpsGame(yourChoice){
    var humanChoice,systemChoice;
    humanChoice = yourChoice.id;
    systemChoice=numToChoice(randomNum());
    results = decideWinner(humanChoice,systemChoice); //{1,0}, {0,1}
    message = finalMessage(results) //{'message':'You won','coloe':'green'}
    rpsFrontEnd(yourChoice.id, systemChoice, message)
}

function randomNum(){
    return Math.floor(Math.random()*3);
}
function numToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,systemChoice){
    var rpsDB = {
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };
    var yourScore=rpsDB[yourChoice][systemChoice];
    var sysScore=rpsDB[systemChoice][yourChoice];
    return [yourScore, sysScore];
}
function finalMessage([yourScore,sysScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message': 'You tied!', 'color':'orange'};
    }
    else{
        return {'message': 'You Won!', 'color':'green'};
    }
}
function rpsFrontEnd(humanImgCh, sysImgCh, finalMessage){
    var imgDB = {
        'rock': document.getElementById('rock').src ,
        'paper': document.getElementById('paper').src ,
        'scissor': document.getElementById('scissor').src 
    };
    //Remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var sysDiv = document.createElement('div');
    var msgDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDB[humanImgCh] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    msgDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:40px; padding20px;'>" + finalMessage['message'] + "</h1>";
    sysDiv.innerHTML = "<img src='" + imgDB[sysImgCh] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
   
    document.getElementById('flex-box').appendChild(humanDiv);
    document.getElementById('flex-box').appendChild(msgDiv);
    document.getElementById('flex-box').appendChild(sysDiv);
    
}
