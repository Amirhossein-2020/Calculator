// let charachter;
// let firstNumber = [];
// let fnumber = "";
// let snumber = "";
// let result;
// let number;
// document.getElementsByClassName("result-text")[0].innerText;
// function getInput(input){
//     charachter = input.innerHTML;
//     console.log("charachter", parseFloat(charachter));
//     if(parseFloat(charachter) || parseFloat(charachter) === 0){
//         firstNumber.push(charachter);
//         console.log("firstnumber", firstNumber);
//     } else if(charachter == "." && firstNumber[firstNumber.length-1] != "."){
//         firstNumber.push(charachter);
//         console.log("firstnumber", firstNumber);
//     } else if(charachter == "-" && firstNumber.length == 0){
//         firstNumber.push(charachter);
//         console.log("firstnumber", firstNumber);
//     } else if(charachter == "*" || charachter == "-" || charachter == "/" || charachter == "+"){
//         if(firstNumber.length > 0){ 
//             for(var i in firstNumber){
//                 fnumber += firstNumber[i];
//             }
//             firstNumber = [];
//             for(var i in firstNumber){
//                 snumber += firstNumber[i];
//             }
//             console.log("fnumber", fnumber);
//             document.getElementsByClassName("result-text")[0].innerText = fnumber;
//         }
//         console.log("fnumber", fnumber);
//         console.log("fnumber", snumber);
//         document.getElementsByClassName("result-text")[0].innerText = fnumber;
//         switch (charachter){
//             case "+":
//                 result = Number(fnumber) + Number(snumber);
//                 console.log("result", result);
//                 break;
//             case "-":
//                 console.log(Number(fnumber) - 2)
//                 break;
//         }
//     }
// }


// function getInput(a){
//     let charachter = a.innerText;
//     firstNumber += charachter;
    // if(charachter == "*" || charachter == "-" || charachter == "/" || charachter == "+"){
    // }
    // if(firstNumber.includes("*") || firstNumber.includes("-") || firstNumber.includes("+") || firstNumber.includes("/") || firstNumber.includes("=")){
    //     document.getElementsByClassName("result-text")[0].innerText = charachter;
    //     number = firstNumber;
    //     firstNumber = "";
    //     } else {
    //     document.getElementsByClassName("result-text")[0].innerText = firstNumber;
    //     }
// }
// function calculate(a, b){
//     result = a + b;
//     document.getElementsByClassName("result-text")[0].innerText = result;
// }

let number = "";
let numberArray = [];
let firstNumber;
let firstNumberString;
let firstNumberArray;
let secondNumber;
let secondNumberString;
let operator;
let result;
let memory;
let memoryText;
function getInput(key){
    if(numberArray[0] == "0" && key.innerHTML != "." && numberArray.length < 2){
        console.log("not a number");
    } else if(parseFloat(key.innerHTML)){
        number += key.innerHTML;
        numberArray.push(key.innerHTML);
    } else if(key.innerHTML == "0" && numberArray.length != 1 || numberArray[0] != "0"){
        number += key.innerHTML;
        numberArray.push(key.innerHTML);
    } else if(key.innerHTML == "." && !numberArray.includes(".")){
        number += key.innerHTML;
        numberArray.push(key.innerHTML);
    }  
    //  else if(numberArray[0] == "0" && key.innerHTML == "."){
        // number += key.innerHTML;
        // numberArray.push(key.innerHTML);
    // }
    // } else if(key.innerHTML == "." && numberArray[numberArray.length-1] != "."){
    //     number += key.innerHTML;
    //     numberArray.push(key.innerHTML);
    // }
    // } else if(key.innerHTML == "." && firstNumberArray[length-1] != "."){
    //     number += key.innerHTML;
    //     firstNumberArray.push(key.innerHTML);
    console.log("numberArray", numberArray);
    console.log("number", number);
    document.getElementsByClassName("result-text")[0].innerText = number;
}
function operate(key){
    if(key.innerHTML == "-" && numberArray.length == 0){
        number += key.innerHTML;
        numberArray.push(key.innerHTML);
    } else if(memory && !number){
        document.getElementsByClassName("memoryBox")[0].innerText = memory;
        document.getElementsByClassName("result-text")[0].innerText = "";
        firstNumber = memory;
        firstNumberString = memory;
        memory = 0;
        number = "";
        firstNumberArray = numberArray;
        numberArray = [];

        operator = key.innerHTML;
        console.log("operator", operator);
    } else {
        firstNumber = parseFloat(number);
        firstNumberString = number;
        memory = 0;
        number = "";
        firstNumberArray = numberArray;
        numberArray = [];
        console.log("firstNumber", firstNumber);
        console.log("number", number);
        operator = key.innerHTML;
        console.log("operator", operator);
    }
}
function calculate(key){
    secondNumber = parseFloat(number);
    if(secondNumber && firstNumber){
        secondNumberString = number;
        number= "";
        document.getElementsByClassName("result-text")[0].innerText = "";
        console.log(firstNumber, secondNumber);
        switch(operator){
            case "+":
                result = firstNumber + secondNumber;
                document.getElementsByClassName("memoryBox")[0].innerText = firstNumberString + " + " + secondNumberString;
            break;
            case "-":
                result = firstNumber - secondNumber;
                document.getElementsByClassName("memoryBox")[0].innerText = firstNumberString + " - " + secondNumberString;
            break;
            case "÷":
                result = firstNumber / secondNumber;
                document.getElementsByClassName("memoryBox")[0].innerText = firstNumberString + " ÷ " + secondNumberString;
            break;
            case "×":
                result = firstNumber * secondNumber;
                document.getElementsByClassName("memoryBox")[0].innerText = firstNumberString + " × " + secondNumberString;
            break;
        }
        document.getElementsByClassName("result-text")[0].innerText = parseFloat(result.toFixed(10));
        memory = parseFloat(result.toFixed(10));
        console.log("result", result.toFixed(10));
    }
}
function clearContent(){
    number = "";
    numberArray = [];
    document.getElementsByClassName("result-text")[0].innerText = 0;
    console.log("clear");
}
function totalClear(){
    number = "";
    numberArray = [];
    firstNumber = 0;
    firstNumberArray = [];
    secondNumber = 0;
    operator = "";
    result = 0;
    memory = 0;
    document.getElementsByClassName("memoryBox")[0].innerText = "";
    document.getElementsByClassName("result-text")[0].innerText = 0;
    console.log("clear");
}