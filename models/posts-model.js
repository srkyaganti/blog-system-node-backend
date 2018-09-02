const db = require('../database/setup')

class PostsModel {
    getAll() {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM posts`, (error, rows) => {
                if(error) reject(error)
                resolve(rows)
            })
        })
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM posts WHERE id = ?`, [id], (error, rows) => {
                if(error) reject(error)
                resolve(rows)
            })
        })
    }

    create(post) {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO posts(user_id, title, content) VALUES(?, ?, ?)`, 
                    [post.userId, post.title, post.content], (error, rows) => {
                        if(error) reject(error)
                        resolve(rows)
                    })
        })
    }

    update(postId, post) {
        console.log(postId, post.title, post.content)
        return new Promise((resolve, reject) => {
            db.query('UPDATE `posts` SET `title` = ?, `content` = ? WHERE id = ?',[post.title, post.content, postId], 
                    (error, rows) => {
                        if(error) reject(error)
                        resolve(rows)
                    })
        })
    }

    deleteAll() {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM posts`, (error, rows) => {
                if(error) reject(error)
                resolve(rows)
            })
        })
    }

    deleteById(id) {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM posts where id = ?`, [id], (error, rows) => {
                if(error) reject(error)
                resolve(rows)
            })
        })
    }
}

module.exports = new PostsModel()