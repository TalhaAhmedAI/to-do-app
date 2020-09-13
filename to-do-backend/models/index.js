const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/to-do-app", {
  // connecting to the mongodb database name: "to-do-app" locally
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true); // enabling dubugging information to be printed to the console
mongoose.Promise = Promise; // setting mongoose's Promise to use Node's Promise

module.exports.Todo = require("./todo"); // requiring the todo model that we just created in mongodb
// We didn't write require("./models/") because in Node Js whenever we require a directory,
// it will search for the file named index first.
