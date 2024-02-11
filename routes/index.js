// -- The routes that I am using
const express = require('express');
const router = express.Router();

//routes
router.use('/warmies', require('./warmies'));
router.use('/', require('./swagger'));

module.exports = router;