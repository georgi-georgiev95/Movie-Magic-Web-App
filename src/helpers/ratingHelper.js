module.exports = (movieData) => {
    const starsCount = Number(movieData.rating);
    const starsArray = new Array(starsCount).fill('&#x2605;');
    movieData.rating = starsArray.join(' ');
    return movieData;
}