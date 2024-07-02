/*const h1DOM = document.getElementById('title');
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

const sarasas = document.getElementById('pirkiniu-sarasas');

console.log(sarasas);

const sarasoDaiktai = sarasas.getElementsByTagName('li');
console.log(sarasoDaiktai);

for (let i = 0; i < sarasoDaiktai.length; i++) {
    sarasoDaiktai[i].innerText = (i + 1) + ') ' + sarasoDaiktai[i].innerText;

    console.log(i + 1) + ') ' + sarasoDaiktai[i].innerText;
}
    */

const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM);

const liDOM = ulDOM[1].getElementsByTagName('li');

for (let i = 0; i < liDOM.length; i++) {
    console.log(liDOM[i].innerText);
}

const pomidoroVaikaiDOM = document.getElementById('darzas').querySelectorAll('.pomidoras > li');
console.log(pomidoroVaikaiDOM);