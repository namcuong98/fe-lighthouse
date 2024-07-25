import React, { useEffect } from "react";
import { productsMain } from "../HardData";

function convertSeconds(totalSeconds) {
  var days = Math.floor(totalSeconds / (24 * 3600));
  totalSeconds %= 24 * 3600;
  var hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  if (days < 10) {
    days = `0${days}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return { days, hours, minutes, seconds };
}

const ProductMain = () => {
  const item = productsMain;
  const priceString = item.price.replace(/^\$|\.00$/g, "");
  const priceNumber = Number(priceString);

  useEffect(() => {
    var totalSeconds = 71472008;
    const intervalId = setInterval(() => {
      if (totalSeconds >= 0) {
        const { days, hours, minutes, seconds } = convertSeconds(totalSeconds);
        const timerElement = document.getElementById("timer");
        if (timerElement) {
          timerElement.innerHTML = `
            <p>${days}</p>
            <span>:</span>
            <p>${hours}</p>
            <span>:</span>
            <p>${minutes}</p>
            <span>:</span>
            <p>${seconds}</p>`;
        }
        totalSeconds--;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="product-main">
        <p className="hr product-main-today">TODAY'S OFFER</p>
        <div className="wrap-img-products">
          <div className="img-products main">
            <img
              loading="lazy"
              width={"600"}
              height={"600"}
              src={require(`../../imgs/product/${item.image}`)}
              alt=""
            />
          </div>
          {item.discountPercent && (
            <p
              className="discountPercent"
              style={{
                backgroundColor:
                  item.discountPercent === "NEW" ? "#008A00" : "#3340cf",
              }}
            >
              {item.discountPercent}
            </p>
          )}
          <div className="buy-main">
            <img src={require("../../imgs/product/buy-main.png")} alt="" />
          </div>
        </div>
        <p className="product-name">{item.name}</p>
        <div className="flex product-rate">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <div>
            <div className="insert"></div>
            <p>{`(${item.comment})`}</p>
          </div>
        </div>
        <div className="flex product-price">
          <p style={{ color: priceNumber > 200 ? "#2B38D1" : "#3340cf" }}>
            {item.price}
          </p>
          <span className="lineThrough">{item.discountMoney}</span>
        </div>
        <div className="flastSale">
          <p>Hurry up! Offer ends in:</p>
          <div id="timer"></div>
        </div>
        <div className="time-full">
          <p className="time-bar"></p>
        </div>
        <div className="product-main-sold">
          <span>Sold:</span>
          <p>{item.quality}</p>
          <span>products</span>
        </div>
      </div>
    </>
  );
};

export default ProductMain;
