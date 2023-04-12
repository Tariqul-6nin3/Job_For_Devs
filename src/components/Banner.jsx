import React from "react";
import photo from "../assets/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <>
      <section className="flex px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="px-16 space-y-6">
            <h1 className="text-5xl tracking-wide font-bold">
              One Step <br /> Closer To Your <br />
              <span className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text">
                Dream Job
              </span>
            </h1>
            <p className="text-slate-600 tracking-wide">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application <br /> from start to finish.Its your future. Come find
              it. Manage all your job application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
        <div>
          <img src={photo} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
