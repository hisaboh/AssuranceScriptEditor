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
            database: 'dcase',
            debug: true
        });
    };
    Database.prototype.query = function (sql, values) {
        this.con.connect(function (err) {
            console.log(err);
            console.log('err');
        });
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
