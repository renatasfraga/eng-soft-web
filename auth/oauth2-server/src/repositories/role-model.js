const { knex } = require("../../database/config/config-db");

class RoleModel {
  static get table() {
    return knex("role");
  }

  static getByScopeId(scopeId) {
    return this.table.where("scopeId", scopeId);
  }
}

module.exports = RoleModel;
