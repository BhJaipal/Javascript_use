let num1= 0, num2=0, result=0;
let operator= "";

function one() {
    document.getElementById('input-box').value+= document.getElementById("1").innerHTML;
};
function two() {
    document.getElementById('input-box').value+= document.getElementById("2").innerHTML;
};
function three() {
    document.getElementById('input-box').value+= document.getElementById("3").innerHTML;
};
function four() {
    document.getElementById('input-box').value+= document.getElementById("4").innerHTML;
};
function five() {
    document.getElementById('input-box').value+= document.getElementById("5").innerHTML;
};
function six() {
    document.getElementById('input-box').value+= document.getElementById("6").innerHTML;
};
function seven() {
    document.getElementById('input-box').value+= document.getElementById("7").innerHTML;
};
function eight() {
    document.getElementById('input-box').value+= document.getElementById("8").innerHTML;
};
function nine() {
    document.getElementById('input-box').value+= document.getElementById("9").innerHTML;
};
function zero() {
    document.getElementById('input-box').value+= document.getElementById("0").innerHTML;
};
function dec() {
    document.getElementById('input-box').value+= document.getElementById("dec").innerHTML;
}

function add() {
    num1= Number(document.getElementById("input-box").value);
    document.getElementById("input-box").value= "";
    document.getElementById("input-box").placeholder= num1+ "+";
    operator="+";
}
function sub() {
    num1= Number(document.getElementById("input-box").value);
    document.getElementById("input-box").value= "";
    document.getElementById("input-box").placeholder= num1+ "-";
    operator="-";
}
function mul() {
    num1= Number(document.getElementById("input-box").value);
    document.getElementById("input-box").value= "";
    document.getElementById("input-box").placeholder= num1+ "×";
    operator="×";
}
function div() {
    num1= Number(document.getElementById("input-box").value);
    document.getElementById("input-box").value= "";
    document.getElementById("input-box").placeholder= num1+ "÷";
    operator="÷";
}

function eq() {
    switch (operator) {
        case '+':
            num2= Number(document.getElementById("input-box").value);
            result= num1+ num2;
            document.getElementById("input-box").value= result;
            num1= result;
            break;
        case "-":
            num2= Number(document.getElementById("input-box").value);
            result= num1- num2;
            document.getElementById("input-box").value= result;
            num1= result;
            break;
        case '×':
            num2= Number(document.getElementById("input-box").value);
            result= num1* num2;
            document.getElementById("input-box").value= result;
            num1= result;
            break;
        case '÷':
            num2= Number(document.getElementById("input-box").value);
            if (num2==0) {
                window.alert("Cannot divide by Zero");
            }
            else {
                result= num1/ num2;
                document.getElementById("input-box").value= result;
                num1= result;
            }
            break;
    }
}

function clear() {
    document.getElementById("input-box").value= "";
    document.getElementById("input-box").placeholder="";
    num1= 0; operator="";
}
function del() {
    let inp= document.getElementById("input-box").value;
    let j=inp;
    inp="";
    for (var i = 0; i < j.length-1; i++) {
        inp+= j[i];
    }
    document.getElementById("input-box").value= inp;
}
function neg() {
    let input= -(Number(document.getElementById("input-box").value));
    document.getElementById("input-box").value= String(input);
}