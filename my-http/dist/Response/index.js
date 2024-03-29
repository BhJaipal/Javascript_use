"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IResponse = void 0;
const fs_1 = require("fs");
class IResponse {
    /**
     * Takes a request and returns an IResponse object
     */
    constructor(request) {
        _IResponse_instances.add(this);
        this.request = request;
        this._status = 200;
    }
    /**
     * @param accept Sets Accept and Content type
     * @default plain
     */
    contentType(accept = "plain") {
        if (accept == "html") {
            this.request.accept = "text/html";
            this.request.contentType = "text/html";
        }
        else if (accept == "json") {
            this.request.accept = "application/json";
            this.request.contentType = "application/json";
        }
        else {
            this.request.accept = "text/plain";
            this.request.contentType = "text/plain";
        }
    }
    /**
     * @param code Status code
     * @returns IResponse object
     */
    status(code) {
        this._status = code;
        return this;
    }
    /**
     * @param data html data
     * @returns Sends html and changes content type to html
     */
    sendHTML(data) {
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
    sendJSON(data) {
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
    #format(file, ...args) {
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
     * @returns sends file data
     * If html, do this too
     * ```javascript
     * res.contentType("html");
     * ```
     */
    sendFile(pwd, ...args) {
        return {
            data: this.#format(fs_1.readFileSync(pwd), ...args),
            req: this.request,
            res: { status: this._status },
        };
    }
    /**
     * @param data string data
     * @returns sends string data
     */
    send(data) {
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
    sendError(code, msg) {
        this.status(code);
        return this.sendJSON({ status: code, message: msg });
    }
}
exports.IResponse = IResponse;