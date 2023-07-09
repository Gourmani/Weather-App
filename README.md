# Weather App

A simple weather application that allows users to check the weather conditions for different cities.

## Features

- Search for weather conditions by city name
- Display current temperature, min temperature, max temperature, cloud percentage, feels like, humidity, wind speed, sunrise time, sunset time, and wind degrees

![image](https://github.com/Gourmani/Weather-App/assets/105964841/fe5e77ec-431d-4064-8999-ba398d094606)


## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

## Getting Started

To get a local copy of the project, you can clone the repository by running the following command:


## Usage

1. Open the index.html file in your web browser.
2. Enter a city name in the search input field or select a city from the dropdown menu.
3. Click the "Search" button or press Enter.
4. The weather information for the selected city will be displayed.

## API Key

This project uses the RapidAPI Weather API to fetch weather data. You need to provide your own API key in the JavaScript code to make it work. Replace `'YOUR_API_KEY'` with your actual API key in the `fetchWeather` function in the `rest.js` file.

```javascript
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
