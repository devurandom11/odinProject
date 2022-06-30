// Script to authenticate user with a known password
let button = document.querySelector('button');
const PASSWORD = 'TheMaster'

function authenticateUser() {
    let user = prompt("Enter your username: ")
    if (user === "Admin") {
        let password = prompt("Enter your password: ");
        if (password === "TheMaster") {
            alert("Welcome!");
        }
        else if ( (password == null) || (password.length === 0)) {
            alert("Canceled");
        }
        else {
            alert("Wrong Password");
        }
    }
    else if ((user == null) || (user.length == 0)) {
        alert("Canceled");
    }
    else {
        alert("I don't know you...");
    }
}

button.addEventListener("click", authenticateUser)