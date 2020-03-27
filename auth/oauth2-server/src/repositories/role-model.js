const knex = require("../../knexfile");

class RoleModel {
  static async getByScopeId(scopeId) {
    return await knex.table("role").where("scopeId", scopeId);
  }
}

module.exports = RoleModel;
