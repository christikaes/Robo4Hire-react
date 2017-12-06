import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    var robots = [
      {
        name: "Gere",
        jobs: ["cleaning", "washing"]
      },
      {
        name: "Mace",
        jobs: ["doing homework"]
      },
      {
        name: "Data",
        jobs: ["bit mining"]
      },
      {
        name: "Efuy",
        jobs: ["cooking", "laundry"]
      },
      {
        name: "Gere",
        jobs: ["cleaning", "washing"]
      },
      {
        name: "Mace",
        jobs: ["doing homework"]
      },
      {
        name: "Data",
        jobs: ["bit mining"]
      },
      {
        name: "Efuy",
        jobs: ["cooking", "laundry"]
      },
      {
        name: "Gere",
        jobs: ["cleaning", "washing"]
      },
      {
        name: "Mace",
        jobs: ["doing homework"]
      },
      {
        name: "Data",
        jobs: ["bit mining"]
      },
      {
        name: "Efuy",
        jobs: ["cooking", "laundry"]
      }
    ]

    return (
      <MuiThemeProvider>
        <div>
          <h1>Robo 4 Hire</h1>
          <span>Find a robot for every job!</span>
          <div id="robots">
            {robots.map(robot =>
              <div className="robot">
                <h3>{robot.name}</h3>
                <img src={"http://www.robohash.org/" + robot.name} />
                {robot.jobs.map(job =>
                  <div>{job}</div>
                )}
                <button>Hire Me!</button>
              </div>
            )}
          </div>
        </div >
      </MuiThemeProvider>
    );
  }
}

export default App;
