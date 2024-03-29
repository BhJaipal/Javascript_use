"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHTTP = void 0;
const net_1 = require("net");
const Request_1 = require("./Request");
const http_1 = __importDefault(require("http"));
const Response_1 = require("./Response");
/**
 * @returns MyHTTP object
 * @see examples [here](../examples/index.js)
 */
class MyHTTP {
    constructor() {
        this.port = 0;
        this.headers = new Map();
        this.routes = [];
        this.request = new http_1.default.IncomingMessage(new net_1.Socket({}));
        this.response = new http_1.default.ServerResponse(this.request);
        this.app = http_1.default.createServer((req, res) => {
            this.request = req;
            this.response = res;
        });
    }
    /**
     * @param req IncomingMessage request
     * @returns request body
     */
    handleRequestBody(req) {
        return new Promise((resolve, reject) => {
            let bodyData = "";
            req.on("data", (chunk) => {
                bodyData += chunk.toString();
            });
            req.on("end", () => {
                const contentType = req.headers["content-type"];
                if (contentType === "application/json") {
                    resolve(JSON.parse(bodyData));
                }
                else if (contentType === "text/plain") {
                    resolve(bodyData);
                }
                else {
                    reject("No body found");
                }
            });
        });
    }
    /**
     * @returns checks if route is dynamic or not
     */
    isRouteDynamic(route) {
        return (route.match(/\/\w+(-\w+)?(\/\w+(-\w+)?)?\/:\w+(-\w+)?(\/\w+(-\w+)?)?/g) != null);
    }
    /**
     * @returns Checks if route has query parameters or not
     */
    doesRouteHasQuery(route) {
        return (route.match(/\/\w+(-\w+)?(\/\w+(-\w+)?)?\?\w+=[\d\w]+(&\w+=[\d\w]+)?/g) != null);
    }
    /**
     * @description Adds routes with `GET` method and callback
     */
    get(route, callback) {
        if (typeof route == "string" && route != undefined) {
            this.routes.push(route);
            this.headers.set(route, {
                callback,
                method: "GET",
                isDynamic: this.isRouteDynamic(route),
            });
        }
    }
    /**
     * @description Adds routes with `POST` method and callback
     */
    post(route, callback) {
        if (typeof route == "string" && route != undefined) {
            this.routes.push(route);
            this.headers.set(route, {
                callback,
                method: "POST",
                isDynamic: this.isRouteDynamic(route),
            });
        }
    }
    /**
     * @description Starts the http server
     */
    listen(port, callback) {
        this.port = port;
        this.app.on("request", (req, res) => {
            var _a;
            this.request = req;
            this.response = res;
            // Query variables
            let checkIfRouteHasQuery = this.doesRouteHasQuery(this.request.url != undefined ? this.request.url : "");
            let routeQuery;
            let routeQueryVariables = {};
            let routeWithoutQuery;
            /// check if route has query
            if (checkIfRouteHasQuery && this.request.url != undefined) {
                routeWithoutQuery = this.request.url.split("?")[0];
                let remainingRoute = (_a = this.request.url.split("?")[1].split("/")[1]) !== null && _a !== void 0 ? _a : "";
                routeQuery = this.request.url.split("?")[1].split("/")[0];
                routeQuery.split("&").forEach((val) => {
                    let key = val.split("=")[0];
                    let value = val.split("=")[1];
                    routeQueryVariables[key] = value;
                });
                if (remainingRoute != "") {
                    routeWithoutQuery.concat("/" + remainingRoute);
                }
                this.request.url = routeWithoutQuery;
            }
            // triming trailing /
            if (this.request.url != undefined &&
                this.request.url.endsWith("/") &&
                this.request.url != "/") {
                this.request.url = this.request.url.slice(0, this.request.url.length - 1);
            }
            let RouteParamName;
            let routeHasParam = "";
            let routeWithParam = "";
            for (let [key, val] of this.headers) {
                if (val.isDynamic) {
                    routeHasParam = key;
                    routeWithParam = key;
                    RouteParamName = key.split("/:")[1].split("/")[0];
                    routeHasParam = routeHasParam.split("/:")[0];
                    if (this.request.url != undefined &&
                        this.request.url.match(routeHasParam) != null) {
                        break;
                    }
                }
                else {
                    RouteParamName = undefined;
                }
            }
            let body;
            try {
                body = yield this.handleRequestBody(this.request);
            }
            catch (e) {
                console.error(e);
            }
            if (this.request.url != undefined) {
                /// If there is a route with parameter
                if (routeHasParam != undefined &&
                    this.request.url.match(routeHasParam) != null &&
                    this.request.url !== routeHasParam &&
                    routeWithParam != undefined &&
                    RouteParamName != undefined) {
                    let header = this.headers.get(routeWithParam);
                    if (header != undefined) {
                        this.request.method = header.method;
                        let paramValue = this.request.url.slice(this.request.url.lastIndexOf(routeHasParam[routeHasParam.length - 1]));
                        let reqWithRouteParam = Object.assign(Object.assign({}, Request_1.defaultRequest), {
                            param: {
                                [RouteParamName]: paramValue.split("/")[1],
                            }, query: JSON.stringify(routeQueryVariables) != "{}"
                                ? routeQueryVariables
                                : null, body: body != undefined ? body : null
                        });
                        let callbackOut = header.callback(reqWithRouteParam, new Response_1.IResponse(Request_1.defaultRequest));
                        this.request.headers = {
                            accept: callbackOut.req.accept,
                            "content-encoding": callbackOut.req.encoding,
                            "content-type": callbackOut.req.contentType,
                        };
                        this.request.method = header.method;
                        let status = callbackOut.res.status != undefined
                            ? callbackOut.res.status
                            : 200;
                        this.response.writeHead(status);
                        this.response.end(callbackOut.data);
                    }
                    /// If there is a route without parameter
                }
                else if (this.routes.includes(this.request.url) &&
                    this.headers.get(this.request.url) != undefined) {
                    let header = this.headers.get(this.request.url);
                    if (header != undefined) {
                        this.request.method = header.method;
                        let reqWithoutRouteParam = Object.assign(Object.assign({}, Request_1.defaultRequest), {
                            query: JSON.stringify(routeQueryVariables) != "{}"
                                ? routeQueryVariables
                                : null, body: body != undefined ? body : null
                        });
                        let callbackOut = header.callback(reqWithoutRouteParam, new Response_1.IResponse(Request_1.defaultRequest));
                        this.request.headers = {
                            accept: callbackOut.req.accept,
                            "content-encoding": callbackOut.req.encoding,
                            "content-type": callbackOut.req.contentType,
                        };
                        this.request.method = header.method;
                        let status = callbackOut.res.status != undefined
                            ? callbackOut.res.status
                            : 200;
                        this.response.writeHead(status);
                        this.response.end(callbackOut.data);
                    }
                    /// If there is no route
                }
                else {
                    let err_404;
                    err_404 = {
                        contentType: "application/json",
                        accept: "application/json",
                        encoding: "utf-8",
                        port: this.port,
                        path: this.request.url,
                        param: null,
                        query: null,
                        body: null,
                    };
                    this.request.headers = {
                        accept: err_404.accept,
                        "content-encoding": err_404.encoding,
                        "content-type": err_404.contentType,
                    };
                    this.request.method = "GET";
                    this.response.writeHead(404);
                    this.response.end(JSON.stringify({
                        status: 404,
                        message: "Cannot GET " + this.request.url,
                    }));
                }
            }
        });
        if (this.routes.length == 0) {
            throw new Error("Create at least one route");
        }
        this.app.on("clientError", (e) => console.log(e));
        this.app.listen(this.port, callback);
    }
}
exports.MyHTTP = MyHTTP;
exports.default = MyHTTP;
