import * as React from "react";
import $ from "./jquery.js";
import ThreeD from "./3d.jsx"

export default class Sphere {
    calculate() {
        let sphere = new ThreeD.Sp
        let out = `Total Surface Area: ${sphere.TotalSurfaceArea()}\nVolume: ${sphere.Volume()}`;
    }
}