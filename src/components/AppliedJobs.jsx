import { getItem } from "../utility/fakeDB";
import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

import ApplyInfo from "./ApplyInfo";
import PageTopStyle from "./PageTopStyle";

const AppliedJobs = () => {
  const jobData = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [appliedjobsdata, setAppliedjobsdata] = useState([]);
  // const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const cartData = getItem();
    setAppliedJobs(cartData);
    const appliedJobsIds = Object.keys(cartData).filter(id => cartData[id]);
    const filtered = jobData.filter(job => appliedJobsIds.includes(job.job_id));
    setAppliedjobsdata(filtered);
  }, [jobData]);

  const handleFilterClick = filter => {
    const cartData = getItem();
    const appliedJobsIds = Object.keys(cartData).filter(id => cartData[id]);
    const filtered = jobData.filter(job => appliedJobsIds.includes(job.job_id));

    if (filter === "remote") {
      const remoteJobs = filtered.filter(
        job => job.work_location.toLowerCase() === "remote"
      );
      setAppliedjobsdata(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = filtered.filter(
        job => job.work_location.toLowerCase() === "onsite"
      );
      setAppliedjobsdata(onsiteJobs);
    }
  };

  return (
    <div>
      <PageTopStyle>Applied Jobs</PageTopStyle>
      <div className="px-4 py-5 relative sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-12">
        <div className="dropdown dropdown-left dropdown-end absolute right-0">
          <label
            tabIndex={0}
            className="btn m-1 px-10 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 text-white">
            Filter
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow  rounded-box w-52">
            <li className="text-lg text-black font-semibold hover:border-cyan-600">
              <a onClick={() => handleFilterClick("remote")}>Remote</a>
            </li>
            <li className="text-lg text-black font-semibold">
              <a onClick={() => handleFilterClick("onsite")}>Onsite</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {appliedjobsdata.map(job => (
          <ApplyInfo key={job.job_id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
