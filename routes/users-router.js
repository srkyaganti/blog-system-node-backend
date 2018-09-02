const router = require('express').Router()
const userController = require('../controllers/user-controller')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
