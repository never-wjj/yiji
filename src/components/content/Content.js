import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import "./content.scss";
import MySwiper from "../swiper/MySwiper";
import ContentList from "./ContentList";
import Header from "../header/Header";
class Content extends Component {
  state = {
    tanChuCeng: false
  };
  showTanChuCeng = () => {
    this.setState({
      tanChuCeng: true
    });
  };
  XiaoTanChuCeng = () => {
    this.setState({
      tanChuCeng: false
    });
  };

  render() {
    //   content 中的内容

    const contentList = [
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_01.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_03.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_05.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_07.jpg",
      "https://dev.tencent.com/u/ljm-smile/p/images/git/raw/master/%E5%B1%95%E8%AE%AF%E9%A1%B5--%E6%AD%A3%E5%9C%A8%E5%B1%95%E5%87%BA_09.jpg"
    ];

    const contentList2 = [
      "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u62.jpg",
      "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u65.jpg",
      "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u68.jpg"
    ];
    //正在展示里的数据
    const ZhangzaiDate = [
      "https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_01.png",
      "https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_03.png",
      "https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_05.png",
      "https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/%E8%82%96%E5%85%A8%E4%B8%AA%E5%B1%95%E9%A1%B5_06.png"
    ];
    //轮播图
    const swiperone = {
      pics: [
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u62.jpg",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u65.jpg",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u68.jpg"
      ],
      autoplay: true,
      className: "swiperone",
      pagination: {
        //分页器
        el: ".swiper-pagination",
        bulletActiveClass: "active-silde-page"
      },
      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      width: "100vw",
      spaceBetween: 0,
      initialSlide: 0,
      direction: "horizontal"
    };
    const swipertwo = {
      pics: [
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/6a0c3a8b5d.png",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/9ae94869e6ef972cf5fe8462c2d57f1.png",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/09918cb21bb75637e62f21652d41513.png",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/27dcf3ee8263194536024b89ff41945.png",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/1edec543ea44df1acef5d154be73329.png",
        "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/09918cb21bb75637e62f21652d41513.png"
      ],
      className: "swipertwo",
      loop: true,
      autoplay: false,
      slidesPerView: 2.5,
      centeredSlides: true,
      pagination: "",
      width: 150,
      spaceBetween: 10,
      initialSlide: 1,
      direction: "horizontal"
    };
    const imgSrc1 =
      "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u124.jpg";
    const imgSrc2 =
      "https://dev.tencent.com/u/never-wjj/p/dev-demo/git/raw/master/u127.jpg";
    const { tanChuCeng } = this.state;
    return (
      <div className="content">
        <Header showTanChuCeng={this.showTanChuCeng} />
        <div className="home-list">
          <MySwiper {...swiperone} />
          <MySwiper {...swipertwo} />
          <ContentList
            contentList={contentList}
            contentList2={contentList2}
            ZhangzaiDate={ZhangzaiDate}
            imgSrc1={imgSrc1}
            imgSrc2={imgSrc2}
          />
        </div>
        {/* //弹出层 */}
        <div style={{ left: tanChuCeng ? "0" : "100%" }} className="tanChuCeng">
          <div className="content-hea">
            <span>
              <img
                style={{ width: "30px" }}
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/search.png"
                alt=""
              />
            </span>
            <input
              style={{ width: "220px", height: "30px" }}
              type="text"
              placeholder="seargh"
            />
            <span onClick={this.XiaoTanChuCeng}>
              <img
                src="https://dev.tencent.com/u/never-wjj/p/images/git/raw/master/kkkk.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
