const Movie = require('../models/Movie');

exports.create = (movieData) => Movie.create(movieData);