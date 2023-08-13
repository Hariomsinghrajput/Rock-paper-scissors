const playerstxt= document.querySelector("#players");
const computerstxt= document.querySelector("#computers");
const Resultstxt= document.querySelector("#Results");
const buttons= document.querySelectorAll(".choicebtn");

let player;
let computer;
let result;

buttons.forEach(button =>button.addEventListener("click", () => {

player=button.textContent;
computerturn();
 
playerstxt.textContent= `player :${player}`;
computerstxt.textContent= `computer :${computer}`;
Resultstxt.textContent= checkwinner();

}));

function computerturn(){
    const randnum = Math.floor(Math.random() *3) + 1;

    switch(randnum){
        case 1: computer="Rock";
        break;
        case 2: computer="Paper";
        break;
        case 3: computer="scissors";
        break;
    }
}
function checkwinner(){
    if(player== computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == "paper") ?"you win!": "you lose!";
    }
    else if(computer == "paper"){
        return (player == "scissors") ?"you win!": "you lose!";
    }
    else if(computer == "scissors"){
        return (player == "Rock") ?"you win!": "you lose!";
    }
}

