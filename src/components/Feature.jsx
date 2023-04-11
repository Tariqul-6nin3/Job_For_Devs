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
    setShowAllJobs(true);
  };

  return (
    <>
      <div className="text-center">
        <h1>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {showAllJobs
          ? data.map(dataInfo => (
              <DataInfo key={dataInfo.job_id} dataInfo={dataInfo} />
            ))
          : data
              .slice(0, 4)
              .map(dataInfo => (
                <DataInfo key={dataInfo.job_id} dataInfo={dataInfo} />
              ))}
      </div>
      {!showAllJobs && (
        <div className="text-center">
          <button className="btn-primary " onClick={handleShowAllJobs}>
            See More
          </button>
        </div>
      )}
    </>
  );
};

export default Feature;
