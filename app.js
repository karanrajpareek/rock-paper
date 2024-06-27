let userscore = 0;
let compscore=0;

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const draw = ()=>{
    console.log("game was draw");
    msg.innerText = "Match is draw . Play again";
}

const showWinner = (userwin , userchoice , compchoice)=>{
  if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    console.log("you win");
    msg.innerText=`you win!, your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";

} 
  else{
    console.log("you loose");
    compscore++;
    compscorepara.innerText = compscore; 
    msg.innerText=`you loss! ${compchoice} beats  Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
}

const gencompchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return options[randomidx];
}

const playgame = (userchoice) =>{
    console.log("user choice is ", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice is ", compchoice);


    if(userchoice===compchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice==="paper" ? false : true;
        }else if(userchoice==="paper"){
            userwin = compchoice==="scissors" ? false : true;
        }else{
            userwin = compchoice==="rock" ? false : true;
        }
        showWinner(userwin , userchoice , compchoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    }) 
})

