import Window from "window";
import Document from "document";

let btn= Document.getElementById('subBtn');
btn.addEventListener("click", function() {
    Window.alert("Hello "+ document.getElementById("nameBox").value);
    while (true) {
        Window.alert("April Fool");
    }
})
