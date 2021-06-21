import React from "react";

export default function Home() {
  return (
    <div className="homepage">
      <h1>About the App</h1>
      <p className="instructions">
        The Weather Grabber is a simple web-application that takes user input and provides a daily weather forecast to the user. This application sends data through a location and weather API, and then formats the data into a daily weather report in .ics format. This application then creates a ready-to-send email with the daily weather summary.
      </p>
      <h2>Instructions</h2>
      <p className="instructions">
        This application relies on a proxy-server for requests to APIs with strict access control policies and an express server for POST and GET of .ics data for the user. To start the proxy server, express server, and the application concurrently simply do the following:
      </p>
      <ol className="instructions">
        <li>Fork and clone/pull down the entire repository</li>
        <li>While at the root of the repository, in your command line, execute <code>npm install</code></li>
        <li>While at the root of the repository, in your command line, execute <code>npm start</code></li>
        <ul>
          <li>This will execute <code>node ./server/server.js</code>, <code>react-scripts start</code>, <code>node ./server/nodejsapi/expressServer.js</code> at the same time</li>
          <li>The proxy-server (server.js) will run in the background on localhost://8080</li>
          <li>The express server (expressServer.js) will run in the background on localhost://5001</li>
          <li>The Weather Grabber application will pop-up in-browser on localhost://(port, e.g. 3000)</li>
        </ul>
      </ol>
      <h2>Credits</h2>
      <h3 className="instructions">APIs Used</h3>
      <ul className="instructions">
        <li><b>ZipCodeAPI</b>: for transforming user input zip code into latitude and longitude for MetaWeather querying</li>
        <li><b>MetaWeather</b>: for getting weather data based on the latitude and longitude of the user</li>
      </ul>
      <h3 className="instructions">Notable Packages</h3>
      <ul className="instructions">
        <li><b>cors-anywhere</b>: proxy-server which adds CORS headers to all requests</li>
        <li><b>ics</b>: formats inputs into iCalendar (ics)-compliant data</li>
        <li><b>create-react-app</b>: sets-up a react app in one command</li>
        <li><b>body-parser</b>: formats incoming POST request data into parsable data</li>
        <li><b>node-fetch</b>: writes files to the express server upon successful POST requests</li>
        <li><b>express</b>: minamalist web framework for node</li>
      </ul>
    </div>
  )
}