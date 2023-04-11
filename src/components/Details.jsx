import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

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
  const phone = details?.contact_information?.phone;
  const email = details?.contact_information?.email;
  const address1 = details?.contact_information?.address?.street;
  const address2 = details?.contact_information?.address?.city;
  const address3 = details?.contact_information?.address?.country;
  // console.log(address);
  return (
    <div>
      <div className="grid grid-cols-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="col-span-3">
          <div>
            <h3>Job description:</h3>
            <p>{job_description}</p>
          </div>
          <div>
            <h3>Job Responsiblities</h3>
            <p>{job_responsibilities}</p>
          </div>
          <div>
            <h3>Educational Requirements:</h3>
            <p>{educational_requirements}</p>
          </div>
          <div>
            <h3>Experience:</h3>
            <p>{experience}</p>
          </div>
        </div>
        <div className="col-2">
          <div>
            <h3>Job detais</h3>
            <p>
              <CurrencyDollarIcon className="w-6 h-6 inline text-black-50 " />
              <strong>Salary:</strong>

              {salary}
            </p>
            <p>
              <PresentationChartBarIcon className="w-6 h-6 inline text-black-50" />
              <strong>Job title:</strong>
              {job_title}
            </p>
          </div>
          <hr />
          <div>
            <h3>Contact Information:</h3>
            <p>
              <PhoneArrowDownLeftIcon className="w-6 h-6 inline text-black-50 " />
              <strong>Phone:</strong>

              {phone}
            </p>
            <p>
              <EnvelopeIcon className="w-6 h-6 inline text-black-50 " />
              <strong>Email:</strong>

              {email}
            </p>
            <p>
              <MapPinIcon className="w-6 h-6 inline text-black-50 " />
              <strong>Address:</strong>
              {address1},{address2}, {address3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
