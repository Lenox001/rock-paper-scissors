const compChoices=["rock","paper","scissors"]
const buttons=document.querySelectorAll(".choice")
const playerChoice=document.getElementById("player-choice")
const computerChoice=document.getElementById("computer-choice")
const result=document.getElementById("result")

buttons.forEach(button=>{
    button.addEventListener("click",function(){
        playerChoice.innerHTML=(this.id)
        playerChoice.style.color="Brown"
        const randomChoice=compChoices[Math.floor(Math.random()*compChoices.length)]
        computerChoice.innerHTML=randomChoice
        computerChoice.style.color="Blue"
        if((this.id==="rock"&& randomChoice==="scissors")||
         (this.id==="paper"&& randomChoice==="rock")||
          (this.id==="scissors"&& randomChoice==="paper")){
            result.innerHTML="You Win🎉!"
            result.style.color="Blue"
        }else if (this.id === randomChoice.toLowerCase()) {
            result.innerHTML = "It's a Tie🤝!";
            result.style.color="Green"
        } else{
            result.innerHTML="You Lose😞"
            result.style.color="Red"
        }
      
    })
   
})