const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    req.date = `${hours}:${minutes}`;
    next();
  };
  module.exports = horaMiddleware;