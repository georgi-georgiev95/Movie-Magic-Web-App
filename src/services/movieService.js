const Movie = require('../models/Movie');

exports.create = (movieData) => Movie.create(movieData);

exports.getAll = async (title, genre, year) => { 
    let movies = await Movie.find().lean();

    if (title) {
        movies = movies.filter(x => x.title == title);
    }

    if (genre) {
        movies = movies.filter(x => x.genre == genre);
    }

    if (year) {
        movies = movies.filter(x => x.year == year);
    }

    return movies;
}

exports.getOne = (movieId) => Movie.findById(movieId);
