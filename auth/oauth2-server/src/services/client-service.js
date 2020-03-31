const ClientModel = require("../repositories/client-model");
const ClientHasScopeModel = require("../repositories/client-has-scope-model");
const ScopeModel = require("../repositories/scope-model");
const RoleModel = require("../repositories/role-model");
const jwt = require("jwt-simple");
const { NotFoundError } = require("../helpers/errors");
const Logger = require("../helpers/logger");

class ClientService {
  static async getByUsernameAndPassword(username, password) {
    const client = await ClientModel.getUsernameAndPassword(username, password);

    if (!client) {
      return;
    }

    const clientHasScopes = await ClientHasScopeModel.getByClientId(client.id);

    let scopes = [];

    for (const clientScope of clientHasScopes) {
      scopes.push(await ScopeModel.getById(clientScope.scopeId));
    }

    for (const scope of scopes) {
      scope.roles = await RoleModel.getByScopeId(scope.id);
    }

    client.scopes = scopes;
    client.exp = this.expirationTimeFormatter();

    return {
      accessToken: this.transformJWT(client)
    };
  }

  static transformJWT(client) {
    const secret = Buffer.from(
      "TWFpb3IgcXVlIGEgdHJpc3RlemEgZGUgbsOjbyBoYXZlciB2ZW5jaWRv"
    );
    return jwt.encode(client, secret);
  }

  static expirationTimeFormatter() {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 20);
    return date / 1000;
  }
}

module.exports = ClientService;
