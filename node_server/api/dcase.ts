import db = module('../db/db')
import jsonrpc = module('./jsonrpc')

export function getDCaseList(params:any, callback: jsonrpc.rpcCallback) {
	var con = new db.Database();
	con.query('SELECT * FROM dcase', (err, result) => {
		if (err) throw err;
		con.close();

		var list = [];
		result.forEach((val) => {
			list.push({dcaseId: val.id, dcaseName: val.name});
		});
		callback.onSuccess(list);
	});
}
