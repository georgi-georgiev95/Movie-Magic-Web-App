const Movie = require('../models/Movie');

exports.create = (movieData) => Movie.create(movieData);

// TODO: Filter result in MongoDB;
exports.getAll = async (title, genre, year) => { 
    let movies = await Movie.find().lean();

    if (title) {
        movies = movies.filter(x => x.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        movies = movies.filter(x => x.genre.toLowerCase().includes(genre.toLowerCase()));
    }

    if (year) {
        movies = movies.filter(x => x.year.toLowerCase().includes(year.toLowerCase()));
    }

    return movies;
}

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.attach = async (movieId, castId) => Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });