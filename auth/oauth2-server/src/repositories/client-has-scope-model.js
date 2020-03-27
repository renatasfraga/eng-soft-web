const knex = require("../../knexfile");

class ClientHasScope {
  static async getByClientId(clientId) {
    return await knex.table("client_has_scope").where("clientId", clientId);
  }
}

module.exports = ClientHasScope;
