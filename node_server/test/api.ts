///<reference path='../DefinitelyTyped/mocha/mocha.d.ts'/>
///<reference path='../DefinitelyTyped/node/node.d.ts'/>

import assert = module('assert')
import http = module('http')

describe('api', function() {
	describe('jsonrpc', function() {
		it('should return 400 when JSON RPC version is invalid or missing', function() {
			var options = {hostname: 'localhost', port:3000, path: '/api/1.0', method: 'POST', headers:{'Content-Type':'application/json'}};

			var req = http.request(options, function(res:http.ClientResponse){
					console.log('hoge');
					console.log(res.statusCode);
				});
			req.write('{"jsonrpc":"1.0", "method":"test", "id":100, "params":{"hoge":"hogev"}}');
			req.end();
		})
	})
})