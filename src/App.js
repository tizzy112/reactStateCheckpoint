// src/App.js

import React, { Component } from "react";
import "./App.css"; // You can style as needed

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "ola ayo",
        bio: "A software developer with a passion for coding.",
        imgSrc: "https://via.placeholder.com/150?text=John+Doe",
        profession: "Software Engineer",
      },
      show: false,
      startTime: new Date(),
    };
  }

  componentDidMount() {
    // Set up the interval to update the elapsed time
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.timerID);
  }

  updateTime() {
    this.setState({ currentTime: new Date() });
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, currentTime } = this.state;
    const elapsedTime = currentTime
      ? Math.floor((currentTime - this.state.startTime) / 1000)
      : 0;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p>
              <strong>Profession:</strong> {person.profession}
            </p>
          </div>
        )}
        <div className="timer">Time since mounted: {elapsedTime} seconds</div>
      </div>
    );
  }
}

export default App;
