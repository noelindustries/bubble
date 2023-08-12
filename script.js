var time = 20;
var hit;
var score = 0;
var cond = 1;

function scoreInc(){
    score += 10;
    document.querySelector("#Score").textContent = score;
};

function scoreRed(){
    score -= 10;
    document.querySelector("#Score").textContent = score;    
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 147; i++) {
        var randomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
};

function runTime() {
    var timer = setInterval(function () {
        if (time > 0) {
        time--;
        document.querySelector("#Timer").textContent = time;
        
        }else{
            clearInterval(timer)
            document.querySelector("#pbtm").innerHTML = `<h1>Time over Refresh to play again</h1>`;
            alert(`Your SCORE is ${score}`);
        };
    }, 1000);
};

function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#htival").textContent = hit;
};

function play(){
    document.querySelector("#pbtm").addEventListener("click", function (dets){
        var clickedNumber = Number(dets.target.textContent); 
        if(clickedNumber === hit){
            scoreInc();
            getNewHit();
            makeBubble();
        }else{
            scoreRed();
            getNewHit();
            makeBubble();
        };
    
    })
};


makeBubble();
runTime();
getNewHit();

play();


