import Window from "window";

const pi: number= 22/7;
class Cuboid {
    len: number;
    brea: number;
    heig: number;
    constructor(length1: number, breadth: number, height: number) {
        this.len = length1;
        this.brea= breadth;
        this.heig= height;
    }
    cuboid_tsa(): number {
        return 2* (this.len *this. brea + this.brea * this.heig + this.len * this.heig);
        /* Total Surface area of Cuboid = 
                       2 * (l*b + b*h + l*h)
        */
    }
    cuboid_lsa(): number {
        return 2* this.heig*(this.len + this.brea);
        /* Lateral Surface area of Cuboid = 
                             2 * (l + b) *h
        */
    }
    cuboid_volume(): number {
        return this.len * this.heig * this.brea;
        /* Volume of Cuboid = l*b*h
        */
    }
    cuboid_diagonal(): number {
        return (Math.sqrt(Math.pow(this.leng, 2) + Math.pow(this.brea, 2) + Math.pow(this.hei, 2))).toFixed(2);
        /* Diagonal of Cuboid = 
            square root of (l^2 + b^2 + h^2)
        */
    }
    execu(): void {
        console.log("*************** Cuboid ***************");
        console.log("Total Surface area of Cuboid: ", this.cuboid_tsa());
        console.log("Lateral Surface area of Cuboid: ", this.cuboid_lsa());
        console.log("Volume of Cuboid: ", this.cuboid_volume());
        console.log("Diagonal of Cuboid: ", this.cuboid_diagonal());
        console.log("**************************************");
        Window.alert("************ Cuboid *************"+ "\nTotal Surface area of Cuboid: "+ this.cuboid_tsa()+ "\nLateral Surface area of Cuboid: "+ this.cuboid_lsa() + "\nVolume of Cuboid: "+ this.cuboid_volume() + "\nDiagonal of Cuboid: "+ this.cuboid_diagonal() +"\n********************************");
    }
};

class Cube {
    side: number;
    constructor(side: number) {
        this.side= side;
    }
    cube_volume(): number {
        return Math.pow(this.side,3);
        /* Volume of Cube = a ^ 3
        */
    }
    cube_lsa(): number {
        return 4* this.side* this.side;
        /* Lateral Surface area of Cube = 
                                    4 * a^2
        */
    }
    cube_tsa(): number {
        return 6* this.side * this.side;
        /* Total Surface area of Cube = 
                                    6 * a^2
        */
    }
    cube_diagonal(): number {
        return this.side* 1.732;
        /* Diagonal of Cube = a * root(3)
        */
    }
    execu(): void {
        console.log("*************** Cube ***************");
        console.log("Total Surface area of Cube: ", this.cube_tsa());
        console.log("Lateral Surface area of Cube: ", this.cube_lsa());
        console.log("Volume of Cube: ", this.cube_volume());
        console.log("Diagonal of Cube: ", this.cube_diagonal());
        console.log("************************************");
        Window.alert("************* Cube *************\nTotal Surface area of Cube: "+ this.cube_tsa(this.side)+"\nLateral Surface area of Cube: "+ this.cube_lsa(this.side)+ "\nVolume of Cube: "+ this.cube_volume(this.side)+ "\nDiagonal of Cube: "+ this.cube_diagonal(this.side)+"\n********************************");
    }
};

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    sphere_tsa() {
        return 4 * pi * Math.pow(this.radius,2);
        /* Surface area of sphere= 4*pi* (radius)^2
        */
    }
    sphere_volume() {
        return Math.round(4/3 * pi * Math.pow(this.radius,3));
        /* Volume of sphere= 4/3*pi*(radius)^3
        */
    }
    execu() {
        console.log("*************** Sphere ***************");
        console.log("Total Surface area of Sphere: ", this.sphere_tsa());
        console.log("Volume of Sphere: ", this.sphere_volume());
        console.log("**************************************");
        Window.alert("************ Sphere ************" + "\nTotal Surface area of Sphere: "+ this.sphere_tsa() + "\nVolume of Sphere: "+ this.sphere_volume() + "\n********************************");
    }
};

class Cylinder {
    constructor(radius, height) {
        this.radius= radius;
        this.height= height;
    }
    cylinder_tsa() {
        return 2* pi* this.radius *(this.height + this.radius);
        /* Total Surface area of Cylinder = 
                2*pi*radius *(height + radius)
        */
    }
    cylinder_csa() {
        return 2* pi* this.radius* this.height;
        /* Curved Surface area of Cylinder = 
                        2*pi * radius *height
        */
    }
    cylinder_volume() {
        return pi* Math.pow(this.radius,2)* this.height;
        /* Volume of Cylinder = 
                    pi * (radius)^2 * height
        */
    }
    execu() {
        console.log("*************** Cylinder ***************");
        console.log("Total Surface area of Cuboid: ", this.cylinder_tsa());
        console.log("Curved Surface area of Cuboid: ", this.cylinder_csa());
        console.log("Volume of Cuboid: ", this.cylinder_volume());
        console.log("****************************************");
        Window.alert("*********** Cylinder ***********" +"\nTotal Surface area of Cuboid: "+ this.cylinder_tsa() +"\nCurved Surface area of Cuboid: "+ this.cylinder_csa() + "\nVolume of Cuboid: "+ this.cylinder_volume() + "\n******************************");
    }
};
function execut(){
while (true) {
    let choice;
    choice= Window.prompt("Choose any one: \n1. Sphere \n2. Cube \n3. Cuboid \n4. Cylinder \nEnter your choice number: ")
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
    let cont = Window.prompt("Do you want to continue? [Yn]: ");
    if (cont== "N" || cont== "n") {break;}
}}
