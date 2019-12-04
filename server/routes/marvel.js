const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.marvel.get);

router.post('/', controllers.marvel.post);

module.exports = marvel;