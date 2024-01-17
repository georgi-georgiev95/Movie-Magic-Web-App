const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.get('/search', (req, res) => {
    res.render('movies/search');
});

module.exports = router;