const winston = require("winston");
const {
  NotFoundError,
  ConflictDataError,
  RequestError,
  NotAuthorizedError
} = require("./errors");

class Logger {
  static emerg(...emerg) {
    winston.log("emerg", ...emerg);
  }

  static alert(...alert) {
    winston.log("alert", ...alert);
  }

  static crit(...crit) {
    winston.log("crit", ...crit);
  }

  static error(...error) {
    winston.log("error", ...error);
  }

  static warning(...warning) {
    winston.log("warning", ...warning);
  }

  static notice(...notice) {
    winston.log("notice", ...notice);
  }

  static info(...info) {
    winston.log("info", ...info);
  }

  static throw(res, err, ...args) {
    if (err instanceof NotAuthorizedError) {
      return res.status(403).send(err);
    }

    if (err instanceof RequestError) {
      this.error(err, args);
      return res.status(401).send(err);
    }

    if (err instanceof NotFoundError) {
      return res.status(404).send(err);
    }

    if (err instanceof ConflictDataError) {
      return res.status(409).send(err);
    }

    this.error(err, args);
    return res.status(500).send({
      code: "UNEXPECTED_ERROR",
      message: "Erro desconhecido"
    });
  }
}

module.exports = Logger;
