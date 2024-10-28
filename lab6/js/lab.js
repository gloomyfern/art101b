// index.js - Lab 6
// Author: Fia McCord
// Date: October 2024

// Define Variables
myTransport = ["Toyota Corola", "bus", "rides from friends/family"];

// create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Corola",
  color: "silver",
  year: 2012,
  age: function () {
    return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of Transportation I use", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>" );