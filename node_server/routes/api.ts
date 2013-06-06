import jsonrpc = module('../api/jsonrpc')
import dcase = module('../api/dcase')

jsonrpc.add('version', function(params: any, callback: jsonrpc.rpcCallback) {
	callback.onSuccess('version 1.0');
});

for (var fn in dcase) {
	if (typeof dcase[fn] === 'function') jsonrpc.add(fn, dcase[fn]);
}

export var httpHandler = jsonrpc.httpHandler;