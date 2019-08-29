import React, { Component } from "react";
import "./header.scss";
class Header extends Component {
  state = {};
  render() {
    // 弹出层
    const { showTanChuCeng } = this.props;
    return (
      <header className="index-header">
        <span onClick={showTanChuCeng} />
      </header>
    );
  }
}

export default Header;
