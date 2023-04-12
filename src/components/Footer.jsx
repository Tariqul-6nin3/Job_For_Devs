import React from "react";
import facebook from "../assets/Vector.png";
import twitter from "../assets/Vector (1).png";
import insta from "../assets/Group.png";
const Footer = () => {
  return (
    <>
      <footer className=" mt-8 px-4 py-5 mx-auto  bg-black ">
        <div className="flex justify-between mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div>
            <div>
              <h2>JobField</h2>
              <p>
                There are many variations of passages of Lorem Ipsum , but the
                majority have suffered alteration in some form.
              </p>
            </div>
            <div className="flex gap-3">
              <img className="bg-white   rounded-full" src={facebook} alt="" />
              <img className="bg-white   rounded-full" src={twitter} alt="" />
              <img className="bg-white   rounded-full" src={insta} alt="" />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-white">
              <h4>Company</h4>
              <p>About us</p>
              <p>Work</p>
              <p>Latest News</p>
              <p>Career</p>
            </div>
            <div className="text-white">
              <h4>Company</h4>
              <p>About us</p>
              <p>Work</p>
              <p>Latest News</p>
              <p>Career</p>
            </div>
            <div className="text-white">
              <h4>Company</h4>
              <p>About us</p>
              <p>Work</p>
              <p>Latest News</p>
              <p>Career</p>
            </div>
            <div className="text-white">
              <h4>Company</h4>
              <p>About us</p>
              <p>Work</p>
              <p>Latest News</p>
              <p>Career</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
