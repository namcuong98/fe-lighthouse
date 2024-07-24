import React from "react";
import { productsLeft, productsRight } from "../HardData";
import ProductDetail from "./ProductDetail";
import ProductMain from "./ProductMain";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";

const Products = () => {
  const { Header_large } = useResponsiveHeader();
  return (
    <div className={`products ${Header_large ? "grid" : ""}`}>
      <div className="grid-two">
        {productsLeft.map((item) => {
          return <ProductDetail key={item.id} item={item} />;
        })}
      </div>
      {Header_large && <ProductMain />}
      <div className="grid-two">
        {productsRight.map((item) => {
          return <ProductDetail key={item.id} item={item} />;
        })}
      </div>
      {!Header_large && <ProductMain />}
    </div>
  );
};

export default Products;
