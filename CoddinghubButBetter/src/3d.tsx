"use strict";
interface Shape {
  TotalSurfaceArea(): number,
  Volume: number
}
export default ThreeD = {
  /**
   * @class @link
   */
  Cuboid: class implements Shape {
    /**
     * @param {number} length
     * @param {number} breadth
     * @param {number} height
     */
    constructor(length, breadth, height) {
      this.len = length;
      this.brea = breadth;
      this.heig = height;
    }
    /**
     * @return {number}
     */
    TotalSurfaceArea() {
      return 2 * (this.len * this.brea + this.brea * this.heig + this.len * this.heig);
      // Total Surface area of Cuboid = 
      2 * (l * b + b * h + l * h)
    }
    LateralSurfaceArea(): number {
      return 2 * this.heig * (this.Diagonallen + this.brea);
      // Lateral Surface area of Cuboid = 
      //  2 * (l + b) *h

    }
    Volume(): number {
      return this.len * this.heig * this.brea;
      // Volume of Cuboid = l*b*h

    }
    Diagonal(): number {
      return Math.sqrt(
        Math.pow(this.len, 2) + Math.pow(this.brea, 2) + Math.pow(this.heig, 2)
      ).toFixed(2);
      // Diagonal of Cuboid = 
      // square root of(l ^ 2 + b ^ 2 + h ^ 2)
    }
    /*execu() {
      console.log("*************** Cuboid ***************");
      console.log(
        "Total Surface area of Cuboid: ",
        this.cuboid_tsa(this.len, this.brea, this.heig)
      );
      console.log(
        "Lateral Surface area of Cuboid: ",
        this.cuboid_lsa(this.len, this.brea, this.heig)
      );
      console.log(
        "Volume of Cuboid: ",
        this.cuboid_volume(this.len, this.brea, this.heig)
      );
      console.log(
        "Diagonal of Cuboid: ",
        this.cuboid_diagonal(this.len, this.brea, this.heig)
      );
      console.log("**************************************");
      alert(
        "************ Cuboid *************" +
        "\nTotal Surface area of Cuboid: " +
        this.cuboid_tsa(this.len, this.brea, this.heig) +
        "\nLateral Surface area of Cuboid: " +
        this.cuboid_lsa(this.len, this.brea, this.heig) +
        "\nVolume of Cuboid: " +
        this.cuboid_volume(this.len, this.brea, this.heig) +
        "\nDiagonal of Cuboid: " +
        this.cuboid_diagonal(this.len, this.brea, this.heig) +
        "\n********************************"
      );
    }*/
  },

  /**
   * @class @link
   */
  Cube: class implements Shape {
    /**
     * @param {number} side
     */
    constructor(side) {
      this.side = side;
    }
    Volume(): number {
      return Math.pow(this.side, 3);
      // Volume of Cube = a ^ 3
    }
    LateralSurfaceArea(): number {
      return 4 * this.side * this.side;
      // Lateral Surface area of Cube = 
      // 4 * a ^ 2
    }
    TotalSurfaceArea(): number {
      return 6 * this.side * this.side;
      // Total Surface area of Cube = 
      // 6 * a ^ 2
    }
    Diagonal(): number {
      return this.side * 1.732;
      // Diagonal of Cube = a * root(3)
    }
    /*execu() {
      console.log("*************** Cube ***************");
      console.log("Total Surface area of Cube: ", this.cube_tsa(this.side));
      console.log("Lateral Surface area of Cube: ", this.cube_lsa(this.side));
      console.log("Volume of Cube: ", this.cube_volume(this.side));
      console.log("Diagonal of Cube: ", this.cube_diagonal(this.side));
      console.log("************************************");
      alert(
        "************* Cube *************\nTotal Surface area of Cube: " +
        this.cube_tsa(this.side) +
        "\nLateral Surface area of Cube: " +
        this.cube_lsa(this.side) +
        "\nVolume of Cube: " +
        this.cube_volume(this.side) +
        "\nDiagonal of Cube: " +
        this.cube_diagonal(this.side) +
        "\n********************************"
      );
    }*/
  },

  /**
   * @class @link
   */
  Sphere: class implements Shape {
    /**
     * @param {number} radius
     */
    constructor(radius) {
      this.radius = radius;
    }
    TotalSurfaceArea(): number {
      return 4 * Math.PI * Math.pow(this.radius, 2);
      // Surface area of sphere= 4*Math.PI* (radius)^2
    }
    Volume(): number {
      return Math.round((4 / 3) * Math.PI * Math.pow(this.radius, 3));
      // Volume of sphere= 4/3*Math.PI*(radius)^3
    }
    /*execu() {
      console.log("*************** Sphere ***************");
      console.log(
        "Total Surface area of Sphere: ",
        this.sphere_tsa(this.radius)
      );
      console.log("Volume of Sphere: ", this.sphere_volume(this.radius));
      console.log("**************************************");
      alert(
        "************ Sphere ************" +
        "\nTotal Surface area of Sphere: " +
        this.sphere_tsa(this.radius) +
        "\nVolume of Sphere: " +
        this.sphere_volume(this.radius) +
        "\n********************************"
      );
    }*/
  },

  /** 
   * @class @linkcode
   */
  Cylinder: class implements Shape {
    /**
     * @param {number} radius 
     * @param {number} height 
     */
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
    TotalSurfaceArea(): number {
      return 2 * Math.PI * this.radius * (this.height + this.radius);
      // Total Surface area of Cylinder = 
      // 2 * Math.PI * radius * (height + radius)
    }
    CurvedSurfaceArea(): number {
      return 2 * Math.PI * this.radius * this.height;
      // Curved Surface area of Cylinder = 
      // 2 * Math.PI * radius * height
    }
    Volume(): number {
      return Math.PI * Math.pow(this.radius, 2) * this.height;
      // Volume of Cylinder = 
      // Math.PI * (radius) ^ 2 * height
    }
    /*execu() {
      console.log("*************** Cylinder ***************");
      console.log(
        "Total Surface area of Cuboid: ",
        this.cylinder_tsa(this.radius, this.height)
      );
      console.log(
        "Curved Surface area of Cuboid: ",
        this.cylinder_csa(this.radius, this.height)
      );
      console.log(
        "Volume of Cuboid: ",
        this.cylinder_volume(this.radius, this.height)
      );
      console.log("****************************************");
      alert(
        "*********** Cylinder ***********" +
        "\nTotal Surface area of Cuboid: " +
        this.cylinder_tsa(this.radius, this.height) +
        "\nCurved Surface area of Cuboid: " +
        this.cylinder_csa(this.radius, this.height) +
        "\nVolume of Cuboid: " +
        this.cylinder_volume(this.radius, this.height) +
        "\n******************************"
      );
    }*/
  },

  /**
   * @class @linkcode
   */
  Cone: class implements Shape {
    /**
     * @param {number} radius
     * @param {number} number
     */
    constructor(radius: number, height: number) {
      this.radius = radius;
      this.height = height;
      this.slantH = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    }
    TotalSurfaceArea(): number {
      return Math.PI * this.radius * (this.radius + this.slantH);
      // Total Surface Area = Math.PI * radius* (radius + slantHeight)
    }
    CurvedSurfaceArea(): number {
      return Math.PI * this.radius * this.slantH;
      // Curved Surface Area = Math.PI * radius * slantHeight
    }
    Volume(): number {
      return (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
      // Volume = 1/3* Math.PI * radius^2* height
    }
  },
  execute: function () {
    while (true) {
      let choice;
      choice = window.prompt(
        "Choose any one: \n1. Sphere \n2. Cube \n3. Cuboid \n4. Cylinder \nEnter your choice number: "
      );
      choice = Number(choice);
      console.log("\n");
      switch (choice) {
        case 1:
          let mySphere = new Sphere(21);
          mySphere.execu();
          break;
        case 2:
          let myCube = new Cube(5);
          myCube.execu();
          break;
        case 3:
          let myCuboid = new Cuboid(8, 9, 8);
          myCuboid.execu();
          break;
        case 4:
          let myCylinder = new Cylinder(7, 5);
          myCylinder.execu();
          break;
        default:
          console.log("Only these 4 3D shapes are available");
          break;
      }
      let cont = window.prompt("Do you want to continue? [Yn]: ");
      if (cont == "N" || cont == "n") {
        break;
      }
    }
  }
};