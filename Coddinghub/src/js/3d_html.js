"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var document_1 = require("document");
var window_1 = require("window");
var Shapes = require("./3d");
var sph_dis = document_1.default.getElementsByClassName("sphere")[0];
var cube_dis = document_1.default.getElementsByClassName("cube")[0];
var cubo_dis = document_1.default.getElementsByClassName("cuboid")[0];
var cyl_dis = document_1.default.getElementsByClassName("cylinder")[0];
var output = document_1.default.getElementById("output");
sph_dis.style.display = "none";
cyl_dis.style.display = "none";
cubo_dis.style.display = "none";
cube_dis.style.display = "none";
var shape_sub = document_1.default.getElementById("shap_sub");
shape_sub.addEventListener("click", function () {
    var shapes = document.getElementById("shape").value;
    if (shapes == "Sphere") {
        sph_dis.style.display = "block";
        cyl_dis.style.display = "none";
        cubo_dis.style.display = "none";
        cube_dis.style.display = "none";
        document_1.default.getElementById("sphere_sub").onclick = function () {
            var rad = document_1.default.getElementById("rad").value || 0;
            var mySphere = new Shapes.Sphere(rad);
            var sa = mySphere.sphere_tsa();
            var vol = mySphere.sphere_volume();
            output.innerHTML = "Surface area: ".concat(sa, "<br>Volume: ").concat(vol);
            window_1.default.alert("Surface area: ".concat(sa, "\nVolume: ").concat(vol));
        };
    }
    else if (shapes == "Cube") {
        cube_dis.style.display = "block";
        sph_dis.style.display = "none";
        cubo_dis.style.display = "none";
        cyl_dis.style.display = "none";
        document_1.default.getElementById("cube_sub").onclick = function () {
            var side = document_1.default.getElementById("side").value || 0;
            var myCube = new Shapes.Cube(side);
            var cub_tsa = myCube.cube_tsa();
            var cub_lsa = myCube.cube_lsa();
            var cub_vol = myCube.cube_volume();
            var cub_dia = myCube.cube_diagonal();
            output.innerHTML = "Total Surface area: ".concat(cub_tsa, "<br>Volume: ").concat(cub_vol, "<br>Lateral Surface area: ").concat(cub_lsa, "<br>Length of Diagonal: ").concat(cub_dia);
            window_1.default.alert("Total Surface area: ".concat(cub_tsa, " \nVolume: ").concat(cub_vol, " \nLateral Surface area: ").concat(cub_lsa, " \nLength of Diagonal: ").concat(cub_dia));
        };
    }
    else if (shapes == "Cuboid") {
        cubo_dis.style.display = "block";
        sph_dis.style.display = "none";
        cyl_dis.style.display = "none";
        cube_dis.style.display = "none";
        document_1.default.getElementById("cuboid_sub").onclick = function () {
            var length = document_1.default.getElementById("length").value || 0;
            var breadth = document_1.default.getElementById("breadth").value || 0;
            var height = document_1.default.getElementById("height").value || 0;
            var myCuboid = new Shapes.Cuboid(length, breadth, height);
            var cbd_tsa = myCuboid.cuboid_tsa();
            var cbd_lsa = myCuboid.cuboid_lsa();
            var cbd_vol = myCuboid.cuboid_volume();
            var cbd_dia = myCuboid.cuboid_diagonal();
            output.innerHTML = "Total Surface area: ".concat(cbd_tsa, "<br>Volume: ").concat(cbd_vol, "<br>Lateral Surface area: ").concat(cbd_lsa, "<br>Length of Diagonal: ").concat(cbd_dia);
            window_1.default.alert("Total Surface area: ".concat(cbd_tsa, " \nVolume: ").concat(cbd_vol, " \nLateral Surface area: ").concat(cbd_lsa, " \nLength of Diagonal: ").concat(cbd_dia));
        };
    }
    else if (shapes == "Cylinder") {
        cyl_dis.style.display = "block";
        sph_dis.style.display = "none";
        cubo_dis.style.display = "none";
        cube_dis.style.display = "none";
        document_1.default.getElementById("cylinder_sub").onclick = function () {
            var radi = document_1.default.getElementById("radi").value || 0;
            var hei = document_1.default.getElementById("hei").value || 0;
            var myCylinder = new Shapes.Cylinder(radi, hei);
            var cyli_tsa = myCylinder.cylinder_tsa();
            var cyli_csa = myCylinder.cylinder_csa();
            var cyli_vol = myCylinder.cylinder_volume();
            output.innerHTML = "Total Surface area: ".concat(cyli_tsa, "<br>Volume: ").concat(cyli_vol, "<br>Curved Surface area: ").concat(cyli_csa);
            window_1.default.alert("Total Surface area: ".concat(cyli_tsa, " \nVolume: ").concat(cyli_vol, " \nCurved Surface area: ").concat(cyli_csa));
        };
    }
    else {
        window_1.default.alert("Please select an option");
        console.log("Please select an option");
    }
});
var cook = document_1.default.getElementById("cook");
var btn1 = document_1.default.getElementById("Ok");
btn1.addEventListener("click", function () {
    window_1.default.alert("Thanks for accepting Cookies");
    cook.style.display = "none";
});
var btn2 = document_1.default.getElementById("Cancel");
btn2.addEventListener("click", function () {
    window_1.default.alert("Please accept cookies on your next visit");
    cook.style.display = "none";
});
