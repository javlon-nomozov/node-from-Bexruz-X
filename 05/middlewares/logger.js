const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${req.originalUrl} at ${new Date()}`
  );
  next();
};
module.exports = logger;
