import React from "react";

const InfoStore = () => {
  return (
    <div className="grid-two">
      <div>
        <h1>Infomation</h1>
        <ul className="link-info">
          <li>Blog Us</li>
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>FeedBack</li>
        </ul>
      </div>
      <div>
        <h1>Quick Link</h1>
        <ul className="link-info">
          <li>Store Location</li>
          <li>Orders Tracking</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoStore;
