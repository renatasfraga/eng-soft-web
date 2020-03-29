const BaseError = require("./error-base");

class ConflictDataError extends BaseError {
  constructor(message) {
    super("CONFLICT_DATA", message);
  }
}

class NotAuthorizedError extends BaseError {
  constructor(message) {
    super("NOT_AUTHORIZED", message);
  }
}

class NotFoundError extends BaseError {
  constructor(message) {
    super("NOT_FOUND", message);
  }
}

class RequestError extends BaseError {
  constructor(message) {
    super("REQUEST_FAILED", message);
  }
}

module.exports = {
  NotFoundError,
  NotAuthorizedError,
  ConflictDataError,
  RequestError
};
