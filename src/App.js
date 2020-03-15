import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    UserName: 'Rajeev'
  };

  EventHandler = (event) => {
    this.setState({
      UserName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Assignment - 1</h1>
        <UserInput Changed={this.EventHandler.bind(this)} 
        Value={this.state.UserName} />
        
        <UserOutput userName={this.state.UserName} />
        <UserOutput userName={this.state.UserName} />
        <UserOutput userName={this.state.UserName} />
      </div>
    );
  }
}

export default App;
