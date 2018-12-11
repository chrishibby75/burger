//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes for server
var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

var PORT = process.env.PORT || 8080;

//start server listening to client requests
app.listen(PORT, function () {
    console.log("Server listening on Port: " + PORT);
});
