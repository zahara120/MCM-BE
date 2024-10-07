const showtimes = require("express").Router();
const ShowtimeController = require("../controllers/showtime");

showtimes.get("/", ShowtimeController.list);

showtimes.post("/", ShowtimeController.save);

showtimes.get("/:showtimeId", ShowtimeController.detail);

showtimes.put("/:showtimeId", ShowtimeController.update);

showtimes.delete("/:showtimeId", ShowtimeController.delete);

module.exports = showtimes;
