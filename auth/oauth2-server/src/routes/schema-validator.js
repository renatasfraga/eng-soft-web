module.exports = (Schema, methodName) => {
  return (req, res, next) => {
    const data = {
      body: req.body,
      query: req.query,
      params: req.params
    };

    const validation = Schema[methodName](data);

    if (!validation.error) {
      req.joi = {
        body: validation.value.body || {},
        query: validation.value.query || {},
        params: validation.value.params || {}
      };
      next();
    } else {
      res.status(400).send({
        success: false,
        messages: validation.error.details
      });
    }
  };
};
