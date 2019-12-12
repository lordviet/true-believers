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
        const comicId = req.params.id;
        const userId = req.user;
        models.Comicbook.findOneAndDelete({ comicId, user: userId })
            .then((deletedComicbook) => {
                console.log("id is " + deletedComicbook._id);
                models.User
                    .updateOne({ _id: userId }, { $pull: { comicCollection: deletedComicbook._id } })
                    .then(res => console.log(res))
                    .catch(err => console.log('errr ' + err));
                res.send(deletedComicbook)
            })
            .catch(next)

    }
};