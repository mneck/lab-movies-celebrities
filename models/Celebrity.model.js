const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: Array,
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
