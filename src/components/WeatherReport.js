import React from "react";

export default class WeatherReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      weatherData: this.props.weatherData //<data>: <index>
      //weather description (<description>): 0
      //weather icon identifier (<abbreviation>): 1
      //wind direction (<compass direction>): 2
      //air pressure: 3
      //forcast date (YYYY-MM-DD): 4
      //low temp (C): 5
      //high temp (C): 6
      //wind speed (mph): 7
      //humidity (%): 8
      //forcast confidence (%): 9
      //sunrise (YYYY-MM-DDTHH:MM:SS.SSSSSS-<UTC offset>): 10
      //sunset (YYYY-MM-DDTHH:MM:SS.SSSSSS-<UTC offset>): 11
      //city (<city>): 12
      //timezone (<country>/<zone>): 13
      //local time (YYYY-MM-DDTHH:MM:SS.SSSSSS-<UTC offset>): 14
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
  }

  localTime(fullTime) {
    return fullTime
  }

  render() {
    return (
      <div>
        <h2>Welcome, {this.state.name}!</h2>
        <p>Here is today's weather report, with {this.state.weatherData[9]}% confidence:</p>
        <h3>{this.state.weatherData[12]}</h3>
        <p>
          Date: {this.state.weatherData[4]} <br />
          Local time: {this.state.weatherData[14].substring(11, 19)} <br />
          Timezone: {this.state.weatherData[13]}
        </p>

        <h4>{this.state.weatherData[0]}</h4>
        <p>
          <img src={`https://www.metaweather.com/static/img/weather/${this.state.weatherData[1]}.svg`} alt={this.state.weatherData[0]} />
          Sunrise: {this.state.weatherData[10]} <br />
          Sunset: {this.state.weatherData[11]}
        </p>
      </div>
    )
  }
}