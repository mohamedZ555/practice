
var choose = ["rock", "paper", "scissors"]

var playerdisplay = document.getElementById("playerdisplay")
var computerdisplay = document.getElementById("computerdisplay")
var resultdisplay = document.getElementById("resultdisplay")
var playres = 0
var comp = 0

var playresscore= document.getElementById("playres")
var computerscore= document.getElementById("comp")

function playgame(play){

   let computerchoose=choose[Math.floor(Math.random() * 3)] 
    let result = ""

    if (play === computerchoose) {
        result = "IT'S A TIE"
    } else {    
        switch(play){
            case "rock":
                result= (computerchoose === "scissors")? "YOU WIN!" : "YOU LOSE!"
            break;
            case "paper":
                result= (computerchoose === "rock")? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result= (computerchoose === "paper")? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    switch(result){
    case "YOU WIN!":
        playres++
        playresscore.textContent= `PLAYER SCORE: ${playres}`
        break;
    case "YOU LOSE!":
        comp++
        computerscore.textContent= `COMPUTER SCORE: ${comp}`
}

    playerdisplay.textContent= `PLAYER: ${play}`
    computerdisplay.textContent= `COMPUTER: ${computerchoose}`
    resultdisplay.textContent= result


}