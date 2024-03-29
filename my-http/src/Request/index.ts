export type RequestArgs = {
	contentType: "text/plain" | "text/html" | "application/json";
	accept: "text/plain" | "text/html" | "application/json";
	encoding: BufferEncoding;
	port: number;
	path: string;
	param: { [key: string]: string } | null;
	query: { [key: string]: string } | null;
	body: null | unknown;
};

export const defaultRequest: RequestArgs = {
	contentType: "text/plain",
	accept: "text/plain",
	encoding: "utf-8",
	path: "/",
	port: 0,
	param: null,
	query: null,
	body: null,
};
