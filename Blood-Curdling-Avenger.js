var flash = false;
var smear = false;
var scaryface= false;
var size = 100;
var context;
var d_context;
var background;
var background2;
var background3;
var something;
var h = 44;
var addh = true;
var rightDown = false;
var leftDown = false;
var xMod = 250;
var playBtn = document.getElementById('play');
var stopBtn = document.getElementById('stop');
var sfxBtn = document.getElementById('sfx');
var counter;
var lives = 3;
var score = 0;
var wMod = 0;
var w = 275;
var recentPoint = false;
var backOff = 50;
var spam = ["AHHH", "BOOM", "LALALALA", "U LOSE!!!"];
var message = -1;
var ranx = 0;
var rany = 0;

steps = 1;

function onKeyDown(evt) {
    if (evt.keyCode == 39) rightDown = true;
    else if (evt.keyCode == 37) leftDown = true;
}


function onKeyUp(evt) {
    if (evt.keyCode == 39) rightDown = false;
    else if (evt.keyCode == 37) leftDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function events() {
    var e = randomIntFromIntervals(1, 100);

    if (e % 4 == 0 && score > 10) {
        flash = !flash;
    }
    if (e % 25 == 0 && score > 20) {
        smear = !smear;
    }
    if (e % 25 == 0 && score > 50) {
        message = randomIntFromIntervals(0, spam.length - 1);
        ranx = randomIntFromIntervals(0, 400);
        rany = randomIntFromIntervals(0, 400);
    }
    if (e % 4 == 0 && score > 80) {
        scaryface = !scaryface;
    }
}

function pulse() {
    events();
    var tR = w + 44;
    var tL = w;
    var tB = 544 - h;
    var pL = xMod;
    var pR = xMod + 100;
    var pT = 450;
    var pB = 475;
    var tRin = (tR > xMod && tR < xMod + 100);
    var tLin = (tL < xMod + 100 && tL > xMod);
    var tBin = (tB < 475 && tB > 450);
    var pC = xMod + 50;
    var tC = (tR + tL / 2);




    steps++;
    if (rightDown && xMod < 400) {
        xMod += 5;
    }

    if (leftDown && xMod > 0) {
        xMod -= 5;
    }

    if (h >= 500) {
        addh = !addh;
        audioEffect.play();

    }
    if (h <= 0) {
        addh = !addh;
        lives -= 1;
        audioDie.play();
    }

    if (lives <= 0) {
        lives = 3;
        score = 0;
        alert("YOU LOSE!!!");
    }
    if (addh === true) {
        h += 5;
    } else {
        h -= 5;
    }
    if (w <= 0 || w >= 500) {
        wMod = -wMod;
    }
    if (tBin && (tLin || tRin)) {
        addh = true;
        wMod = (tC - pC) / 100;

        if (!recentPoint) {
            score++;
            recentPoint = true;
           
        }
    }
    if (recentPoint) {
        backOff--;
    }
    if (backOff == 0) {
        backOff = 50;
        recentPoint = false;
    }



    w += wMod;
    if (!smear) {
        if (!flash && !scaryface) {
            context.drawImage(background, 0, 0);
        } 
        else {
            context.drawImage(background2,0 , 0);
          if(scaryface){
            context.drawImage(background3, 0, 0);
            }
    }
        
    }

    context.drawImage(something, w, 500 - h);
    context.strokeRect(xMod, 450, 100, 25);
    setTimeout(pulse, 10);



    context.font = "30px Verdana";

    var gradient = context.createLinearGradient(0, 0, 250, 0);
    gradient.addColorStop("0", "orange");
    gradient.addColorStop("0.5", "aqua");
    gradient.addColorStop("1.0", "purple");

    context.fillStyle = gradient;
    context.fillText(lives, 0, 30);
    context.fillText(score, 0, 60);
    console.log(message);
    if(message >= 0){
        context.fillText(spam[message], ranx, rany);
    }

}


$(document).ready(function () {
    d_canvas = document.getElementById('canvas');
    context = d_canvas.getContext('2d');
    background = document.getElementById('background');
    background2 = document.getElementById('background2');
    background3 = document.getElementById('background3');
    context.drawImage(background, 0, 0);
    something = document.getElementById('something');
    audio.play();
    pulse();
    randomIntFromIntervals(1, 100);
});