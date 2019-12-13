const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const comicId = req.params.id;
        const { _id } = req.user;
        models.Comicbook.find({ comicId, user: _id })
            .then((comic) => res.send(comic))
            .catch(next);
    },

    getAll: (req, res, next) => {
        const { _id } = req.user;
        models.Comicbook.find({ user: _id })
            .then((comics) => res.send(comics))
            .catch(next);
    },

    post: (req, res, next) => {
        const { name, comicId } = req.body;
        const { _id } = req.user;
        models.Comicbook.create({ name, comicId, user: _id })
            .then((comic) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { comicCollection: comic } }),
                    models.Comicbook.findOne({ _id: comic._id })
                ]);
            })
            .then(([modifiedObj, comicObj]) => {
                res.send(comicObj);
            })
            .catch(next);
    },

    delete: (req, res, next) => {
        const comicId = req.params.id;
        const userId = req.user;
        models.Comicbook.findOneAndDelete({ comicId, user: userId })
            .then((deletedComicbook) => {
                models.User
                    .updateOne({ _id: userId }, { $pull: { comicCollection: deletedComicbook._id } })
                    .then(() => console.log("Collection was updated!"))
                    .catch(err => console.error('Error! ' + err));
                res.send(deletedComicbook)
            })
            .catch(next)

    }
};