import React from "react";

const zipCodeAPI = `http://localhost:8080/https://www.zipcodeapi.com/rest/c5X0BKe7yZuwgP4t2FmNmPYk3PBNNVROLnfxgjOn4yJXjkSyNup9FqziSihvvPsc/info.json/`
//append "<zipCode>/degrees" to the end

const metaWeatherAPI = `http://localhost:8080/https://www.metaweather.com/api/location/`
//append "/search/?lattlong=<lat>,<lng>" to the end
//append "/<woeid>" to the end

export default class InputProcessor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      zipCode: this.props.zipCode,
      coords: [37.57, -122.36],
      weatherData: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
  }

  async componentDidMount() {
    await fetch(`${zipCodeAPI}${this.state.zipCode}/degrees`, { mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({
        coords: [data.lat, data.lng]
      }))
      .catch(err => err)

    fetch(`${metaWeatherAPI}search/?lattlong=${this.state.coords.join()}`, { mode: 'cors' })
      .then(response => response.json())
      .then(data =>
        fetch(`${metaWeatherAPI}${data[0].woeid}`, { mode: 'cors' })
          .then(response => response.json())
          .then(async (data) => {
            let tempData = data.consolidated_weather[0].weather_state_name
            await console.log(tempData)
          })
          .catch(err => err))
      .catch(err => err)
  }

  render() {
    return (
      <div>
        {this.state.weatherData}
        {this.state.coords}
      </div>
    )
  }
}