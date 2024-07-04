const initialElementDOM = document.getElementById('initial_element');

initialElementDOM.innerHTML = `
    <main>MAIN</main>`;

const navDOM = document.querySelector('nav');

const mainLinksData = [
    {
        text: 'Home',
        link: '../',
    },
    {
        text: 'About',
        link: '../about-us/',
    },
    {
        text: 'Products',
        link: '../products/',
    },
    {
        text: 'Contact',
        link: '../contact/',
    },
];

let navHTML = '';

for (const linkData of mainLinksData) {
    navHTML += `<a class="link" href="${linkData.link}">${linkData.text}</a>`;
}

navDOM.innerHTML = navHTML;



const mainDOM = initialElementDOM.querySelector('main');



mainDOM.innerHTML = `
    <article>
    <img src="#">
    <p>pavadinimas</p>
    <p>spalva</p>
    <p>forma</p>
    <p>tipas</p>
    <a>href=""></a>
    </article>`;

const pokemonai = [
    {
        src: '../images/Tyrunt.png',
        pavadinimas: 'Tyrunt',
        spalva: 'pilka',
        forma: 'apvalus',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/tyrunt',
    },
    {
        src: '../images/Braixen.png',
        pavadinimas: 'Braixen',
        spalva: 'geltona',
        forma: 'uodeguota',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/braixen',
    },
    {
        src: '../images/Delphox.png',
        pavadinimas: 'Delphox',
        spalva: 'ruda',
        forma: 'išsidraikiusi',
        tipas: 'ugnis',
        nuoroda: 'https://www.pokemon.com/us/pokedex/delphox',
    },
    {
        src: '../images/Froakie.png',
        pavadinimas: 'Froakie',
        spalva: 'mėlyna',
        forma: 'apvali',
        tipas: 'vanduo',
        nuoroda: 'https://www.pokemon.com/us/pokedex/froakie',
    },
    {
        src: '../images/Greninja.png',
        pavadinimas: 'Greninja',
        spalva: 'violetinė',
        forma: 'kūda',
        tipas: 'oras',
        nuoroda: 'https://www.pokemon.com/us/pokedex/greninja',
    },
    {
        src: '../images/Bunnelby.png',
        pavadinimas: 'Bunnelby',
        spalva: 'pilka',
        forma: 'ilgaausė',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/bunnelby',
    },
    {
        src: '../images/Fletchling.png',
        pavadinimas: 'Fletchling',
        spalva: 'marga',
        forma: 'didžiagalvė',
        tipas: 'oras',
        nuoroda: 'https://www.pokemon.com/us/pokedex/fletchling',
    },
    {
        src: '../images/Vivillon.png',
        pavadinimas: 'Vivillon',
        spalva: 'rausva',
        forma: 'lengva',
        tipas: 'oras',
        nuoroda: 'https://www.pokemon.com/us/pokedex/vivillon',
    },
    {
        src: '../images/Litleo.png',
        pavadinimas: 'Litleo',
        spalva: 'pilka',
        forma: 'sunki',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/litleo',
    },
    {
        src: '../images/Pyroar.png',
        pavadinimas: 'Pyroar',
        spalva: 'raudona',
        forma: 'plona',
        tipas: 'žemė',
        nuoroda: 'https://www.pokemon.com/us/pokedex/pyroar',
    },
];


let pokemonaiHTML = '';

for (const data of pokemonai) {
    pokemonaiHTML += `
    <article>
    <img src="${data.src}" alt="${data.pavadinimas}"></img>
    <p><b>Vardas:</b> ${data.pavadinimas}</p>
    <p><b>Spalva:</b> ${data.spalva}</p>
    <p><b>Forma:</b> ${data.forma}</p>
    <p><b>Tipas:</b> ${data.tipas}</p>
    <a href="${data.nuoroda}" target="_blank">Read more</a>
    </article>`
}



mainDOM.innerHTML = pokemonaiHTML;





