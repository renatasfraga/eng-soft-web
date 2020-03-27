const ClientService = require("../services/client-service");

class ClientController {
  static async post(req, res) {
    try {
      const { username, password } = req;

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
