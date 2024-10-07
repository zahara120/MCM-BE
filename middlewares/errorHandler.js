const errorHandler = (error, req, res, next) => {
  let status;
  let message;
  let errors = null;

  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = "Validation Error";
      errors = error.errors.map((el) => el.message);
      break;
    default:
      status = error.status || 500;
      message = error.message || "Internal Server Error";
      break;
  }

  console.error(error);

  res.status(status).json({
    success: false,
    message,
    errors: Array.isArray(errors) ? errors : undefined,
  });
};

module.exports = errorHandler;
