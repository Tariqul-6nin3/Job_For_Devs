import { getItem } from "../utility/fakeDB";
import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

import ApplyInfo from "./ApplyInfo";

const AppliedJobs = () => {
  const jobData = useLoaderData();
  console.log(jobData);
  const [appliedJobs, setAppliedJobs] = useState({});
  console.log(appliedJobs);

  useEffect(() => {
    const cartData = getItem();
    setAppliedJobs(cartData);
  }, []);

  const matchingJobs = jobData.filter(job =>
    Object.keys(appliedJobs).includes(job.job_id)
  );
  console.log(matchingJobs);

  return (
    <>
      <div className="flex gap-5  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <button className="btn-primary">Remote</button>
        <button className="btn-outlined ml-96">Onsite</button>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {matchingJobs.map(job => (
          <ApplyInfo key={job.job_id} job={job} />
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
