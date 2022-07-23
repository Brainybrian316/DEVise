const mongoose = require("mongoose");
const { Schema,  } = mongoose;

const deviseProjectsSchema = new Schema({
  //title of the project.
  title: {
    type: String,
    required: true,
    trim: true,
  },
  //description is the detailed description of the project, displayed on the project page.
  description: {
    type: String,
    required: true,
    trim: true,
  },
  //summary is the SHORT description of the project - this should be displayed on the rendered card.
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  //for now the authors are DEVise. Eventually it will include all contributors to a template similar to an nom package.
  authors: [
    {
      type: String, 
    }
  ],
  //main image will be required
  mainImage: {
    type: String,
  },
  //images applies to subsidiary images - these are optional
  images: [
    {
      type: String,
    }
  ],
  //videos will not be required
  videos:[
    {
      type: String,
    }
  ],
  //tags are a potential future feature. For now, they are just a string array
  tags: [
    {
      type: String,
    }
  ],
},
{
 timestamps: true,
});

const DevProjects = mongoose.model('DevProjects', deviseProjectsSchema);

module.exports = DevProjects;
