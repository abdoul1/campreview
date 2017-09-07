# Style  the compgrounds page
* Add a better header/title
* Make campground display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Add Mangoose
* Install and configure mongoose
* Setup camground model
* Use campground model inside of our routes!

# Show page
* Review the restful routes we've seen so far
* Add Description to our campground model
* Show db.collection.drop()
* Add a show/route template


RESTFUL ROUTES

Name        path            Method      Description
===================================================
INDEX       /dogs           GET         Displays a list of all dogs
NEW         /dog/new        GET         Displays a form to make a new dog
CREATE      /dogs           POST        Posts new dog  to DB
SHOW        /dogs/:id        GET         Shows a single dog

# REST : Representational State Transfer
# RESTful Routing

## Intro
* Define REST and explain Why it matters
* List all 7 RESTFul routes
* Show example of RESTFul routing in practice

REST: A mapping between HTTP routes and CRUD 

Blog example with all 7 RESTful routes

========================================================================
Name     |      Path      |     HTTP Verb     |      Description
========================================================================
Index           /dogs           GET                 list all dogs
New             /dog/new        GET                 show new dog form
Create          /dogs           POST                Create a new dog then redirect  
Show            /dogs/:id       GET                 Show info about a secific dog
Edit            /dogs/:id/edit  GET                 Show edit form for 1 dog
Update          /dogs/:id       PUT                 Update a particular dog/redirect
Destroy          /dogs/:id      DELETE              Delete a dog/redirect   

For nested routes we need the following

NEW             /dogs/:id/comments/new    GET
Create          /dogs/:id/comments        POST

#Refactor mongoose code 
* Create a models directory
* user module.export
* require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file everytime the server starts

# Add the comment model
* Make our error go away
* Display comments on campground show page

# Comment New/Create
* Discuss Nested Routes
* Add the Comment New and Create route
* Add the new comment form# campreview

# Style Show Page
* Add side bar to show page
* Display Comment nicely
