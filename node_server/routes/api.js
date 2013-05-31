
function jsonrpc(req, res) {
    console.log(req.body);
    res.send("respond with a resource");
}
exports.jsonrpc = jsonrpc;
