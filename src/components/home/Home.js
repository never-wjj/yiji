import React, { Component } from "react";
import Footer from "../footer/Footer";
import Content from "../content/Content";
import { HashRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import "./home.scss";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-warp">
        {/* <Header /> */}
        <div>
          <Router>
            <Route exact path="/home" component={Content} />
            <Route path="/home/homeOne" component={HomeOne} />
            <Route path="/home/homeTow" component={HomeTwo} />
            <Route path="/home/homeThree" component={HomeThree} />
          </Router>
        </div>
        <Footer {...this.props} />
      </div>
    );
  }
}

export default Home;
