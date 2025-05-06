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

// added another div

const secondDiv = document.createElement('div');
secondDiv.classList.add('secondDiv');
secondDiv.style.backgroundColor = 'pink';
secondDiv.style.border = 'red 2px solid';

container.appendChild(secondDiv);

const secondDivH = document.createElement('h1');
secondDivH.classList.add('secondDivH');
secondDivH.textContent = "I'm in a div";

const secondDivP = document.createElement('p');
secondDivP.classList.add('secondDivP');
secondDivP.textContent = "ME TOO!"

secondDiv.appendChild(secondDivH);
secondDiv.appendChild(secondDivP);
