const mongoose = require("mongoose");

sourceSchema = mongoose.Schema({
    name_long: String,
    name_short: String,
    logo: String,
    reputability: String,
    url: String,
    wikipedia_url: String,
    wikipedia_summary: String,

    number_of_facts: {
        type: Number,
        default: 0
    },
    total_votes: {
        type: Number,
        default: 0
    },

    facts: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Fact"
            },
            name: String
        }
    ]
});

module.exports = mongoose.model("Source", sourceSchema);