import React from "react";

const ProductDetail = ({ item }) => {
  const priceString = item.price.replace(/^\$|\.00$/g, "");
  const priceNumber = Number(priceString);
  return (
    <div className="wrap-products">
      <div className="wrap-img-products">
        <div className="img-products">
          <img
            loading="lazy"
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
      <div className="wrap-product-quality">
        {item.quality !== 2 ? (
          <div className="product-quality-many">
            <i className="fa-solid fa-check"></i>
            <span>In stock</span>
            <p>{item.quality}</p>
            <span className="span-paler">product</span>
          </div>
        ) : (
          <div className="product-quality-little">
            <i className="fa-solid fa-check"></i>
            <p>Only 2 left in stock</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
