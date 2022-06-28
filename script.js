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

const quickUpdate = function(){
    ans = operate(last_val,output_val,operand);//answer
    output_val = ans;
    result.textContent = ans;
    
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
            
            if(btn.id === "plus" || btn.id === "minus" || btn.id === "times" || btn.id === "divide"){
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
                        operand = "x";
                        break;
                   }
                }
                
                else{   
                    switch(btn.id) {
                        case "=":
                            quickUpdate();
                            break;

                        case "clear":
                            output_val = "";
                            result.textContent = output_val;
                            break;
                        }
                
                }
            console.log("current value",output_val);
            console.log("previous value",last_val);
            
            }
    });
}