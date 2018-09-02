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

router.post('/forgot-password', )

router.post('/reset-password', )

module.exports = router