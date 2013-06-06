///<reference path='../types/mysql.d.ts'/>

import mysql = module('mysql')

export class Database {
	public con: mysql.Connection;

	static getConnection() {
		return mysql.createConnection({
				host: 'localhost',
				user: 'ads_test',
				password: 'ads_test',
				database: 'dcase',
				debug: true
			});
	}

	constructor() {
		this.con = Database.getConnection();
	}

	query(sql: string, values?: any[]) {
		this.con.connect(function(err) {
			console.log(err);
			console.log('err');
		});
//		console.log(this.con);
		console.log('hoge');
		values = values || [];
		this.con.query(sql, values, function(err, result) {
			console.log('hoge2');
			console.log(result);
		});
	}

}
