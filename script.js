function roundToThree(number){
    return Math.round(number * 1000)/1000
}

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
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
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
        return divide(num1,num2)
    }
}

const btns = document.querySelectorAll("button");
const result = document.querySelector(".output");

let output_val = "";
let last_val   = "";
let operand    = "";


for(let btn of btns){
    btn.addEventListener("click",()=>{
    
        if(parseInt(btn.id)<10){

            output_val+=btn.id;
            result.textContent = roundToThree(output_val);
        }

        else{
            
            if(btn.id === "plus" || btn.id === "minus" || btn.id === "times" || btn.id === "divide"){

                if(last_val === ""){
                    last_val = output_val;
                    result.textContent = roundToThree(output_val);
                    output_val = "";
                }
                else{
                    last_val = operate(last_val,output_val,operand);

                    if(last_val === Infinity){
                        result.textContent = "Lmao";
                    }
                    else{
                        result.textContent = roundToThree(last_val);
                    }
                    
                    output_val = "";

                } 

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
                        operand = "x";
                        break;
                    
                }
            }
            else{   
               switch(btn.id) {
                    case "=":
                        if(last_val !== "" && output_val !== ""){
                            ans = operate(last_val,output_val,operand);
                            output_val = ans;
                            last_val = "";
                        }
                        break;

                    case "clear":
                        output_val = "";
                        break;
                    
                    case "backspace":
                        output_val = output_val.slice(0,-1);

                }
                if (output_val === Infinity){
                    result.textContent = "lmao";
                }
                else{
                    result.textContent = roundToThree(output_val);
                }
                
            }
            
        }
    });
}