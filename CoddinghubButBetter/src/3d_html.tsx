import * as React from 'react';
import $ from "jquery.js";

class ThreeD extends React.Component{
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
            </React.Fragments>
        )
    }
}