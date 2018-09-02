const postsModel = require('../models/posts-model')

class PostsController {
    getAll() {
        return new Promise((resolve, reject) => {
            postsModel.getAll()
            .then(data => resolve(data))
            .catch(error => reject(data))
        })
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            postsModel.getById(id)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    create(data) {
        return new Promise((reject, resolve) => {
            postsModel.create(data)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    update(id, data) {
        return new Promise((resolve, reject) => {
            postsModel.update(id, data)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            postsModel.deleteById(id)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    deleteAll() {
        return new Promise((resolve, reject) => {
            postsModel.deleteAll()
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }
}

module.exports = new PostsController()