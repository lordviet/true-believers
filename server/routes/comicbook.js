const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/:id', auth(), controllers.comicbook.get);
router.get('/', auth(), controllers.comicbook.getAll);
router.post('/', auth(), controllers.comicbook.post);

router.delete('/:id', auth(), controllers.comicbook.delete);

module.exports = router;