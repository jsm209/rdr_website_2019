
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

// Reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import MainNavbar from './components/MainNavbar';
import FooterAudioPlayer from './components/FooterAudioPlayer';

// Screens
import MembersScreen from "./screens/MembersScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <div>
          {/* Put content for each page between route tags below. */}
          <Switch>
            <Route exact path="/">
              {/* Home Page */}
              <p>Home</p>
            </Route>
            <Route path="/members">
              {/* Members Page */}
              <MembersScreen />
            </Route>
            <Route path="/shows">
              {/* Shows Page */}
              <p>Shows</p>
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
            <Route path="/contact">
              {/* Contact Page */}
              <p>Contact</p>
            </Route>
          </Switch>   
        </div>
      </Router>
      <FooterAudioPlayer />
    </div>
  );
}

export default App;
