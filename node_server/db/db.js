var mysql = require('mysql')
var Database = (function () {
    function Database() {
        this.con = Database.getConnection();
    }
    Database.getConnection = function getConnection() {
        return mysql.createConnection({
            host: 'localhost',
            user: 'ads_test',
            password: 'ads_test',
            database: 'dcase'
        });
    };
    Database.prototype.query = function (sql, values) {
        console.log('hoge');
        values = values || [];
        this.con.query(sql, values, function (err, result) {
            console.log('hoge2');
            console.log(result);
        });
    };
    return Database;
})();
exports.Database = Database;
