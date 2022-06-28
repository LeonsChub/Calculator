const add = function(num1,num2){ 
    return num1 + num2;
};
const subtract = function(num1,num2){ 
    return num1 - num2;
};
const divide = function(num1,num2){

    return num1 / num2;
};
const multiply = function(num1,num2){
    return num1 * num2;
};

const operate = function(num1,num2,o){
    if(o === '+'){
        return add(num1,num2)
    }

    else if(o === '-'){
        return subtract(num1,num2)
    }

    else if(o === 'x'){
        return multiply(num1,num2)
    }

    else if(o === '/'){
        return subtract(num1,num2)
    }
}


console.log(add(2,2));
console.log(subtract(3,2));
console.log(divide(1,0));
console.log(multiply(10,10));

const btns = document.querySelectorAll("button");
const result = document.querySelector(".output");

let output_val = "";
let last_val = "";
let operand = ""


for(let btn of btns){
    btn.addEventListener("click",()=>{
        if(parseInt(btn.id)<10){
            output_val+=btn.id;
            result.textContent = output_val;
        }
        else{

            last_val = output_val;
            output_val = "";
            result.textContent = output_val;

            switch(btn.id) {
                case "plus":
                  operand = "+";
                  break;
                case "minus":
                  operand = "-";
                  break;
                case "divide":
                  operand = "/";
                  break;
                case "times":
                    operand = "x"
                    break;
                case "=":
                    console.log(operate(parseInt(last_val,output_val,operand)));
              }
            }
    });
}