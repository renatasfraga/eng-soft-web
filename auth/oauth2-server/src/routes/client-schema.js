const Schema = require("./schema");
const Joi = require("@hapi/joi");

class ClientSchema extends Schema {
  static generateToken(data) {
    const schema = {
      data: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
      }).required()
    };
    return this.validate(data, schema);
  }
}

module.exports = ClientSchema;
