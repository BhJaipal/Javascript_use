import { IncomingMessage } from "http";
import { RequestArgs } from "./Request";
import { IResponse } from "./Response";
export type getCallBack = (
	req: RequestArgs,
	res: IResponse
) => {
	data: string;
	req: RequestArgs;
	res: {
		status: number;
	};
};
/**
 * @returns MyHTTP object
 * @see examples [here](../examples/index.js)
 */
declare class MyHTTP {
	private app;
	private port;
	private routes;
	private headers;
	private request;
	private response;
	constructor();
	/**
	 * @param req IncomingMessage request
	 * @returns request body
	 */
	private handleRequestBody(req: IncomingMessage): Promise<unknown>;
	/**
	 * @returns checks if route is dynamic or not
	 */
	isRouteDynamic(route: string): boolean;
	/**
	 * @returns Checks if route has query parameters or not
	 */
	doesRouteHasQuery(route: string): boolean;
	/**
	 * @description Adds routes with `GET` method and callback
	 */
	get(route: string, callback: getCallBack): void;
	/**
	 * @description Adds routes with `POST` method and callback
	 */
	post(route: string, callback: getCallBack): void;
	/**
	 * @description Starts the http server
	 */
	listen(port: number, callback?: () => void): void;
}
export { MyHTTP };
export default MyHTTP;
