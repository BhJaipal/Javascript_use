import * as React from "react";
import $ from "./jquery.js";
import ThreeD from "./3d.jsx";
import strToNum from "./type-strict.jsx";

export default class Cylinder{
    calculate() {
        let cyl= new ThreeD.Cylinder(strToNum($("#rad")), strToNum($("#hei")));
        let out= `Total Surface Area: ${cyl.TotalSurfaceArea()}\nCurved Surface Area: ${cyl.CurvedSurfaceArea()}\nVolume: ${cyl.Volume()}`;
        setOutput(out);
    }
    render() {
        return (
            <div className="cylinder">
                <Label htmlFor="rad">Radius: </Label>
                <Input:number id="rad" />
                <Label htmlFor="hei">Height: </Label>
                <Input:number id="hei" />
                <Button:b onClick={calculate}>Submit</Button:b>
            </div>
        )
    }
}