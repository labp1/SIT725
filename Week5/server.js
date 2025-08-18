var express = require("express")
var app = express()

// Import mongoose library (to communicate with MongoDB database)
const mongoose = require('mongoose');

// Set up middleware
app.use(express.static('public'));           // Serve static files from public folder
app.use(express.json());                     // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Check for successful connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

// Import project route file
const projectRoute = require('./routes/project.route');

// Mount the route at /api/projects
app.use('/api/projects', projectRoute);

// Serve the main HTML page
app.get('/', (req, res) => {
    res.send('index.html');
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: http://localhost:" + port)
})
