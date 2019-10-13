const   express     = require("express"),
        mongoose    = require("mongoose");
        bodyParser  = require("body-parser");
var app             = express(),
    Fact            = require("./models/fact");

var seedDatabase    = require("./seed")

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));app.use(express.static(__dirname + "/public"));  // serve static files (images, css, js)

mongoose.connect('mongodb+srv://augusthalverson:fight23@cluster0-2k2og.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// seedDatabase();

app.get("/", function(req, res){
    res.redirect("/facts")
});

app.get("/facts", function(req, res){
    Fact.find({}, function(err, foundFacts){
        if (err) {
            console.log("Problem retrieving entries from db")
        } else {
            res.render("home", {facts: foundFacts});
        }
    })
    
});

app.get("/facts/new", function(req, res){
    res.render("facts/new");
});

app.post("/facts", function(req, res){
    factSubmission = req.body.fact;

    var newFact = new Fact({
        source_url: factSubmission.source_url,
        source_name: factSubmission.source_name,
        headline: factSubmission.headline,
        details: factSubmission.details,
        contributor: factSubmission.contributor});

    Fact.create(newFact, function(err, factCreated){
        if (err) {
            console.log("A fatal error occurred while creating a new entry.")
        } else {
            res.redirect("/facts");
        }
    })
});


app.listen(8080, function(){
    console.log("fight-for-the-climate dev version live on 8080")
});