import React from "react";
import Input from "./Input";
import Account from "./Account";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";

const HeaderSecond = () => {
  const { Header_large, Header_medium } = useResponsiveHeader();
  return (
    <div className="hr">
      <div className="container header-second">
        <img
          id="logo"
          width={"142"}
          height={"44"}
          src={require("../../imgs/logo/Logo.webp")}
          alt="Logo"
        />
        {Header_medium && (
          <div className="flex">
            <div
              className={`wrap-search flex ${
                !Header_large ? "width-wrap-input-search" : ""
              }`}
            >
              <div className="flex search-category">
                <p className="text-category">All Categories</p>
                <i className="fa-solid fa-angle-down "></i>
              </div>
              <Input />
            </div>
            <button className="button-search">Search</button>
          </div>
        )}
        <Account />
      </div>
    </div>
  );
};

export default HeaderSecond;
