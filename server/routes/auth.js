const router = require('express').Router();
const { auth } = require('../utils');
// const withAuth = require('../utils/withAuth');

router.get('/checkToken', auth(), function (req, res) {
    res.sendStatus(200);
})

module.exports = router;