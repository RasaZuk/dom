//<button class="button">Click me</button>

const formDOM = document.getElementsByTagName('form')[0];

formDOM.innerHTML = '<button type="button">Click me</button>';

contentDOM = document.getElementById('content');
ulDOM = contentDOM.querySelector('.products-list');

const products = [
    {
        title: 'Duona',
        count: 2,
    },
    {
        title: 'Pomidoras',
        count: 3,
    },
    {
        title: 'Agurkas',
        count: 1,
    },
    {
        title: 'Grietine',
        count: 2,
    },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {
    HTML += `
    <li>
        <p class="title">${products[i].title}</p>
        <p class="count">${products[i].count}</p>
    </li>`;
}

ulDOM.innerHTML = HTML;