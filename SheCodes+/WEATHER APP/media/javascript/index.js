let now = new Date();
let p = document.querySelector("p");
let weekDay = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
let day = weekDay[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

p.innerHTML = `${day} , ${hours}:${minutes}`;

//function search(event){
//event.preventDefault();
//let searchInput = document.querySelector("#city-name");
//let h1 = document.querySelector("h1")
//h1.innerHTML = `${searchInput.value}`;
//}

//let form = document.querySelector ("#search-form");
//form.addEventListener("submit",search)

//Weather Api 

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let apiKey = "97e50472be43e73c48ca69e84a2d842e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?=Paris&appid=${apiKey}`;

function displayWeather(response) {
  console.log(response);
}

axios.get(apiUrl).then(displayWeather);

debugger;