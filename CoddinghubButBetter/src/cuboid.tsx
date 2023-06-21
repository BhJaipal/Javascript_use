import * as React from 'react';
// import { Component, useState } from 'react';
import $ from "./jquery.js";
import ThreeD from "./3d.jsx";
import strToNum from "./type-strict.jsx";

export default class Cuboid {
    calculate() {
        let cuboid= new ThreeD.Cuboid(strToNum($("#len").val), strToNum($("#brea").val), strToNum($("#hei").val));
        let out= `Total Surface Area: ${cuboid.TotalSurfaceArea()}\nLateral Surface Area: ${cuboid.LateralSurfaceArea()}\nVolume: ${cuboid.Volume()}\nLength of Diagonal: ${cuboid.Diagonal()}`;
        setOutput(out);
    }
    render() {
        return (
            <div className="cuboid">
                <Label htmlFor="len">Length: </Label>
                <Input:number id="len"></Input:number><br />
                <Label htmlFor="brea">Breadth: </Label>
                <Input:number id="brea"></Input:number><br />
                <Label htmlFor="hei">Height: </Label>
                <Input:number id="hei"></Input:number><br />
                <Button:submit id="submit" onClick={calculate}>Submit</Button:submit>
            </div>
        );
    }
}