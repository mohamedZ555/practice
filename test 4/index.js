

let face = document.getElementById("face")

let move = 10
let x = 0
let y = 0

document.addEventListener("keydown", event =>{
    
    if(event.key.startsWith("Arrow")){

        face.textContent= "😲"
        face.style.backgroundColor ="tomato"

       switch (event.key) {
        case "ArrowUp":
            y -= move
            break;
       
        case "ArrowDown":
            y += move
            break;
        case "ArrowLeft":
            x -= move
           break;  
        case "ArrowRight":
            x += move
            break;
       }
        
       face.style.top = `${y}px`
       face.style.left = `${x}px`
    }
}
)

document.addEventListener("keyup", event =>{
    face.textContent= "😁"
    face.style.backgroundColor= "green"
}    
)