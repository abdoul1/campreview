var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose")
    Campground   = require("./models/campground")
    SeedDB       = require("./seeds")
    Comment      =require("./models/comment")



mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient:true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
//Run seed db to empty db
SeedDB();

app.get("/", function (req,res) {
    res.render("landing");
});

//INDEX Show all campgrounds
app.get("/campgrounds", function (req,res) {
    //get all campgrounds
    Campground.find({},function (err,allCampgrounds) {
        if (err) {
            console.log("None found")
        }else{
            res.render("campgrounds/index",{campgrounds:allCampgrounds});
        }
    })
    
});

//CREATE  Add new campground to db
app.post("/campgrounds", function (req,res) {
    // res.send("You hit the post route")
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    //Create a new campground and save to db
    Campground.create(newCampground, function (err,campground) {
        if (err) {
            console.log("Campground wasn't saved!")
        }else{
            //redirect to campground
            res.redirect("/campgrounds");
        }
    })
    
});

//NEW for to add new campground
app.get("/campground/new",function (req,res) {
    res.render("campgrounds/new")
});

//SHOW displays a single campground
app.get("/campground/:id",function (req,res) {
    //Find the campground with the provided id
    Campground.findById(req.params.id).populate("comments").exec(function (err,foundCampground) {
        if (err) {
            console.log("Not found")
        } else{
            res.render("campgrounds/show",{campground:foundCampground})
        }
    })
});

// ==============+
// = Commentss
// ==============
//NEW for to add new comment
app.get("/campground/:id/comment/new",function (req,res) {
    //find camground by id
    Campground.findById(req.params.id, function (err,foundC) {
        if (err) {
            console.log(err)
        }else{
            res.render("./comments/new", {campground:foundC})
        }
    });
     
});
 
//posting comments  
app.post("/campgrounds/:id/comment", function (req,res) {
    //lookup campground usin ID
    Campground.findById(req.params.id, function (err,campground) {
        if(err){
            console.log(err)
        }else {
            Comment.create(req.body.comment,function (err,comment) {
                if(err){
                    console.log(err)
                }else{
                    campground.comments.push(comment);
                    campground.save()
                    res.redirect("/campground/" + campground._id);
                }
            })
        }
    })

})


app.listen(3000, function () {
    console.log("Camp App has started!")
});

