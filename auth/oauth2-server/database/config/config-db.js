const env = require("../../src/env");

let config = null;

if (typeof global.database === "object") {
  config = global.database;
} else {
  config = {
    client: "mysql",
    client: "mysql",
    debug: false,
    connection: {
      host: env.DB_HOST,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      supportBigNumbers: true,
      bigNumberStrings: true,
      multipleStatements: true,
      timezone: "UTC",
      dateStrings: true
    },
    pool: {
      min: env.DB_POOL_MIN,
      max: env.DB_POOL_MAX
    }
  };
}

// main connections
const main = require("knex")(config);

module.exports = {
  knex: main,
  raw: main.raw // alias to knex.raw
};
