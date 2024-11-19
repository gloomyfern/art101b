/*

   Requirements: jQuery must be loaded for this script to work.

   Author: Fia McCord
   Date: November 2024
*/


//Loop through numbers 1 to 200, listing them as you go
//If the number is a multiple of 3, it should print "Fizzy"
//If the number is a multiple of 5, it should print "Buzzy"
//If the number is a multiple of 7, it should print "Boom"
//If the number is a multiple of more than 1, 3, 5, or 7 it should combine Fizzy, Buzzy, and Boom.


function fizzBuzz() {

  var oneLongString = "";


  for (var i = 1; i <= 200; i++) {
    var str = "";

    if (i % 3 === 0) str += "Fizzy";
    if (i % 5 === 0) str += "Buzzy";
    if (i % 7 === 0) str += "Boom";


      if (str == "") {
        oneLongString += "<br>" + i;

       } else {
        oneLongString += "<br>" + i + ": " + str;
      }


  }

    $("#output").html(oneLongString);

}

(function () {
  var oldLog = console.log;
  console.log = function(message) {
      oldLog.apply(console, arguments);
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.innerHTML += message + '<br>';
      }

  };
})();

fizzBuzz();

// creating tabs with content
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for(i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;

}

// Get the element with id= "defaultOpen" and click on it
document.getElementById("defaultOpen").click();