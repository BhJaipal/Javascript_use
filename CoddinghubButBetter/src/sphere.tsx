import * as React from "react";
import $ from "./jquery.js";
import ThreeD from "./3d.tsx"

export default class Sphere {
    calculate() {
        let sphere = new ThreeD.Sphere(strToNum($("#rad").val));
        let out = `Total Surface Area: ${sphere.TotalSurfaceArea()}\nVolume: ${sphere.Volume()}`;
        setOutput(out);
    }
    render () {
        return (
            <div className="sphere">
                </I>nput
            </div>
        )
    }
}