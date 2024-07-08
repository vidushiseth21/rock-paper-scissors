let userScore = 0;
let compScore = 0;
const choices=document.querySelectorAll(".needed");
const genComputer=() =>
{
    const options=["rock","paper","scissor"];
    const indx=Math.floor(Math.random()*3);
    return options[indx];
};

const drawGame=()=>
{
    console.log("game was drawn");
    play.innerText="Game was draw ";
    play.style.backgroundColor="#081b31";
}

const showWin=(userWin) =>
{
    if(userWin)
    {
        console.log("you win");
        play.innerText="you win";
        play.style.backgroundColor="green";
        userScore++;
        userChoice.innerText=userScore;
    }
    else
    {
        console.log("you lose");
        play.innerText="you lose";
        play.style.backgroundColor="red";
        compScore++;
        computerChoice.innerText=compScore;
    }
     
}

const playGame=(userChoice) =>
{
    const computerChoice=genComputer();
    if(userChoice===computerChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice=="rock")
        {
            userWin=computerChoice==="paper" ? false : true;
        }
        else if(userChoice=="paper")
        {
            userWin=computerChoice==="rock" ? true : false;
        }
        else
        {
            userWin=computerChoice==="rock" ? false : true;
        }
        showWin(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => 
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});