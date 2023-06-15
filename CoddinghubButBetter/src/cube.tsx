import React from 'react';
import $ from "./jquery.js";
import * as ThreeD from "./3d.jsx";
import strToNum from "./type-strict.jsx";

export default class Cube{
    calculate() {
        let cube= new ThreeD.Cuboid(strToNum($("side").val));
        let out= `Total Surface Area: ${cuboid.TotalSurfaceArea()}\nLateral Surface Area: ${cuboid.LateralSurfaceArea()}\nVolume: ${cuboid.Volume()}\nLength of Diagonal: ${cuboid.Diagonal()}`;
        setOutput
    }
}