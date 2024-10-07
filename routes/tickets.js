const tickets = require("express").Router();
const TicketController = require("../controllers/ticket");

tickets.get("/", TicketController.list);

tickets.post("/", TicketController.save);

tickets.get("/:ticketId", TicketController.detail);

tickets.put("/:ticketId", TicketController.update);

tickets.delete("/:ticketId", TicketController.delete);

module.exports = tickets;
