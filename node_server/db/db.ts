///<reference path='../types/mysql.d.ts'/>

import mysql = module('mysql')

export function getConnection() {
	return mysql.createConnection({
			host: 'localhost',
			user: 'ads',
			password: 'ads',
			database: 'dcase'
		});
}
