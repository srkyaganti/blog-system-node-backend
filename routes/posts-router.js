const router = require('express').Router()
const postsController = require('../controllers/posts-controller')
const commentsRouter = require('../routes/comments-router')

// Get all posts
router.get('/', function(req, res, next) {
    postsController.getAll()
    .then(data => res.json(data))
    .catch(error => res.json(error))
});

// Get a post
router.get('/:id', function(req, res, next) {
    postsController.getById(req.params.id)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

// Create a post
router.post('/', function(req, res, next) {
    postsController.create(req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

// Update a post
router.patch('/:id', function(req, res, next) {
    postsController.update(req.params.id, req.body)
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

// Delete a post
router.delete('/:id', function(req, res, next) {
    res.send('Delete the post with id : ' + req.params.id)
})

router.delete('/', function(req, res, next) {
    res.send('Delete all posts')
})

router.use('/:id/comments', function(req, res, next) {
    req.postId = req.params.id;
    next()
  }, commentsRouter
);

module.exports = router;