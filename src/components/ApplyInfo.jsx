import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
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
    job_type,
    work_location,
  } = job;
  return (
    <>
      <div className="flex justify-between items-center border-2 px-8 rounded-2xl w-11/12 mx-auto py-5 gap-5 mt-5">
        <div className="flex gap-12">
          <div className="w-44 bg-slate-400 h-44">
            <img className="" src={company_logo} alt="" />
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-base text-black font-bold">{job_title}</h3>
              <p className="text-zinc-900 text-xl mt-2">{company_name}</p>
              <div className="flex gap-3 mt-3">
                <button className="text-blue-700 px-6 py-2 font-semibold hover:border-amber-600 border">
                  {job_type}
                </button>
                <button className="text-blue-700 px-6 py-2 hover:border-amber-600 font-semibold border">
                  {work_location}
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="inline-flex">
                  <MapPinIcon className="w-5 h-5  text-black-50 " />
                  <p>{location}</p>
                </div>
                <div className="inline-flex">
                  <CurrencyDollarIcon className="w-5 h-5 mt-1  inline text-black-50 " />
                  <p>{salary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="px-5 py-3 bg-violet-800 rounded-lg text-white">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplyInfo;
