///<reference path='../DefinitelyTyped/express/express.d.ts'/>

import express = module("express")
export function jsonrpc(req: any, res: any) {
	console.log(req.body);
	res.send("respond with a resource");
}