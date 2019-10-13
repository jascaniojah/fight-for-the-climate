var express     = require("express"),
    router      = express.Router(),
    bodyParser  = require("body-parser"),
    Fact        = require("../models/fact");

router.get("/", function(req, res){
    console.log("facts index route hit")
    Fact.find({}, function(err, foundFacts){
        if (err) {
            console.log("Problem retrieving entries from db")
        } else {
            res.render("home", {facts: foundFacts});
        }
    });
});

router.get("/new", function(req, res){
    res.render("facts/new");
});

router.post("/", function(req, res){
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

//show
router.get("/:id", function(req, res){
    Fact.findById(req.params.id, function(err, foundFact){
        if (err) {
            req.flash("error", err.message);
        } else {
            res.render("facts/show", {fact: foundFact});
        }
    })
});

module.exports = router;