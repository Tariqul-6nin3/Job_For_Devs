import React from "react";

const ApplyInfo = ({ job }) => {
  // console.log(job);
  const {
    job_id,
    company_logo,
    job_title,
    company_name,
    location,
    salary,
    job_description,
    job_responsibilities,
    educational_requirements,
    experience,
    job_type,
    work_location,
  } = job;
  return (
    <>
      <div className="flex bg-slate-300">
        <div className="w-28 h-28">
          <img src={company_logo} alt="" />
        </div>
        <div className="flex justify-between">
          <div>
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div className="flex gap-3">
              <button>{job_type}</button>
              <button>{work_location}</button>
            </div>
            <div className="flex">
              <p>{location}</p>
              <p>{salary}</p>
            </div>
          </div>
          <div>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyInfo;
