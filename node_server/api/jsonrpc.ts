///<reference path='../DefinitelyTyped/express/express.d.ts'/>
/**
 * JSON-RPC2実装
 *
 * usage:
 * 
 */
import express = module("express")
import error = module("./error")

/**
 * JSON-RPCのmethodに渡されるcallback。
 * 成功時はonSuccessを呼び出し、失敗時はonFailureを呼び出す。
 */
export interface rpcCallback {
	onSuccess(result: any) : void;
	onFailure(error: error.RPCError) : void;
}

/**
 * JSON-RPC method's interface
 */
export interface rpcMethod {
	(params:any, callback:rpcCallback): void;	
}
export var methods: {[key: string]: rpcMethod;} = {};
export function add(key:string, method: rpcMethod) {
	methods[key] = method;
}

/**
 * handle method call
 */
export function httpHandler(req: any, res: any) {
	function onError(id: any, statusCode: number, error: error.RPCError) : void {
		res.send(JSON.stringify({
			jsonrpc: '2.0',
			error: error,
			id: id
			}), statusCode);
	}


	res.header('Content-Type', 'application/json');

	if (req.body.jsonrpc !== '2.0') {
		onError(req.body.id, 400, new error.InvalidRequestError('JSON RPC version is invalid or missiong', null));
		return;
	}
	var method: rpcMethod =  methods[req.body.method];
	if (!method) {
		onError(req.body.id, 404, new error.MethodNotFoundError(req.body.method, null));
		return;
	}

	try {
		method(req.body.params, {
			onSuccess: function(result: any) {
				res.send(JSON.stringify({
					jsonrpc: '2.0',
					result: result,
					error: null,
					id: req.body.id
					}), 200);
			},
			onFailure: function(error: error.RPCError) {
					res.send(JSON.stringify({
						jsonrpc: '2.0',
						error: error,
						id: req.body.id
						}), 500);
			}
		});
	} catch (e) {
		onError(req.body.id, 500, new error.InternalError('Execution error is occured', null));
	}
	return;
}

// default api
add('ping', function(params: any, callback: rpcCallback) {
	callback.onSuccess('ok');
});
