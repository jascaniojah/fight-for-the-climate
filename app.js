const express     = require("express"),
    mongoose    = require("mongoose");
var app         = express();

app.set("view engine", "ejs");

mongoose.connect('mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", function(req, res){
    res.render("home");
});

app.listen(8080, function(){
    console.log("fight-for-the-climate dev version live on 8080")
});