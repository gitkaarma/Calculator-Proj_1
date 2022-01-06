function getHistory(){
        //return "fuck";
        return document.getElementById("history-value").innerText;
}


function printHistory(num){
        document.getElementById("history-value").innerText = num; 
}


function getOutput(){
        return document.getElementById("output-value").innerText;
}

function printOutput(num){
        if(num == ""){
                document.getElementById("output-value").innerText = "";
        }
        else{
                document.getElementById("output-value").innerText = getFormattedNumber(num);
        }
}

function getFormattedNumber(num){
        if(num == "-"){
                return "";
        }
        var n = Number(num);
        var value = n.toLocaleString("en");
        return value;
}
function getNumber(num){
        
        return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");

for(var i = 0; i < operator.length; i++){
        
        operator[i].addEventListener('click', function(){
             if(this.id == "clear"){
                     printHistory("");
                     printOutput("");
             }   
             else if(this.id == "backspace"){
                     //alert("vuc");
                     var output = getNumber(getOutput()).toString();
                  //   alert(output);
                     if(output){
                             output = output.substr(0, output.length - 1);
                             printOutput(output);
                     }
             }
             else{
                     var output = getOutput();
                     var history = getHistory();
                     if(output==""&&history!=""){
                        if(isNaN(history[history.length-1])){
                                history= history.substr(0,history.length-1);
                        }
                }
                 if(output!="" || history!=""){
                        output= output==""?output:getNumber(output);
                             history = history + output;
                             if(this.id == "equals"){
                                     var result = eval(history);
                                     printOutput(result);
                                     printHistory("");
                             }
                             else{
                                     if(this.id == "divide"){
                                             history += "/";
                                             
                                     }
                                     else if(this.id == "multiply"){
                                             history += "*";
                                     }
                                     else if(this.id == "subtract"){
                                        history += "-";
                                  }
                                else if(this.id == "add"){
                                        history += "+";
                                }
                                printHistory(history);
                                             printOutput("");

                             }
                     }
             }
        })
}
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
        number[i].addEventListener('click', function(){
                var output = getNumber(getOutput());
                if(output != NaN){
                        output += this.id;
                        printOutput(output);
                }
                
        })
}