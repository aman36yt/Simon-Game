let gameSeq=[];
let userSeq=[];
let color=["purple","orange","red","green"];
let h2=document.querySelector("h2");
let start=false;
let level=0;
let highScore=0;

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("GAme STarted");
        start=true;
        levelUp();
    }

});
function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function flashClick(btn){
    btn.classList.add("flashCl");
    setTimeout(function(){
        btn.classList.remove("flashCl");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level : ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randColor=color[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    flashBtn(randBtn);

};

function checkAns(inDx){
    // console.log(`curr Level ${level}`);
    if (userSeq[inDx]===gameSeq[inDx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`GAme Over! Your Score was <b>${level}</b> <br>Press Any Key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);

        reset();
    };

};


function btnPress(){
    // console.log("button pressed");
    let btn=this;
    // console.log(btn);
    flashClick(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    if(level>0 && level>highScore ){
        highScore=level;
        let h1=document.querySelector("h3");
        h1.innerHTML=`<b>Your BEST SCORE -- </b>${highScore}!`;
        h1.style.color="Red"
    };
    start=false
    userSeq=[];
    gameSeq=[];
    level=[];
}

