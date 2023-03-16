const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstNameError = document.getElementById("first-error");
const arr = document.querySelectorAll("input");

function submitForm(){
    if(firstName.value===''){
        firstNameError.style.display = "block";
        firstNameError.innerHTML = "First Name cannot be empty";
    }
}

firstName.addEventListener("keydown", function(){
    firstNameError.style.display = "none";
});

for (let index = 0; index < arr.length; index++) {
    arr[index].addEventListener("keydown", function(){
        firstNameError.style.display = "none";
    })
    
}