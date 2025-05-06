const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// added a red p

const pContent = document.createElement('p');
pContent.classList.add('pContent');
pContent.textContent = "Hey I'm red!";
pContent.style.color = 'red';

container.appendChild(pContent);

// added a blue h3

const hContent = document.createElement('h3');
hContent.classList.add('hContent');
hContent.textContent = "I'm a blue h3!";
hContent.style.color = 'blue';

container.appendChild(hContent);

// added another div - with a h3 & another p inside

const secondDiv = document.createElement('div');
secondDiv.classList.add('secondDiv');
secondDiv.style.backgroundColor = 'pink';
secondDiv.style.border = 'red 2px solid';

container.appendChild(secondDiv);

const secondDivH = document.createElement('h1');
secondDivH.classList.add('secondDivH');
secondDivH.textContent = "I'm in a div";

secondDiv.appendChild(secondDivH);

const secondDivP = document.createElement('p');
secondDivP.classList.add('secondDivP');
secondDivP.textContent = "ME TOO!"

secondDiv.appendChild(secondDivP);

function alertFunction ()
{
  alert("Yay! You clicked the button!");
}

const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", alertFunction);

// accessing more information about the event with a callback - a callback in a function passed into another function as an argument

// the 'e' param contains an object that references the event itself
btn2.addEventListener("click", function (e)
{
  console.log(e);
});

btn2.addEventListener('click', function (e)
{
  console.log(e.target);
});

btn2.addEventListener(`click`, function (e)
{
  e.target.style.background = 'blue';
});

// buttoncontainer is a node list. It looks & acts like an array
const buttons = document.querySelectorAll('button');

// use the .forEach method to iterate through each button
buttons.forEach((button) =>
{
  // and for each one we add a 'click' listener
  button.addEventListener('click', () =>
  {
    alert(button.id);
  });
});