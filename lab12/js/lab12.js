/*

   Requirements: jQuery must be loaded for this script to work.

   Author: Fia McCord
   Date: November 2024
*/


//Return District 1, District 2, District 3, District 4, District 5, District 6, District 7, District 8, District 9, District 10, District 11, District 12
//depending on length mod 12
function capitolSorting(str) {
  len = str.length;
  mod = len % 12;

  if (mod == 0 ) {
    return "District 1"
  }
 else if (mod == 1 ) {
    return "District 2"
  }
  else if (mod == 2 ) {
    return "District 3"
  }
  else if (mod == 3 ) {
    return "District 4"
  }
  else if (mod == 4 ) {
    return "District 5"
  }
  else if (mod == 5 ) {
    return "District 6"
  }
  else if (mod == 6 ) {
    return "District 7"
  }
  else if (mod == 7 ) {
    return "District 8"
  }
  else if (mod == 8 ) {
    return "District 9"
  }
  else if (mod == 9 ) {
    return "District 10"
  }
  else if (mod == 10 ) {
    return "District 11"
  }
  else if (mod == 11 ) {
    return "District 12"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var district = capitolSorting(name);
    newText = "<p>The Capitol has assigned you to a " + district + "</p>";
    document.getElementById("output").innerHTML = newText;

})