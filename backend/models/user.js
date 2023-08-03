const mongoose = require("mongoose");

// creation schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    email:String,
    pwd:String,
    avatar:String,
    tel:String,
    role:String,



});
// create Model Name:
const user = mongoose.model("User",userSchema);
// make match exportable:
module.exports= user;
