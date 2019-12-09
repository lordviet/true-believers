const router = require('express').Router();
const { auth } = require('../utils');

router.get('/checkToken', auth(), function (req, res) {
    res.sendStatus(200);
})

module.exports = router;