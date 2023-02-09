var cook=document.getElementById("cook");
var btn1=document.getElementById("Ok");
btn1.addEventListener("click",function() {
alert("Thanks for accepting Cookies");
cook.style.display="none";
    });

var btn2=document.getElementById("Cancel");
btn2.addEventListener("click",function() {
    alert("Please accept cookies on your next visit");
cook.style.display="none";
    });
    

function sUp() {
    var elem=document.getElementById("py");
    
    if (elem.style.height== "230px") {
        elem.style.height = "47px";
        elem.style.overflow= "hidden";
        elem.style.transitionDuration= "1s";
    }

    else {
        elem.style.height="230px";
        elem.style= "overflow: hidden; transition-duration: 1s";
    }
};
