import React, { Component } from "react";
import ContentList from "../content/ContentList";
import Header from "../header/Header";
class HomeOne extends Component {
  state = {};

  render() {
    const contentList = [
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_01.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_03.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_05.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u166_07.jpg"
    ];
    const contentList2 = [
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_01.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_03.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_05.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_07.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/u274_09.jpg"
    ];
    const imgSrc1 =
      "https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/u300.jpg";
    const imgSrc2 =
      "https://dev.tencent.com/u/never-wjj/p/images/git/raw/72c26e0f591861c48bfafbe0a5e1b076dc9842e7/u302.jpg";
    return (
      <div className="content ">
        <Header />
        <div className="home-list">
          <ContentList
            imgSrc1={imgSrc1}
            imgSrc2={imgSrc2}
            contentList={contentList}
            contentList2={contentList2}
          />
        </div>
      </div>
    );
  }
}

export default HomeOne;
