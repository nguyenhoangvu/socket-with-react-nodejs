'use strict';

const express = require('express');
const router = express.Router();
const testController = require('../controllers/test');

router.post('/create', testController.create)
router.get('/get', testController.get)

module.exports = router;