let gameseq=[];
let userseq=[];
let btns=['one','two','three','four'];
let h2=document.querySelector('h2');

let started=false;
let level=0;

document.addEventListener('keypress',function(){
    if(started==false){
    console.log("game started");
    started=true;

    levelUp();
    }
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        },500);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level : ${level}`
    let randind=Math.floor(Math.random()*4);
    let randcolor=btns[randind];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){
    
   if(userseq[idx]===gameseq[idx]){
    if(userseq.length===gameseq.length){
        setTimeout(levelUp(),1000);
    }
   }
   else{
    h2.innerHTML=`Game over!<b>your score was ${level}</b> <br> press any key to continue..`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);
    reset();
   }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll('.box');

for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}
