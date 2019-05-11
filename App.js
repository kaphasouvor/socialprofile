import React from 'react';

class App extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    submitted: "false"
  }
  
  handleSubmit = () =>{
   this.setState({submitted: true})
 }
  setName = event => {
    this.setState({
      name: event.target.value
    })
  }

  setEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  setPhone = event => {
    this.setState({
      phone: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <h2>Social Profile</h2>
      <input onChange={ this.setName } style={{"display": "block"}} placeholder = "Name"/>
      <input onChange={ this.setEmail } style={{"display": "block"}} placeholder = "Email"/>
      <input onChange={ this.setPhone } style={{"display": "block"}} placeholder = "Phone"/>
      <button onClick= { this.handleSubmit }>Submit</button>
      {this.state.submitted  && 
        <div>
        {"Your name is: " + this.state.name}
        <br />
        {"Your email is: " + this.state.email}
        <br />
        {"Your phone is: " + this.state.phone}
        </div>
      }
    </div>
    );
  }
}

export default App;
