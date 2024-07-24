import React from "react";
import { useResponsiveHeader } from "../../utils/responsive/Responsive";

const Input = () => {
  const { Header_large } = useResponsiveHeader();
  return (
    <form action="">
      <input
        className={`input-search ${!Header_large ? "width-input-search" : ""}`}
        type="text"
        placeholder="Search in 200+ products..."
      />
    </form>
  );
};

export default Input;
