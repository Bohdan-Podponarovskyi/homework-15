const city = 'Odesa'

function getWeather(city) {
    const request = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);

    request.then(response => {
        return response.json();
    }).then(data => {
        console.log(data);

        const {temp, pressure, humidity} = data.main;
        const {speed, deg} = data.wind;
        const {description, icon} = data.weather[0];
        const  iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

        console.log('Temperature:', temp);
        console.log('Pressure:', pressure);
        console.log('Humidity:', humidity);
        console.log('Description:', description);
        console.log('Icon:', icon);
        console.log('Wind Speed:', speed);
        console.log('Wind Direction in Degrees:', deg);
        console.log('Icon URL:', iconUrl);
    })
}

getWeather(city);