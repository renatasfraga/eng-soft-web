const ClientModel = require("../repositories/client-model");
const ClientHasScopeModel = require("../repositories/client-has-scope-model");
const ScopeModel = require("../repositories/scope-model");
const RoleModel = require("../repositories/role-model");
const jwt = require("jwt-simple");
const NotFound = require("../helpers/errors");

class ClientService {
  static async getByUsernameAndPassword(username, password) {
    const client = await ClientModel.getUsernameAndPassword(username, password);

    if (!client) {
      throw new NotFound("Client not exists");
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

    return {
      accessToken: this.transformJWT(client),
      expiresIn: client.expirationTime
    };
  }

  static transformJWT(client) {
    const secret = Buffer.from(
      "TWFpb3IgcXVlIGEgdHJpc3RlemEgZGUgbsOjbyBoYXZlciB2ZW5jaWRv"
    );
    return jwt.encode(client, secret);
  }
}

module.exports = ClientService;
