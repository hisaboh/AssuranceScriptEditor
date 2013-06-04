var jsonrpc = require('../api/jsonrpc')
jsonrpc.push('version', function (params, callback) {
    callback.onSuccess('version 1.0');
});
exports.handleHttp = jsonrpc.handleHttp;
