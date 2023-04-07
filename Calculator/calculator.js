"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("document");
var window_1 = require("window");
var num1 = 0, num2 = 0, result = 0;
var operator = "";
function nums(num) {
    document_1.default.getElementById("input-box").value += String(num);
}
function one() {
    nums(1);
}
;
function two() {
    nums(2);
}
;
function three() {
    nums(3);
}
;
function four() {
    nums(4);
}
;
function five() {
    nums(5);
}
;
function six() {
    nums(6);
}
;
function seven() {
    nums(7);
}
;
function eight() {
    nums(8);
}
;
function nine() {
    nums(9);
}
;
function zero() {
    nums(0);
}
;
function dec() {
    nums(".");
}
function add() {
    num1 = Number(document_1.default.getElementById("input-box").value);
    document_1.default.getElementById("input-box").value = "";
    document_1.default.getElementById("input-box").placeholder = num1 + "+";
    operator = "+";
}
function sub() {
    num1 = Number(document_1.default.getElementById("input-box").value);
    document_1.default.getElementById("input-box").value = "";
    document_1.default.getElementById("input-box").placeholder = num1 + "-";
    operator = "-";
}
function mul() {
    num1 = Number(document_1.default.getElementById("input-box").value);
    document_1.default.getElementById("input-box").value = "";
    document_1.default.getElementById("input-box").placeholder = num1 + "×";
    operator = "×";
}
function div() {
    num1 = Number(document_1.default.getElementById("input-box").value);
    document_1.default.getElementById("input-box").value = "";
    document_1.default.getElementById("input-box").placeholder = num1 + "÷";
    operator = "÷";
}
function eq() {
    switch (operator) {
        case '+':
            num2 = Number(document_1.default.getElementById("input-box").value);
            result = num1 + num2;
            document_1.default.getElementById("input-box").value = result;
            num1 = result;
            break;
        case "-":
            num2 = Number(document_1.default.getElementById("input-box").value);
            result = num1 - num2;
            document_1.default.getElementById("input-box").value = result;
            num1 = result;
            break;
        case '×':
            num2 = Number(document_1.default.getElementById("input-box").value);
            result = num1 * num2;
            document_1.default.getElementById("input-box").value = result;
            num1 = result;
            break;
        case '÷':
            num2 = Number(document_1.default.getElementById("input-box").value);
            if (num2 == 0) {
                window_1.default.alert("Cannot divide by Zero");
            }
            else {
                result = num1 / num2;
                document_1.default.getElementById("input-box").value = result;
                num1 = result;
            }
            break;
    }
}
function clear() {
    document_1.default.getElementById("input-box").value = "";
    document_1.default.getElementById("input-box").placeholder = "";
    num1 = 0;
    operator = "";
}
function del() {
    var inp = document_1.default.getElementById("input-box").value;
    var j = inp;
    inp = "";
    for (var i = 0; i < j.length - 1; i++) {
        inp += j[i];
    }
    document_1.default.getElementById("input-box").value = inp;
}
function neg() {
    var input = -(Number(document_1.default.getElementById("input-box").value));
    document_1.default.getElementById("input-box").value = String(input);
}
