// Import Project model
const Project = require('../models/project.model');

// Service function to get all projects from DB (using mongoose query)
const getAllProjects = () => {
    return Project.find({}); 
}

module.exports = {getAllProjects}
