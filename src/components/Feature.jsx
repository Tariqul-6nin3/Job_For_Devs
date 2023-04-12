import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DataInfo from "./DataInfo";

const Feature = () => {
  const [data, setData] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);

  useEffect(() => {
    const fetchFeatureData = async () => {
      const featureData = await fetch("jobs.json");
      const featureDataRes = await featureData.json();
      setData(featureDataRes);
    };
    fetchFeatureData();
  }, []);

  const handleShowAllJobs = () => {
    setShowAllJobs(prevState => !prevState);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl text-black font-bold mb-4">Featured Jobs</h1>
        <p className="text-gray-800 mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {data.slice(0, showAllJobs ? data.length : 4).map(dataInfo => (
          <DataInfo key={dataInfo.job_id} dataInfo={dataInfo} />
        ))}
      </div>
      <div className="text-center">
        <button
          className="font-medium transition duration-200 shadow-md md:mb-0 px-4 py-2 md:px-20 md:py-3 m-2 text-lg rounded-xl border-transparent hover:bg-cyan-400 border-2 bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-500 text-white"
          onClick={handleShowAllJobs}>
          {showAllJobs ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
};

export default Feature;
