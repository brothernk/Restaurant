//Requirements
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express
var app = express();

//Port
var PORT = process.env.PORT || 8080;

//Parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);


// 
//=================================================================


var table = [];

var waitList = [];


// api routes
//=================================================================


app.get("/api/tables", function(req, res) {
  res.json(table);
});

app.get("/api/waitlist", function(req, res) {
  res.json(waitList);
});

// html routes
//=================================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


//=================================================================
//Start
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
