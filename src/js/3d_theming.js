window.boxSizing = "border-box";
document.body.style = "display: flex; min-height: 100vh; flex-direction: column;";

document.body.style.backgroundColor = "black";
document.getElementById("theme").src= "src/img/dark_mode_white.png";

            //color: white
document.getElementById("name").style.color = "white";
            // transparent border border image
            // Codding hub main Label
document.getElementById("c").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("o").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("d").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("dd").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("i").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("n").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("g").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("h").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("u").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("b").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
            // navigation bar
document.getElementsByClassName("list")[0].style = "float: left; position:relative; display:inline-block;";
document.getElementById("btn").style = "color:white; background:#050505; border:5px solid #090909;width:90px; font-size:30px; height:70px; border-radius: 10px;";
document.getElementsByClassName("navs")[0].style = "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
            // expending navigation drawer
document.getElementById("btn").onmouseenter = function () {
    document.getElementsByClassName("navs")[0].style = "padding-left:0; height:100px; width:90px; text-align:justify; color:grey; background:black; position:absolute; height:100px; transition:width 0.5s; overflow:auto;";
    document.getElementById("btn").style = "color:white;background:#090909; border:5px solid RoyalBlue; font-size:30px; height:70px; border-radius: 10px; width:90px;";
};
            // selecting option from navigation drawer
document.getElementById("li1").onmouseenter = function () {
    document.getElementById("li1").style = "color:white;";
};
document.getElementById("li2").onmouseenter = function () {
    document.getElementById("li2").style = "color:white;";
};
document.getElementById("li3").onmouseenter = function () {
    document.getElementById("li3").style = "color:white;";
};
            // closing navigation drawer
document.getElementById("btn").ondblclick = function () {
    document.getElementById("btn").style = "color:white;background:#090909;border:5px solid #090909;width:90px; padding:0px; font-size:30px; height:70px; border-radius: 10px";
    document.getElementsByClassName("navs")[0].style = "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
};
            // unselecting an option from navigation drawer
document.getElementById("li1").onmouseleave = function () {
    document.getElementById("li1").style = "color:grey;";
};
document.getElementById("li2").onmouseleave = function () {
    document.getElementById("li2").style = "color:grey;";
};
document.getElementById("li3").onmouseleave = function () {
    document.getElementById("li3").style = "color:grey;";
};
            // Label Theme
document.getElementsByClassName("label_design")[0].style = "color: white";
            // shape selector style
document.getElementById("shape").style = "background-color: black; color: white";
document.getElementById("shap_sub").style = "background-color: black; color: white";
            // Sphere input
document.getElementById("rad").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
            // Cube input
document.getElementById("side").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
            // Cuboid input
document.getElementById("length").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
document.getElementById("breadth").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
document.getElementById("height").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
            // Cylinder input
document.getElementById("radi").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
document.getElementById("hei").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
            // Div height and text color
document.getElementsByClassName("sphere")[0].style = "height: 70px; color: white;";
document.getElementsByClassName("cube")[0].style = "height: 70px; color: white;";
document.getElementsByClassName("cuboid")[0].style = "height:150px; color: white;";
document.getElementsByClassName("cylinder")[0].style = "height: 130px; color: white;";
            // Submit buttons
