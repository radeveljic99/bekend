const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

app.use(cors());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to api." });
});

require("./app/routes/category.routes.js")(app);
require("./app/routes/product.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/cart.routes.js")(app);

// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
