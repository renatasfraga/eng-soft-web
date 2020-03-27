module.exports = {
  development: {
    client: "mysql",
    connection: "mysql://root:123456@localhost:3306/oauth2-server",
    migrations: {
      directory: __dirname + "/knex/migrations"
    }
  },
  production: {
    client: "mysql",
    connection: "mysql://root:123456@127.0.0.1:3306/knexdb"
  }
};
