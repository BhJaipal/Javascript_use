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
    var shapes = (<HTMLSelectElement>document.getElementById("shape")).value;
    if (shapes == "Sphere") {
        sph_dis.style.display = "block";
        cyl_dis.style.display = "none";
        cubo_dis.style.display= "none";
        cube_dis.style.display= "none";
        Document.getElementById("sphere_sub").onclick= function() {
            let rad: number= Document.getElementById("rad").value || 0;
            var mySphere: Shapes.Sphere = new Shapes.Sphere(rad);
            var sa : number = mySphere.sphere_tsa();
            var vol: number= mySphere.sphere_volume();
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
            let side: number= Document.getElementById("side").value || 0; 
            var myCube: Shapes.Cube = new Shapes.Cube(side);
            var cub_tsa: number= myCube.cube_tsa();
            var cub_lsa: number= myCube.cube_lsa();
            var cub_vol: number= myCube.cube_volume();
            var cub_dia: number= myCube.cube_diagonal();
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
            let length : number= Document.getElementById("length").value || 0;
            let breadth: number= Document.getElementById("breadth").value || 0;
            let height : number= Document.getElementById("height").value || 0;
            var myCuboid: Shapes.Cuboid= new Shapes.Cuboid(length, breadth, height);
            var cbd_tsa: number= myCuboid.cuboid_tsa();
            var cbd_lsa: number= myCuboid.cuboid_lsa();
            var cbd_vol: number= myCuboid.cuboid_volume();
            var cbd_dia: number= myCuboid.cuboid_diagonal();
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
            let radi: number= Document.getElementById("radi").value || 0;
            let hei : number= Document.getElementById("hei").value || 0;
            let myCylinder: Shapes.Cylinder= new Shapes.Cylinder(radi, hei);
            var cyli_tsa: number= myCylinder.cylinder_tsa();
            var cyl_csa: number= myCylinder.cylinder_csa();
            var cyl_vol: number= myCylinder.cylinder_volume();
            output.innerHTML= `Total Surface area: ${cyli_tsa}<br>Volume: ${cyl_vol}<br>Curved Surface area: ${cyl_csa}`;
            Window.alert(`Total Surface area: ${cyli_tsa} \nVolume: ${cyl_vol} \nCurved Surface area: ${cyl_lsa}`);
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
