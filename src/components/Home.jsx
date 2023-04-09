import React from "react";

import logo1 from "../assets/chip 1.png";
import logo2 from "../assets/accounts 1.png";
import logo3 from "../assets/Group 13.png";
import logo4 from "../assets/social-media 1.png";
import Feature from "./Feature";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />

      <div>
        <Feature />
      </div>
    </>
  );
};

export default Home;
