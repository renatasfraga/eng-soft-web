class BaseError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message
    };
  }
}

module.exports = BaseError;
