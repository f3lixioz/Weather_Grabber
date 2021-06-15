import React from "react"

const zipCodeAPI = "https://www.zipcodeapi.com/rest/c5X0BKe7yZuwgP4t2FmNmPYk3PBNNVROLnfxgjOn4yJXjkSyNup9FqziSihvvPsc/info.json/"
//append "<zipCode>/degrees" to the end

export default class InputProcessor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      zipCode: this.props.zipCode,
      latlng: [37.57, -122.36]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    fetch(`${zipCodeAPI}${this.state.zipCode}/degrees`, {
      method: 'GET',
      mode: "no-cors"
    })
      .catch(response => alert(response.status))
      .then(response => response.json())
      .then(data => this.setState({
        latlng: [data.lat, data.lng]
      }))
  }

  render() {
    return (
      <div>
        {this.state.name}
        {this.state.email}
        {this.state.zipCode}
        {this.state.latlng}
      </div>
    )
  }
}