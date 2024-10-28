// index.js - Lab 7
// Author: Fia McCord
// Date: October 2024

function sortUserName() {
  var userName = window.prompt("Hi. please tell me your name so I can make sure it's right!");
  console.log("userName =, userName");
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

document.writeln("Okay! your name is fixed: ",
    sortUserName(), "</br>");