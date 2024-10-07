const express = require("express");
const router = express.Router();
const films = require("./films");
const studios = require("./studios");
const showtimes = require("./showtime");
const tickets = require("./tickets");
const errorHandler = require("../middlewares/errorHandler");

router.use("/films", films);
router.use("/studios", studios);
router.use("/showtimes", showtimes);
router.use("/tickets", tickets);

router.use(errorHandler);

module.exports = router;
