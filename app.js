
const express = require("express");
const app = express();
const config = require('./config/keys')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const students = require("./routes/api/students");
const reminders = require("./routes/api/reminders");
const passport = require('passport')

const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// basic route to render info on our page
// app.get("/", (req, res) => res.send("SchoolForce is in session"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.use("/api/users", users);
app.use("/api/students", students);
app.use("/api/reminders", reminders);

// EXPERIMENTAL ADD FROM: https://coursework.vschool.io/deploying-mern-with-heroku/
// ... other imports 
// const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// app.listen(...);

// END EXPERIMENTS FROM ABOVE


//tell Express to start a socket and listen for connections on the path.
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




