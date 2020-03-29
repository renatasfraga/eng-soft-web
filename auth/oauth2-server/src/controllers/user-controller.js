const ClientService = require("../services/client-service");
const Logger = require("../../src/helpers/logger");

class ClientController {
  static async post(req, res) {
    try {
      const { username, password } = req.body;

      const token = await ClientService.getByUsernameAndPassword(
        username,
        password
      );

      res.send(token);
    } catch (err) {
      Logger.throw(res, err);
    }
  }
}

module.exports = ClientController;
