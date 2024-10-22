
var increase = document.getElementById("increase");
var reset = document.getElementById("reset");
var decrease = document.getElementById("decrease");
var label = document.getElementById("label");
var count = 0;

increase.onclick = function(){
    count++;
    label.textContent= count;
}
decrease.onclick = function(){
    count--;
    label.textContent= count;
}
reset.onclick = function(){
    count=0;
    label.textContent= count;
}

var roll = document.getElementById("roll")
var mylabel = document.getElementById("mylabel")
var max = 6
var min = 1
roll.onclick = function(){
    mylabel.textContent=Math.floor(Math.random()*max +min)
}


var inpu = document.getElementById("inpu")
var pra = document.getElementById("pra")
var submite = document.getElementById("submite")
var age
submite.onclick=function(){
    age = inpu.value
    age = Number(age)

    if(age>=60){
    pra.textContent=`you are too old to visit my site`
    }
    else if(age>=18){
    pra.textContent=`you are old enough to visit this site`
    }
    else if(age<18){
    pra.textContent=`you can not visit my site`
    }
}    

