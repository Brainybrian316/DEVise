import mongoose from 'mongoose';



const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;
