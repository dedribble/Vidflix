const submit = document.querySelector("login-form")
const email = document.getElementById("email")
const password = document.getElementById("password")

submit.addEventListener("submit", event => {
    event.preventDefault();
    console.log(email.value, password.value)
    
})