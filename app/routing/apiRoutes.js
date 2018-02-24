var friends = require("../data/friends.js");


// Routes
// =============================================================

module.exports = function(app) {
  
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  
  
  // // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  // app.post("/api/new", function(req, res) {
  //   // req.body hosts is equal to the JSON post sent from the user
  //   // This works because of our body-parser middleware
  //   var newfriend = req.body;
  //   // Using a RegEx Pattern to remove spaces from newCharacter
  //   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  //   newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
  //   console.log(newfriend);
  
  //   friends.push(newfriend);
  
  //   res.json(newfriend);
  // });

};