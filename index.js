const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstNameError = document.getElementById("first-error");
const lastNameError = document.getElementById("second-error");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("pwdError");
const button = document.getElementById("submitButton");
const form = document.getElementById("form");
const arr = document.querySelectorAll("input");



function checkFName(){

    if(firstName.value.length<1){
        firstNameError.style.display = "flex";
        firstNameError.innerHTML = "First Name cannot be empty";
        firstName.classList.add("icon");
        firstName.placeholder = "";
    }else{
        firstName.classList.remove("icon");
        firstNameError.style.display = "none";
        
    }
};

function checkLName(){
    if(lastName.value.length<1){
        lastNameError.style.display = "flex";
        lastNameError.innerHTML = "Last Name cannot be empty";
        lastName.classList.add("icon");
        lastName.placeholder = "";

    }else{
        lastNameError.style.display = "none";
        lastName.classList.remove("icon");
    }
}
let emailExample ="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

function checkEmail(){
    let emailExample ="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

    if(email.value.match(emailExample) || email.value.length<1){
        emailError.style.display = "flex";
        emailError.innerHTML = "Looks like this is not an email"
        email.classList.add("icon");
        email.placeholder = "email@example/com";
        email.classList.add("input-error");
        email.classList.add("email");
    }else{
        emailError.style.display = "none";
        email.classList.remove("input-error");
        email.classList.remove("icon");
        email.classList.remove("email");

    }
}

function checkPwd(){
    if(password.value.length<1){
        passwordError.style.display = "flex";
        passwordError.innerHTML = "Password cannot be empty";
        password.classList.add("icon");
        password.placeholder = "";
    }else{
        passwordError.style.display = "none";
        password.classList.remove("icon");
    }
}



function submitForm(){
    form.addEventListener("submit", function(e){
        // prevent form from submitting
        e.preventDefault();
        let firstNameIsValid = checkFName();
        let lastNameIsValid = checkLName();
        let emailIsValid = checkEmail();
        let pwdIsValid = checkPwd();
    
        if(firstNameIsValid && lastNameIsValid && emailIsValid && pwdIsValid){   
                     
        };
    });
}

