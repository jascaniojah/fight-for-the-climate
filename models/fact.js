const mongoose = require("mongoose");

factSchema = mongoose.Schema({
    headline: String,
    details: String,
    contributor: String,
    vote: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    },
    source_link: String,
    source_name: String
});

module.exports = mongoose.model("Fact", factSchema);