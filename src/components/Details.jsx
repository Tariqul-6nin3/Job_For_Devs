import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { addToCart } from "../utility/fakeDB";

const Details = () => {
  const [details, setDetails] = useState({});
  const { jobId } = useParams();
  const jobData = useLoaderData();
  // console.log(details);

  useEffect(() => {
    const matchingJob = jobData.find(job => job.job_id === jobId);
    setDetails(matchingJob || {});
  }, [jobData, jobId]);

  const {
    job_id,
    job_description,
    job_responsibilities,
    educational_requirements,
    experience,
    salary,
    job_title,
  } = details;
  const phone = details?.contact_information?.phone;
  const email = details?.contact_information?.email;
  const address1 = details?.contact_information?.address?.street;
  const address2 = details?.contact_information?.address?.city;
  const address3 = details?.contact_information?.address?.country;
  // console.log(job_description);
  return (
    <div>
      <div className="grid grid-cols-6 px-4 mt-6 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="col-span-4 tracking-wide space-y-6 px-5">
          <div>
            <h3 className="text-xl text-black font-semibold ">
              Job description:
            </h3>
            <p>{job_description}</p>
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold">
              Job Responsiblities
            </h3>
            <p>{job_responsibilities}</p>
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold">
              Educational Requirements:
            </h3>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <h3 className="text-xl text-black font-semibold">Experience:</h3>
            <p>{experience}</p>
          </div>
        </div>
        <div className="col-span-2  tracking-wide">
          <div className="bg-slate-100 rounded-xl ps-8 py-12 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl text-black font-semibold">Job detais</h3>
              <hr className="w-8/12 border-2" />
              <p>
                <CurrencyDollarIcon className="w-4 h-4 inline text-black-50 " />
                <strong>Salary:</strong>

                {salary}
              </p>
              <p>
                <PresentationChartBarIcon className="w-4 h-4 inline text-black-50" />
                <strong>Job title:</strong>
                {job_title}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl  text-black font-semibold">
                Contact Information:
              </h3>
              <hr className="w-8/12 border-2" />
              <p>
                <PhoneArrowDownLeftIcon className="w-4 h-4 inline text-black-50 " />
                <strong>Phone:</strong>

                {phone}
              </p>
              <p>
                <EnvelopeIcon className="w-4 h-4 inline text-black-50 " />
                <strong>Email:</strong>

                {email}
              </p>
              <p>
                <MapPinIcon className="w-4 h-4 inline text-black-50 " />
                <strong>Address:</strong>
                {address1},{address2}, {address3}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => addToCart(job_id, 1)}
              className="btn-primary mt-6">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
