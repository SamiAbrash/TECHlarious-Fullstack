function getInput(event){
    if (event=="0" || event=="1" || event=="2" || event=="3" || event=="4" || event=="5" || event=="6" || event=="7" || event=="8" || event=="9")
    {    
        input = document.getElementById("oper").value += event;
    }
}

let result = 0;
let operation;

function Operation(event){
    switch(event){
        case '+':
            operation = event;
            result = result + +input;
            input = 0;
            document.getElementById("oper").value = '';
            break;
        case '-':
            operation = event;
            if (result == 0){
                result = +input;
            }
            else{
                result = result - +input;
            }
            input = 0;
            document.getElementById("oper").value = '';
            break;
        case '*':
            operation = event;
            if (result == 0){
                result = +input;
            }
            else {
                result = result * +input;
            }
            input = 1;
            document.getElementById("oper").value = '';
            break;
        case '/':
            operation = event;
            if (result == 0){
                result = +input;
            }
            else{
                if (input !== 0){
                    result = result / +input;
                }
                else{
                    clearCal();
                }
            }
            input = 0;
            document.getElementById("oper").value = '';
            break;
    }
}

function onEqual (){
    Operation(operation);
    document.getElementById("oper").value = result;
    window.alert('Result = ' + result);  
}

function clearCal(){
    result = 0;
    input = 0;
    document.getElementById("oper").value = '';
}