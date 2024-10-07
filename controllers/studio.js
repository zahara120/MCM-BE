const { Studio, Film } = require("../models");
const validator = require("validator");
class StudioController {
  // List all studios
  static async list(req, res, next) {
    try {
      const data = await Studio.findAll({
        include: Film,
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
      let { name } = req.body;

      // validasi
      if (validator.isEmpty(name)) {
        return res.status(400).json({ message: "name are required" });
      }

      name = validator.escape(name);

      const data = await Studio.create({
        name,
      });
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Get details of a specific studio by ID
  static async detail(req, res, next) {
    try {
      const { studioId } = req.params;
      const data = await Studio.findOne({
        where: {
          id: studioId,
        },
        include: Film,
      });
      if (!data) {
        return res
          .status(404)
          .json({ message: `Studio with id ${studioId} not found` });
      }
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Update a studio by ID
  static async update(req, res, next) {
    const { studioId } = req.params;
    try {
      let { name } = req.body;

      // cek data film
      const studioData = await Studio.findOne({
        where: { id: studioId },
      });

      if (!studioData) {
        return res
          .status(404)
          .json({ message: `studio with id ${studioId} not found` });
      }

      // validasi
      if (validator.isEmpty(name)) {
        return res.status(400).json({ message: "name are required" });
      }

      name = validator.escape(name);

      await Studio.update(
        {
          name,
        },
        {
          where: { id: studioId },
        }
      );

      res.status(200).json({ message: `Studio with id ${studioId} updated` });
    } catch (error) {
      next(error);
    }
  }

  // Delete a studio by ID
  static async delete(req, res, next) {
    const { studioId } = req.params;
    try {
      // cek data film
      const studioData = await Studio.findOne({
        where: { id: studioId },
      });

      if (!studioData) {
        return res
          .status(404)
          .json({ message: `studio with id ${studioId} not found` });
      }

      await Studio.destroy({
        where: { id: studioId },
      });

      res.status(200).json({ message: `Studio with id ${studioId} deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StudioController;
