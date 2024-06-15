

    function hello(){
    alert('hello everyone');
    }
    let counter = 0;
    function count(){
        counter++;
        alert(counter);
    }
    function welcome(){
        let heading = document.querySelector('h2');
        if(heading.innerHTML ==='welcome'){
            heading.innerHTML = 'goodday!';
        }
        else{
            heading.innerHTML = 'wonderfull!';
        }
    }
     let num = 0;
    function number(){
        num++;
        document.querySelector("h4").innerHTML = num;
        if (num % 10 == 0){
            
        alert('count is now ${num}');
        }
    }
    document.addEventListener('DOMContentLoaded',function(){
        document.querySelector('button').addEventListener('click', num);

    })
    