import React from "react";
import { useLoaderData } from "react-router-dom";
import DataInfo from "./DataInfo";

const Feature = () => {
  const data = useLoaderData();
  // console.log(data);

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
        {data?.slice(0, 4).map(dataInfo => (
          <DataInfo key={dataInfo.job_id} dataInfo={dataInfo} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn-primary ">See More</button>
      </div>
    </>
  );
};

export default Feature;
