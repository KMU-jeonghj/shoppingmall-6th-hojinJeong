const mariadb = require('mysql');

const conn = mariadb.createConnection(
    {
        host: '172.17.0.2',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'Tennis'
    }
);

module.exports = conn;