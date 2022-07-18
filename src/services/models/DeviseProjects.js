const { Schema } = require("mongoose");

const DeviseProjectsSchema = new Schema({
  // id is a string for now, if we decide to use something like uuid we can change that later.
  id: {
    type: String,
  },
  //title of the project.
  title: {
    type: String,
  },
  //description is the detailed description of the project, displayed on the project page.
  description: {
    type: Text,
  },
  //summary is the SHORT description of the project - this should be displayed on the rendered card.
  summary: {
    type: Text,
  },
  //for now the authors are DEVise. Eventually it will include all contributors to a template similar to an nom package.
  authors: [
    {
      type: String,
    },
  ],
  //main image will be required
  mainImage: {
    type: String,
  },
  //images applies to subsidiary images - these are optional
  images: [
    {
      type: String,
    },
  ],
  //videos will not be required
  videos: [
    {
      type: String,
    },
  ],
  //tags are a potential future feature. For now, they are just a string array
  tags: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // this will be how the model knows which file to associate with the project, or we can make it a download link to a separate server/drive if needed.
  templateId: {
    type: String,
  },
});

module.exports = DeviseProjectsSchema;
