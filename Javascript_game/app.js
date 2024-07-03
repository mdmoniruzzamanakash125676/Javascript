let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");

const compScorePara=document.querySelector("#comp-score");



const genComputerChoice =()=>{
     const option =["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random() *3);
     return option[randIdx];
}

const showWinner =(userWin,userChoice,comChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText =`You win!Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lost");
        msg.innerText =`You lost! ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}

const playgame = (userChoice) =>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const comChoice =genComputerChoice();
    console.log("computer choice =",comChoice);

    if(userChoice === comChoice){
        console.log("Match is Draw");
        msg.innerText ="Match is Draw and play again";
        msg.style.backgroundColor="black";

    }else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = comChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissors,rock
            userWin=comChoice ==="scissors" ? false : true;

        }else{
            //rock,paper
            userWin=comChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }

};



choices.forEach((choice) =>{
   choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
   //console.log("choice was clicked",userChoice);
   playgame(userChoice);

   });
});