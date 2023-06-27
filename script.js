let output = "";
let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let arr = Array.from(buttons);

arr.forEach((button)=>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            output = eval(output.replace('%','/100'));
            input.value = output;
        }
        else if(e.target.innerHTML == 'AC'){
            output = "";
            input.value = output;
        }
        else if(e.target.innerHTML == 'DEL'){   
            output = output.toString().slice(0,-1);
            input.value = output;
        }
        
        else{
        console.log(e.target);
        output = output + e.target.innerHTML;
        input.value = output;
        }
    })
})