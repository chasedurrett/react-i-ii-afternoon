import React, { Component } from "react";
import "./App.css";
import data from "./data";
import Person from "./component/Person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      currentUser: 0,
    };
    this.nextUser = this.nextUser.bind(this);
    this.previousUser = this.previousUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount() {
    this.setState({
      people: data,
    });
  }

  nextUser() {
    if (this.state.currentUser === this.state.people.length - 1) {
      return this.state.people.length - 1;
    } else {
      this.setState({
        currentUser: this.state.currentUser + 1,
      });
    }
  }

  previousUser() {
    if (this.state.currentUser === 0) {
      return this.state.people[0];
    } else {
      this.setState({
        currentUser: this.state.currentUser - 1,
      });
    }
  }

  deleteUser(){
    const newPeopleDisplay = this.state.people.filter((index) => {
      if(this.state.currentUser === index) {
        delete this.state.currentUser
      }
    })
    this.setState({people: newPeopleDisplay})
  }

  render() {
    const peopleDisplay = this.state.people.map((element, index) => {
      if (this.state.currentUser === index) {
        return (
          <div>
            <Person personData={element} />
          </div>
        );
      }
    });
    return (
      <div className="App">
        <header className="Header">
          <h1 className="Home">Home</h1>
        </header>
        <div className="App-Body">
          <div className="Info-Container">{peopleDisplay}</div>
          <div className="Button-Container">
            <div className="Button">
              <button onClick={this.previousUser}>&larr; Previous</button>
            </div>
            <div className="Center-Buttons">
              <button className="Blue-Button">Edit</button>
              <button className="Blue-Button" onClick={this.deleteUser}>Delete</button>
              <button className="Blue-Button">New</button>
            </div>
            <div className="Button">
              <button onClick={this.nextUser}>Next &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
