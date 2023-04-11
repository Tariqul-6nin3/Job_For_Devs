import React from "react";
import { Link } from "react-router-dom";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const DataInfo = ({ dataInfo }) => {
  //   console.log(dataInfo);
  const {
    job_id,
    company_logo,
    job_title,
    company_name,
    location,
    salary,
    job_type,
    work_location,
  } = dataInfo;
  return (
    <>
      <div className="border-2 px-10 py-6 rounded-lg w-11/12">
        <div className="flex justify-center">
          <img className="w-3/6 mr-auto h-24" src={company_logo} alt="" />
        </div>
        <h3 className="text-base text-black font-bold">{job_title}</h3>
        <p className="text-zinc-900 text-xl mt-2 ">{company_name}</p>
        <div className="flex gap-3 mt-3">
          <button className="text-blue-700 px-6 py-2 font-semibold hover:border-amber-600 border">
            {job_type}
          </button>
          <button className="text-blue-700 px-6 py-2 hover:border-amber-600 font-semibold border">
            {work_location}
          </button>
        </div>
        <div className="flex gap-4 mt-3">
          <p>
            {" "}
            <MapPinIcon className="w-5 h-5 inline text-blue-200" /> {location}
          </p>
          <p>
            <CurrencyDollarIcon className="w-5 h-5 inline text-blue-200" />
            {salary}
          </p>
        </div>
        <Link to={`/job/${job_id}`}>
          <button className=" mt-4 px-11 py-4 bg-slate-500 rounded-lg text-white text-lg font-bold">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default DataInfo;
