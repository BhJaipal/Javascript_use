import Document from "document";
import Window from "window";

let num1= 0, num2=0, result=0;
let operator= "";

function nums(num) {
	Document.getElementById("input-box").value += String(num);
}

function one() {
    nums(1);
};
function two() {
    nums(2);
};
function three() {
    nums(3);
};
function four() {
    nums(4);
};
function five() {
    nums(5);
};
function six() {
    nums(6);
};
function seven() {
    nums(7);
};
function eight() {
    nums(8);
};
function nine() {
    nums(9);
};
function zero() {
    nums(0);
};
function dec() {
    nums(".");
}

function add() {
    num1= Number(Document.getElementById("input-box").value);
    Document.getElementById("input-box").value= "";
    Document.getElementById("input-box").placeholder= num1+ "+";
    operator="+";
}
function sub() {
    num1= Number(Document.getElementById("input-box").value);
    Document.getElementById("input-box").value= "";
    Document.getElementById("input-box").placeholder= num1+ "-";
    operator="-";
}
function mul() {
    num1= Number(Document.getElementById("input-box").value);
    Document.getElementById("input-box").value= "";
    Document.getElementById("input-box").placeholder= num1+ "×";
    operator="×";
}
function div() {
    num1= Number(Document.getElementById("input-box").value);
    Document.getElementById("input-box").value= "";
    Document.getElementById("input-box").placeholder= num1+ "÷";
    operator="÷";
}

function eq() {
    switch (operator) {
        case '+':
            num2= Number(Document.getElementById("input-box").value);
            result= num1+ num2;
            Document.getElementById("input-box").value= result;
            num1= result;
            break;
        case "-":
            num2= Number(Document.getElementById("input-box").value);
            result= num1- num2;
            Document.getElementById("input-box").value= result;
            num1= result;
            break;
        case '×':
            num2= Number(Document.getElementById("input-box").value);
            result= num1* num2;
            Document.getElementById("input-box").value= result;
            num1= result;
            break;
        case '÷':
            num2= Number(Document.getElementById("input-box").value);
            if (num2==0) {
                Window.alert("Cannot divide by Zero");
            }
            else {
                result= num1/ num2;
                Document.getElementById("input-box").value= result;
                num1= result;
            }
            break;
    }
}

function clear() {
    Document.getElementById("input-box").value= "";
    Document.getElementById("input-box").placeholder="";
    num1= 0; operator="";
}
function del() {
    let inp= Document.getElementById("input-box").value;
    let j=inp;
    inp="";
    for (var i = 0; i < j.length-1; i++) {
        inp+= j[i];
    }
    Document.getElementById("input-box").value= inp;
}
function neg() {
    let input= -(Number(Document.getElementById("input-box").value));
    Document.getElementById("input-box").value= String(input);
}
