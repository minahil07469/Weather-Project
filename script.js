const apiKey = '6c71b42d580df74e7c6026bd2dcd071c';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const search = document.querySelector(".input_btn")
        const buttons=document.querySelector(".btn")


        async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        }
        buttons.addEventListener("click",()=>{
            checkWeather(search.value);
        })
         