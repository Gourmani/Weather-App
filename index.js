document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const searchInput = document.querySelector('#search-input');
    const cityDropdownItems = document.querySelectorAll('.dropdown-item');
    const cityNameElement = document.querySelector('#city-name');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const cityName = searchInput.value;
  
      // Call the weather API with the searched city name
      fetchWeather(cityName);
    });
  
    cityDropdownItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const cityName = this.textContent;
  
        // Call the weather API with the selected city name
        fetchWeather(cityName);
      });
    });
  
    function fetchWeather(city) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '73c9a3c7bdmsh10b99168e5c60f6p176293jsnf60f409d8189',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };
  
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
          // Update the weather information in the HTML
          cityNameElement.textContent = city;
          document.getElementById('temp').textContent = response.temp;
          document.getElementById('min_temp').textContent = response.min_temp;
          document.getElementById('max_temp').textContent = response.max_temp;
          document.getElementById('cloud_pct').textContent = response.cloud_pct;
          document.getElementById('feels_like').textContent = response.feels_like;
          document.getElementById('humidity').textContent = response.humidity;
          document.getElementById('wind_speed').textContent = response.wind_speed;
          document.getElementById('sunrise').textContent = response.sunrise;
          document.getElementById('sunset').textContent = response.sunset;
          document.getElementById('wind_degrees').textContent = response.wind_degrees;

          console.log(response.json)
        })
        .catch(err => console.error(err));
    }
  });
  