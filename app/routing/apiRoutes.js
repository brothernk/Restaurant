var friends = require("../data/friends.js");


// Routes
// =============================================================

module.exports = function(app) {
  
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

};