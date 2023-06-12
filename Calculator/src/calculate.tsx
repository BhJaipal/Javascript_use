import OperateBtn from './operateBtn.jsx';
import NumberBtn from './numberBtn.jsx';
import * as React from 'react';
import { useState } from 'react';

const Calculate= () => {
    const [value, setValue]= useState("0");
    const [num1, setNum1]= useState(0);
    const [num2, setNum2]= useState(0);
    const [preoperator, setPreoperator]= useState("");

    function setValue(newValue: number, changeType: string): void {
        if (changeType== "append") {
        value= value + newValue.toString();
        } else if (changeType== "change") {
            value= newValue;
        }
    }
    function setNum1() {
        num1= Number(value);
    }
    function setNum2() {
        num2= Number(value);
    }
    function setPreoperator() {
        preoperator= operator;
    }
    function operate(operator) {
        if (operator == ".") {
            value= value + ".";
        }
        else if(operator == "=") {
            let result: number;
            setNum2();
            if (preoperator == "+") {
                result = num1 + num2;
            }
            else if (preoperator == "-") {
                result= num1 - num2;
            }
            else if (preoperator == "*") {
                result= num1 * num2;
            }
            else {
                result= num1 / num2;
            }
            setValue(result, "change");
        }
        else {
            setPreoperator();
            setNum1();
        }
    }
    return(
        <>
            <input id="input" value={value} disabled></input>
            <div id="button-board">
                <NumberBtn value={1} onClick={setValue(1, "append")} />
                <NumberBtn value={2} onClick={setValue(2, "append")} />
                <NumberBtn value={3} onClick={setValue(3, "append")} />
                <NumberBtn value={4} onClick={setValue(4, "append")} />
                <NumberBtn value={5} onClick={setValue(5, "append")} />
                <NumberBtn value={6} onClick={setValue(6, "append")} />
                <NumberBtn value={7} onClick={setValue(7, "append")} />
                <NumberBtn value={8} onClick={setValue(8, "append")} />
                <NumberBtn value={9} onClick={setValue(9, "append")} />
                <NumberBtn value={0} onClick={setValue(0, "append")} />
                <OperateBtn value={"."} onClick={operate(".")} />
                <OperateBtn value={"+"} onClick={operate("+"), setNum1, setPreoperator} />
                <OperateBtn value={"-"} onClick={operate("-"), setNum1, setPreoperator} />
                <OperateBtn value={"×"} onClick={operate("*"), setNum1, setPreoperator} />
                <OperateBtn value={"÷"} onClick={operate("/"), setNum1, setPreoperator} />
                <OperateBtn value={"="} onClick={operate("="), setNum2} />
            </div>
        </>
    );
};
export default Calculate;