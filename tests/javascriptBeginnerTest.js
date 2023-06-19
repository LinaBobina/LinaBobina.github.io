function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

function aggressive() {
    document.getElementById("angry").innerHTML = "Thank goodness...";
  }

//DOM MANIPULATION
const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!";
container.appendChild(content);

// PRACTICE TEST - red <p> string
const box = document.querySelector('#containerOne');
const toyColor = document.createElement('p');

toyColor.classList.add('toyColor');
toyColor.textContent = "Hey, I'm red!"
toyColor.style.color = 'red';
box.appendChild(toyColor);

// PRACTICE TEST - blue <h3> string
const igloo = document.querySelector('#containerTwo');
const snowColor = document.createElement("h3");

snowColor.classList.add('snowColor');
snowColor.textContent = "I'm a blue h3!";
snowColor.style.color = 'blue';
igloo.appendChild(snowColor);

// PRACTICE TEST - black border, pink bg <div> strings
const wrapper = document.querySelector("#containerThree");
const imdiv = document.createElement("h1");
const metoo = document.createElement("p");

imdiv.classList.add('imdiv');
imdiv.textContent = "I'm in a div";
imdiv.style.cssText = 'border: 2px solid black; background: pink;';
wrapper.appendChild(imdiv);


metoo.classList.add("metoo");
metoo.textContent = "ME TOO!";
metoo.style.cssText = 'border: 2px solid black; background: pink;';
wrapper.appendChild(metoo);
