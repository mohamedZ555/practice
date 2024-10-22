
function clickdice(){
    var numbox = document.getElementById("numbox").value
    var firstp = document.getElementById("firstp")
    var secp = document.getElementById("secp")
    var values = []
    var images = []
    
    for (let i = 0; i < numbox; i++) {
        const value = Math.floor(Math.random()*6 + 1);
        values.push(value);
        images.push(`<img src="images/${value}.png">`);
    }

    firstp.textContent = `dice number is : ${values.join(', ')}`
    secp.innerHTML= images.join()

}


var watch = document.getElementById("watch")
var time = null
var starttime = 0
var elap = 0
var isrunning = false;



function start(){    
    if (!isrunning) {
        starttime= Date.now()- elap;
        time = setInterval(update, 10);
        isrunning = true;
    }


}


function stop(){    
    if (isrunning) {
        clearInterval(time);
        elap = Date.now() - starttime;
        isrunning = false;
    }
}


function reset(){    
    clearInterval(time)
    time = null
    starttime = 0
    elap = 0
    isrunning = false;

    watch.textContent= `00:00:00:00`
}


function update(){    

    currenttime = Date.now()
    elap = currenttime - starttime

    var hours =Math.floor(elap / (1000 * 60 *60))
    var min =Math.floor(elap / (1000 * 60 ) % 60)
    var sec =Math.floor(elap / (1000) % 60)
    var milsec =Math.floor(elap % 1000 /10)


    hours = String(hours).padStart( 2 , 0)
    min = String(min).padStart( 2 , 0)
    sec = String(sec).padStart( 2 , 0)
    milsec = String(milsec).padStart( 2 , 0)

    watch.textContent= `${hours}:${min}:${sec}:${milsec}`


}




