var express = require("express");
var PORT = process.env.PORT || 8000;

var app = express();

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Setup the rener engine for Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));
app.use(express.static("public"))


// Add the routes to the Express app
require("./routes/index")(app)

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});