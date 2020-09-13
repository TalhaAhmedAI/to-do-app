const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.listen(PORT, () => {
  // listening on port 3000
  console.log(`listening on port ${PORT}`);
});
