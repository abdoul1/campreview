var mongoose = require("mongoose")

//2 setup schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
});

//Store model in object. This object has all methods needed to interact with Mongodb


module.exports = mongoose.model("Campground", campgroundSchema);