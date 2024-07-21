let userScore=0;
let compScore=0;
var score=0;

const play=document.querySelectorAll("button");
const scoreDisplay=document.querySelectorAll(".score");
const cpumove=document.querySelector(".cpu");
const usermove=document.querySelector(".user");
const result=document.querySelector(".result");


const reflectScore=()=>{

    scoreDisplay[1].innerText;
    scoreDisplay[0].innerText=userScore;
    scoreDisplay[1].innerText=compScore;
    scoreDisplay[2].innerText=score;
}


const checkWin=(answer,userChoice)=>{
    if(answer===userChoice){

        
        score+=0;
        result.innerText="Tie ! : +-0";
        console.log("tie : +-0");
    }
    else if( (answer==="rock" && userChoice==="scissor") || (answer==="paper" && userChoice==="rock") || (answer==="scissor" && userChoice==="paper")) 
        {
        
        score--;
        compScore++;
        console.log("CPU wins : -1");
        result.innerText="CPU wins : -1";
    }

    else{
        
        score++;
        userScore++;
        console.log("User Wins : +1");
        result.innerText="User wins : +1";
    }
    // reflectScore();
}

const generateComputerChoice=(userch)=>{
    let options=["rock","paper","scissor"];
    
    let random=Math.floor(Math.random()*3);
    // if(random<=1){
    //     answer=options[0];
    // }
    // else if(random<=2){
    //     answer=options[1];
    // }
    // else if(random<=3){
    //     answer=options[2];
    // }

    console.log("CPU move : ",options[random]);
    cpumove.innerText="CPU Move is : "+options[random];
    // checkWin(options[random],userch);

    return options[random];

}


const playGame=(userChoice)=>{
    console.log("User choice is : ",userChoice);
    // Generating random computer choice :
   let cpuChoicemade= generateComputerChoice(userChoice);

   checkWin(cpuChoicemade,userChoice);

   reflectScore();

};

play.forEach((i) => {
    console.log(i);
    i.addEventListener("click",()=>{
        const choicetype=i.getAttribute("id");
        console.log("choice was clicked : ",choicetype);
        usermove.innerText="Your Move : " +choicetype+" ";
        playGame(choicetype);
    })
})