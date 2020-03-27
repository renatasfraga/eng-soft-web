const express = require("express");
const cors = require("cors");
const routes = require("../src/routes/client-router");
const env = require("./env");
const app = express();

app.set("base", "/oauth2-server");

app.use(cors());
app.use("/oauth2-server", routes);

app.all("*", (req, res) => {
  res.status(404).send({ error: "NOT FOUND", code: "404" });
});

app.listen(env.PORT, () => {
  console.log(`Start application on ${env.PORT}`);
});

module.exports = app;
