const   express     = require("express"),
        mongoose    = require("mongoose");
var app             = express(),
    Fact            = require("./models/fact");

var seedDatabase    = require("./seed")

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));app.use(express.static(__dirname + "/public"));  // serve static files (images, css, js)

mongoose.connect('mongodb+srv://augusthalverson:fight23@cluster0-2k2og.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// seedDatabase();

app.get("/", function(req, res){
    Fact.find({}, function(err, foundFacts){
        if (err) {
            console.log("Problem retrieving entries from db")
        } else {
            res.render("home", {facts: foundFacts});
        }
    })
    
});

app.listen(8080, function(){
    console.log("fight-for-the-climate dev version live on 8080")
});