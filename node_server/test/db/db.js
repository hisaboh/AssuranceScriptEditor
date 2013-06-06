
var db = require('../../db/db')
var app = require('../../app');
describe('db', function () {
    describe('query', function () {
        it('should return result', function () {
            console.log('db test');
            var con = new db.Database();
            con.query('SELECT * FROM dcase', [], function (err, result) {
                console.log(err);
                console.log(result);
            });
        });
    });
});
