window.boxSizing= "border-box";
document.body.style= "display: flex; min-height: 100vh; flex-direction: column;";
/*
            I will add light theme soon
*/
document.body.style.backgroundColor= "black";
        //color: white
document.getElementById("name").style.color = "white";
        // transparent border border image
        // Codding hub main Label
document.getElementById("c").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("o").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("d").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("dd").style="border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("i").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("n").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("g").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("h").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("u").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("b").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        // navigation bar
document.getElementsByClassName("list")[0].style= "float: left; position:relative; display:inline-block;";
document.getElementById("btn").style= "color:white; background:#050505; border:5px solid #090909;width:90px; font-size:23px; height:70px; border-radius: 10px;";
document.getElementsByClassName("navs")[0].style= "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
        // expending navigation drawer
document.getElementById("btn").onmouseenter= function () {
    document.getElementsByClassName("navs")[0].style= "padding-left:0; height:100px; width:90px; text-align:justify; color:grey; background:black; position:absolute; height:100px; transition:width 0.5s; overflow:auto;";
    document.getElementById("btn").style="color:white;background:#090909; border:5px solid RoyalBlue; font-size:23px; height:70px; border-radius: 10px; width:90px;";
};
        // selecting option from navigation drawer
document.getElementById("li1").onmouseenter= function () {
    document.getElementById("li1").style= "color:white;";
};
document.getElementById("li2").onmouseenter= function () {
    document.getElementById("li2").style= "color:white;";
};
document.getElementById("li3").onmouseenter= function () {
    document.getElementById("li3").style= "color:white;";
};
        // closing navigation drawer
document.getElementById("btn").ondblclick= function () {
    document.getElementById("btn").style= "color:white;background:#090909;border:5px solid #090909;width:90px; padding:0px; font-size:23px; height:70px; border-radius: 10px";
    document.getElementsByClassName("navs")[0].style= "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
};
        // unselecting an option from navigation drawer
document.getElementById("li1").onmouseleave= function () {
    document.getElementById("li1").style= "color:grey;";
};
document.getElementById("li2").onmouseleave= function () {
    document.getElementById("li2").style= "color:grey;";
};
document.getElementById("li3").onmouseleave= function () {
    document.getElementById("li3").style= "color:grey;";
};
        // shape selector style
document.getElementById("shape").style= "background-color: black; color: white";
document.getElementById("shap_sub").style= "background-color: black; color: white";

theming();
function theming() {
    document.getElementById("theme").onclick= function () {
        document.body.style.backgroundColor= "black";
        //color: white
        document.getElementById("name").style.color = "white";
        // transparent border border image
        // Codding hub main Label
        document.getElementById("c").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("o").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("d").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("dd").style="border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("i").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("n").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("g").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("h").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("u").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        document.getElementById("b").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
        // navigation bar
        document.getElementsByClassName("list")[0].style= "float: left; position:relative; display:inline-block;";
        document.getElementById("btn").style= "color:white; background:#050505; border:5px solid #090909;width:90px; font-size:23px; height:70px; border-radius: 10px;";
        document.getElementsByClassName("navs")[0].style= "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
        // expending navigation drawer
        document.getElementById("btn").onmouseenter= function () {
            document.getElementsByClassName("navs")[0].style= "padding-left:0; height:100px; width:90px; text-align:justify; color:grey; background:black; position:absolute; height:100px; transition:width 0.5s; overflow:auto;";
            document.getElementById("btn").style="color:white;background:#090909; border:5px solid RoyalBlue; font-size:23px; height:70px; border-radius: 10px; width:90px;";
        };
        // selecting option from navigation drawer
        document.getElementById("li1").onmouseenter= function () {
            document.getElementById("li1").style= "color:white;";
        };
        document.getElementById("li2").onmouseenter= function () {
            document.getElementById("li2").style= "color:white;";
        };
        document.getElementById("li3").onmouseenter= function () {
            document.getElementById("li3").style= "color:white;";
        };
        // closing navigation drawer
        document.getElementById("btn").ondblclick= function () {
            document.getElementById("btn").style= "color:white;background:#090909;border:5px solid #090909;width:90px; padding:0px; font-size:23px; height:70px; border-radius: 10px";
            document.getElementsByClassName("navs")[0].style= "color:grey; background:black; padding-left:0; text-align:right; position:absolute; width:0; height:100px; transition:width 0.5s; overflow:auto;";
        };
        // unselecting an option from navigation drawer
        document.getElementById("li1").onmouseleave= function () {
            document.getElementById("li1").style= "color:grey;";
        };
        document.getElementById("li2").onmouseleave= function () {
            document.getElementById("li2").style= "color:grey;";
        };
        document.getElementById("li3").onmouseleave= function () {
            document.getElementById("li3").style= "color:grey;";
        };
        // shape selector style
        document.getElementById("shape").style= "background-color: black; color: white";
        document.getElementById("shap_sub").style= "background-color: black; color: white";
    }
    document.getElementById("theme").ondblclick= function () {
        document.body.style.backgroundColor= "white";
    }
};