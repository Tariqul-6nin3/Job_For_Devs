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
      <div className="border-2 px-10 py-6 rounded-b-lg w-11/12 shadow-xl ">
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
          <button className=" font-medium  transition duration-200  shadow-md  px-8 py-1 mt-4  text-lg rounded-xl border-transparent border-2 hover:bg-cyan-400 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 text-white">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default DataInfo;
