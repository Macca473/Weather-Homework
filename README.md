# Weather-Homework

	When the user enters a city, this shows the Weather icon,
	temperature, humidity and wind speed for five days.

https://macca473.github.io/Weather-Homework/ (the API doesn't work):

GIVEN a weather dashboard with form inputs
		Appends the local storage inside a div

WHEN I search for a city
		Saves search 
THEN I am presented with current and future conditions for that city and that city is added to the search history
		adds the search to the api link

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
		gets the map values from the api and adds to the html (I couldn't find the UV value)	
	
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast

	API:
	api.openweathermap.org


	