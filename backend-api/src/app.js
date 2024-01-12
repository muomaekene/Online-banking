const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");
const db = require("./db");

const { PORT } = require("./config/index");

const app = express();

app.use(bodyParser.json());
app.use("/v1", routes);

app.get("/v1", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our API homepage!",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

const port = 3000 || PORT;

app.listen(port, () => {
  console.log(`################################################
      🚀 Server listening on port: ${port} 🚀
      ################################################`);
});
