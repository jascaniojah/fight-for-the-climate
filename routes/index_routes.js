var express     = require("express"),
bodyParser      = require("body-parser"),
router          = express.Router();

router.get("/", function(req, res){
    res.redirect("/facts");
});

module.exports = router;