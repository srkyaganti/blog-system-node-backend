const mysql = require('mysql2')

const connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'react_node',
})

module.exports = connection