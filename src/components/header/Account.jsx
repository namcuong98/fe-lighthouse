import React from "react";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";

const Account = () => {
  const { Header_800 } = useResponsiveHeader();
  return (
    <div className="info-account">
      <div className="info-account-avartar">
        <i className="icon-header fa-solid fa-user-tie"></i>
        {Header_800 && (
          <div>
            <p className="text-up">Login</p>
            <p className="text-down">Account</p>
          </div>
        )}
      </div>
      <div className="notication">
        <i className="icon-header fa-regular fa-heart"></i>
        <span>
          <p>2</p>
        </span>
      </div>
      <div className="wrap-notication">
        <div className="notication">
          <i className="icon-header fa-solid fa-cart-shopping"></i>
          <span>
            <p>4</p>
          </span>
        </div>
        {Header_800 && (
          <div className="amount">
            <span className="text-up">Your Cart</span>
            <p className="text-down">$280.00</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
