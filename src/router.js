const router = require('express').Router();

const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const castController = require('./controllers/castController');
const userController = require('./controllers/userController');

const { isAuth} = require('./middlewares/authMiddleware'); 

router.use(homeController);
router.use('/movies',  movieController);
router.use('/casts', isAuth, castController);
router.use('/users', userController);
router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;