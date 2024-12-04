/*

   Requirements: jQuery must be loaded for this script to work.

   Author: Fia McCord
   Date: November 2024
*/

// "image": "https://yesno.wtf/assets/no/12-dafd576be23d3768641340f76658ddfe.gif"
// }

$.ajax({
   // The URL for the request 
   url: "https://yesno.wtf/api",
   // The data to send (will be converted to a query string)
   data: { id: 123},
   // Whether this is a POST or GET request 
   type: "GET",
   // The type of data we expect back 
   dataType : "json",
 })
 // If the request succeeds
 .done(function( data ) { 
   console.log(data);
   $("#output").append("<h1>" + data.answer);
   $("#output").append("<img src='" + data.image + "'>")
 })
 // If the request fails
 .fail(function( xhr, status, errorThrown ) {
   console.log(errorThrown + " Status:" + status );
 });
 
 
 
