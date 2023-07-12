let now = new Date();
let p = document.querySelector("p");
let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = weekDay[now.getDay()];
let hours = now.getHours();
let minutes = now.getUTCMinutes();

p.innerHTML = `${day} , ${hours}:${minutes}`;

//Weather Api
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;
  searchCity(city.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityWeather = document.querySelector("#temperature");
  cityWeather.innerHTML = `${temperature}`;
}

function searchCity(city) {
  let apiKey = "97e50472be43e73c48ca69e84a2d842e";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

//weather api 2 (geolocation integration)

function displayingWeather() {
  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "97e50472be43e73c48ca69e84a2d842e";
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(weatherUrl).then(showCity);
  }

  navigator.geolocation.getCurrentPosition(showPosition);
  //I'm unsure on how to integrate the button into my geolocation location and temperature but figured how to pull that data.
  function showCity(response) {
    let currentPosition = response.data.name;
    let currentLocationTemp = document.querySelector("h1");
    currentLocationTemp.innerHTML = `${currentPosition}`;
    let temperature = Math.round(response.data.main.temp);
    let cityTemp = document.querySelector("#temperature");
    cityTemp.innerHTML = `${temperature}`;
  }
}
displayingWeather();

