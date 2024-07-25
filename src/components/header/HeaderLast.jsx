import React from "react";
import { menu } from "../HardData";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";

const HeaderLast = () => {
  const { Header_large, Header_medium, Header_small } = useResponsiveHeader();
  return (
    <div className="hr">
      <div className="container header-last">
        <ul className="menu-bottom">
          {menu.map((item, index) => {
            return (
              <li className="menu-item-bottom" key={index}>
                <p className="">{item.name}</p>
                {Header_small && <i className="fa-solid fa-angle-down"></i>}
              </li>
            );
          })}
          {Header_medium && (
            <>
              <li className="contact-us">Contact US</li>
              <li className="buy-uminex">Buy Uminex!</li>
            </>
          )}
        </ul>
        {Header_large && (
          <div className="header-sale">
            <i className=" fa-brands fa-canadian-maple-leaf"></i>
            <span>Sale $20 Off Your First Order.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLast;
