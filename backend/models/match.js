const mongoose = require("mongoose");

// creation schema
const matchSchema = mongoose.Schema({
    teamOne: String,
    teamTwo:String,
    scoreOne:Number,
    scoretwo:Number,


});
// create Model Name:
const match = mongoose.model("Match",matchSchema);
// make match exportable:
module.exports= match;
