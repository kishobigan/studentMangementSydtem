const express = require('express');

const router = express.Router();

const controller = require('../controller/admin.controller');

router.post('/signup', controller.adminSignup);
router.post('/login', controller.adminLogin);

module.exports = router;