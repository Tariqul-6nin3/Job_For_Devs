import React from "react";
import { Link } from "react-router-dom";


const DataInfo = ({ dataInfo }) => {
  //   console.log(dataInfo);
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
  } = dataInfo;
  return (
    <>
      <div className="border-2">
        <div className="flex justify-center">
          <img className="w-56 h-24" src={company_logo} alt="" />
        </div>
        <h3>{job_title}</h3>
        <p>{company_name}</p>
        <div className="flex justify-center">
          <button>{job_type}</button>
          <button>{work_location}</button>
        </div>
        <div>
          <p>{location}</p>
          <p>{salary}</p>
        </div>
        <Link to={`/job/${job_id}`}>
          <button className="btn-outlined">View Details</button>
        </Link>
      </div>
    </>
  );
};

export default DataInfo;
