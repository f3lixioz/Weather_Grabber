# Weather Grabber

#### Application takes input from a weather API and formats the daily weather report into a .ics format. This application then creates an event on Google Calendar with the daily weather summary.

## Instructions

#### This application relies on a proxy-server for requests to APIs with strict access control policies. To start both the proxy server on localhost://8080 and the application concurrently simply do the following:
- Fork and clone/pull down the entire repository
- While at the root of the repository, in your command line, execute ```npm install``
- While at the root of the repository, in your command line, execute ```npm start```
-- This will execute ```node server.js``` and ```react-scripts start```
- Your browser should pop up with the Weather Grabber application running on a localhost://<insert port here>

#### APIs used for this application:
- ![ZipCodeAPI](https://www.zipcodeapi.com/): for transforming user input zip code into latitude and longitude for MetaWeather querying
- ![MetaWeather](https://www.metaweather.com/): for getting weather data based on the latitude and longitude of the user
---
![ConOps](./description/ConOps.png)