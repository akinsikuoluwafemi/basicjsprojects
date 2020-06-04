let value = document.getElementById('value');
let increaseBtn = document.querySelector('.increase');
let decreaseBtn = document.querySelector('.decrease');
let resetBtn = document.querySelector('.reset');



let num = 0;

increaseBtn.addEventListener('click', function(){
    num += 1
    value.textContent = num;
    if(num > 0){
        value.style.color = "green";
        
    }else if(num === 0){
        value.style.color = "#222222";
        
    }
})

decreaseBtn.addEventListener('click', function(){
    num -= 1
    value.textContent = num;
    if(num < 0){
        value.style.color = "red";
        
    }else if(num === 0){
        value.style.color = "#222222";
        
    }
})


resetBtn.addEventListener('click', function(){
    num = 0;
    value.textContent = num;
    value.style.color = "#222222";
})
