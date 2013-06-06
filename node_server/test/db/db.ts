///<reference path='../../DefinitelyTyped/mocha/mocha.d.ts'/>
///<reference path='../../DefinitelyTyped/node/node.d.ts'/>

import assert = module('assert')
import db = module('../../db/db');

describe('db', function() {
	describe('query', function() {
		it('should return result', function() {
			console.log('db test');
			var con = new db.Database();
			con.query('SELECT * FROM dcase', [], (err, result) => {
				console.log(err);
				console.log(result);
			});
		});
	})
})