// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");

// all your routes here

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

router.get("/movies/create", (req, res, next) => {
  // Create celebrity
  Celebrity.find()
    .then((celebritiesFromDB) => {
      res.render("movies/new-movie", { celebrities: celebritiesFromDB });
    })
    .catch((err) => next(err));
});

router.post("/movies", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({ title, genre, plot, cast })
    .then((createdMovie) => {
      console.log(createdMovie);
      res.redirect("/movies");
    })
    .catch((err) => err.redirect("/movies/create"));
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      console.log(moviesFromDB);
      res.render("movies/movies", { movie: moviesFromDB });
    })
    .catch((err) => next(err));
});

module.exports = router;
