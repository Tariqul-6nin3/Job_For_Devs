import React from "react";

const SingleCategory = ({ cate }) => {
  const { id, logo, name, jobs_available } = cate;

  // console.log(cate);
  return (
    <>
      <section className="bg-gray-200 px-6  space-y-4 py-4">
        <img src={logo} alt="" />
        <h3>{name}</h3>
        <p>{jobs_available}</p>
      </section>
    </>
  );
};

export default SingleCategory;
