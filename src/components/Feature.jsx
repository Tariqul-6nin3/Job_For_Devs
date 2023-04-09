import React from "react";
import { useLoaderData } from "react-router-dom";

const Feature = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return <div>thus is feature</div>;
};

export default Feature;
