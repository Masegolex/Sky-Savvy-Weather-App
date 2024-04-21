function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature"); // Use # for ID
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city"); // Use # for ID

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature); // Corrected spelling of temperature
}

function searchCity(city) {
  let apiKey = "5of9b61e3227f64b3eaa050fcft44f04";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Cape Town");
