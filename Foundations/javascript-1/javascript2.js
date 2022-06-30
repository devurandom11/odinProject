// Write a function add7(num) that returns the sum of num and 7.
function add7(num) {
    return num + 7;
}
// Write a functoin multiply that takes in two numbers and returns their product.
function multiply(num1, num2) {
    return num1 * num2;
}

// Write a function that takes a string and returns the string with ONLY the first letter capitalized and the rest lowercase.
function capitalize(string) {
    return (string[0].toUpperCase() + (string.substring(1, ).toLowerCase()));
}

// Write a function that takes in a string and returns the last character of that string.
function lastLetter(string) {
    return string[string.length - 1];
}

// Test all functions above.
console.log(add7(3)); // 10
console.log(multiply(3, 4)); // 12
console.log(capitalize("hello WORLD!")); // "Hello world!"
console.log(lastLetter("hello")); // "o"

