let { MyHTTP } = require("../dist");
let path = require("path");

let app = new MyHTTP();

app.get("/", (_, res) => {
	res.contentType("plain");
	return res.send("Hello World");
});
app.get("/test", (_, res) => {
	res.contentType("json");
	return res.sendJSON({ data: "test" })
});
app.get("/about", (_, res) => {
	res.contentType("html");
	return res.sendFile(path.join(__dirname, "index.html"), "About Page");
})
app.get("/error", (_, res) => {
	res.contentType("json");
	return res.sendError(500, "Internal Server Error");
})
app.get("/body", (req, res) => {
	req.body = req.body || {};
	console.log(req.body);
	if (typeof req.body == "object") {
		res.contentType("json");
		return res.sendJSON(req.body);
	}
	return res.send(req.body);
})
app.get("/search/:id", (req, res) => {
	return res.send("Route with id: " + req.param.id);
})
app.post("/query", (req, res) => {
	if (req.query == null) {
		return res.sendError(400, "Bad Request");
	}
	let { category, item } = req.query;
	console.log(req.query);
	return res.send("Category: " + category + "\tItem: " + item);
})
app.listen(2000, () => {
	console.log("Listening on port http://localhost:2000/");
});