const myDiv = document.createElement('div');

myDiv.innerText = 'Jesus Cristo';

const myBody = document.querySelector('body');

myBody.append(myDiv);

myBody.prepend(myDiv);

function print(){
    alert("vem que vem!")
}