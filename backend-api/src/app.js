const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");
const db = require("./db");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use("/api", routes);

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`################################################
      🚀 Server listening on port: ${port} 🚀
      ################################################`);
});
