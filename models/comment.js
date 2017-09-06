var mongoose = require("mongoose")

//2 setup schema
var commentSchema = new mongoose.Schema({
   text:String,
   author:String
});

//Store model in object. This object has all methods needed to interact with Mongodb


module.exports = mongoose.model("Comment", commentSchema);