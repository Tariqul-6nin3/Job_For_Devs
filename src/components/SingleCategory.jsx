import React from "react";

const SingleCategory = ({ cate }) => {
  const { id, logo, name, jobs_available } = cate;

  // console.log(cate);
  return (
    <>
      <section className="bg-gray-200 md:px-6 px-8 space-y-3 py-6 rounded-lg shadow-xl">
        <img src={logo} alt="" />
        <h3 className="text-lg font-semibold ">{name}</h3>
        <p className="text-base">{jobs_available}</p>
      </section>
    </>
  );
};

export default SingleCategory;
