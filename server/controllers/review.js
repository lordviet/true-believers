const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Review.find()
            .then((reviews) => res.send(reviews))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Review.create({ description, author: _id })
            .then((review) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: review } }),
                    models.Review.findOne({ _id: review._id })
                ]);
            })
            .then(([modifiedObj, reviewObj]) => {
                res.send(reviewObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Review.updateOne({ _id: id }, { description })
            .then((updatedReview) => res.send(updatedReview))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Review.deleteOne({ _id: id })
            .then((deletedReview) => res.send(deletedReview))
            .catch(next)
    }
};