const btn = document.querySelector(".btn-search");
const name = document.querySelector("#name");
const input = document.querySelector("#city");
const description = document.querySelector("#description");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const icon = document.querySelector(".icon");

const URL = "api.openweathermap.org/data/2.5/weather?q=";
const APIKey = "Append_APIKey_Here";
const fetchWeather = (city) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name);
      name.innerHTML = "Weather in " + data.name;
      description.innerHTML = data.weather[0].description;
      temp.innerHTML = data.main.temp + "&deg;C";
      humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
      wind.innerHTML = 'Wind: '+ data.wind.speed + " km/h";
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
     input.value ="";
    });
};

btn.addEventListener("click", (event) => {
  //   preventDefault(event);
  if (input.value === ""){
      alert("Please enter a city")
  }else{
fetchWeather(input.value);
}
  
});
