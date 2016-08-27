// https://github.com/buglabs/node-dweetio/blob/master/README.md

var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();



dweetio.dweet_for("my-edison", {some:"data"}, function(err, dweet){

  dweet.content = 'this is the content';
  console.log(dweet.thing); // "my-thing"
  console.log(dweet.content); // The content of the dweet
  console.log(dweet.created); // The create date of the dweet

});


dweetio.get_latest_dweet_for("my-edison", function(err, dweet){

  var dweet = dweet[0]; // Dweet is always an array of 1

  console.log(dweet.thing); // The generated name
  console.log(dweet.content); // The content of the dweet
  console.log(dweet.created); // The create date of the dweet

});