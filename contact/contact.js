const initialElementDOM = document.getElementById('initial_element');

initialElementDOM.innerHTML = `
    <header>
    <img src="#" alt="Logo">
    <nav>NAV</nav>
    </header>
    <main>MAIN</main>
    <footer>FOOTER</footer>`;

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

navDOM.innerHTML = `<a href="../">Home</a>
<a href="../>about-us/">About</a>
<a href="../>products/">Products</a>
<a href="../>contact/">Contact</a>`;