document.getElementById("sphere_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
document.getElementById("cube_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
document.getElementById("cuboid_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
document.getElementById("cylinder_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
            // Submit buttons function
document.getElementById("sphere_sub").onmouseover = function() {
    document.getElementById("sphere_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;"
};
document.getElementById("cube_sub").onmouseover = function() {
    document.getElementById("cube_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;";
};
document.getElementById("cuboid_sub").onmouseover = function() {
    document.getElementById("cuboid_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;";
};
document.getElementById("cylinder_sub").onmouseover = function() {
    document.getElementById("cylinder_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;";
};
            // Output
document.getElementById("output").style = "color: white;";
            // Cookie Div
document.getElementsByClassName("divs")[0].style= "color:#fff; margin-bottom:0px; width:100%; height: 110px; padding:0px; text-align:center; margin-top:450px";
document.getElementsByClassName("divs")[0].firstChild.style= "font-size: 150%";
            // Cookie buttons
document.getElementsByClassName("cook_btn")[0].style= "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";
document.getElementsByClassName("cook_btn")[1].style= "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";

theming();
function theming() {
    // Dark Theme
    document.getElementById("theme").ondblclick = function () {
        document.body.style.backgroundColor = "black";
        document.getElementById("theme").src= "src/img/dark_mode_white.png";
        //color: white
        document.getElementById("name").style.color = "white";
        // transparent border border image
        // Codding hub main Label
        document.getElementById("c").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("o").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("d").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("dd").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("i").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("n").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("g").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("h").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("u").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("b").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        // navigation bar
        document.getElementsByClassName("list")[0].style = "float: left; position:relative; display:inline-block;";
        document.getElementById("btn").style = "color:white; background:#050505; border:5px solid #090909;width:90px; font-size:30px; height:70px; border-radius: 10px;";
        document.getElementsByClassName("navs")[0].style = "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
        // expending navigation drawer
        document.getElementById("btn").onmouseenter = function () {
            document.getElementsByClassName("navs")[0].style = "padding-left:0; height:100px; width:90px; text-align:justify; color:grey; background:black; position:absolute; height:100px; transition:width 0.5s; overflow:auto;";
            document.getElementById("btn").style = "color:white;background:#090909; border:5px solid RoyalBlue; font-size:30px; height:70px; border-radius: 10px; width:90px;";
        };
        // selecting option from navigation drawer
        document.getElementById("li1").onmouseenter = function () {
            document.getElementById("li1").style = "color:white;";
        };
        document.getElementById("li2").onmouseenter = function () {
            document.getElementById("li2").style = "color:white;";
        };
        document.getElementById("li3").onmouseenter = function () {
            document.getElementById("li3").style = "color:white;";
        };
        // closing navigation drawer
        document.getElementById("btn").ondblclick = function () {
            document.getElementById("btn").style = "color:white;background:#090909;border:5px solid #090909;width:90px; padding:0px; font-size:30px; height:70px; border-radius: 10px";
            document.getElementsByClassName("navs")[0].style = "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
        };
        // unselecting an option from navigation drawer
        document.getElementById("li1").onmouseleave = function () {
            document.getElementById("li1").style = "color:grey;";
        };
        document.getElementById("li2").onmouseleave = function () {
            document.getElementById("li2").style = "color:grey;";
        };
        document.getElementById("li3").onmouseleave = function () {
            document.getElementById("li3").style = "color:grey;";
        };
        document.getElementsByClassName("label_design")[0].style = "color: white";
        // shape selector style
        document.getElementById("shape").style = "background-color: black; color: white";
        document.getElementById("shap_sub").style = "background-color: black; color: white";
        // Label Theme
        document.getElementsByClassName("label_design")[0].style = "color: white";
        // Sphere input
        document.getElementById("rad").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
        // Cube input
        document.getElementById("side").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
        // Cuboid input
        document.getElementById("length").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
        document.getElementById("breadth").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
        document.getElementById("height").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
        // Cylinder input
        document.getElementById("radi").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
        document.getElementById("hei").style = "border: 2px solid #222; border-radius: 10px; color: white; height: 20px; width: 50px; background: #111;";
        // Div height and text color
        document.getElementsByClassName("sphere")[0].style = "height: 70px; color: white;";
        document.getElementsByClassName("cube")[0].style = "height: 70px; color: white;";
        document.getElementsByClassName("cuboid")[0].style = "height: 150px; color: white;";
        document.getElementsByClassName("cylinder")[0].style = "height: 130px; color: white;";
        // Submit buttons
        document.getElementById("sphere_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
        document.getElementById("cube_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
        document.getElementById("cuboid_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
        document.getElementById("cylinder_sub").style = "border: 2px solid #111; border-radius: 3px; background-color: #222; color: white;";
        // Submit buttons function
        document.getElementById("sphere_sub").onmouseover = function() {
            document.getElementById("sphere_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;"
        };
        document.getElementById("cube_sub").onmouseover = function() {
            document.getElementById("cube_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;";
        };
        document.getElementById("cuboid_sub").onmouseover = function() {
            document.getElementById("cuboid_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;";
        };
        document.getElementById("cylinder_sub").onmouseover = function() {
            document.getElementById("cylinder_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #222; color: white;";
        };
        // Output
        document.getElementById("output").style= "color: white";
        // Cookie Div
        document.getElementsByClassName("divs")[0].style= "color:#fff; margin-bottom:0px; width:100%; height: 110px; padding:0px; text-align:center; margin-top:450px";
        document.getElementsByClassName("divs")[0].firstChild.style= "font-size: 150%";
        // Cookie buttons
        document.getElementsByClassName("cook_btn")[0].style= "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";
        document.getElementsByClassName("cook_btn")[1].style= "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";
    };

    // Light theme
    document.getElementById("theme").onclick = function () {
        document.body.style.backgroundColor = "white";
        document.getElementById("theme").src= "src/img/light_mode_white.png";
        document.getElementById("theme").style= "height: 60px; width: auto;";
        //color: black
        document.getElementById("name").style.color = "black";
        // transparent border border image
        // Codding hub main Label
        document.getElementById("c").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("o").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("d").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("dd").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("i").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("n").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("g").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("h").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("u").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("b").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        // navigation bar
        document.getElementsByClassName("list")[0].style = "float: left; position:relative; display:inline-block;";
        document.getElementById("btn").style = "color:black; background:#f5f5f5; border:5px solid #ccc; width:90px; font-size:30px; height:70px; border-radius: 10px;";
        document.getElementsByClassName("navs")[0].style = "color:grey; background:#ccc; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
        // expending navigation drawer
        document.getElementById("btn").onmouseenter = function () {
            document.getElementsByClassName("navs")[0].style = "padding-left:0; height:100px; width:90px; text-align:justify; color:grey; background:#ccc; position:absolute; height:100px; transition:width 0.5s; overflow:auto;";
            document.getElementById("btn").style = "color:black; background:#ccc; border-radius: 10px; border:5px solid orange; font-size:30px; height:70px; border-radius: 10px; width:90px;";
        };
        // selecting option from navigation drawer
        document.getElementById("li1").onmouseenter = function () {
            document.getElementById("li1").style = "color:black;";
        };
        document.getElementById("li2").onmouseenter = function () {
            document.getElementById("li2").style = "color:black;";
        };
        document.getElementById("li3").onmouseenter = function () {
            document.getElementById("li3").style = "color:black;";
        };
        // closing navigation drawer
        document.getElementById("btn").ondblclick = function () {
            document.getElementById("btn").style = "color:black; background:#f5f5f5; border:5px solid #ccc; width:90px; padding:0px; font-size:30px; height:70px; border-radius: 10px";
            document.getElementsByClassName("navs")[0].style = "color:grey; background:#ccc; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
        };
        // unselecting an option from navigation drawer
        document.getElementById("li1").onmouseleave = function () {
            document.getElementById("li1").style = "color:grey;";
        };
        document.getElementById("li2").onmouseleave = function () {
            document.getElementById("li2").style = "color:grey;";
        };
        document.getElementById("li3").onmouseleave = function () {
            document.getElementById("li3").style = "color:grey;";
        };
        document.getElementsByClassName("label_design")[0].style = "color: black";
        // shape selector style
        document.getElementById("shape").style = "background-color: white; color: black";
        document.getElementById("shap_sub").style = "background-color: white; color: black";
        // Label Theme
        document.getElementsByClassName("label_design")[0].style = "color: black";
        // Sphere input
        document.getElementById("rad").style = "border: 2px solid #ddd; border-radius: 10px; color: black; height: 20px; width: 50px; background: #eee;";
        // Cube input
        document.getElementById("side").style = "border: 2px solid #ddd; border-radius: 10px; color: black; height: 20px; width: 50px; background: #eee;";
        // Cuboid input
        document.getElementById("length").style = "border: 2px solid #ddd; border-radius: 10px; color: black; height: 20px; width: 50px; background: #eee;";
        document.getElementById("breadth").style = "border: 2px solid #ddd; border-radius: 10px; color: black; height: 20px; width: 50px; background: #eee;";
        document.getElementById("height").style = "border: 2px solid #ddd; border-radius: 10px; color: black; height: 20px; width: 50px; background: #eee;";
        // Sphere input
        document.getElementById("radi").style = "border: 2px solid #ddd; border-radius: 10px; color: black; height: 20px; width: 50px; background: #eee;";
        document.getElementById("hei").style = "border: 2px solid #ddd; border-radius: 10px; color: black; height: 20px; width: 50px; background: #eee;";
        // Div height and text color
        document.getElementsByClassName("sphere")[0].style = "height: 70px; color: black;";
        document.getElementsByClassName("cube")[0].style = "height: 70px; color: black;";
        document.getElementsByClassName("cuboid")[0].style = "height: 150px; color: black;";
        document.getElementsByClassName("cylinder")[0].style = "height: 130px; color: black;";
        // Submit buttons
        document.getElementById("sphere_sub").style = "border: 2px solid #eee; border-radius: 3px; background-color: #ddd; color: black;";
        document.getElementById("cube_sub").style = "border: 2px solid #eee; border-radius: 3px; background-color: #ddd; color: black;";
        document.getElementById("cuboid_sub").style = "border: 2px solid #eee; border-radius: 3px; background-color: #ddd; color: black;";
        document.getElementById("cylinder_sub").style = "border: 2px solid #eee; border-radius: 3px; background-color: #ddd; color: black;";
        // Submit buttons function
        document.getElementById("sphere_sub").onmouseover = function() {
            document.getElementById("sphere_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #ddd; color: black;"
        };
        document.getElementById("cube_sub").onmouseover = function() {
            document.getElementById("cube_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #ddd; color: black;";
        };
        document.getElementById("cuboid_sub").onmouseover = function() {
            document.getElementById("cuboid_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #ddd; color: black;";
        };
        document.getElementById("cylinder_sub").onmouseover = function() {
            document.getElementById("cylinder_sub").style = "border: 2px solid #f0e118; border-radius: 3px; background-color: #ddd; color: black;";
        };
        // Output
        document.getElementById("output").style= "color: black";
        // Cookie Div
        document.getElementsByClassName("divs")[0].style= "color:#000; margin-bottom:0px; width:100%; height: 110px; padding:0px; text-align:center; margin-top:450px";
        document.getElementsByClassName("divs")[0].firstChild.style= "font-size: 150%";
        // Cookie buttons
        document.getElementsByClassName("cook_btn")[0].style= "color: #000; border-radius:20px; background:#eee; margin-bottom:0px; font-size:120%;";
        document.getElementsByClassName("cook_btn")[1].style= "color: #000; border-radius:20px; background:#eee; margin-bottom:0px; font-size:120%;";
    };
};
