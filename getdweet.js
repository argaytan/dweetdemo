var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();


dweetio.get_all_dweets_for("my-edison", function(err, dweets){

  // Dweets is an array of dweets
  for(theDweet in dweets)
  {
    var dweet = dweets[theDweet];

    console.log(dweet.thing); // The generated name
    console.log(dweet.content); // The content of the dweet
    console.log(dweet.created); // The create date of the dweet
  }

});