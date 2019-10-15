var express     = require("express"),
    router      = express.Router(),
    bodyParser  = require("body-parser"),
    Fact        = require("../models/fact");


// INDEX
router.get("/", function(req, res){
    Fact.find({}, function(err, foundFacts){
        foundFacts.sort(function(a, b) {
            return a.votes - b.votes;
        });
        foundFacts = foundFacts.reverse();
        if (err) {
            console.log("Problem retrieving entries from db")
        } else {
            res.render("facts/index", {facts: foundFacts});
        }
    });
});

// NEW
router.get("/new", function(req, res){
    res.render("facts/new");
});

// CREATE
router.post("/", function(req, res){
    factSubmission = req.body.fact;

    var newFact = new Fact({
        source_link: factSubmission.source_link,
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

//SHOW
router.get("/:id", function(req, res){
    Fact.findById(req.params.id, function(err, foundFact){
        if (err) {
            // TODO Implement Flash
            req.flash("error", err.message);
        } else {
            res.render("facts/show", {fact: foundFact});
        }
    });
});

// EDIT
router.get("/:id/edit", function(req,res) {
    Fact.findById(req.params.id, function(err, foundFact){
        if (err) {
            // TODO Implement Flash
            req.flash("error", err.message);
        } else {
            res.render("facts/edit", {fact: foundFact});
        }
    })
});

// UPDATE
router.post("/:id", function(req, res){
    Fact.findByIdAndUpdate(req.params.id, req.body.fact, function(err, factUpdated){
        if (err) {
            console.log("A fatal error occured while trying to update the fact");
        } else {
            res.redirect("/facts/" + factUpdated._id);
        }
    });
});

// DESTROY
router.delete("/:id", function(req, res){
    Fact.findByIdAndRemove(req.params.id, function(err){
        if (err) {
            console.log("A fatal error occured while deleting the fact");
        } else {
            // req.flash()
            res.redirect("/facts");
        }
    })

});

// Upvote 
router.post("/:id/upvote", function(req, res){
    Fact.findByIdAndUpdate(req.params.id, {$inc: { votes: 1 }}, function(err, foundFact) {
        res.sendStatus(200);
    });
});
// Upvote 
router.post("/:id/downvote", function(req, res){
    Fact.findByIdAndUpdate(req.params.id, {$inc: { votes: -1 }}, function(err, foundFact) {
        res.sendStatus(200);
    });
});

module.exports = router;