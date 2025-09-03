// Import service
const projectService = require('../services/project.service')

// Call service to get data
exports.getAllProjects = async (req, res) => {

    // getAllProjects() returns a promise, so we need to use async-await to get the output
    const projects = await projectService.getAllProjects();
    console.log(projects)

    // Send response as json
    res.json({
        status: 200,
        data: projects,
        message: 'Kitten projects retrieved using service'
    })
}