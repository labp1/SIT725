var express = require("express")
var app = express()

// Import mongoose library (to communicate with MongoDB database)
const mongoose = require('mongoose');

// Set up middleware
app.use(express.static('public'));           // Serve static files from public folder
app.use(express.json());                     // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: http://localhost" + port)
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

// Create a Project model based on above schema
const Project = mongoose.model('Project', ProjectSchema);

// ROUTES (API endpoints)

// Serve the main HTML page
app.get('/', (req, res) => {
    res.send('index.html');
});