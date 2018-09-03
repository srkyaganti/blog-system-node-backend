const router = require('express').Router()
const authController = require('../controllers/auth-controller')

router.post('/register', (req, res, next) => {
    authController.register(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.post('/login', (req, res, next) => {
    authController.login(req.body)
    .then(data => res.send(data))
    .catch(error => res.send(error))
})

router.post('/forgot-password', (req, res, next) => {
    authController.forgotPassword(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.post('/reset-password', (req, res, next) => {
    authController.resetPassword(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.post('/authorize', (req, res, next) => {
    authController.authorize(req.headers.authorization)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

module.exports = router