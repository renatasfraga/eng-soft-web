const { knex } = require("../../database/config/config-db");

class ScopeModel {
  static get table() {
    return knex("scope");
  }

  static getById(id) {
    return this.table.where("id", id).first();
  }
}

module.exports = ScopeModel;
