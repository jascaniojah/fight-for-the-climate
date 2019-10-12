const mongoose = require("mongoose");

factSchema = mongoose.Schema({
    headline: String,
    details: String,
    creator: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Fact", factSchema);