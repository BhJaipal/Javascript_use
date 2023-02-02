const pi= 22/7;
class Cuboid {
    constructor(length1, breadth, height) {
        this.len = length1;
        this.brea= breadth;
        this.heig= height;
    }
    cuboid_tsa(length2, breadth2, height2) {
        return 2* (length2 * breadth2 +breadth2 * height2 + length2 * height2);
        /* Total Surface area of Cuboid = 
                       2 * (l*b + b*h + l*h)
        */
    }
    cuboid_lsa(length2, breadth2, height2) {
        return 2* height2*(length2+breadth2);
        /* Lateral Surface area of Cuboid = 
                             2 * (l + b) *h
        */
    }
    cuboid_volume(length2 ,breadth2, height2) {
        return length2 * height2 * breadth2;
        /* Volume of Cuboid = l*b*h
        */
    }
    cuboid_diagonal(length2,breadth2,height2) {
        return (Math.sqrt(Math.pow(length2,2) + Math.pow(breadth2,2) + Math.pow(height2,2))).toFixed(2);
        /* Diagonal of Cuboid = 
            square root of (l^2 + b^2 + h^2)
        */
    }
    execu() {
        console.log("*************** Cuboid ***************");
        console.log("Total Surface area of Cuboid: ", this.cuboid_tsa(this.len,  this.brea, this.heig));
        console.log("Lateral Surface area of Cuboid: ", this.cuboid_lsa(this.len,  this.brea, this.heig));
        console.log("Volume of Cuboid: ", this.cuboid_volume(this.len,  this.brea, this.heig));
        console.log("Diagonal of Cuboid: ", this.cuboid_diagonal(this.len,  this.brea, this.heig));
        console.log("**************************************");
        alert("************ Cuboid *************"+ "\nTotal Surface area of Cuboid: "+ this.cuboid_tsa(this.len,  this.brea, this.heig)+ "\nLateral Surface area of Cuboid: "+ this.cuboid_lsa(this.len, this.brea, this.heig) + "\nVolume of Cuboid: "+ this.cuboid_volume(this.len,  this.brea, this.heig) + "\nDiagonal of Cuboid: "+ this.cuboid_diagonal(this.len,  this.brea, this.heig) +"\n********************************");
    }
};

class Cube {
    constructor(side) {
        this.side= side;
    }
    cube_volume(side) {
        return Math.pow(side,3);
        /* Volume of Cube = a ^ 3
        */
    }
    cube_lsa(side) {
        return 4* side*side;
        /* Lateral Surface area of Cube = 
                                    4 * a^2
        */
    }
    cube_tsa(side) {
        return 6* side*side;
        /* Total Surface area of Cube = 
                                    6 * a^2
        */
    }
    cube_diagonal(side) {
        return side* 1.732;
        /* Diagonal of Cube = a * root(3)
        */
    }
    execu() {
        console.log("*************** Cube ***************");
        console.log("Total Surface area of Cube: ", this.cube_tsa(this.side));
        console.log("Lateral Surface area of Cube: ", this.cube_lsa(this.side));
        console.log("Volume of Cube: ", this.cube_volume(this.side));
        console.log("Diagonal of Cube: ", this.cube_diagonal(this.side));
        console.log("************************************");
        alert("************* Cube *************\nTotal Surface area of Cube: "+ this.cube_tsa(this.side)+"\nLateral Surface area of Cube: "+ this.cube_lsa(this.side)+ "\nVolume of Cube: "+ this.cube_volume(this.side)+ "\nDiagonal of Cube: "+ this.cube_diagonal(this.side)+"\n********************************");
    }
};

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    sphere_tsa(radius) {
        return 4 * pi * Math.pow(radius,2);
        /* Surface area of sphere= 4*pi* (radius)^2
        */
    }
    sphere_volume(radius) {
        return Math.round(4/3 * pi * Math.pow(radius,3));
        /* Volume of sphere= 4/3*pi*(radius)^3
        */
    }
    execu() {
        console.log("*************** Sphere ***************");
        console.log("Total Surface area of Sphere: ", this.sphere_tsa(this.radius));
        console.log("Volume of Sphere: ", this.sphere_volume(this.radius));
        console.log("**************************************");
        alert("************ Sphere ************" + "\nTotal Surface area of Sphere: "+ this.sphere_tsa(this.radius) + "\nVolume of Sphere: "+ this.sphere_volume(this.radius) + "\n********************************");
    }
};

class Cylinder {
    constructor(radius, height) {
        this.radius= radius;
        this.height= height;
    }
    cylinder_tsa(radius, height) {
        return 2* pi* radius *(height + radius);
        /* Total Surface area of Cylinder = 
                2*pi*radius *(height + radius)
        */
    }
    cylinder_csa(radius, height) {
        return 2* pi* radius* height;
        /* Curved Surface area of Cylinder = 
                        2*pi * radius *height
        */
    }
    cylinder_volume(radius, height) {
        return pi* Math.pow(radius,2)* height;
        /* Volume of Cylinder = 
                    pi * (radius)^2 * height
        */
    }
    execu() {
        console.log("*************** Cylinder ***************");
        console.log("Total Surface area of Cuboid: ", this.cylinder_tsa(this.radius, this.height));
        console.log("Curved Surface area of Cuboid: ", this.cylinder_csa(this.radius, this.height));
        console.log("Volume of Cuboid: ", this.cylinder_volume(this.radius, this.height));
        console.log("****************************************");
        alert("*********** Cylinder ***********" +"\nTotal Surface area of Cuboid: "+ this.cylinder_tsa(this.radius, this.height) +"\nCurved Surface area of Cuboid: "+ this.cylinder_csa(this.radius, this.height)+"\nVolume of Cuboid: "+ this.cylinder_volume(this.radius, this.height) + "\n******************************");
    }
};
function execut(){
while (true) {
    let choice;
    choice= window.prompt("Choose any one: \n1. Sphere \n2. Cube \n3. Cuboid \n4. Cylinder \nEnter your choice number: ")
    choice= Number(choice);
    console.log("\n");
    switch (choice) {
        case 1:
            let mySphere= new Sphere(21);
            mySphere.execu();
            break;
        case 2:
            let myCube = new Cube(5);
            myCube.execu();
            break;
        case 3:
            let myCuboid = new Cuboid(8,9, 8);
            myCuboid.execu();
            break;
        case 4:
            let myCylinder= new Cylinder(7,5);
            myCylinder.execu();
            break;
        default:
            console.log("Only these 4 3D shapes are available");
            break;
    }
    let cont = window.prompt("Do you want to continue? [Yn]: ");
    if (cont== "N" || cont== "n") {break;}
}}