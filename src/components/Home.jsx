import React from "react";
import photo from "../assets/P3OLGJ1 copy 1.png";
import logo1 from "../assets/chip 1.png";
import logo2 from "../assets/accounts 1.png";
import logo3 from "../assets/Group 13.png";
import logo4 from "../assets/social-media 1.png";
import Feature from "./Feature";

const Home = () => {
  return (
    <>
      <section className="flex px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="px-16 space-y-6">
            <h1 className="text-5xl tracking-wide font-bold">
              One Step Closer To Your{" "}
              <span className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text">
                Dream Job
              </span>
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
        <div>
          <img src={photo} alt="" />
        </div>
      </section>
      <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center">
          <h1>Job category list</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex justify-evenly">
          <div className="bg-gray-200 px-8 py-5">
            <img src={logo1} alt="" />
            <h3>Account & Finance</h3>
            <p>300+ job Available</p>
          </div>
          <div className="bg-gray-200 px-8 py-5">
            <img src={logo1} alt="" />
            <h3>Account & Finance</h3>
            <p>300+ job Available</p>
          </div>
          <div className="bg-gray-200 px-8 py-5">
            <img src={logo1} alt="" />
            <h3>Account & Finance</h3>
            <p>300+ job Available</p>
          </div>
          <div className="bg-gray-200 px-8 py-5">
            <img src={logo1} alt="" />
            <h3>Account & Finance</h3>
            <p>300+ job Available</p>
          </div>
        </div>
      </section>
      <div>
        <Feature />
      </div>
    </>
  );
};

export default Home;
