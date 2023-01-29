/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const teht1 = document.querySelectorAll('p');
console.log(teht1);

const teht2 = document.querySelector('.site-header');
console.log(teht2);

const teht3 = document.querySelector('#jumbotronText');
console.log(teht3);

const teht4 = document.querySelectorAll('.primary-content p');
console.log(teht4);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for us!"
*/

const alertButton = document.querySelector('#alertBtn');
alertButton.addEventListener('click', () => {
  alert('Thanks for us!');
});

/*
Task 3
=======

When a user clicks the 'Change color' button, the background color of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

let changeColourButton = document.querySelector('#bgrChangeBtn');
changeColourButton.addEventListener('click', () => {
  const bg = document.querySelector('body');
  bg.style.backgroundColor = 'red';
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const linksBtn = document.querySelector('#largerLinksBtn');
linksBtn.addEventListener('click', () => {
  let links = document.querySelectorAll('a');

  for (let i=0; i<links.length; i++) {
    links[i].style.fontSize = '32px';
  }
});
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const addtxt = document.querySelector('#addArticleBtn');

addtxt.addEventListener('click', () => {
  const createParagraph = document.createElement('p');
  const inputEl = document.querySelector('#addArticleInput');
  const inputCont = inputEl.value;
  createParagraph.innerText = inputCont;
  const footer = document.querySelector('#addArticle');
  footer.appendChild(createParagraph);
});
