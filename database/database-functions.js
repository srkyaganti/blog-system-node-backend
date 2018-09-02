const db = require('./setup')

class DatabaseFunctions {

    async migrate() {
        const connection = db.promise();

        // Create users table
        const usersTable = await connection.query(`CREATE TABLE IF NOT EXISTS users (
                                    id INT NOT NULL AUTO_INCREMENT,
                                    email VARCHAR(255) UNIQUE NOT NULL,
                                    password VARCHAR(255) NOT NULL,
                                    activated BOOLEAN DEFAULT FALSE NOT NULL,
                                    created_at timestamp default current_timestamp, 
                                    updated_at timestamp,
                                    PRIMARY KEY (id)
                                )`)
        console.log("users table created")

        const postsTable = await connection.query(`CREATE TABLE IF NOT EXISTS posts (
                                    id INT NOT NULL AUTO_INCREMENT,
                                    user_id INT,
                                    title VARCHAR(255) NOT NULL,
                                    content TEXT NOT NULL,
                                    created_at timestamp default current_timestamp, 
                                    updated_at timestamp,
                                    PRIMARY KEY (id),
                                    FOREIGN KEY (user_id) REFERENCES users(id)
                                )`)
        console.log("posts table created")

        const commentsTable = await connection.query(`CREATE TABLE IF NOT EXISTS comments (
                                    id INT NOT NULL AUTO_INCREMENT,
                                    user_id INT,
                                    post_id INT,
                                    text VARCHAR(255) NOT NULL,
                                    created_at timestamp default current_timestamp, 
                                    updated_at timestamp,
                                    PRIMARY KEY (id),
                                    FOREIGN KEY (user_id) REFERENCES users(id),
                                    FOREIGN KEY (post_id) REFERENCES posts(id)
                                )`)
        console.log("comments table created")

        connection.end()

        process.exit()
    }

    async rollback() {
        const connection = db.promise()

        console.log('Rollback started')
        
        await connection.query('DROP TABLE comments')
        await connection.query('DROP TABLE posts')
        await connection.query('DROP TABLE users')
        
        console.log('Rollback complete')

        process.exit()
    }
}

module.exports = new DatabaseFunctions()