import React from "react";
import '../styles/App.css';

export default class WeatherReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      coords: this.props.coords,
      weather: this.props.weatherData[0],
      icon: this.props.weatherData[1],
      windD: this.props.weatherData[2],
      airP: this.props.weatherData[3].toFixed(0),
      date: this.props.weatherData[4],
      lowT: this.props.weatherData[5].toFixed(0),
      highT: this.props.weatherData[6].toFixed(0),
      windS: this.props.weatherData[7].toFixed(0),
      humidity: this.props.weatherData[8].toFixed(0),
      confidence: this.props.weatherData[9].toFixed(0),
      sunrise: this.props.weatherData[10].substring(11, 19),
      sunset: this.props.weatherData[11].substring(11, 19),
      city: this.props.weatherData[12],
      timezone: this.props.weatherData[13],
      localTime: this.props.weatherData[14].substring(11, 19),
      file: null
    }

    this.handleSendEmail = this.handleSendEmail.bind(this)
  }

  formatICS() {
    const ics = require('ics')

    const year = parseInt(this.state.date.substring(0, 4))
    const month = parseInt(this.state.date.substring(5, 7))
    const day = parseInt(this.state.date.substring(8, 10))

    const report = `Hi, ${this.state.name}! Here is today's weather report for ${this.state.city}, with ${this.state.confidence}% confidence:

    Date: ${this.state.date}
    Local time: ${this.state.localTime}
    Timezone: ${this.state.timezone}
    Sunrise: ${this.state.sunrise}
    Sunset: ${this.state.sunset}

    Weather: ${this.state.weather}
    Highs: ${this.state.highT}°C
    Lows: ${this.state.lowT}°C
    Humidity: ${this.state.humidity}%
    Wind Speed, Direction: ${this.state.windS} mph, ${this.state.windD}
    Pressure: ${this.state.airP} mb`

    const event = {
      productId: 'Law+Zhang/weather_grabber',
      start: [year, month, day],
      duration: { hours: 24, minutes: 0 },
      title: `Weather in ${this.state.city} on ${this.state.date}`,
      description: report,
      location: this.state.city,
      url: 'https://github.com/justinthelaw/Weather_Grabber',
      geo: { lat: this.state.coords[0], lon: this.state.coords[1] },
      categories: ['weather', 'daily report', this.state.city, 'USSF SDI'],
      status: 'CONFIRMED',
      busyStatus: 'FREE',
      organizer: { name: this.state.name, email: this.state.email },
      attendees: [{ name: this.state.name, email: this.state.email, rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' }]
    }

    ics.createEvent(event, (error, file) => {
      if (error) {
        console.log(error)
        return
      }

      this.setState({
        file: file
      })
    })
  }

  //TODO: find a way to get this file into an event or email or display for PoC
  sendEmail(file) {
    console.log(file)
  }

  async handleSendEmail(event) {
    event.preventDefault();
    await this.formatICS();
    await this.sendEmail(this.state.file);
  }

  render() {
    return (
      <div>
        <h3>Welcome, {this.state.name}!</h3>
        <p>Here is today's weather report, with {this.state.confidence}% confidence:</p>
        <h3>{this.state.city}</h3>
        <p>
          Date: {this.state.date} <br />
          Local time: {this.state.localTime} <br />
          Timezone: {this.state.timezone}
        </p>

        <img src={`https://www.metaweather.com/static/img/weather/${this.state.icon}.svg`} alt={this.state.weather} width="40%" />
        <h4>
          {this.state.weather}
        </h4>
        <p>
          Sunrise: {this.state.sunrise} <br />
          Sunset: {this.state.sunset}
        </p>
        <p>
          Highs: {this.state.highT}°C <br />
          Lows: {this.state.lowT}°C <br />
          Humidity: {this.state.humidity}% <br />
          Wind Speed, Direction: {this.state.windS} mph, {this.state.windD} <br />
          Pressure: {this.state.airP} mb <br />
        </p>

        <button onClick={this.handleSendEmail}>Email Calander Event</button>
      </div>
    )
  }
}