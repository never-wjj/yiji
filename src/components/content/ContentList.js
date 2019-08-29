import React, { Component } from "react";
import "./ContentList.scss";
import HomeFoot from "../HomeFoot/HomeFoot";
class ContentList extends Component {
  state = {
    showListImg1: true,
    showListImg2: false,
    listZhengzai: false
  };
  showList = () => {
    this.setState({
      showListImg1: !this.state.showListImg1,
      showListImg2: !this.state.showListImg2
    });
  };
  contentJijiang = () => {
    console.log(1111);
  };
  contentZhengzai = () => {
    this.setState({
      listZhengzai: true
    });
  };
  XiaolistZhengzai = () => {
    this.setState({
      listZhengzai: false
    });
  };
  render() {
    const { showListImg1 } = this.state;
    const { showListImg2 } = this.state;
    const {
      contentList,
      contentList2,
      ZhangzaiDate,
      imgSrc1,
      imgSrc2
    } = this.props;
    // console.log(ZhangzaiDate);
    const showList = contentList.map((item, index) => (
      <div
        onClick={this.contentZhengzai}
        className="showlist"
        style={{ backgroundImage: `url(${item})` }}
        key={index}
      >
        <div className="showlist-bot-text">
          <span className="iconfont icon-fenxiang" />
          <span className="icon">
            <span className="iconfont icon-xinheart118 isLike " />
            <span>11</span>
            <span className="iconfont icon-iconset0207" />
            <span>222</span>
            <span className="iconfont icon-xinxi" />
            <span>333</span>
          </span>
        </div>
      </div>
    ));
    const showList2 = contentList2.map((item, index) => (
      <div
        onClick={this.contentJijiang}
        className="showlist"
        style={{ backgroundImage: `url(${item})` }}
        key={index}
      >
        <div className="showlist-bot-text">
          <span className="iconfont icon-fenxiang" />
          <span className="icon">
            <span className="iconfont icon-xinheart118 isLike " />
            <span>11</span>
            <span className="iconfont icon-iconset0207" />
            <span>222</span>
            <span className="iconfont icon-xinxi" />
            <span>333</span>
          </span>
        </div>
      </div>
    ));
    // const Zhengzai = ZhangzaiDate.map((item, index) => (
    //   <div key={index}>
    //     <img style={{ width: "100%" }} src={item} alt="" />
    //   </div>
    // ));
    const { listZhengzai } = this.state;
    return (
      <div>
        <div className="content-top">
          <img
            style={{ display: showListImg1 ? "block" : "none" }}
            src={imgSrc1}
            alt=""
          />
          <img
            style={{ display: showListImg2 ? "block" : "none" }}
            src={imgSrc2}
            alt=""
          />
          <div className="btn-wrap">
            <span onClick={this.showList} />
            <span onClick={this.showList} />
          </div>
        </div>
        <div className="list-wrap">
          <div
            className="list-box"
            style={{
              marginLeft: showListImg1 ? "0" : "-100%"
            }}
          >
            <div className="content-list">
              <div className="content-list-wrap">{showList}</div>
            </div>
            <div className="content-list">
              <div className="content-list-wrap">{showList2}</div>
            </div>
          </div>
        </div>
        {/* 列表弹出页 */}
        <div
          style={{ bottom: listZhengzai ? "0" : "-100%" }}
          className="listZhengzai"
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <span className="XiaolistZhengzai" onClick={this.XiaolistZhengzai}>
              <img
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/fanhui.png"
                alt=""
              />
            </span>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/u194.jpg"
              alt=""
            />
            {/* <div>{Zhengzai}</div> */}
          </div>
          <HomeFoot></HomeFoot>
        </div>
      </div>
    );
  }
}

export default ContentList;
