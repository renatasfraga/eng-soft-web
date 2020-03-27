const ClientModel = require("../repositories/client-model");
const ClientHasScopeModel = require("../repositories/client-has-scope-model");
const ScopeModel = require("../repositories/scope-model");
const RoleModel = require("../repositories/role-model");
const jwt = require("jwt-simple");

class ClientService {
  static async getByUsernameAndPassword(username, password) {
    const client = await ClientModel.getByUsernameAndPassword(
      username,
      password
    );
    if (client) {
      const clientHasScopes = await ClientHasScopeModel.getByClientId(
        client.id
      );

      let scopes = [];

      clientHasScopes.forEach(async cliHasScope => {
        return scopes.push(await ScopeModel.getById(cliHasScope.scopeId));
      });

      scopes.forEach(async scope => {
        scope.roles = await RoleModel.getByScopeId(scope.id);
      });

      client.scopes = scopes;

      return {
        accessToken: this.transformJWT(client),
        expiresIn: client.expirationTime
      };
    }
    throw Error("Client not exists");
  }

  static transformJWT(client) {
    const secret = Buffer.from(
      "TWFpb3IgcXVlIGEgdHJpc3RlemEgZGUgbsOjbyBoYXZlciB2ZW5jaWRv"
    );
    return jwt.encode(client, secret);
  }
}

module.exports = ClientService;
