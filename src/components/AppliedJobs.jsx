import { getItem } from "../utility/fakeDB";
import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";
import DataInfo from "./DataInfo";

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

  return (
    <div>
      <h2>Applied Jobs:</h2>
      <ul>
        {matchingJobs.map(job => (
          <li key={job.job_id}>
            <DataInfo dataInfo={job} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
