var assert = require('assert')

var app = require('../app')
var request = require('supertest');
describe('api', function () {
    describe('jsonrpc', function () {
        it('should return 400 when JSON RPC version is invalid or missing', function () {
            request(app['app']).post('/api/1.0').send({
                "jsonrpc": "1.0",
                "method": "test",
                "id": 100,
                "params": {
                    "hoge": "hogev"
                }
            }).expect(400).end(function (err, res) {
                if(err) {
                    throw err;
                }
                assert.equal(100, res.body.id);
                assert.notStrictEqual(undefined, res.body.error);
                assert.notStrictEqual(undefined, res.body.error.code);
                assert.equal(-32600, res.body.error.code);
                console.log(res.body);
            });
            request(app['app']).post('/api/1.0').send({
                "method": "test",
                "id": 100,
                "params": {
                    "hoge": "hogev"
                }
            }).expect(400).end(function (err, res) {
                if(err) {
                    throw err;
                }
            });
        });
        it('should return content-type application/json', function () {
            request(app['app']).post('/api/1.0').send({
                jsonrpc: "2.0",
                method: "test",
                id: 100
            }).expect('content-type', 'application/json').end(function (err, res) {
                if(err) {
                    throw err;
                }
            });
        });
    });
});
