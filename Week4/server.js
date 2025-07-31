var express = require("express")
var app = express()

// Import mongoose library (to communicate with MongoDB database)
const mongoose = require('mongoose');

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Check for successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

// Create a mongoose schema (structure similar to html file Week 3 (cards))
const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);
