import React from "react"

export default class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Elongated Muskrat",
            email: "marsOrBust@spacex.com",
            zipCode: 94010
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit (event) {
        event.preventDefault();
        await this.setState({
          name: this.name.value,
          email: this.email.value,
          zipCode: this.zipCode.value
        })
    }

    render() {
      return (
        <div>
          <form type="submit" onSubmit={this.handleSubmit}>
              <label for="Name">Name</label>
              <input id="Name" 
                type="text"
                placeholder={this.state.name}
                ref={(name) => this.name = name}/>
              <label for="Email">Email</label>
              <input id="Email" 
                type="email"
                placeholder={this.state.email}
                ref={(email) => this.email = email}/>
              <label for="zipCode">Zip Code</label>
              <input id="zipCode" 
                type="text" 
                pattern="[0-9]{5}" 
                title="Please Enter 5-digit zip code"
                placeholder={this.state.zipCode}
                ref={(zipCode) => this.zipCode = zipCode}/>
              <button type="submit">Submit</button>

              {this.state.name}
              {this.state.email}
              {this.state.zipCode}
          </form>
        </div>
      )
    }
}

