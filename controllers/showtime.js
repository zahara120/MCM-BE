const { Showtime, Film, Studio, Ticket } = require("../models");
class ShowtimeController {
  // List all studios
  static async list(req, res, next) {
    try {
      const data = await Showtime.findAll({
        include: [Film, Ticket],
      });
      if (data.length === 0) {
        return res.status(404).json({ message: "No studios found" });
      }
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Save a new studio
  static async save(req, res, next) {
    try {
      const { filmId, studioId, showTime } = req.body;
      const data = await Showtime.create({
        filmId,
        studioId,
        showTime,
      });
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Get details of a specific studio by ID
  static async detail(req, res, next) {
    try {
      const { showtimeId } = req.params;
      const data = await Showtime.findOne({
        where: { id: showtimeId },
        include: [Film, Studio],
      });
      if (!data) {
        return res
          .status(404)
          .json({ message: `Showtime with id ${showtimeId} not found` });
      }
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Update a studio by ID
  static async update(req, res, next) {
    const { showtimeId } = req.params;
    try {
      const { filmId, studioId, showTime } = req.body;

      // cek data film
      const showTimeData = await Showtime.findOne({
        where: { id: showtimeId },
      });

      if (!showTimeData) {
        return res
          .status(404)
          .json({ message: `showtime with id ${showtimeId} not found` });
      }

      await Showtime.update(
        {
          filmId,
          studioId,
          showTime,
        },
        {
          where: { id: showtimeId },
        }
      );

      res
        .status(200)
        .json({ message: `Showtime with id ${showtimeId} updated` });
    } catch (error) {
      next(error);
    }
  }

  // Delete a studio by ID
  static async delete(req, res, next) {
    const { showtimeId } = req.params;
    try {
      // cek data film
      const showTimeData = await Showtime.findOne({
        where: { id: showtimeId },
      });

      if (!showTimeData) {
        return res
          .status(404)
          .json({ message: `showtime with id ${showtimeId} not found` });
      }

      await Showtime.destroy({
        where: { id: showtimeId },
      });

      res
        .status(200)
        .json({ message: `Showtime with id ${showtimeId} deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ShowtimeController;
