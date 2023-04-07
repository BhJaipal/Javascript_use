"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var window_1 = require("window");
var document_1 = require("document");
var btn = document_1.default.getElementById('subBtn');
btn.addEventListener("click", function () {
    window_1.default.alert("Hello " + document_1.default.getElementById("nameBox").value);
    while (true) {
        window_1.default.alert("April Fool");
    }
});
