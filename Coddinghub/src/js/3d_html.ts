import Document from "document";
import Window from "window";
import * as Shapes from "./3d";

let sph_dis = Document.getElementsByClassName("sphere")[0];
let cube_dis = Document.getElementsByClassName("cube")[0];
let cubo_dis = Document.getElementsByClassName("cuboid")[0];
let cyl_dis = Document.getElementsByClassName("cylinder")[0];
const output= Document.getElementById("output");
sph_dis.style.display = "none";
cyl_dis.style.display = "none";
cubo_dis.style.display= "none";
cube_dis.style.display= "none";

const shape_sub= Document.getElementById("shap_sub");
shape_sub.addEventListener("click", function() {
    shapes = document.getElementById("shape").value;
    if (shapes == "Sphere") {
        sph_dis.style.display = "block";
        cyl_dis.style.display = "none";
        cubo_dis.style.display= "none";
        cube_dis.style.display= "none";
        Document.getElementById("sphere_sub").onclick= function() {
            let rad= parseFloat(document.getElementById("rad").value) || 0;
            var mySphere = new Sphere(rad);
            var sa= mySphere.sphere_tsa(rad);
            var vol= mySphere.sphere_volume(rad);
            output.innerHTML= `Surface area: ${sa}<br>Volume: ${vol}`;
            Window.alert(`Surface area: ${sa}\nVolume: ${vol}`);
        };
    }
    else if (shapes == "Cube") {
        cube_dis.style.display= "block";
        sph_dis.style.display = "none";
        cubo_dis.style.display= "none";
        cyl_dis.style.display = "none";
        Document.getElementById("cube_sub").onclick= function() {
            let side= Document.getElementById("side").value || 0; 
            var myCube= new Cube(side);
            var cub_tsa= myCube.cube_tsa(side);
            var cub_lsa= myCube.cube_lsa(side);
            var cub_vol= myCube.cube_volume(side);
            var cub_dia= myCube.cube_diagonal(side);
            output.innerHTML= `Total Surface area: ${cub_tsa}<br>Volume: ${cub_vol}<br>Lateral Surface area: ${cub_lsa}<br>Length of Diagonal: ${cub_dia}`;
            Window.alert(`Total Surface area: ${cub_tsa} \nVolume: ${cub_vol} \nLateral Surface area: ${cub_lsa} \nLength of Diagonal: ${cub_dia}`);
        };
    }
    else if (shapes == "Cuboid") {
        cubo_dis.style.display= "block";
        sph_dis.style.display = "none";
        cyl_dis.style.display = "none";
        cube_dis.style.display= "none";
        Document.getElementById("cuboid_sub").onclick= function() {
            let length = Document.getElementById("length").value || 0;
            let breadth= Document.getElementById("breadth").value || 0;
            let height = Document.getElementById("height").value || 0;
            var myCuboid= new Cuboid(length, breadth, height);
            var cbd_tsa= myCuboid.cuboid_tsa(length, breadth, height);
            var cbd_lsa= myCuboid.cuboid_lsa(length, breadth, height);
            var cbd_vol= myCuboid.cuboid_volume(length, breadth, height);
            var cbd_dia= myCuboid.cuboid_diagonal(length, breadth, height);
            output.innerHTML= `Total Surface area: ${cbd_tsa}<br>Volume: ${cbd_vol}<br>Lateral Surface area: ${cbd_lsa}<br>Length of Diagonal: ${cbd_dia}`;
            Window.alert(`Total Surface area: ${cbd_tsa} \nVolume: ${cbd_vol} \nLateral Surface area: ${cbd_lsa} \nLength of Diagonal: ${cbd_dia}`);
        };
    }
    else if (shapes == "Cylinder") {
        cyl_dis.style.display = "block";
        sph_dis.style.display = "none";
        cubo_dis.style.display= "none";
        cube_dis.style.display= "none";
        Document.getElementById("cylinder_sub").onclick= function() {
            let radis= Document.getElementById("radi").value || 0;
            let  hei = Document.getElementById("hei").value || 0;
            let myCylinder= new Cylinder(radis, hei);
            var cyl_tsa= myCylinder.cylinder_tsa(radis, hei);
            var cyl_csa= myCylinder.cylinder_csa(radis, hei);
            var cyl_vol= myCylinder.cylinder_volume(radis, hei);
            output.innerHTML= `Total Surface area: ${cyl_tsa}<br>Volume: ${cyl_vol}<br>Curved Surface area: ${cyl_csa}`;
            Window.alert(`Total Surface area: ${cyl_tsa} \nVolume: ${cyl_vol} \nCurved Surface area: ${cyl_lsa}`);
        };
    }
    else {
        Window.alert("Please select an option");
        console.log("Please select an option");
    }
});
  
var cook=document.getElementById("cook");
var btn1=document.getElementById("Ok");
btn1.addEventListener("click",function() {
    Window.alert("Thanks for accepting Cookies");
    cook.style.display="none";
});

var btn2=document.getElementById("Cancel");
btn2.addEventListener("click",function() {
    Window.alert("Please accept cookies on your next visit");
    cook.style.display="none";
});
