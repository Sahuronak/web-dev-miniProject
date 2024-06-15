
let btnSubmit = document.getElementById("submit");
let div = document.getElementById("container");
let num = document.getElementById("num");

let winNum = 7;

btnSubmit.addEventListener("click",function(){
    let numvalue = num.value;
    if(numvalue == winNum){
        result.innerHTML='LEGEND'
    }
    else if( numvalue <= winNum){
        result.innerHTML= 'number is less'
    }
    else if( numvalue >= winNum){
        result.innerHTML= 'number is more'
    }
    else{
        result.innerHTML='BAD LUCK'
    }

});