let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow","red","green","purple"];

document.addEventListener("keypress", function() {
    if (started == false) {
   console.log("Game Started");
   started = true;
   levelup();
}
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");

    },50);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor =btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);

    btnFlash(randbtn);

}
function checkans(idx) {


    if (userseq[idx]===gameseq[idx]) {
        if (userseq.length==gameseq.length) {
            setTimeout(levelup,1000);
        }
    }else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        })
        reset();
    }
}

function btnpress() {
    let btn = this;
    btnFlash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset() {
    started = false;
    gameseq =[];
    userseq = [];
    level = 0;
}