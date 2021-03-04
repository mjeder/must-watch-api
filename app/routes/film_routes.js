// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for films
const Film = require('../models/film')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { film: { title: '', text: 'foo' } } -> { film: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /films
router.get('/films', requireToken, (req, res, next) => {
  Film.find()
    .then(films => {
      // `films` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return films.map(film => film.toObject())
    })
    // respond with status 200 and JSON of the films
    .then(films => res.status(200).json({ films: films }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /films/5a7db6c74d55bc51bdf39793
router.get('/films/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Film.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "film" JSON
    .then(film => res.status(200).json({ film: film.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /films
router.post('/films', requireToken, (req, res, next) => {
  // set owner of new film to be current user
  req.body.film.owner = req.user.id

  Film.create(req.body.film)
    // respond to succesful `create` with status 201 and JSON of new "film"
    .then(film => {
      res.status(201).json({ film: film.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /films/5a7db6c74d55bc51bdf39793
router.patch('/films/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.film.owner

  Film.findById(req.params.id)
    .then(handle404)
    .then(film => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, film)

      // pass the result of Mongoose's `.update` to the next `.then`
      return film.updateOne(req.body.film)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /films/5a7db6c74d55bc51bdf39793
router.delete('/films/:id', requireToken, (req, res, next) => {
  Film.findById(req.params.id)
    .then(handle404)
    .then(film => {
      // throw an error if current user doesn't own `film`
      requireOwnership(req, film)
      // delete the film ONLY IF the above didn't throw
      film.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
