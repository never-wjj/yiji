import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import "./footer.scss";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <Router>
          <Link to="/home">
            <img
              src="https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/icon__zhan__2_u140.png"
              alt=""
            />
          </Link>

          <Link to="/home/homeOne">
            <img
              src="https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/icon__tui_u132.png"
              alt=""
            />
          </Link>
          <Link to="/home/homeTow">
            <img
              src="https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/icon__fa_u134.png"
              alt=""
            />
          </Link>
          <Link to="/home/homeThree">
            <img
              src="https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/icon__ge_u136.png"
              alt=""
            />
          </Link>
        </Router>
      </footer>
    );
  }
}

export default Footer;
