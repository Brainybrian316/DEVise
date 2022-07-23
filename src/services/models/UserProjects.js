const mongoose = require("mongoose");
const { Schema, } = mongoose;

const userProjectsSchema = new Schema({
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		summary: {
			type: String,
			required: true,
			trim: true,
		},
		contributors: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		mainImage: {
			type: String,
		},
		images: [
			 {
				type: String,
			}
		],
		videos: [
			{
			type: String,
			}
		],
	  tags: [
			{
				type: String,
			}
		],
		// reviews: [reviewsSchema],
		rating: {
			type: Number,
			default: 0,
		},
		numReviews: {
			type: Number,
			default: 0,
		},
		price: {
			type: Number,
			default: 0,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	});

// const reviewsSchema = new Schema({
// 		user: {
// 			type: Schema.Types.ObjectId,
// 			required: true,
// 			ref: 'User',
// 		},
// 		// name or title? what is name for?
// 		title: { type: String, },
// 		rating: { type: Number, default: 0 },
// 		review: { type: String },
// 	},
// 	{ timestamps: true }
// );
    
const UserProjects = mongoose.model('UserProjects', userProjectsSchema);

module.exports = UserProjects;
