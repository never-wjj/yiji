import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./home.scss";
import MySwiper from "../swiper/MySwiper";
import Personal from "./Personal/Personal";
class HomeThree extends Component {
  state = {
    showListImg1: true,
    shezhi: false
  };
  showList = () => {
    this.setState({
      showListImg1: !this.state.showListImg1
    });
  };
  Setup = () => {
    this.setState({
      shezhi: true
    });
  };
  xiaoSetup = () => {
    this.setState({
      shezhi: false
    });
  };
  render() {
    const { showListImg1, shezhi } = this.state;
    const swiperThree = {
      pics: [
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u62.jpg",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u65.jpg",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u68.jpg"
      ],
      // text: [
      //   {
      //     id: 1,
      //     txt: '订阅',
      //     num: 2
      //   },
      //   {
      //     id: 2,
      //     txt: '订阅',
      //     num: 2
      //   },
      //   {
      //     id: 3,
      //     txt: '订阅',
      //     num: 2
      //   }
      // ],
      className: "swiperthree",
      loop: true,
      autoplay: false,
      slidesPerView: 2.5,
      centeredSlides: false,
      pagination: "",
      width: 150,
      spaceBetween: 10,
      initialSlide: 1,
      direction: "horizontal"
    };
    return (
      //个人页
      <div className="homethree">
        <div className="homethreeTop">
          <span className="userSet">
            {/* <span className="iconfont icon-shezhi shezhi" /> */}
          </span>
          <div className="user">
            <Personal></Personal>
            <span onClick={this.Setup} className="user-img">
              <img
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/settingstwo.png"
                alt=""
              />
            </span>
            <h5 className="userName">阴雨天</h5>
            <p>
              <span>
                关注 <span>11</span>
              </span>
              <span>
                发布 <span>22</span>
              </span>
              <span>
                访客 <span>33</span>
              </span>
            </p>
          </div>
        </div>
        <div className="homethreeMiddle">
          <div className="middleTop">
            <span className="middleTopLeftText">艺象云集</span>
            <span className="middleTopRightText">All ></span>
          </div>
          <MySwiper {...swiperThree} />
        </div>
        <div className="homethreeFoot">
          <div className="footTop">
            <img
              src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E4%B8%AA%E4%BA%BA%E9%A1%B5-%E9%A6%96%E9%A1%B5_02.jpg"
              alt=""
            />
            <div className="btn-wrap">
              <span onClick={this.showList} />
              <span onClick={this.showList} />
            </div>
          </div>
          <div className="footBottomBox">
            <div
              className="footBottom"
              style={{
                transform: showListImg1 ? "translateX(0)" : "translateX(-50%)"
              }}
            >
              <div className="footBottomLeft">
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_01.jpg"
                  alt=""
                />
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_05.jpg"
                  alt=""
                />
              </div>
              <div className="footBottomRight">
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_05.jpg"
                  alt=""
                />
                <img
                  src="https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* //弹出层 */}
        <div style={{ left: shezhi ? "0" : "100%" }} className="setUpshezhi">
          <div className="content-hea">
            <span onClick={this.xiaoSetup}>
              <img
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/kkkk.png"
                alt=""
              />
            </span>
            <Router>
              <NavLink to="/home" className="path"></NavLink>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeThree;
