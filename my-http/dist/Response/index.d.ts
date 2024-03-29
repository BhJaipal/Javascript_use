import { RequestArgs } from "../Request";
type dataSent = {
	data: string;
	req: RequestArgs;
	res: {
		status: number;
	};
};
export declare class IResponse {
	private request;
	private _status;
	/**
	 * Takes a request and returns an IResponse object
	 */
	constructor(request: RequestArgs);
	/**
	 * @param accept Sets Accept and Content type
	 * @default plain
	 */
	contentType(accept?: "plain" | "html" | "json"): void;
	/**
	 * @param code Status code
	 * @returns IResponse object
	 */
	status(code: number): this;
	/**
	 * @param data html data
	 * @returns Sends html and changes content type to html
	 */
	sendHTML(data: string): dataSent;
	/**
	 * also do this:
	 * ```javascript
	 * res.contentType("json");
	 * ```
	 * @param data json data
	 * @returns sends json data
	 */
	sendJSON(data: object): dataSent;
	/**
	 * @param file file buffer
	 * @param args arguments to be replaced
	 * @returns formatted string
	 */
	#format(file: Buffer, ...args: string[]);
	/**
	 * @param pwd Path of files
	 * @param args Arguments to replace in the fields
	 * @returns file send data
	 * If html, do this too
	 * ```javascript
	 * res.contentType("html");
	 * ```
	 */
	sendFile(pwd: string, ...args: string[]): dataSent;
	/**
	 * @param data string data
	 * @returns sends string data
	 */
	send(data: string): dataSent;
	/**
	 * @param code Status code
	 * @param msg Error message
	 * @returns sends error
	 * Same as {@link sendJSON}
	 * use
	 * ```javascript
	 * res.contentType("json");
	 * ```
	 */
	sendError(code: number, msg: string): dataSent;
}
export {};
