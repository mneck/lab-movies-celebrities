// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities/create", (req, res, next) => {
  // Create celebrity
  res.render("celebrities/new-celebrity").catch((err) => next(err));
});

router.get("/celebrities", (req, res, next) => {
  //lists all celebrities
  Celebrity.find()
    .then((celebrityFromDB) => {
      console.log(celebrityFromDB);
      res.render("celebrities/celebrities", {
        celebrities: celebrityFromDB,
      });
    })
    .catch((err) => next(err));
});

router.post("/celebrities", (req, res, next) => {
  console.log(req.body);
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((createdCelebrity) => {
      console.log(createdCelebrity);
      res.redirect("/celebrities");
    })
    .catch((err) => res.redirect("/celebrities/create"));
});

module.exports = router;
