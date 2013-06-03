export class RPCError {
	constructor(public code: number, public message: string, public data: any) {}
}

export class ParseError extends RPCError {
	constructor(public data: any) {
		super(-32700, 'Parse error', data);
	}
}

export class InvalidRequestError extends RPCError {
	constructor(public data: any) {
		super(-32600, 'Invalid Request', data);
	}
}
export class MethodNotFoundError extends RPCError {
	constructor(public data: any) {
		super(-32601, 'Method not found', data);
	}
}
export class InvalidParamsError extends RPCError {
	constructor(public data: any) {
		super(-32602, 'Invalid params', data);
	}
}
export class InternalError extends RPCError {
	constructor(public data: any) {
		super(-32603, 'Internal error', data);
	}
}
