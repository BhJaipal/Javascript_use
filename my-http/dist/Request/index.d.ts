/// <reference types="node" />
export type RequestArgs = {
	contentType: "text/plain" | "text/html" | "application/json";
	accept: "text/plain" | "text/html" | "application/json";
	encoding: BufferEncoding;
	port: number;
	path: string;
	param: {
		[key: string]: string;
	} | null;
	query: {
		[key: string]: string;
	} | null;
	body: null | unknown;
};
export declare const defaultRequest: RequestArgs;
