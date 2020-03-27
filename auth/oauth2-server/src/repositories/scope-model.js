const knex = require("../../knexfile");

class ScopeModel {
  static async getById(id) {
    return await knex.table("scope").where("id", id);
  }
}

module.exports = ScopeModel;
