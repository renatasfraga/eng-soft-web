const { knex } = require("../../database/config/config-db");

class ClientHasScope {
  static get table() {
    return knex("clientHasScope");
  }

  static getByClientId(clientId) {
    return this.table.where("clientId", clientId);
  }
}

module.exports = ClientHasScope;
