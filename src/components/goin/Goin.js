import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import "./goin.scss";
class Goin extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      loop: false //循环
    });
  }

  render() {
    const pics = this.props.goin;
    return (
      <div className="loop-pic">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {pics
              ? pics.map((item, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <img src={item} alt="" />
                    </div>
                  );
                })
              : "请稍等。。。"}
            <div className="swiper-slide shouji">
              <span className="cur-time">
                {new Date().getFullYear()}-{new Date().getMonth() + 1}-
                {new Date().getDate()}
              </span>
              <span>今日推送 >></span>
            </div>
            <div className="swiper-slide login">
              <div className="login-form">
                <input type="text" placeholder="点击输入手机号登录" />
                <input type="text" placeholder="输入密码" />
                <p>
                  <button>
                    <Router>
                      <NavLink to="/home">登录</NavLink>
                    </Router>
                  </button>
                  <button>注册</button>
                </p>
              </div>
              <span className="login-text">
                <span className="checked">✔</span>
                <span>登录或注册即代表同意用户服务协议</span>
              </span>
              <div className="login-type">
                <span>
                  <img
                    src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E7%99%BB%E5%BD%95%E9%A1%B5_03.png"
                    alt=""
                  />
                  <p> 微博</p>
                </span>
                <span>
                  <img
                    src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E7%99%BB%E5%BD%95%E9%A1%B51_06.png"
                    alt=""
                  />
                  <p>微信</p>
                </span>
                <span>
                  <img
                    src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E7%99%BB%E5%BD%95%E9%A1%B51_03.png"
                    alt=""
                  />
                  <p>QQ</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops = state => {
  return {
    goin: state.goin
  };
};
export default connect(mapStateToprops)(Goin);
