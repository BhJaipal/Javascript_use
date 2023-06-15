import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ThreeD from "./3d_html.jsx";

export default function App() {
    return (
        <BrowserRouter>
        <nav className="navig">
            <Button:button id="btn" className="btn" width="50px" height="50px"></Button:button>
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
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
            </ul>
            <h3>Codding hub</h3>
        </nav>
        <Route from="/">
            <Home />
        </Route>
        <Route from="/about">
            <About />
        </Route>
        <Route from="/shapes">
            <ThreeD />
        </Route>
        <Route from="/sign-in">
            <SignIn />
        </Route>
        </BrowserRouter>
    )
}
function Home() {
    return (
        <div>
            <h3>Hello</h3>
        </div>
    )
}