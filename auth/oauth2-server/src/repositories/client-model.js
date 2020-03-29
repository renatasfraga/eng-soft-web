const { knex } = require("../../database/config/config-db");

class ClientModel {
  static get table() {
    return knex("client");
  }

  static getUsernameAndPassword(username, password) {
    return this.table
      .where("username", username)
      .where("password", password)
      .first();
  }
}

module.exports = ClientModel;
