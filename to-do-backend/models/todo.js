const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  // creating a schema for todo
  task: {
    // field1: task
    type: String,
    unique: true,
    required: true,
  },
  completed: {
    // field2: completed
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("Todo", todoSchema); // creating the model from the schema
module.exports = todoModel;
