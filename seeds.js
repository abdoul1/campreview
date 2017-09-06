var mongoose = require("mongoose");
var Campground = require("./models/campground");
// var Comment = require("./models/comment");

var data = [
    {
        name:"Clouds rest",
        image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
        description:"Pretty cool campground for stoned people"
    },
    {
        name:"Mount Mounty",
        image:"https://farm3.staticflickr.com/2562/3753652224_7ab88a28df.jpg",
        description:"For the ones willing to go on hikes"
    },
    {
        name:"Hills Rest",
        image:"https://farm9.staticflickr.com/8306/7968778860_47d2a2f513.jpg",
        description:"Come on for a peaceful weekend"
    }
]

function seedDB() {
    //remove all campgroundsfrom db
    Campground.remove({},function (err) {
        if(err){
            console.log(err)
        }
        console.log("removed campgrounds!");
        //Add few campgrounds
        data.forEach(function (item) {
            Campground.create(item, function (err, campground) {
                if (err) {
                    console.log(err)
                }else{
                    console.log("added 1 campground")
                    //add comments
                    Comment.create({
                        text:"This camp is great nut I wish it had internet",
                        author: "Your momma"
                    },function (err,comment) {
                        if (err) {
                            console.log(err)
                        } else{
                            campground.comments.push(comment)
                            campground.save();
                            console.log("created new comment")
                        }
                        
                    });
                }
            });
        });
    });  
    //add a few comments
}

module.exports = seedDB;