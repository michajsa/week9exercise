var div = document.createElement('div');
div.setAttribute('id', 'newDiv');

var h1 = document.createElement('h1');
h1.textContent = 'The Warriors won the 2017 Finals!';

var body = document.getElementById('body');

div.appendChild(h1);
body.appendChild(div);

var divTwo = document.createElement('div');
divTwo.setAttribute('id', 'divTwo');

var newH1 = document.createElement('h1');
newH1 = document.createTextNode('Rena is leading the class rn');
divTwo.appendChild(newH1);
body.appendChild(divTwo);


var image = document.createElement('img');
var button = document.createElement('button');
var remove = document.createElement('button');
remove.textContent = 'Remove';

button.textContent = 'Click Me';

body.appendChild(image);
body.appendChild(button);
body.appendChild(remove);

button.addEventListener('click', function() {
  image.src = 'img/funny.jpg';
})

remove.addEventListener('dblclick', function() {
  image.remove();
})
