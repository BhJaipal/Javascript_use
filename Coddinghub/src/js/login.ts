let name = document.querySelector("#name") as HTMLInputElement; 
let email= document.querySelector("#email") as HTMLInputElement; 
let password= document.querySelector("#password") as HTMLInputElement; 
let form= document.querySelector(".data") as HTMLInputElement; 

form.addEventLisenter("submit", (e) => {
    e.preventDefault();
    window.alert(`Name: ${name.value}\nEmail: ${email.value}\nPassword: ${password.value}`);
});
