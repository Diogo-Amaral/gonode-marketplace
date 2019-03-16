const express = require('express')

const routes = express.Router()

const authMiddlware = require('./app/middlwares/auth')

const controllers = require('./app/controllers')

routes.get('/users', controllers.UserController.index)
routes.post('/users', controllers.UserController.store)
routes.delete('/users/:id', controllers.UserController.destroy)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddlware)

/**
 *  Ads
 **/

routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**
 * Purchases
 */

routes.post('/purchases', controllers.PurchaseController.store)

module.exports = routes
