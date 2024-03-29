import { readFileSync } from "fs";
import { RequestArgs } from "../Request";

type dataSent = {
	data: string;
	req: RequestArgs;
	res: { status: number };
};

export class IResponse {
	private _status: number = 200;
	constructor(private request: RequestArgs) {}
	contentType(accept: "plain" | "html" | "json" = "plain") {
		if (accept == "html") {
			this.request.accept = "text/html";
			this.request.contentType = "text/html";
		} else if (accept == "json") {
			this.request.accept = "application/json";
			this.request.contentType = "application/json";
		} else {
			this.request.accept = "text/plain";
			this.request.contentType = "text/plain";
		}
	}
	/**
	 * @param code Status code
	 * @returns IResponse object
	 */
	status(code: number) {
		this._status = code;
		return this;
	}
	/**
	 * @param data html data
	 * @returns Sends html and changes content type to html
	 */
	sendHTML(data: string): dataSent {
		this.contentType("html");
		return { data, req: this.request, res: { status: this._status } };
	}
	/**
	 * also do this:
	 * ```javascript
	 * res.contentType("json");
	 * ```
	 * @param data json data
	 * @returns sends json data
	 */
	sendJSON(data: object): dataSent {
		return {
			data: JSON.stringify(data),
			req: this.request,
			res: { status: this._status },
		};
	}
	/**
	 * @param file file buffer
	 * @param args arguments to be replaced
	 * @returns formatted string
	 */
	#format(file: Buffer, ...args: string[]) {
		let str = file.toString(this.request.encoding);
		let placeholder = /\{\s?\w+\s?\}/g;
		let placeholderNum = placeholder.exec(str)?.length || 0;
		let matches = str.match(placeholder);
		if (matches?.length == 0 || matches == null) {
			return str;
		}
		if (args.length == 0) return str;
		let out = "";
		if (matches != null) {
			if (matches.length >= placeholderNum) {
				for (let i = 0; i < placeholderNum; i++) {
					out += str.slice(0, str.indexOf(matches[i])) + args[i];
					str = str.slice(
						str.indexOf(matches[i]) + matches[i].length
					);
				}
				out += str;
			} else {
				for (let i = 0; i < matches.length; i++) {
					out += str.slice(0, str.indexOf(matches[i])) + args[i];
					console.log(out, "=");
					str = str.slice(
						str.indexOf(matches[i]) + matches[i].length
					);
				}
				out += str;
			}
		}
		return out;
	}
	/**
	 * @param pwd Path of files
	 * @param args Arguments to replace in the fields
	 * @returns file send data
	 * If html, do this too
	 * ```javascript
	 * res.contentType("html");
	 * ```
	 */
	sendFile(pwd: string, ...args: string[]): dataSent {
		return {
			data: this.#format(readFileSync(pwd), ...args),
			req: this.request,
			res: { status: this._status },
		};
	}
	/**
	 * @param data string data
	 * @returns sends string data
	 */
	send(data: string): dataSent {
		return { data, req: this.request, res: { status: this._status } };
	}
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
	sendError(code: number, msg: string): dataSent {
		this.status(code);
		return this.sendJSON({ status: code, message: msg });
	}
}
