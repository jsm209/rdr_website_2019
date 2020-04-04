
// Default
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts.css';

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
import Banner from './components/Banner';

// Screens
import MembersScreen from "./screens/MembersScreen";
import ShowsScreen from "./screens/ShowsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import AboutScreen from "./screens/AboutScreen";
import VolunteerScreen from "./screens/VolunteerScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import StreamScreen from "./screens/StreamScreen";
import RecordingsScreen from "./screens/RecordingsScreen";

function App() {

  let globalStyle = {
    fontFamily: "Roboto Condensed, sans-serif",
    backgroundColor: "#090909",
    color: "white"
    /*

    // Background stuff
    backgroundImage: "url(" + Background + ")",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center" 
    */
  }

  return (
    <div className="App" style={globalStyle}>
      <Router>
        <MainNavbar />
        {/*<Banner className="hidden-xs"/>*/}
        <br />
        <div>
          {/* Put content for each page between route tags below. */}
          <Switch>
            <Route exact path="/">
              {/* Home Page */}
              <HomeScreen />
            </Route>
            <Route path="/members">
              {/* Members Page */}
              <MembersScreen />
            </Route>
            <Route path="/shows">
              {/* Shows Page */}
              <p>Shows</p>
              <ShowsScreen />
            </Route>
            <Route path="/schedule">
              {/* Schedule Page */}
              <p>Schedule</p>
              <ScheduleScreen />
            </Route>
            <Route path="/events">
              {/* Events Page */}
              <p>Events</p>
            </Route>
            <Route path="/about">
              <AboutScreen />
            </Route>
            <Route path="/volunteer">
              {/* Volunteer Page */}
              <VolunteerScreen />
            </Route>
            <Route path="/contact">
              {/* Contact Page */}
              <ContactScreen />
            </Route>
            <Route path="/stream">
              {/* Stream Page */}
              <StreamScreen />
            </Route>
            <Route path="/recordings">
              {/* Recordings Page */}
              <RecordingsScreen />
            </Route>
          </Switch>   
        </div>
      </Router>
      <FooterAudioPlayer />
    </div>
  );
}

export default App;
