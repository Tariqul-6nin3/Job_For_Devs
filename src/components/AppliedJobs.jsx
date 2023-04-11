import React, { useState, useEffect } from "react";
import { getItem } from "localforage";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobData = useLoaderData();
  console.log(jobData);
  const [appliedJobs, setAppliedJobs] = useState({});
  console.log(appliedJobs);

  useEffect(() => {
    getItem("Applying-job")
      .then(savedJobs => {
        if (savedJobs) {
          setAppliedJobs(JSON.parse(savedJobs));
        }
      })
      .catch(error => console.log(error));
  }, []);

  return <div></div>;
};

export default AppliedJobs;
