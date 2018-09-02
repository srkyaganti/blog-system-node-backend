const router = require('express').Router()

router.get('/', function(req, res, next){
    res.send('Get all comments for post with id : ' + JSON.stringify(req.params) + "  " + req.postId)
})

module.exports = router;