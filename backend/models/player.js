const mongoose = require("mongoose");

// creation schema
const playerSchema = mongoose.Schema({
name: String,
age:Number,
nbr:Number,
position:String,


});
// create Model Name:
const player = mongoose.model("Player",playerSchema);
// make match exportable:
module.exports= player;