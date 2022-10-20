"use strict";

window.onload = init;

function init() 
{
 const helloBtn = document.getElementById("helloBtn");
 helloBtn.onclick = onHelloBtnClicked; 
}

function onHelloBtnClicked() {

 console.log("I just created an alert!");    
 //alert("Hi there!");
    const thePara = document.getElementById("thePara");
    thePara.innerHTML = "Hi there!";
}