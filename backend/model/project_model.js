const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  project_name: {
    type: String,
    required: true,
  },
  project_description: {
    type: String,
    required: true,
  },
});

const Project = new model("Pro", projectSchema);

module.exports = Project;
