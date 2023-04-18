// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities/create", (req, res, next) => {
  // Add celebrity
  res.render("celebrities/new-celebrity").catch((err) => next(err));
});

// router.post("/celebrities/create", (req, res, next) => {
//   // Add celebrity
//   Celebrity.find()
//     .then((celebrityFromDB) => {
//       console.log(celebrityFromDB);
//       res.render("celebrities/new-celebrity", {
//         name,
//         occupation,
//         catchPhrase,
//       });
//     })
//     .catch((err) => next(err));
// });

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

/*
Steps we will follow in this iteration:
1. In the routes file (routes/celebrities.routes.js) create the 
following GET route: /celebrities/create
2. In that route we have to render the celebrities/new-celebrity view
3. In that view file:
Add an <h2> for the page's heading.
Add a <form> tag that makes a POST request to /celebrities/create.
Add <input> tags inside the form so the user can fill in values for
 each attribute of the celebrity. Make an input for name, occupation,
  and catchPhrase
Add a <button> tag in the form so the user can submit the form once 
they are done filling it out.
4. Create the /celebrities/create POST route in 
routes/celebrities.routes.js.
5. In that route we have to create an instance of the Celebrity model 
(don't forget, we should get all the info from the form through 
req.body)
If there is an error, render the celebrities/new-celebrity view so
 the user can try again and
If there is no error, redirect to the page with the list of 
celebrities. This route will be created in the next iteration of 
/celebrities
6. In the views/index.hbs view file:
Add a link that goes to the page you just created with the form 
to create a new celebrity.
*/
