import jsonrpc = module('../api/jsonrpc')

jsonrpc.push('version', function(params: any, callback: jsonrpc.rpcCallback) {
	callback.onSuccess('version 1.0');
});

export var handleHttp = jsonrpc.handleHttp;