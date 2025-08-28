// Import mongoose library (to communicate with MongoDB database)
const mongoose = require('mongoose');

// Create a mongoose schema (structure similar to html file Week 3 (cards))
const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

// Create a Project model based on above schema
const Project = mongoose.model('Project', ProjectSchema);

// Export Project model
module.exports = Project;