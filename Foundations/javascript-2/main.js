// Assign desired elements to variables, starting with identifying parent div
const container = document.querySelector("#container");
const pContent = document.createElement('p');
const blueHeader = document.createElement('h3');
const innerDiv = document.createElement('div');
const divHeader = document.createElement('h1');
const divP = document.createElement('p');

// Add classes to elements. Not neccessary but for practice.
pContent.classList.add('red-p');
blueHeader.classList.add('blue-h');
innerDiv.classList.add('inner-div');
divHeader.classList.add('div-header');
divP.classList.add('div-p');

// Style elements
pContent.style.color = "red";
blueHeader.style.color = "blue";
innerDiv.style.cssText = "border: black 1px solid; background-color: pink;";

// Add content to elements
pContent.textContent = "Hey I'm Red!";
blueHeader.textContent = "I'm a blue h3!";
divHeader.textContent = "I'm in a div";
divP.textContent = "ME TOO!";

// Append elements to page
