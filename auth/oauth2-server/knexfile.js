const env = require("./src/env");

module.exports = {
  client: "mysql",
  connection: {
    database: env.DB_DATABASE,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    host: env.DB_HOST
  },
  migrations: {
    directory: __dirname + "/database/migrations"
  }
};
