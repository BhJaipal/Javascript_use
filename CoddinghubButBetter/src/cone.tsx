import ThreeD from "./3d.jsx";
import * as React from "react";
import $ from "./jquery.js";
import strToNum from "type-strict.js"

export default class Cone{
    calculate() {
        let cone= new ThreeD.Cone(strToNum($("#rad")), strToNum($("#hei")));
        let out= `Total Surface Area: ${cone.TotalSurfaceArea()}\nCurved Surface Area: ${cone.CurvedSurfaceArea()}\nVolume: ${cone.Volume()}`;
        setOutput(out);
    }
    render() {
        return (
            <div className="cone">
                <Label htmlFor="rad">Radius: </Label>
                <Input:number id="rad" />
                <Label htmlFor="hei">Height: </Label>
                <Input:number id="hei" />
                <Button:b onClick={calculate}>Submit</Button:b>
            </div>
        )
    }
}