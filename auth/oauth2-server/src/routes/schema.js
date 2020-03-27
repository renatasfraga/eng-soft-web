const { Joi } = require("@hapi/joi");

class Schema {
  static validate(data, schema) {
    return Joi.validate(data, schema, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: true
    });
  }
}

module.exports = Schema;
