const { createPool, createConnection } = require('mysql');

const pool = createPool({
    port:3306,
    host:"localhost",
    user:"root",
    password:"ssbaide220",
    database:"english_emperor",
    connectionLimit:10
})


module.exports = pool;
