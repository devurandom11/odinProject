const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name? ');
    const birthYear = prompt('What is your birth year? ');
    const currentYear = 2022;
    const age = currentYear - birthYear;
    alert(`Hello, ${name}! You are ${age} years old.`);
}

// Syntax for calling a function on button click

button.addEventListener('click', greet);


// More Exercises

function checkRange(num) {
    if (num >= 14 && num <= 90) {
        console.log("Congratulations, you may enter!");
    }
    else if (num < 14) {
        console.log("Sorry, you are too young to enter :(");
    }
    else if (num > 90) {
        console.log("Sorry, you are too old to enter :(");
    }
    else {
        alert("ERROR");
    }
}
// Test cases
checkRange(2);
checkRange(14);
checkRange(90);
checkRange(91);
checkRange("A"); // Should produce error alert