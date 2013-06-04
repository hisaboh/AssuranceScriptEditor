import jsonrpc = module('../api/jsonrpc')

jsonrpc.add('version', function(params: any, callback: jsonrpc.rpcCallback) {
	callback.onSuccess('version 1.0');
});

export var httpHandler = jsonrpc.httpHandler;