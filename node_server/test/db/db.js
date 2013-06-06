
var db = require('../../db/db')
describe('db', function () {
    describe('query', function () {
        it('should return result', function () {
            var con = new db.Database();
            con.query('SELECT * FROM dcase');
        });
    });
});
