
today = document.querySelector('.today');
tomorrow = document.querySelector('.tomorrow');
afterTomorrow = document.querySelector('.after-tomorrow');

document.querySelector('#search').addEventListener('input', function(event) {

    const q = this.value;
    const apiKey = '2a861edb145c4edda44174705241306'; // Replace with your actual API key
    
    if(q.length > 2) {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=3`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        });
    }


});

function displayWeatherData(data) {

    const now = new Date();
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = now.getDay();
    const dayName = weekdayNames[dayIndex];

    // for (const day of data.forecast.forecastday) {
        today.innerHTML = `
            <div class="card-header d-flex justify-content-between bg-dark-subtle">
                        <small class="text-muted">${dayName}</small>
                        <small class="text-muted">${data.forecast.forecastday[0].date}</small>
                    </div>
                    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                    <div class="card-body d-flex justify-content-between align-items-start flex-column bg-white-subtle">
                        <h5 class="card-title">${data.location.name}</h5>
                        <p class="fs-1">${data.forecast.forecastday[0].day.avgtemp_c}oC</p>
                        <figure>
                            <img src="https://${data.forecast.forecastday[0].day.condition.icon}" style="width: 100px;" alt="">
                        </figure>
                        <p class="card-text brand-color">${data.forecast.forecastday[0].day.condition.text}</p>
                        <ul class="list-unstyled m-0 d-flex align-items-center gap-3 gap-xl-4">
                            <li>
                                <span>${data.forecast.forecastday[0].day.avghumidity}%</span><i class ="fa-solid fa-umbrella fa-fw"></i>
                            </li>
                            <li>
                                <span>${data.forecast.forecastday[0].day.avgvis_miles}km/h</span><i class ="fa-solid fa-wind fa-fw"></i>
                            </li>
                            <li>
                                <span>East</span><i class="fa-solid fa-compass fa-fw"></i>
                            </li>
                        </ul>
                    </div>        
        `;
        // }
        const tomorrowName = weekdayNames[(dayIndex + 1) % 7];
        tomorrow.innerHTML = `   
            <div class="card-header d-flex justify-content-center bg-black text-white ">
                        <small>${tomorrowName}</small>
                    </div>
                    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                    <div class="card-body d-flex justify-content-center align-items-center flex-column bg-dark text-white">
                        <figure>
                            <img src="https://${data.forecast.forecastday[1].day.condition.icon}" class="" alt="">
                        </figure>
                        <div class="degree my-3">
                            <h5 class="card-title">${data.forecast.forecastday[1].day.maxtemp_c}oC</h5>
                            <p class="card-text">${data.forecast.forecastday[1].day.mintemp_c}oC</p>
                        </div>
                        <p class="card-text brand-color">${data.forecast.forecastday[1].day.condition.text}</p>
                    </div>
        `;

        const afterTomorrowName = weekdayNames[(dayIndex + 2) % 7];
        afterTomorrow.innerHTML = `      
                    <div class="card-header d-flex justify-content-center align-items-center bg-dark-subtle">
                        <small>${afterTomorrowName}</small>
                    </div>
                    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                    <div class="card-body d-flex justify-content-center align-items-center flex-column bg-white-subtle">
                        <figure>
                            <img src="https://${data.forecast.forecastday[2].day.condition.icon}" class="" alt="">
                        </figure>
                        <div class="degree my-3">
                            <h5 class="card-title">${data.forecast.forecastday[2].day.maxtemp_c}oC</h5>
                            <p class="card-text">${data.forecast.forecastday[2].day.mintemp_c}oC</p>
                        </div>
                        <p class="card-text brand-color">${data.forecast.forecastday[2].day.condition.text}</p>
                    </div>
        `;
}