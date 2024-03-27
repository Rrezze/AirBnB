import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "../src/utility/Navbar/Navbar";
import SingleFullVenue from "./pages/Home/SingleFullVenue/SingleFullVenue";
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/venue/:vid" component={<SingleFullVenue/>} />
        </Routes>
      </Router>
    );
  }
}
export default App;
