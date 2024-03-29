const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddlware = require('./app/middlwares/auth')

const controllers = require('./app/controllers')
const validators = require('./app/validators')

// routes.get('/users', controllers.UserController.index)
routes.post(
  '/users',
  validate(validators.User),
  handle(controllers.UserController.store)
)
// routes.delete('/users/:id', controllers.UserController.destroy)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddlware)

/**
 *  Ads
 **/

routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controllers.AdController.update)
)
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

/**
 * Purchases
 */

routes.post(
  '/purchases',
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

module.exports = routes
