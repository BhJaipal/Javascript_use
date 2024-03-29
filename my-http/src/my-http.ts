import { Socket } from "net";
import { defaultRequest, RequestArgs } from "./Request";
import http from "http";
import { IResponse } from "./Response";

export type getCallBack = (
	req: RequestArgs,
	res: IResponse
) => {
	data: string;
	req: RequestArgs;
	res: { status: number };
};
/**
 * @returns MyHTTP object
 * @see examples [here](../examples/index.js)
 */
class MyHTTP {
	private app: http.Server;
	private port: number;
	private routes: Array<string | undefined>;
	private headers: Map<
		string,
		{ callback: getCallBack; method: "GET" | "POST"; isDynamic: boolean }
	>;
	private request: http.IncomingMessage;
	private response: http.ServerResponse;
	constructor() {
		this.port = 0;
		this.headers = new Map<
			string,
			{
				callback: getCallBack;
				method: "GET" | "POST";
				isDynamic: boolean;
			}
		>();
		this.routes = [];
		this.request = new http.IncomingMessage(new Socket({}));
		this.response = new http.ServerResponse(this.request);
		this.app = http.createServer((req, res) => {
			this.request = req;
			this.response = res;
		});
	}
	/**
	 * @param req IncomingMessage request
	 * @returns request body
	 */
	private handleRequestBody(req: http.IncomingMessage): Promise<unknown> {
		return new Promise((resolve, reject) => {
			let bodyData = "";
			req.on("data", (chunk) => {
				bodyData += chunk.toString();
			});
			req.on("end", () => {
				const contentType = req.headers["content-type"];
				if (contentType === "application/json") {
					resolve(JSON.parse(bodyData));
				} else if (contentType === "text/plain") {
					resolve(bodyData);
				} else {
					reject("No body found");
				}
			});
		});
	}
	/**
	 * @returns checks if route is dynamic or not
	 */
	isRouteDynamic(route: string) {
		return (
			route.match(
				/\/\w+(-\w+)?(\/\w+(-\w+)?)?\/:\w+(-\w+)?(\/\w+(-\w+)?)?/g
			) != null
		);
	}
	/**
	 * @returns Checks if route has query parameters or not
	 */
	doesRouteHasQuery(route: string) {
		return (
			route.match(
				/\/\w+(-\w+)?(\/\w+(-\w+)?)?\?\w+=[\d\w]+(&\w+=[\d\w]+)?/g
			) != null
		);
	}
	/**
	 * @description Adds routes with `GET` method and callback
	 */
	get(route: string, callback: getCallBack) {
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
	post(route: string, callback: getCallBack) {
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
	listen(port: number, callback?: () => void) {
		this.port = port;
		this.app.on("request", async (req, res) => {
			this.request = req;
			this.response = res;
			// Query variables
			let checkIfRouteHasQuery = this.doesRouteHasQuery(
				this.request.url != undefined ? this.request.url : ""
			);
			let routeQuery: string | undefined;
			let routeQueryVariables: { [key: string]: string } = {};
			let routeWithoutQuery: string | undefined;
			/// check if route has query
			if (checkIfRouteHasQuery && this.request.url != undefined) {
				routeWithoutQuery = this.request.url.split("?")[0];
				let remainingRoute =
					this.request.url.split("?")[1].split("/")[1] ?? "";
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
			if (
				this.request.url != undefined &&
				this.request.url.endsWith("/") &&
				this.request.url != "/"
			) {
				this.request.url = this.request.url.slice(
					0,
					this.request.url.length - 1
				);
			}
			let RouteParamName: string | undefined;
			let routeHasParam: string = "";
			let routeWithParam: string = "";
			for (let [key, val] of this.headers) {
				if (val.isDynamic) {
					routeHasParam = key;
					routeWithParam = key;
					RouteParamName = key.split("/:")[1].split("/")[0];
					routeHasParam = routeHasParam.split("/:")[0];
					if (
						this.request.url != undefined &&
						this.request.url.match(routeHasParam) != null
					) {
						break;
					}
				} else {
					RouteParamName = undefined;
				}
			}
			let body: unknown;
			try {
				body = await this.handleRequestBody(this.request);
			} catch (e) {
				console.error(e);
			}
			if (this.request.url != undefined) {
				/// If there is a route with parameter
				if (
					routeHasParam != undefined &&
					this.request.url.match(routeHasParam) != null &&
					this.request.url !== routeHasParam &&
					routeWithParam != undefined &&
					RouteParamName != undefined
				) {
					let header = this.headers.get(routeWithParam);
					if (header != undefined) {
						this.request.method = header.method;
						let paramValue = this.request.url.slice(
							this.request.url.lastIndexOf(
								routeHasParam[routeHasParam.length - 1]
							)
						);
						let reqWithRouteParam = {
							...defaultRequest,
							param: {
								[RouteParamName]: paramValue.split("/")[1],
							},
							query:
								JSON.stringify(routeQueryVariables) != "{}"
									? routeQueryVariables
									: null,
							body: body != undefined ? body : null,
						};
						let callbackOut = header.callback(
							reqWithRouteParam,
							new IResponse(defaultRequest)
						);
						this.request.headers = {
							accept: callbackOut.req.accept,
							"content-encoding": callbackOut.req.encoding,
							"content-type": callbackOut.req.contentType,
						};
						this.request.method = header.method;
						let status =
							callbackOut.res.status != undefined
								? callbackOut.res.status
								: 200;
						this.response.writeHead(status);
						this.response.end(callbackOut.data);
					}
					/// If there is a route without parameter
				} else if (
					this.routes.includes(this.request.url) &&
					this.headers.get(this.request.url) != undefined
				) {
					let header = this.headers.get(this.request.url);
					if (header != undefined) {
						this.request.method = header.method;
						let reqWithoutRouteParam: RequestArgs = {
							...defaultRequest,
							query:
								JSON.stringify(routeQueryVariables) != "{}"
									? routeQueryVariables
									: null,
							body: body != undefined ? body : null,
						};
						let callbackOut = header.callback(
							reqWithoutRouteParam,
							new IResponse(defaultRequest)
						);
						this.request.headers = {
							accept: callbackOut.req.accept,
							"content-encoding": callbackOut.req.encoding,
							"content-type": callbackOut.req.contentType,
						};
						this.request.method = header.method;
						let status =
							callbackOut.res.status != undefined
								? callbackOut.res.status
								: 200;
						this.response.writeHead(status);
						this.response.end(callbackOut.data);
					}
					/// If there is no route
				} else {
					let err_404: RequestArgs;
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
					this.response.end(
						JSON.stringify({
							status: 404,
							message: "Cannot GET " + this.request.url,
						})
					);
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
export { MyHTTP };
export default MyHTTP;
