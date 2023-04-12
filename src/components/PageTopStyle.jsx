import React from "react";
import banner1 from "../assets/Vector (2).png";
import banner2 from "../assets/Vector (3).png";

const PageTopStyle = ({ children }) => {
  return (
    <div className="relative  h-13 md:h-20 lg:h-40 bg-blue-100">
      <h1 className="text-4xl flex justify-center items-center text-black font-semibold font-mono">
        {children}
      </h1>

      <img className="absolute left-0 bottom-0" src={banner1} alt="" />
      <img className="absolute right-0 -top-28" src={banner2} alt="" />
    </div>
  );
};

export default PageTopStyle;
