'use strict';

const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat-log');

router.post('/create', chatController.create)
router.get('/get/:room_id', chatController.get)

module.exports = router;