var tableWaitList = require("../data/tableWaitList.js");


// Routes
// =============================================================

module.exports = function(app) {
  
  
  app.get("/api/tables", function(req, res) {
    res.json(tableWaitList);
  });

};