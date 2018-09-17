var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override")
var path = require("path");
var app = express();

var port = 3000;

var bodyParser = require("body-parser");

// app.set('view engine', 'ejs'); DELETE THIS, AS IT WILL NOT BE NEEDED

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("./app/public"));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306. Mine is 418.
  port: 418,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "friendfinder_db"
});


// ROUTES

// app.get("/", function(req, res){
//   res.sendFile(path.join(__dirname, ".\app\public\index.html"));
// });

// app.get("/survey", function(req, res){
//   res.sendFile(path.join(__dirname, ".\app\public\survey.html"));
// });

app.post('/submit', function(req, res){
  // res.json(req.body);
  
  connection.query(
    "INSERT INTO friends (person_name, photo, q1_scale, q2_scale, q3_scale, q4_scale, q5_scale, q6_scale, q7_scale, q8_scale, q9_scale, q10_scale) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [req.body.person_name, req.body.photo, req.body.q1_scale, req.body.q2_scale, req.body.q3_scale, req.body.q4_scale, req.body.q5_scale, req.body.q6_scale, req.body.q7_scale, req.body.q8_scale, req.body.q9_scale, req.body.q10_scale],
    function(err, response) {
      res.redirect('/');
    }
    );
  });

  app.get('/friends', function(req, res){
    connection.query(
      "SELECT * FROM friends",
      function(err, response) {
        res.json(response);
      }
      );
    });






app.listen(port, function(){
	console.log('listening on 3000');
});