const express = require('express');

const eventController = require("../controllers/eventController");

const router = express.Router();

router.route("/").get(eventController.getAllEvents).post(eventController.createNewEvent);
//.get(eventController.findOrderByDate)

router.route('/:id').get(eventController.getEventById);

module.exports = router;