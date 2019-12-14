const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/user', auth(), controllers.review.getAllUserReviews);

router.get('/user/:id', auth(), controllers.review.getUserReview);

router.get('/:id', auth(), controllers.review.getAllReviews);

router.post('/', auth(), controllers.review.post);

router.put('/:id', auth(), controllers.review.put);

router.delete('/:id', auth(), controllers.review.delete);

module.exports = router;