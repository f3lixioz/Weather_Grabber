import React from "react"
import InputProcessor from "./InputProcessor"

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      zipCode: null,
      inputAdded: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.setState({
      name: this.name.value,
      email: this.email.value,
      zipCode: this.zipCode.value,
      inputAdded: true
    })
  }

  async handleBack(event) {
    await this.setState({
      inputAdded: false
    })
  }

  render() {
    if (this.state.inputAdded) {
      return (
        <div>
          <button onClick={this.handleBack}>Back</button>
          <InputProcessor
            name={this.state.name}
            email={this.state.email}
            zipCode={this.state.zipCode} />
        </div>
      )
    } else {
      return (
        <div>
          <form type="submit" onSubmit={this.handleSubmit}>
            <label for="Name">Name</label>
            <input id="Name"
              type="text"
              placeholder="Elongated Muskrat"
              ref={(name) => this.name = name} />
            <label for="Email">Email</label>
            <input id="Email"
              type="email"
              placeholder="marsOrBust@spacex.com"
              ref={(email) => this.email = email} />
            <label for="zipCode">Zip Code</label>
            <input id="zipCode"
              type="text"
              pattern="[0-9]{5}"
              title="Please Enter 5-digit zip code"
              placeholder={94010}
              ref={(zipCode) => this.zipCode = zipCode} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    }
  }
}

