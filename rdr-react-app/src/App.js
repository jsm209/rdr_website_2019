
// Default
import React from 'react';
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
import Banner from './components/Banner';
import { Footer } from './components/Footer/Footer';

// Screens
import MembersScreen from "./pages/current-djs/MembersScreen";
import ShowsScreen from "./pages/shows/ShowsScreen"
import ScheduleScreen from "./pages/schedule/ScheduleScreen"
import AboutScreen from "./pages/about/AboutScreen";
import VolunteerScreen from "./pages/get-involved/VolunteerScreen";
import ContactScreen from "./pages/staff-contact/ContactScreen";
import HomeScreen from "./pages/home/HomeScreen";
import StreamScreen from "./pages/stream/StreamScreen";
import RecordingsScreen from "./pages/recordings/RecordingsScreen";

function App() {

  return (
    <div className="app">
      <Router>
        <MainNavbar />
        {/*<Banner className="hidden-xs"/>*/}
        <br />
        <div>
          {/* Put content for each page between route tags below. */}
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/members">
              <MembersScreen />
            </Route>
            <Route path="/shows">
              <p>Shows</p>
              <ShowsScreen />
            </Route>
            <Route path="/schedule">
              <p>Schedule</p>
              <ScheduleScreen />
            </Route>
            <Route path="/events">
              <p>Events</p>
            </Route>
            <Route path="/about">
              <AboutScreen />
            </Route>
            <Route path="/volunteer">
              <VolunteerScreen />
            </Route>
            <Route path="/contact">
              <ContactScreen />
            </Route>
            <Route path="/stream">
              <StreamScreen />
            </Route>
            <Route path="/recordings">
              <RecordingsScreen />
            </Route>
          </Switch>   
        </div>
      </Router>
      <Footer />
      <FooterAudioPlayer />
    </div>
  );
}

export default App;
