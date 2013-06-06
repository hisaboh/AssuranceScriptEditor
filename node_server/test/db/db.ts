///<reference path='../../DefinitelyTyped/mocha/mocha.d.ts'/>
///<reference path='../../DefinitelyTyped/node/node.d.ts'/>

import assert = module('assert')
import db = module('../../db/db');

describe('db', function() {
	describe('query', function() {
		it('should return result', function() {
			var con = new db.Database();
			con.query('SELECT * FROM dcase');
		});
	})
})