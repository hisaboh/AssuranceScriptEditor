class RPCError {
	constructor(public code: number, public message: string, public data: any) {}
}

class ParseError extends RPCError {
	constructor(public data: any) {
		super(-32700, 'Parse error', data);
	}
}

class InvalidRequestError extends RPCError {
	constructor(public data: any) {
		super(-32600, 'Invalid Request', data);
	}
}
class MethodNotFoundError extends RPCError {
	constructor(public data: any) {
		super(-32601, 'Method not found', data);
	}
}
class InvalidParamsError extends RPCError {
	constructor(public data: any) {
		super(-32602, 'Invalid params', data);
	}
}
class InternalError extends RPCError {
	constructor(public data: any) {
		super(-32603, 'Internal error', data);
	}
}
