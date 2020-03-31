const debug = require("debug")("app");

const express = require("express");
const cors = require("cors");
const routes = require("../src/routes/client-router");
const env = require("./env");
const app = express();
const LoggerConfig = require("./helpers/logger-config");

app.set("base", "/oauth2-server");

app.use(cors());
app.use("/oauth2-server", routes);

LoggerConfig.expressRequest(app);
LoggerConfig.expressError(app);

app.all("*", (req, res) => {
  res.status(404).send({ error: "NOT FOUND", code: "404" });
});

(async () => {
  await LoggerConfig.init();

  debug("Starting server");
  app.listen(env.PORT, () => {
    console.log(`Start application on ${env.PORT}`);
  });
})();

module.exports = app;
