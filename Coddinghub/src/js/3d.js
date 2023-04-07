"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var window_1 = require("window");
var pi = 22 / 7;
var Cuboid = /** @class */ (function () {
    function Cuboid(length1, breadth, height) {
        this.len = length1;
        this.brea = breadth;
        this.heig = height;
    }
    Cuboid.prototype.cuboid_tsa = function () {
        return 2 * (this.len * this.brea + this.brea * this.heig + this.len * this.heig);
        /* Total Surface area of Cuboid =
                       2 * (l*b + b*h + l*h)
        */
    };
    Cuboid.prototype.cuboid_lsa = function () {
        return 2 * this.heig * (this.len + this.brea);
        /* Lateral Surface area of Cuboid =
                             2 * (l + b) *h
        */
    };
    Cuboid.prototype.cuboid_volume = function () {
        return this.len * this.heig * this.brea;
        /* Volume of Cuboid = l*b*h
        */
    };
    Cuboid.prototype.cuboid_diagonal = function () {
        return Math.sqrt(Math.pow(this.len, 2) + Math.pow(this.brea, 2) + Math.pow(this.heig, 2));
        /* Diagonal of Cuboid =
            square root of (l^2 + b^2 + h^2)
        */
    };
    Cuboid.prototype.execu = function () {
        console.log("*************** Cuboid ***************");
        console.log("Total Surface area of Cuboid: ", this.cuboid_tsa());
        console.log("Lateral Surface area of Cuboid: ", this.cuboid_lsa());
        console.log("Volume of Cuboid: ", this.cuboid_volume());
        console.log("Diagonal of Cuboid: ", this.cuboid_diagonal());
        console.log("**************************************");
        //Window.alert("************ Cuboid *************"+ "\nTotal Surface area of Cuboid: "+ this.cuboid_tsa()+ "\nLateral Surface area of Cuboid: "+ this.cuboid_lsa() + "\nVolume of Cuboid: "+ this.cuboid_volume() + "\nDiagonal of Cuboid: "+ this.cuboid_diagonal() +"\n********************************");
    };
    return Cuboid;
}());
;
var Cube = /** @class */ (function () {
    function Cube(side) {
        this.side = side;
    }
    Cube.prototype.cube_volume = function () {
        return Math.pow(this.side, 3);
        /* Volume of Cube = a ^ 3
        */
    };
    Cube.prototype.cube_lsa = function () {
        return 4 * this.side * this.side;
        /* Lateral Surface area of Cube =
                                    4 * a^2
        */
    };
    Cube.prototype.cube_tsa = function () {
        return 6 * this.side * this.side;
        /* Total Surface area of Cube =
                                    6 * a^2
        */
    };
    Cube.prototype.cube_diagonal = function () {
        return this.side * 1.732;
        /* Diagonal of Cube = a * root(3)
        */
    };
    Cube.prototype.execu = function () {
        console.log("*************** Cube ***************");
        console.log("Total Surface area of Cube: ", this.cube_tsa());
        console.log("Lateral Surface area of Cube: ", this.cube_lsa());
        console.log("Volume of Cube: ", this.cube_volume());
        console.log("Diagonal of Cube: ", this.cube_diagonal());
        console.log("************************************");
        //Window.alert("************* Cube *************\nTotal Surface area of Cube: "+ this.cube_tsa(this.side)+"\nLateral Surface area of Cube: "+ this.cube_lsa(this.side)+ "\nVolume of Cube: "+ this.cube_volume(this.side)+ "\nDiagonal of Cube: "+ this.cube_diagonal(this.side)+"\n********************************");
    };
    return Cube;
}());
;
var Sphere = /** @class */ (function () {
    function Sphere(radius) {
        this.rad = radius;
    }
    Sphere.prototype.sphere_tsa = function () {
        return 4 * pi * Math.pow(this.rad, 2);
        /* Surface area of sphere= 4*pi* (radius)^2
        */
    };
    Sphere.prototype.sphere_volume = function () {
        return Math.round(4 / 3 * pi * Math.pow(this.rad, 3));
        /* Volume of sphere= 4/3*pi*(radius)^3
        */
    };
    Sphere.prototype.execu = function () {
        console.log("*************** Sphere ***************");
        console.log("Total Surface area of Sphere: ", this.sphere_tsa());
        console.log("Volume of Sphere: ", this.sphere_volume());
        console.log("**************************************");
        //Window.alert("************ Sphere ************" + "\nTotal Surface area of Sphere: "+ this.sphere_tsa() + "\nVolume of Sphere: "+ this.sphere_volume() + "\n********************************");
    };
    return Sphere;
}());
;
var Cylinder = /** @class */ (function () {
    function Cylinder(radius, heigh) {
        this.radius = radius;
        this.hei = heigh;
    }
    Cylinder.prototype.cylinder_tsa = function () {
        return 2 * pi * this.radius * (this.hei + this.radius);
        /* Total Surface area of Cylinder =
                2*pi*radius *(height + radius)
        */
    };
    Cylinder.prototype.cylinder_csa = function () {
        return 2 * pi * this.radius * this.hei;
        /* Curved Surface area of Cylinder =
                        2*pi * radius *height
        */
    };
    Cylinder.prototype.cylinder_volume = function () {
        return pi * Math.pow(this.radius, 2) * this.hei;
        /* Volume of Cylinder =
                    pi * (radius)^2 * height
        */
    };
    Cylinder.prototype.execu = function () {
        console.log("*************** Cylinder ***************");
        console.log("Total Surface area of Cuboid: ", this.cylinder_tsa());
        console.log("Curved Surface area of Cuboid: ", this.cylinder_csa());
        console.log("Volume of Cuboid: ", this.cylinder_volume());
        console.log("****************************************");
        //Window.alert("*********** Cylinder ***********" +"\nTotal Surface area of Cuboid: "+ this.cylinder_tsa() +"\nCurved Surface area of Cuboid: "+ this.cylinder_csa() + "\nVolume of Cuboid: "+ this.cylinder_volume() + "\n******************************");
    };
    return Cylinder;
}());
;/*
function execut() {
    while (true) {
        var choice = void 0;
        choice = Number(window_1.default.prompt("Choose any one: \n1. Sphere \n2. Cube \n3. Cuboid \n4. Cylinder \nEnter your choice number: "));
        console.log("\n");
        switch (choice) {
            case 1:
                var mySphere = new Sphere(21);
                mySphere.execu();
                break;
            case 2:
                var myCube = new Cube(5);
                myCube.execu();
                break;
            case 3:
                var myCuboid = new Cuboid(8, 9, 8);
                myCuboid.execu();
                break;
            case 4:
                var myCylinder = new Cylinder(7, 5);
                myCylinder.execu();
                break;
            default:
                console.log("Only these 4 3D shapes are available");
                break;
        }
        var cont = window_1.default.prompt("Do you want to continue? [Yn]: ");
        if (cont == "N" || cont == "n") {
            break;
        }
    }
}*/
