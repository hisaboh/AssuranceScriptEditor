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
    Database.prototype.query = function (sql, values, callback) {
        if(values && typeof values === 'Array') {
            values = values || [];
        } else if(values && typeof values === 'function') {
            callback = values;
            values = [];
        }
        console.log(sql);
        console.log(values);
        console.log(callback);
        this.con.query(sql, [], function (err, result) {
            console.log(result);
        });
    };
    Database.prototype.begin = function (callback) {
        var _this = this;
        this.query('SET autocommit=0', function (err, result) {
            if(err) {
                callback(err, result);
            } else {
                _this.query('START TRANSACTION', function (err, result) {
                    callback(err, result);
                });
            }
        });
    };
    Database.prototype.commit = function (callback) {
        this.query('COMMIT', function (err, result) {
            callback(err, result);
        });
    };
    Database.prototype.rollback = function (callback) {
        this.query('ROLLBACK', function (err, query) {
            callback(err, query);
        });
    };
    Database.prototype.endTransaction = function (callback) {
        this.query('SET autocommit=1', function (err, query) {
            callback(err, query);
        });
    };
    return Database;
})();
exports.Database = Database;
