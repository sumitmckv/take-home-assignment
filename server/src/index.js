require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const auth = require("./routes/auth");
const instances = require("./routes/instances");

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

app.use(bodyParser.json({ limit: "10mb" }));

auth(app);

instances(app);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server up and running at localhost:8080");
});
