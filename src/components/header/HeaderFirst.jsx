import React from "react";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";

const HeaderFirst = () => {
  const { Header_large, Header_medium } = useResponsiveHeader();
  return (
    <div className="hr">
      <div className="container">
        <div className="flex ">
          {Header_large ? (
            <p className="header-first-distance">
              You are a student and students get 20% discount.
            </p>
          ) : (
            <p className="header-first-distance">20% discount.</p>
          )}
          <a className="link-students" href="/" previewlistener="true">
            Learn More
          </a>
        </div>
        <div className="header-first-right flex">
          {Header_medium && (
            <div className="flex menu-top">
              <p className="menu-item-top">Store Locator</p>
              <p className="menu-item-top">Order Tracking</p>
              <p className="menu-item-top">FAQs</p>
            </div>
          )}
          <span className="hr-left"></span>
          <div className="flex header-first-option">
            <p className="header-first-distance">English</p>
            <i className="icon-arrow fa-solid fa-angle-down"></i>
          </div>
          <div className="flex header-first-option">
            <p className="header-first-distance">USD</p>
            <i className="icon-arrow fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFirst;
