import React from "react";

export default function Home() {
  return (
    <div className="homepage">
      <h1>About the App</h1>
      <br />
      <p>
        The Weather Grabber is a simple web-application that takes user input and provides a daily weather forecast to the user.
        <br /><br />
        This application sends data through a location and weather API, and then formats the data into a daily weather report in .ics format. This application then creates a ready-to-send email with the daily weather summary.
      </p>
    </div>
  )
}