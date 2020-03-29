const Joi = require("@hapi/joi");

class ClientSchema {
  static generateToken(data) {
    const schema = Joi.object({
      data: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
      })
    });

    return schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: true
    });
  }
}

module.exports = ClientSchema;
