console.log("Hello again, world!")
console.log("Now let's look at some variables!")

// Declare a variable
let message;
// Store the string in the variable message
message = 'Hello for the third time!'
// Popup alert printing the message
// alert(message)
// Print message to the console
console.log(message)


// More concise version
let message2 = 'Hello for the fourth time!'
console.log(message2)


// Declaring multiple variables

let user = 'John', age=25, message3=('Hello ' + user);


// Redefine a variable without the let keyword
message = 'Test'
console.log("This message value should = Test: " + message)

// Constants cannot be redifined and should be used when this is desired

const FINAL_MESSAGE = "You can't change me!"

// Throws an error when trying to reassign const value
FINAL_MESSAGE = "I'll still try!"