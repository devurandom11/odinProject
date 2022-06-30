const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name? ');
    const birthYear = prompt('What is your birth year? ');
    const currentYear = 2022;
    const age = currentYear - birthYear;
    const greeting = alert(`Hello, ${name}! You are ${age} years old.`);
}

// Syntax for calling a function on button click

button.addEventListener('click', greet);