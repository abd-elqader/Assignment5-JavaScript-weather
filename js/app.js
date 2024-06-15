


document.querySelector('#search').addEventListener('keyup', function(event) {

    const q = this.value;
    const apiKey = '2a861edb145c4edda44174705241306'; // Replace with your actual API key
    
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=3`)
        .then(response => response.json())
        .then(data => {
            if (data === null || data.error) {
                throw new Error('No data found or error in response');
            }
            displayWeatherData(data);
        })
        .catch(error => console.error(error));


});

function displayWeatherData(data) {
    
    // const weatherDataDiv = document.querySelector('#weatherData');
    // weatherDataDiv.innerHTML = '';

    // console.log(data.forecast);
    
    // for (const day of data.forecast) {
    //     console.log(day);
    // }


    console.log(data.forecast);
}


// function displayWeatherData(data) {
//     const weatherDataDiv = document.getElementById('weatherData');
//     weatherDataDiv.innerHTML = ''; // Clear previous data

//     if (data && data.forecast && data.forecast.forecastday) {
//         data.forecast.forecastday.forEach(day => {
//             const weatherItem = document.createElement('div');
//             weatherItem.classList.add('weather-item');
//             weatherItem.innerHTML = `
//                 <h3>${day.date}</h3>
//                 <p><strong>Condition:</strong> ${day.day.condition.text}</p>
//                 <p><strong>Max Temp:</strong> ${day.day.maxtemp_c}°C</p>
//                 <p><strong>Min Temp:</strong> ${day.day.mintemp_c}°C</p>
//             `;
//             weatherDataDiv.appendChild(weatherItem);
//         });
//     } else {
//         weatherDataDiv.innerHTML = '<p>No weather data available. Please try again.</p>';
//     }
// }