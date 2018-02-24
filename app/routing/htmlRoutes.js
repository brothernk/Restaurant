// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================

module.exports = function(app) {
  
  // Route that leads to home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  // A GET Route to /survey which should display the survey page.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};