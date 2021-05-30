// const api = {
//     key: 'eadd2643e9msh4db093031c356fap1a9025jsncc69c4da9c61',
//     base: 'https://amazon-price-history.p.rapidapi.com',
// };
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        getResults(searchBox.value);
    }
}

function getResults(query) {
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key':
                'eadd2643e9msh4db093031c356fap1a9025jsncc69c4da9c61',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        },
    })
        .then(weather => {
            return weather.json();
        })
        .then(displayResults);
}
function displayResults(weather) {
    console.log(weather);

    document.getElementById('card').style.border = 'thick dotted red';

    let title = document.querySelector('main .title');
    title.innerText = `The Top Movie with the Requested Keyword is... `;

    let image = document.querySelector('.card .image');
    image.innerHTML = `<img src="${weather.d[0].i.imageUrl}">`;

    let name = document.querySelector('.card .movieName');
    name.innerText = `${weather.d[0].l}`;

    let year = document.querySelector('.card .year');
    year.innerText = `Released in ${weather.d[0].y}`;

    let link = document.querySelector('.card .link');
    link.innerHTML = `<button onclick="document.location='https://www.imdb.com/title/${weather.d[0].id}/'"> Check It On IMDB </button>`;
}
