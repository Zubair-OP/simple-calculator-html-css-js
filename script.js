let buttons = document.querySelectorAll(".button");
let input = document.getElementById('inputBox');

let result = "";

let arr_btn = Array.from(buttons);

 arr_btn.forEach(buttons =>{
    buttons.addEventListener('click',(e) => {
       if(e.target.innerHTML == '='){
        result = eval(result);
        input.value = result;
       } 
       else if (e.target.innerHTML == 'AC'){
        result = '';
        input.value = result;
       }
       else if (e.target.innerHTML == 'DEL'){
        result = result.substring(0,result.length - 1);
        input.value = result;
       }
       else{
         result += e.target.innerHTML;
         input.value = result;
       }
    })
 })