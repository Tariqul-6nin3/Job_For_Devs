import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState({});
  const { jobId } = useParams();
  const jobData = useLoaderData();
  console.log(details);

  useEffect(() => {
    const matchingJob = jobData.find(job => job.job_id === jobId);
    setDetails(matchingJob || {});
  }, [jobData, jobId]);
  const {
    job_description,
    job_responsibilities,
    educational_requirements,
    experience,
    salary,
    job_title,
  } = details;

  return (
    <div>
      <div className="flex justify-between">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Details;
