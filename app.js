let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "green", "purple"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(start == false) {
        start = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}



function levelUp() {
    userseq = [];
    level++; 
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnFlash(randBtn);
}



function checkAns(idx) {
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score <b>${level}<b> <br> press any key to start.`; 
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        }, 180)
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let btnAll = document.querySelectorAll(".btn");
for(btn of btnAll) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameseq =[];
    userseq =[];
    level =0;
}


