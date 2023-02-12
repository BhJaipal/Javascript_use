window.boxSizing = "border-box";
document.body.style = "display: flex; min-height: 100vh; flex-direction: column;";

document.body.style.backgroundColor = "black";
document.getElementById("theme").src= "src/img/dark_mode_white.png";

            //color: white
document.body.style.color = "white";
            // transparent border border image
            // Codding hub main Label
document.getElementById("c").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("o").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("d").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
document.getElementById("dd").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
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
            // Cookie Div
document.getElementsByClassName("divs")[0].style = "color:#fff; margin-bottom:0px; width:100%; height: 110px; padding:0px; text-align:center; margin-top:450px";
document.getElementsByClassName("divs")[0].firstChild.style = "font-size: 150%";
            // Cookie buttons
document.getElementsByClassName("cook_btn")[0].style = "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";
document.getElementsByClassName("cook_btn")[1].style = "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";

            // Search bar
document.getElementsByClassName("input-cnt")[0].style.display = "flex";
document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: grey; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid lightgrey; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 60%; color: white; transition: width .5s;";
            // Searching
document.getElementById("Search-bar").onmouseenter = function() {
    document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: #0076ff; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
    document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid #0076ff; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 100%; color: white; transition: width .5s;";
};
            // Deselecting Search bar
document.getElementById("Search-bar").onmouseleave = function() {
    document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: grey; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
    document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid lightgrey; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 60%; color: white; transition: .5s;";
};
            // Python Code Label
document.getElementById("py").style = "margin-top: 10px; border: 3px solid #999; background: #222; height: 230px; border-radius: 20px; color: white;";
document.getElementsByClassName("python-code")[0].style = "background:transparent; padding: 5px";
document.getElementById("b1").style = "width:25px; border: none; background: transparent; overflow: hidden; display:flex; flex: column; font-weight:bold;";
document.getElementsByClassName("python")[0].style = "margin-top: 10px;";
document.getElementsByClassName("btns")[0].style= "color: white; background: transparent; border: 2px solid transparent;";
            // 3d.html function & link
document.getElementById("3d_link").style= "color: white";
document.getElementById("link").style= "color: white; text-decoration: none;";

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
        document.getElementById("dd").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, blue, red) 1 stretch;";
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
        // Cookie Div
        document.getElementsByClassName("divs")[0].style = "color:#fff; margin-bottom:0px; width:100%; height: 110px; padding:0px; text-align:center; margin-top:450px";
        document.getElementsByClassName("divs")[0].firstChild.style = "font-size: 150%";
        // Cookie buttons
        document.getElementsByClassName("cook_btn")[0].style = "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";
        document.getElementsByClassName("cook_btn")[1].style = "color: #fff; border-radius:20px; background:#111; margin-bottom:0px; font-size:120%;";
        // Search bar
        document.getElementsByClassName("input-cnt")[0].style.display = "flex";
        document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: grey; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
        document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid lightgrey; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 60%; color: white; transition: width .5s;";
        // Searching
        document.getElementById("Search-bar").onmouseenter = function() {
            document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: #0076ff; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
            document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid #0076ff; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 100%; color: white; transition: width .5s;";
        };
        // Deselecting Search bar
        document.getElementById("Search-bar").onmouseleave = function() {
            document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: grey; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
            document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid lightgrey; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 60%; color: white; transition: .5s;";
        };
        // Python Code Label
        document.getElementById("py").style = "margin-top: 10px; border: 3px solid #333; background: #181818; height: 230px; border-radius: 20px; color: white;";
        document.getElementsByClassName("python-code")[0].style = "background: transparent; padding: 5px";
        document.getElementById("b1").style = "width:25px; border: none; background: transparent; overflow: hidden; display:flex; flex: column; font-weight:bold;";
        document.getElementsByClassName("python")[0].style = "margin-top: 10px;";
        document.getElementsByClassName("btns")[0].style= "color: white; background: transparent; border: 2px solid transparent;";
        // 3d.html function & link
        document.getElementById("3d_link").style= "color: white";
        document.getElementById("link").style= "color: white; text-decoration: none;";
    };

    // Light theme
    document.getElementById("theme").onclick = function () {
        document.body.style.backgroundColor = "white";
        document.getElementById("theme").src= "src/img/light_mode_white.png";
        document.getElementById("theme").style ="height: 60px; width: auto;";
        //color: black
        document.getElementById("name").style.color = "black";
        // transparent border border image
        // Codding hub main Label
        document.getElementById("c").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("o").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("d").style = "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
        document.getElementById("dd").style= "border: 4px solid transparent; border-image: linear-gradient(to top left, orange, #f2b) 1 stretch;";
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
        // Cookie Div
        document.getElementsByClassName("divs")[0].style = "color:#000; margin-bottom:0px; width:100%; height: 110px; padding:0px; text-align:center; margin-top:450px";
        document.getElementsByClassName("divs")[0].firstChild.style = "font-size: 150%";
        // Cookie buttons
        document.getElementsByClassName("cook_btn")[0].style = "color: #000; border-radius:20px; background:#eee; margin-bottom:0px; font-size:120%;";
        document.getElementsByClassName("cook_btn")[1].style = "color: #000; border-radius:20px; background:#eee; margin-bottom:0px; font-size:120%;";
        // Search bar
        document.getElementsByClassName("input-cnt")[0].style.display = "flex";
        document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: grey; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
        document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid lightgrey; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 60%; color: black; transition: width .5s;";
        // Searching
        document.getElementById("Search-bar").onmouseenter = function() {
            document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: #0076ff; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
            document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid #0076ff; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 100%; color: black; transition: width .5s;";
        };
        // Deselecting Search bar
        document.getElementById("Search-bar").onmouseleave = function() {
            document.getElementById("search").style = "min-width: 40px; padding: 10px; text-align: center; background: grey; border-top-left-radius: 20px; border-bottom-left-radius: 20px;";
            document.getElementById("Search-bar").style = "background: transparent; outline: none; border: none; padding: 10px; border: 1px solid lightgrey; border-top-right-radius: 20px; border-bottom-right-radius: 20px; width: 60%; color: black; transition: .5s;";
        };
        // Python Code Label
        document.getElementById("py").style= "margin-top: 10px; border: 3px solid #ccc; background: #e8e8e8; height: 230px; border-radius: 20px; color: black;";
        document.getElementsByClassName("python-code")[0].style = "background:transparent; padding: 5px";
        document.getElementById("b1").style = "width:25px; border: none; background: transparent; overflow: hidden; display:flex; flex: column; font-weight:bold;";
        document.getElementsByClassName("python")[0].style = "margin-top: 10px;";
        document.getElementsByClassName("btns")[0].style= "color: black; background: transparent; border: 2px solid transparent";
        // 3d.html function & link
        document.getElementById("3d_link").style= "color: black";
        document.getElementById("link").style= "color: black; text-decoration: none;";
    };
};
