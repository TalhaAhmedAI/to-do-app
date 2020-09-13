const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/to-do-app", {
  // connecting to the mongodb database name: "to-do-app" locally
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true); // enabling dubugging information to be printed to the console
mongoose.Promise = Promise; // setting mongoose's Promise to use Node's Promise
