const myDiv = document.createElement('div');

myDiv.innerText = 'Jesus Cristo';

const myBody = document.querySelector('body');

myBody.append(myDiv);

myBody.prepend(myDiv);

function print(){
    alert("vem que vem!");
}

const myInput = document.querySelector('input');
myInput.onkeydown = function() {
    console.log('digitei');
}

const myH2 = document.querySelector('h2');
myH2.addEventListener('mouseover', naruto); //onmouseover sem o 'on'


function naruto(){
    alert ('o evento');
}

const myColor = document.querySelector('h3');
myColor.style.backgroundColor = 'green';

// onclick
// ondblclick
// onmouseover
// onkeyup

