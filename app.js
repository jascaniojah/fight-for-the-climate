const   express     = require("express"),
        mongoose    = require("mongoose");
var app             = express();

var seedDatabase    = require("./seed")

app.set("view engine", "ejs");

mongoose.connect('mongodb+srv://augusthalverson:fight23@cluster0-2k2og.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

seedDatabase();

app.get("/", function(req, res){
    res.render("home");
});

app.listen(8080, function(){
    console.log("fight-for-the-climate dev version live on 8080")
});