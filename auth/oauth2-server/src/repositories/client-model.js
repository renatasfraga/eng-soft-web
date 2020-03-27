const knex = require("../../knexfile");

class ClientModel {
  static async getUsernameAndPassword(username, password) {
    return await knex
      .table("client")
      .where("username", username)
      .where("password", password)
      .first();
  }
}

module.exports = ClientModel;
