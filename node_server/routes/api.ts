///<reference path='../DefinitelyTyped/express/express.d.ts'/>

import express = module("express")
import error = module("./error")

export function jsonrpc(req: any, res: any) {
	res.header('Content-Type', 'application/json');
	var sendError = function (id, statusCode: number, error) {
		res.send(JSON.stringify({
			jsonrpc: '2.0',
			error: error,
			id: id
			}), statusCode)
	};

	if (req.body.jsonrpc !== '2.0') {
		sendError(req.body.id, 400, new error.InvalidRequestError(null));
		return;
	}
	res.send("respond with a resource");
}

