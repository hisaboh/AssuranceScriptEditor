
function jsonrpc(req, res) {
    res.header('Content-Type', 'application/json');
    var sendError = function (id, statusCode, error) {
        res.send(JSON.stringify({
            jsonrpc: '2.0',
            error: error,
            id: id
        }), statusCode);
    };
    if(req.body.jsonrpc !== '2.0') {
        sendError('hoge', 400, 'test');
        return;
    }
    res.send("respond with a resource");
}
exports.jsonrpc = jsonrpc;
