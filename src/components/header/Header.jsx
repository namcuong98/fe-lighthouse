import React from "react";
import HeaderFirst from "./HeaderFirst";
import HeaderSecond from "./HeaderSecond";
import HeaderLast from "./HeaderLast";

const Header = () => {
  return (
    <header className="wrap-container">
      <HeaderFirst />
      <HeaderSecond />
      <HeaderLast />
    </header>
  );
};

export default Header;
