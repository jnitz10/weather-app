
const lat = '33.44';
const lon = '-112.07';
const wKey = '59efad4db3104cb9bcb54c7de681ffad'

// TODO: refactor into modules, add modules for generating weekly forecast

async function getWeather() {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=imperial&appid=${wKey}`, {mode: 'cors'})
    .then((response) => {
      return response.json();
    }) 
    .then((data) => {
      console.log(data);
      document.querySelector('.weather').innerHTML += 
      `${data.current.temp}°F<br>${data.current.weather[0].description}`
    })


}

window.onload = getWeather();