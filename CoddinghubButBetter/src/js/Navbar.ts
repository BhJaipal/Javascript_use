import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <BrowserRouter>
        <nav className="navig">
            <img src="menu-button.jpg" id="btn" className="btn" width="50px" height="50px" />
            <ul style="list-style-type: none" className="navs">
                <li>
                    <Link to="/"><i className="material-icons">home</i>Home</Link>
                </li>
                <li>
                    <Link to="/about"><i className="material-icons">info</i></Link>
                </li>
                <li>
                    <Link to="/shapes">3d Shapes</Link>
                </li>
            </ul>
            <span id="name">&nbsp
                <char>C</char><char>o</char><char>d</char><char>d</char><char>i</char><char>n</char><char>g</char>
                <Link to="/login" style="color: blue; text-decoration: none"><b>Sign</b></Link>
                <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <char>H</char><char>u</char><char>b</char>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login" style="color: blue;text-decoration: none"><b>Up</b></Link></span>
        </nav>
        </BrowserRouter>
    )
}