var mysql = require('mysql')
function getConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'ads',
        password: 'ads',
        database: 'dcase'
    });
}
exports.getConnection = getConnection;
