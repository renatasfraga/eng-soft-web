const winston = require("winston");

class Logger {
  static error(...error) {
    winston.log("error", ...error);
  }
}

module.exports = Logger;
