const Movie = require('../models/Movie');

exports.create = (movieData) => Movie.create(movieData);

// TODO: Filter result in MongoDB;
exports.getAll = () => Movie.find();

exports.search = (title, genre, year) => {
    let query = {};

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
        query.genre = genre.toLowerCase();
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.attach = async (movieId, castId) => Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });