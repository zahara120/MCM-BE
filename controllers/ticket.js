const { Ticket, Showtime } = require("../models");
const validator = require("validator");
class TicketController {
  // List all tickets
  static async list(req, res, next) {
    try {
      const data = await Ticket.findAll({
        include: [Showtime],
      });
      if (data.length === 0) {
        return res.status(404).json({ message: "No tickets found" });
      }
      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Save a new ticket
  static async save(req, res, next) {
    try {
      let { showtimeId, seatNumber, price } = req.body;

      // validasi
      if (validator.isEmpty(seatNumber)) {
        return res.status(400).json({ message: "Seat Number are required" });
      }

      seatNumber = validator.escape(seatNumber);

      const data = await Ticket.create({
        showtimeId,
        seatNumber,
        price,
      });
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Get details of a specific ticket by ID
  static async detail(req, res, next) {
    try {
      const { ticketId } = req.params;
      const data = await Ticket.findOne({
        where: { id: ticketId },
      });
      if (!data) {
        return res
          .status(404)
          .json({ message: `Ticket with id ${ticketId} not found` });
      }
      res.status(200).json({ data });
      return data;
    } catch (error) {
      next(error);
    }
  }

  // Update a ticket by ID
  static async update(req, res, next) {
    const { ticketId } = req.params;
    try {
      let { showtimeId, seatNumber, price } = req.body;

      // cek data tiket
      const ticketData = await Ticket.findOne({ where: { id: ticketId } });

      if (!ticketData) {
        return res
          .status(404)
          .json({ message: `Ticket with id ${ticketId} not found` });
      }

      // validasi
      if (validator.isEmpty(seatNumber)) {
        return res.status(400).json({ message: "Seat Number are required" });
      }

      seatNumber = validator.escape(seatNumber);

      await Ticket.update(
        {
          showtimeId,
          seatNumber,
          price,
        },
        {
          where: { id: ticketId },
        }
      );

      res.status(200).json({ message: `Ticket with id ${ticketId} updated` });
    } catch (error) {
      next(error);
    }
  }

  // Delete a ticket by ID
  static async delete(req, res, next) {
    const { ticketId } = req.params;
    try {
      // cek data tiket
      const ticketData = await Ticket.findOne({ where: { id: ticketId } });

      if (!ticketData) {
        return res
          .status(404)
          .json({ message: `Ticket with id ${ticketId} not found` });
      }

      await Ticket.destroy({
        where: { id: ticketId },
      });

      res.status(200).json({ message: `Ticket with id ${ticketId} deleted` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TicketController;
