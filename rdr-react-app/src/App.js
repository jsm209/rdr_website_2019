
// Default
import React from 'react';
import logo from './logo.svg';
import './App.css';

// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
            <div>
              {/* This is just a list, will later be replaced by nav */}
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/members">Members</Link>
                </li>
                <li>
                  <Link to="/schedule">Schedule</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/volunteer">Volunteer</Link>
                </li>
              </ul>

              {/* Put content for each page between route tags below. */}
              <Switch>
                <Route exact path="/">
                  {/* Home Page */}
                  <p>Home</p>
                </Route>
                <Route path="/members">
                  {/* Members Page */}
                  <p>Members</p>
                </Route>
                <Route path="/schedule">
                  {/* Schedule Page */}
                  <p>Schedule</p>
                </Route>
                <Route path="/events">
                  {/* Events Page */}
                  <p>Events</p>
                </Route>
                <Route path="/about">
                  {/* About Page */}
                  <p>About</p>
                </Route>
                <Route path="/volunteer">
                  {/* Volunteer Page */}
                  <p>Volunteer</p>
                </Route>
              </Switch>   

            </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
