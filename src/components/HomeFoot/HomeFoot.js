import React, { Component } from "react";
import "./HomeFoot.scss";
class HomeFoot extends Component {
  state = {
    homefootdaozhe: false,
    homefootfenxiang: false,
    homefootPinglun: false,
    zhezhao: false
  };
  Allhomefootdaozhe = () => {
    this.setState({
      homefootdaozhe: true
    });
  };
  AllhomefootFenxiang = () => {
    this.setState({
      homefootfenxiang: true,
      zhezhao: true
    });
  };
  AllhomefootPinglun = () => {
    this.setState({
      homefootPinglun: true
    });
  };
  Xiaohomefootdaozhe = () => {
    this.setState({
      homefootdaozhe: false
    });
  };
  Xiaohomefootfenxaing = () => {
    this.setState({
      homefootfenxiang: false,
      zhezhao: false
    });
  };
  XiaohomefootPinglun = () => {
    this.setState({
      homefootPinglun: false
    });
  };
  Yiji = () => {
    alert("...艺集");
  };
  Weixin = () => {
    alert("...微信");
  };
  Weibou = () => {
    alert("...微博");
  };
  QQ = () => {
    alert("...QQ");
  };
  render() {
    const {
      homefootdaozhe,
      homefootfenxiang,
      homefootPinglun,
      zhezhao
    } = this.state;
    return (
      <div>
        {/* 弹出层 */}
        <div
          style={{ left: homefootdaozhe ? "0" : "100%" }}
          className="Allhomefootdaozhe"
        >
          <span onClick={this.Xiaohomefootdaozhe}>
            <img
              src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/kkkk.png"
              alt=""
            />
          </span>
        </div>

        <div
          className="zhezhao"
          style={{ display: zhezhao ? "block" : "none" }}
        >
          <div
            style={{ bottom: homefootfenxiang ? "0" : "-35%" }}
            className="Allhomefootfenxiang"
          >
            <p>分享到</p>
            <div>
              <img
                onClick={this.Yiji}
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/u235_03.png"
                alt=""
              />
              <img
                onClick={this.Weixin}
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/u235_05.png"
                alt=""
              />
              <img
                onClick={this.Weibou}
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/u235_07.png"
                alt=""
              />
              <img
                onClick={this.QQ}
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/u235_09.png"
                alt=""
              />
            </div>
            <p style={{ fontSize: "20px" }} onClick={this.Xiaohomefootfenxaing}>
              取消
            </p>
          </div>
        </div>
        {/* // 评论弹出层 */}
        <div
          style={{ left: homefootPinglun ? "0" : "100%" }}
          className="homefootPinglun"
        >
          <div className="content-hea">
            <span onClick={this.XiaohomefootPinglun}>
              <img
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/kkkk.png"
                alt=""
              />
            </span>
            <input
              style={{ width: "220px", height: "30px" }}
              type="text"
              placeholder="评论"
            />
            <span onClick={this.XiaohomefootPinglun}>
              <img
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/airplanesss.png"
                alt=""
              />
            </span>
          </div>
        </div>

        <div className="ZhanshiBottom">
          <span>
            <img
              src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/%E7%88%B1%E5%BF%83_line.png"
              alt=""
            />
            <span>关注</span>
          </span>
          <span onClick={this.Allhomefootdaozhe}>
            <img
              src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/naviagation.png"
              alt=""
            />
            <span>到这</span>
          </span>
          <span onClick={this.AllhomefootFenxiang}>
            <img
              src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/%E5%88%86%E4%BA%AB_line.png"
              alt=""
            />
            <span>分享</span>
          </span>
          <span>
            <img
              src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/%E7%BC%96%E8%BE%91_line.png"
              alt=""
            />
            <span onClick={this.AllhomefootPinglun}>评论</span>
          </span>
        </div>
      </div>
    );
  }
}
export default HomeFoot;
