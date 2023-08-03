const mongoose = require("mongoose");

// creation schema
const teamSchema = mongoose.Schema({
name: String,
owner:String,
foundation:Number,
stadium:String,


});
// create Model Name:
const team = mongoose.model("Team",teamSchema);
// make match exportable:
module.exports= team;