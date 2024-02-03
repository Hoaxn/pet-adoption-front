const winston = require("winston");

const { combine, timestamp, printf } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  transports: [new winston.transports.File({ filename: "logs.log" })],
});

module.exports = logger;

module.exports.logAPICall = (req, res, next) => {
  const { method, url, body, params, query, headers } = req;

  logger.info(
    `API Call - Method: ${method}, URL: ${url}, Body: ${JSON.stringify(
      body
    )}, Params: ${JSON.stringify(params)}, Query: ${JSON.stringify(
      query
    )}, Headers: ${JSON.stringify(headers)}`
  );

  next();
};
