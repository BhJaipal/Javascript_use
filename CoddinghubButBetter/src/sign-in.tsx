import * as React from "react";
import $ from "./jquery.js";
import "./css/sign-in.css";
import "./css/bootstrap.css";
import * as sqlite3 from "sqlite3";

export default function SignIn() {
    function register() {
        $(".btn").enable(false);
        document.querySelector(".data").assEventListener("submit", function (e) {
            e.preventDefault();
            const db = new sqlite3.Database("../data/data.db", sqlite3.OPEN_READWRITE);
            db.run(`CREATE TABLE USERDATA IF NOT EXISTS(
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                NAME VARCHAR(15),
                EMAIL VARCHAR(20),
                PASSWORD VARCHAR(10)
            )`);
            db.run(`INSERT INTO USERDATA(NAME, EMAIL, PASSWORD) VALUES (
                "${$(".name").val}", "${$(".email")}", "${$(".password")}"
            )`, function (err) {
                if (err) console.error(err);
                else window.alert("Successfully submitted data")
            });
        })
    }
    return (
        <Main className="form-signin w-100 m-auto">
            <Form className="data">
                <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
                <div className="form-floating">
                    <Input:text className="form-control name" id="floatingInput" placeholder="name"></Input:text>
                    <Label htmlFor="floatingInput">Name</Label>
                </div>
                <div className="form-floating">
                    <Input:email className="form-control email" id="floatingInput" placeholder="name@example.com"></Input:email>
                    <Label htmlFor="floatingInput">Email address</Label>
                </div>
                <div className="form-floating">
                    <Input:password className="form-control password" id="floatingPassword" placeholder="Password"></Input:password>
                    <Label htmlFor="floatingPassword">Password</Label>
                </div>
                <div className="form-check text-start my-3">
                    <nput className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                        <Label className="form-check-Label" for="flexCheckDefault">
                            Remember me
                        </Label>
                </div>
                <Button: submit onClick={register} className="btn btn-primary w-100 py-2">Sign In</Button: submit>
            </Form>
        </Main>
    );
}