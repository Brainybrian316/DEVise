import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,

        },
        {
            timestamps: true,
        }
    );
    
const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;
