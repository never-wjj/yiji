import React, { Component } from "react";
import "./Personal.scss";
class Personal extends Component {
  state = {
    personal: false,
    homefootspan: false,
    zhezhao: false
  };
  homeTouxiang = () => {
    this.setState({
      personal: true
    });
  };
  XiaohomeTouxiang = () => {
    this.setState({
      personal: false
    });
  };
  Allhomefootspan = () => {
    this.setState({
      homefootspan: true,
      zhezhao: true
    });
  };
  Xiaohomefootspan = () => {
    this.setState({
      homefootspan: false,
      zhezhao: false
    });
  };
  render() {
    const { personal, homefootspan, zhezhao } = this.state;
    return (
      <div>
        <div>
          <img
            onClick={this.homeTouxiang}
            style={{ width: "80px", border: "2px solid #ccc" }}
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183631055,2504247705&fm=26&gp=0.jpg"
            alt=""
          />
        </div>
        {/* 点击头像弹出层 */}

        <div style={{ left: personal ? "0" : "100%" }} className="personal">
          <span onClick={this.XiaohomeTouxiang}>
            <img
              style={{ width: "32px" }}
              src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/kkkk.png"
              alt=""
            />
          </span>
          <span onClick={this.Allhomefootspan} className="personal-span"></span>
          {/* 换头像层 */}
          <div
            className="zhezhao"
            style={{ display: zhezhao ? "block" : "none" }}
          >
            <div
              style={{ bottom: homefootspan ? "0" : "-28%" }}
              className="Allhomefootspan"
            >
              <span>进入相册选择</span>
              <span>拍一张</span>
              <span onClick={this.Xiaohomefootspan} style={{ color: "red" }}>
                取消
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Personal;
