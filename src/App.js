import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

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
          <AppBar
            title="Robo4Hire"
          />
          <span>Find a robot for every job!</span>
          <div id="robots">
            {robots.map(robot =>
              <Card className="robot">
                <CardMedia
                  overlay={<CardTitle title={robot.name} />}
                >
                  <img src={"http://www.robohash.org/" + robot.name} />
                </CardMedia>
                <CardText>
                  <div className="chips">
                    {robot.jobs.map(job =>
                      <Chip>{job}</Chip>
                    )}
                  </div>
                </CardText>
                <CardActions>
                  <RaisedButton> Hire Me!</RaisedButton>
                </CardActions>
              </Card>
            )}
          </div>
        </div >
      </MuiThemeProvider >
    );
  }
}

export default App;
