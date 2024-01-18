const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    imageURL: { type: String, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true }
});

const Movie = mongoose.Model('Movie', movieSchema);

module.exports = Movie;