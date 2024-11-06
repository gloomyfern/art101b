/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Fia McCord
   Date: November 2024
*/

$("#challenge").append("<button id='button-challenge'>ClickClack</button>");

$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});



$("#problems").append("<button id='button-problems'>ClickClack</button>");

$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
}); 




$("#results").append("<button id='button-results'>ClickClack</button>");

$("#button-results").click(function(){
    $("#results").toggleClass("special");
}); 

