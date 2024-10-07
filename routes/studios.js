const studios = require("express").Router();
const StudioController = require("../controllers/studio");

studios.get("/", StudioController.list);

studios.post("/", StudioController.save);

studios.get("/:studioId", StudioController.detail);

studios.put("/:studioId", StudioController.update);

studios.delete("/:studioId", StudioController.delete);

module.exports = studios;
