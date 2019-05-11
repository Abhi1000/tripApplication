import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavTbas from './NavTabs.js'
import axios from 'axios';
import TripCount from './components/tripsCount.js'
import TripAdd from './components/tripAdd.js'
import TripList from './components/tripList.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tripData: []
    }
    this.addTrip = this.addTrip.bind(this)
  }
  componentDidMount() {
	  console.log("inside componentDidMount");
    // axios.get('./data.json').then(res => {
    //   console.log("res", res.data);
    //   // this.state.tripData = res.data
    // })
  }
  addTrip = (newTripData) => {
    console.log("newTripData", newTripData);
    this.state.tripData.push(newTripData)
    console.log("newdata", this.state.tripData);

  }
  render() {
    return (
      <div className="app">
        <Router>
          <div className="route-container">
            <NavTbas> </NavTbas>
            <Switch>
              <Route exact path='/' render={(props) =>
                <TripCount {...props}
                  tripList={this.state.tripData}
                ></TripCount>
              }>

              </Route>
              <Route path="/add" render={(props) =>
                <TripAdd {...props}
                  newTripData={this.addTrip}
                ></TripAdd>
              }></Route>

              <Route path="/list" render={(props) =>
                <TripList {...props} tripListToDisplay={this.state.tripData}>
                </TripList>
              }>
              </Route>
              <Route path="/list/:triptype" render={(props) =>
                <TripAdd {...props}
                  tripListToDisplay={this.state.tripData}>
                </TripAdd>
              }>
              </Route>
              {/* Default route if wrong path is hit.... */}
              <Route render={() => (<div className="content"><h2>Page Not Found....</h2></div>)}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
