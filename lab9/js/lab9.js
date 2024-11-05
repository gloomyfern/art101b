/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Fia McCord
   Date: November 2024
*/

$("#Challenge").append("<button id='button-Challenge'>ClickClack</button>");

$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#Challenge").toggleClass("ClickClack");
});

$("#Problems").append("<button id='button-Problems'>ClickClack</button>");

$("button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#Problems").toggleClass("ClickClack");
}); 


$("#Results").append("<button id='button-Results'>ClickClack</button>");

$("button-results").click(function(){
    $("#Results").toggleClass("ClickClack");
}); 

