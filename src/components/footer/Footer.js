import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./footer.scss";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <Router>
          <NavLink exact to="/home" activeClassName="active">
            <span className="iconfont icon-peiwangyindao" />
            <p>展讯</p>
          </NavLink>

          <NavLink to="/home/homeOne">
            <span className="iconfont icon-yunyingguanli" />
            <p>推荐</p>
          </NavLink>
          <NavLink to="/home/homeTow">
            <span className="iconfont icon-yunduanshangchuan" />
            <p>发布</p>
          </NavLink>
          <NavLink to="/home/homeThree">
            <span className="iconfont icon-icon_zhanghao" />
            <p>个人</p>
          </NavLink>
        </Router>
      </footer>
    );
  }
}

export default Footer;
