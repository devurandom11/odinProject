// Script to authenticate user with a known password

const PASSWORD = 'TheMaster'

let user = prompt("Enter your username: ")

if (user === "Admin") {
    let password = prompt("Enter your password: ");
    if (password === "TheMaster") {
        alert("Welcome!");
    }
    else if (password == ("" || null)) {
        alert("Cancled");
    }
    else {
        alert("Wrong Password");
    }
}
else if (user == ("" || null)) {
    alert("Cancled");
}
else {
    alert("I don't know you...");
}