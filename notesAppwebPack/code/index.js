import {add} from './calci';

import ('./index.css');
import bee from './images/bee.jpg';

console.log (add (5, 7));

const h1 = document.createElement ('h1');
h1.innerText = 'My Note-Pad';
h1.classList.add ('redcolor');
h1.classList.add ('center');

const div = document.createElement ('div');
const image = document.createElement ('img');
div.classList.add ('imageDiv');
image.src = bee;
div.append (image);

let navbar = document.getElementById ('navbar');
navbar.append (h1, div);
navbar.classList.add ('navbar');
navbar.classList.add ('flex');

let inputDiv = document.getElementById ('inputDiv');
inputDiv.classList.add ('inputDiv');

let form = document.createElement ('form');
form.classList.add ('inputForm');

let title = document.createElement ('input');
title.type = 'text';
title.placeholder = 'Enter the title here';
title.className = 'title';
title.className = 'block-display';
let content = document.createElement ('textarea');

content.placeholder = 'Enter the content here';
content.className = 'content';
content.className = 'block-display';

let subBtn = document.createElement ('button');
subBtn.innerHTML = 'Add';
subBtn.type = 'button';
subBtn.classList.add ('sbtn');

form.append (title, content, subBtn);

inputDiv.append (form);

subBtn.onclick = function () {
  appendVal (title.value, content.value);
};

let notes = document.getElementById ('notes');

function appendVal (t, c) {
  console.log ('hello', c);
  let notesDiv = document.createElement ('div');
  notesDiv.classList.add ('notesDiv');

  let ntitle = document.createElement ('h1');
  let ndesc = document.createElement ('p');
  let dbtn = document.createElement ('button');
  dbtn.innerText = 'Delete';
  dbtn.type = 'button';
  dbtn.onclick = () => {
    notesDiv.remove ();
  };

  ntitle.innerText = t;
  ndesc.innerText = c;

  notesDiv.append (ntitle, ndesc, dbtn);

  notes.append (notesDiv);
}
