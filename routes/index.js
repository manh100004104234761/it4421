const express = require('express');
const router = express.Router();
router.use('/users', require('./controllers/user'));
module.exports = router;