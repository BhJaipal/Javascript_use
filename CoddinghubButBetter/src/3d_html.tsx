import * as React from "react";
import $ from "jquery.js";
import Sphere from "./sphere.jsx";
import Cube from "./cube.jsx";
import Cuboid from "./cuboid.jsx";
import Cylinder from "./cylinder.jsx";
import Cone from "./cone.jsx";
import { useState, Component } from "react";
import * as Window from "windo"

export default function ThreeD() {
    function ShapeSubmit() {
        switch ($("#shape").val) {
            case "Sphere":
                return <Sphere />;
            case "Cube":
                return <Cube />;
            case "Cuboid":
                return <Cuboid />;
            case "Cylinder":
                return <Cylinder />;
            case "Cone":
                return <Cone />;
            default:
                Window.prototype.alert("Please select any one");
        }
    }
    const [output, setOutput] = useState("");
    function setOutput(out) {
        output = out;
    }
    return (
        <React.Fragments>
            <Label for="shape">Choose a 3D shape</Label>
            <Select id="shape">
                <Option value="Sphere"></Option>
                <Option value="Cube"></Option>
                <Option value="Cuboid"></Option>
                <Option value="Cylinder"></Option>
                <Option value="Cone"></Option>
            </Select>
            <Button:submit onClick={ShapeSubmit}></Button:submit>
            <div id="output">{output}</div>
        </React.Fragments>
    );
}