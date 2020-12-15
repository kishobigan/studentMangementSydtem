const express = require('express');

const router = express.Router();

const controller = require('../controller/student.controller');

router.post('/register', controller.createStudent); 
router.get('/details', controller.getStudent);


module.exports = router;