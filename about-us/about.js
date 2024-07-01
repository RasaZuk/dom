const h1DOM = document.getElementById('title');
console.log(h1DOM);

const pDOM = document.getElementsByTagName('p');
console.log(pDOM);

console.log(h1DOM.innerText.toUpperCase);
console.log(pDOM.innerText);

const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM[0]);




const liDOM = ulDOM[0].getElementsByTagName('li');


for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i].innerText);
}

//elementas.innerText = '145621';