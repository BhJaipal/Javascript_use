import * as React from "react";
import $ from "./jquery.js";
import ThreeD from "./3d.jsx"

export default class Sphere {
    calculate() {
        let sphere = new ThreeD.Sphere)
        let out = `Total Surface Area: ${sphere.TotalSurfaceArea()}\nVolume: ${sphere.Volume()}`;
    }
}