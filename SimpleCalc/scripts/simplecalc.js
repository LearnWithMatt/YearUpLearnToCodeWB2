"use strict";

window.onload = init;

function init()
{
    const calculateButton = document.getElementById("calculateButton");
    const number1Textbox = document.getElementById("number1Textbox");
    const number2Textbox = document.getElementById("number2Textbox");

    calculateButton.onclick = calculateButtonOnClick2;
    number1Textbox.onfocus = number1TextboxOnFocus;
    number1Textbox.onblur = number1TextboxOnBlur;
    number2Textbox.onfocus = number2TextboxOnFocus;
    number2Textbox.onblur = number2TextboxOnBlur;

}

function number1TextboxOnFocus() {
    const number1Textbox = document.getElementById("number1Textbox");
    number1Textbox.style = "background-color:blue; color:white;"
}

function number2TextboxOnFocus() {
    const number2Textbox = document.getElementById("number2Textbox");
    number2Textbox.style = "background-color:blue; color:white;"
}

function number1TextboxOnBlur() {
    const number1Textbox = document.getElementById("number1Textbox");
    number1Textbox.style = "background-color:white; color:black;"
}

function number2TextboxOnBlur(){
    const number2Textbox = document.getElementById("number2Textbox");
    number2Textbox.style = "background-color:white; color:black;"
}

function calculateButtonOnClick() 
{
    const number1Textbox = document.getElementById("number1Textbox");
    const number2Textbox = document.getElementById("number2Textbox");

    let num1AsString = number1Textbox.value;
    let num2AsString = number2Textbox.value;

    let num1AsNumber = Number(num1AsString);
    let num2AsNumber = Number(num2AsString);

    let answer = num1AsNumber + num2AsNumber;

    const outputPara = document.getElementById("outputPara");

    outputPara.innerHTML = answer;

    console.log("version 1 ran");

}


function calculateButtonOnClick2() 
{
    const number1Textbox = document.getElementById("number1Textbox");
    const number2Textbox = document.getElementById("number2Textbox");

    let num1 = Number(number1Textbox.value);
    let num2 = Number(number2Textbox.value);

    let answer = num1 + num2;

    const outputPara = document.getElementById("outputPara");

    outputPara.innerHTML = answer;

    console.log("version 2 ran");

}