import React from "react";
import { banner_small } from "../HardData";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";

const Banner = () => {
  const { Header_800 } = useResponsiveHeader();
  return (
    <div className="wrap-banner">
      <div
        className="banner-big"
        style={{
          backgroundImage: `url(${require("../../imgs/banner/banner-1.webp")})`,
        }}
      >
        <div className="banner-info">
          <p className="banner-big-info-game">GAMEPAGD CONSOLE</p>
          {Header_800 && (
            <p className="banner-big-info-offer">
              Today's Offer <br></br> Skin <span>Gamepad</span> 2022
            </p>
          )}
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="banner-small">
        <div className="h-grid">
          {banner_small.map((item) => {
            return (
              <div className="grid-item" key={item.id}>
                <img
                  loading="lazy"
                  width={"462"}
                  height={"200"}
                  className=""
                  src={require(`../../imgs/banner/banner-${item.id}.webp`)}
                  alt=""
                />
                <div className="banner-info">
                  <div className="banner-small-info">
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                  </div>
                  <span className="banner-small-note">{item.note}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
