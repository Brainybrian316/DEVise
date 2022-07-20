const mongoose = require("mongoose");
const { Schema, } = mongoose;

const userProjectsSchema = new Schema({
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		summary: {
			type: String,
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
	},
	{
		timestamps: true,
	}
);

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
