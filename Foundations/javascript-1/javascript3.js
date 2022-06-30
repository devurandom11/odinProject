const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name? ');
    alert(`Hello, ${name}!`);
}

// Syntax for calling a function on button click

button.addEventListener('click', greet);