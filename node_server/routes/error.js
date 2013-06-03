var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RPCError = (function () {
    function RPCError(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
    return RPCError;
})();
var ParseError = (function (_super) {
    __extends(ParseError, _super);
    function ParseError(data) {
        _super.call(this, -32700, 'Parse error', data);
        this.data = data;
    }
    return ParseError;
})(RPCError);
var InvalidRequestError = (function (_super) {
    __extends(InvalidRequestError, _super);
    function InvalidRequestError(data) {
        _super.call(this, -32600, 'Invalid Request', data);
        this.data = data;
    }
    return InvalidRequestError;
})(RPCError);
var MethodNotFoundError = (function (_super) {
    __extends(MethodNotFoundError, _super);
    function MethodNotFoundError(data) {
        _super.call(this, -32601, 'Method not found', data);
        this.data = data;
    }
    return MethodNotFoundError;
})(RPCError);
var InvalidParamsError = (function (_super) {
    __extends(InvalidParamsError, _super);
    function InvalidParamsError(data) {
        _super.call(this, -32602, 'Invalid params', data);
        this.data = data;
    }
    return InvalidParamsError;
})(RPCError);
var InternalError = (function (_super) {
    __extends(InternalError, _super);
    function InternalError(data) {
        _super.call(this, -32603, 'Internal error', data);
        this.data = data;
    }
    return InternalError;
})(RPCError);
