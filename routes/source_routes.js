var express         = require("express"),
    router          = express.Router(),
    bodyParser      = require("body-parser");
var XMLHttpRequest  = require("xmlhttprequest").XMLHttpRequest;
var xhr             = new XMLHttpRequest();

var Fact        = require("../models/fact"),
    Source     = require("../models/source");

// INDEX
router.get("/", function(req, res){
    Source.find({}, function(err, sourcesFound){
        if (err) {
            console.log("A fatal error occured while retrieving sources from DB");
        } else {
            res.render("sources/index", {sources: sourcesFound});
        }
    })
    
});

// NEW
router.get("/new", function(req, res){
    res.render("sources/new");
});

// CREATE
router.post("/", function(req, res){
    
    var sourceSubmission = req.body.source;
    
    var newSource = new Source({
        name_long: sourceSubmission.name_long,
        name_short: sourceSubmission.name_short,
        logo: sourceSubmission.logo,
        reputability: sourceSubmission.reputability,
        url: sourceSubmission.url,
        wikipedia_url: sourceSubmission.wikipedia_url,
        wikipedia_summary: sourceSubmission.wikipedia_summary
    });

    Source.create(newSource, function(err, sourceCreated){
        if (err) {
            console.log("A fatal error occured while trying to create this source");
        } else {
            res.redirect("/sources/" + sourceCreated._id);
        }
    })

});

// SHOW
router.get("/:id", function(req, res){
    Source.findById(req.params.id, function(err, sourceFound){
        if (err) {
            console.log("A fatal error occured while trying to retrieve the source");
        } else {
            Fact.find({}, function(err, factsFound) {
                if (err) {
                    console.log("a fatal error occured while accessing facts");
                } else {
                    res.render("sources/show", {source: sourceFound, facts: factsFound});
                }
            });
        }
    });
    
});

// EDIT
router.get("/:id/edit", function(req, res){
    res.render("sources/edit");
});

// UPDATE
router.put("/:id", function(req, res){
    // Implement
});

// DESTROY
router.delete("/", function(req, res){
    // implement
});

module.exports = router;