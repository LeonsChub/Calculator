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
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    

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
let last_val = "";
let operand = ""


for(let btn of btns){
    btn.addEventListener("click",()=>{

        if(parseInt(btn.id)<10){

            output_val+=btn.id;
            result.textContent = output_val;
        }

        else{

            switch(btn.id) {
                case "plus":
                  operand = "+";
                  last_val = output_val;
                  output_val = "";
                  result.textContent = output_val;

                  break;

                case "minus":

                  operand = "-";
                  last_val = output_val;
                  output_val = "";
                  result.textContent = output_val;
                  break;

                case "divide":

                  operand = "/";
                  last_val = output_val;
                  output_val = "";
                  result.textContent = output_val;
                  break;

                case "times":
                    
                    operand = "x";
                    last_val = output_val;
                    output_val = "";
                    result.textContent = output_val;
                    break;

                case "=":
                    ans = operate(last_val,output_val,operand);//answer
                    result.textContent = ans;

                    break;

                case "clear":
                    output_val = "";
                    result.textContent = output_val;
                    break;
              }
            console.log("current value",output_val);
            console.log("previous value",last_val);
            
            }
    });
}