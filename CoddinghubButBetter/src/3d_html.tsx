import * as React from 'react';
import $ from "jquery.js";
import Sphere from './sphere.js';
import Cube from './cube.js';
import Cuboid from './cuboid.js';
import Cylinder from './cylinder.js';
import Cone from './cone.js';

export default class ThreeD extends React.Component{
    ShapeSubmit() {
        switch ($("#shape").val) {
            case "Sphere":
                return (<Sphere />);
            case "Cube":
                return (<Cube />);
            case "Cuboid":
                return (<Cuboid />);
            case "Cylinder":
                return (<Cylinder />);
            case "Cone":
                return (<Cone />);
            default:
                Window.prototype.alert("Please select any one");
        }
    }
    render() {
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
                <button onClick={ShapeSubmit}></button>
            </React.Fragments>
        )
    }
}