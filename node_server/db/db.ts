///<reference path='../types/mysql.d.ts'/>

import mysql = module('mysql')

interface QueryCallback {
	(err:any, result:any) : void;
}

export class Database {
	public con: mysql.Connection;

	static getConnection() {
		return mysql.createConnection({
				host: 'localhost',
				user: 'ads_test',
				password: 'ads_test',
				database: 'dcase'
			});
	}

	constructor() {
		this.con = Database.getConnection();
	}

	query(sql:string, callback: QueryCallback);
	query(sql:string, values:any[], callback:QueryCallback);
	query(sql: string, values: any, callback?: any) {
		if (values && typeof values ==='Array') {
			values = values || [];
		} else if (values && typeof values === 'function') {
			callback = values;
			values = [];
		}
		console.log(sql);
		console.log(values);
		console.log(callback);
		this.con.query(sql, [], (err, result) => {console.log(result);});
	}

	begin(callback): void {
		this.query('SET autocommit=0', (err, result) => {
			if (err) {
				callback(err, result);
			} else {
				this.query('START TRANSACTION', (err, result) => {
					callback(err, result);
				});
			}
		});
	}

	commit(callback): void {
		this.query('COMMIT', (err, result) => {
			callback(err, result);
		});
	}

	rollback(callback): void {
		this.query('ROLLBACK', (err, query) => {
			callback(err, query);
		});
	}

	endTransaction(callback): void {
		this.query('SET autocommit=1', (err, query) => {
			callback(err, query);
		});
	}

}
