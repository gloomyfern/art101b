// index.js - Lab 8
// Author: Fia McCord
// Date: October 2024


function chooseColor(){
  let askColor = window.prompt("What color should this page be?");
  console.log (askColor);
  return askColor;
}


$("BODY").css("background-color", chooseColor());

