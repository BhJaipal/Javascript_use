import React from 'react';
import $ from "./jquery.js";
import ThreeD from "./3d.js";
import strToNum from "./type-strict.jsx";

export default class Cube{
    calculate() {
        let cube= new ThreeD.Cuboid(strToNum($("#side").val));
        let out= `Total Surface Area: ${cube.TotalSurfaceArea()}\nLateral Surface Area: ${cube.LateralSurfaceArea()}\nVolume: ${cube.Volume()}\nLength of Diagonal: ${cube.Diagonal()}`;
        setOutput(out);
    }
    render () {
        return (
            <div className="cube">
                <Label htmlFor="side">Side: </Label>
                <Input:number id="side"></Input:number>
                <Button:button onClick={calculate}>Submit</Button:button>
            </div>
        )
    }
}