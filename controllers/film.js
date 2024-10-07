const { Film, Showtime, Studio } = require("../models");
const validator = require("validator");
class FilmController {
  // List all films
  static async list(req, res, next) {
    try {
      const data = await Film.findAll({
        include: [Showtime],
      });
      if (data.length === 0) {
        return res.status(404).json({ message: "No films found" });
      }
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Save a new film
  static async save(req, res, next) {
    try {
      let { title, description, studioId } = req.body;

      // validasi
      if (validator.isEmpty(title) || validator.isEmpty(description)) {
        return res
          .status(400)
          .json({ message: "Title and description are required" });
      }

      title = validator.escape(title);
      description = validator.escape(description);

      const data = await Film.create({
        title,
        description,
        releaseDate: new Date(),
        studioId: +studioId,
      });

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Get details of a specific film by ID
  static async detail(req, res, next) {
    try {
      const { filmId } = req.params;
      const data = await Film.findOne({
        where: { id: filmId },
      });
      if (!data) {
        return res
          .status(404)
          .json({ message: `Film with id ${filmId} not found` });
      }
      res.status(200).json({ data });
      return data;
    } catch (error) {
      next(error);
    }
  }

  // Update a film by ID
  static async update(req, res, next) {
    const { filmId } = req.params;
    try {
      let { title, description, studioId } = req.body;

      // cek data film
      const filmData = await Film.findOne({ where: { id: filmId } });

      if (!filmData) {
        return res
          .status(404)
          .json({ message: `Film with id ${filmId} not found` });
      }

      // validasi
      if (validator.isEmpty(title) || validator.isEmpty(description)) {
        return res
          .status(400)
          .json({ message: "Title and description are required" });
      }

      title = validator.escape(title);
      description = validator.escape(description);

      await Film.update(
        {
          title,
          description,
          releaseDate: new Date(),
          studioId,
        },
        {
          where: { id: filmId },
        }
      );

      res.status(200).json({ message: `Film with id ${filmId} updated` });
    } catch (error) {
      next(error);
    }
  }

  // Delete a film by ID
  static async delete(req, res, next) {
    const { filmId } = req.params;
    try {
      // cek data film
      const filmData = await Film.findOne({ where: { id: filmId } });

      if (!filmData) {
        return res
          .status(404)
          .json({ message: `Film with id ${filmId} not found` });
      }

      await Film.destroy({
        where: { id: filmId },
      });

      res.status(200).json({ message: `Film with id ${filmId} deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FilmController;
