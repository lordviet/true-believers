const models = require('../models');

module.exports = {
    getAllReviews: (req, res, next) => {
        const comicId = req.params.id;
        models.Review.find({ comicId })
            .then(review => res.send(review))
            .catch(next);
    },
    getUserReview: (req, res, next) => {
        const { _id } = req.user;
        const comicId = req.params.id;
        models.Review.find({ user: _id, comicId })
            .populate('user')
            .then(review => res.send(review))
            .catch(next);
    },
    getAllUserReviews: (req, res, next) => {
        const { _id } = req.user;
        models.Review.findAll({ user: _id })
            .then(reviews => res.send(reviews))
            .catch(next);
    },
    post: (req, res, next) => {
        const { comicId, review } = req.body;
        const { _id } = req.user;
        models.Review.create({ review, comicId, user: _id })
            .then(() => {
                console.log('Review has been added!')
            }).catch(next);
    },
    put: (req, res, next) => {
        const comicId = req.params.id;
        const { review } = req.body;
        const userId = req.user._id;
        models.Review.updateOne({ user: userId, comicId }, { review: review })
            .then(() => {
                console.log('Review has been updated!');
            }).catch(next);
    },
    delete: (req, res, next) => {
        const comicId = req.params.id;
        const userId = req.user._id;
        models.Review.findOneAndDelete({ comicId, user: userId })
            .then((deleted) => {
                console.log('Review has been deleted!');
                res.send(deleted);
            }).catch(next);
    }
}
