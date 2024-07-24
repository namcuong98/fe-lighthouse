import React from "react";
import AboutStore from "./AboutStore";
import InfoStore from "./InfoStore";
import Newsletter from "./Newsletter";
import { payment } from "../HardData";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";
import CopyRight from "./CopyRight";

const Footer = () => {
  const { Header_800, Header_900, Header_small } = useResponsiveHeader();
  return (
    <footer className="wrap-container">
      <div className="hr">
        <div className="container">
          <div className={`wrap-footer ${Header_800 ? "grid" : "space-top"}`}>
            <AboutStore />
            <InfoStore />
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="content">
        <div
          className="container"
          style={{ flexDirection: !Header_900 ? "column" : "" }}
        >
          {Header_900 && <CopyRight />}
          <div className="wrap-payment">
            <p className={`${!Header_small ? "payment-rps" : ""}`}>
              Payment Method:
            </p>
            {payment.map((item) => {
              return (
                <div className="payment" key={item.id}>
                  <img
                    loading="lazy"
                    src={require(`../../imgs/payment/${item.image}`)}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          {!Header_900 && <CopyRight />}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
