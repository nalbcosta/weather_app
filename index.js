const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const detalhesClima = document.querySelector('.detalhes-clima');
const error = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIKey = '856c5ee5edd5818e4f23c45326100c1d';
    const city = document.querySelector(".search-box input").value;

    if(city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&
    units=metrics&appid=${APIkey}`),then(Response => Response.json()).then
    (json => {


        if(json.cod === '404'){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            detalhesClima.style.display = 'none';
            error.style.display = 'block'
            error.classList.add('fadeIn');
            return;
        }
        error.style.display = 'none'
        error.classList.remove('fadeIn');

    });



})