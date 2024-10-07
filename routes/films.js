const films = require("express").Router();
const FilmController = require("../controllers/film");

films.get("/", FilmController.list);

films.post("/", FilmController.save);

films.get("/:filmId", FilmController.detail);

films.put("/:filmId", FilmController.update);

films.delete("/:filmId", FilmController.delete);

module.exports = films;
