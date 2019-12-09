const router = require('../routes/');
const withAuth = require('../utils/withAuth');
// const { auth } = require('../utils/auth');

module.exports = (app) => {

    app.use('/api/user', router.user);
    // app.use('/api/')
    // app.use('/api/review', router.review);
    app.get('/auth', withAuth, function (req, res) {
        res.sendStatus(200);
    });
    // app.use('/api/auth', router.auth);
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};