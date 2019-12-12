const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Comicbook.find()
            .then((comic) => res.send(comic))
            .catch(next);
    },

    post: (req, res, next) => {
        const { name, comicId } = req.body;
        const { _id } = req.user;
        console.log(_id);
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

    // put: (req, res, next) => {
    //     const id = req.params.id;
    //     const { description } = req.body;
    //     models.Comicbook.updateOne({ _id: id }, { description })
    //         .then((updatedComicbook) => res.send(updatedComicbook))
    //         .catch(next)
    // },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Comicbook.deleteOne({ _id: id })
            .then((deletedComicbook) => res.send(deletedComicbook))
            .catch(next)
    }
};