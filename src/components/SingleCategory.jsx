import React from "react";

const SingleCategory = ({ cate }) => {
  const { id, logo, name, jobs_available } = cate;

  // console.log(cate);
  return (
    <>
      <section className="bg-gray-200 px-6  space-y-3 py-6 rounded-lg">
        <img src={logo} alt="" />
        <h3 className="">{name}</h3>
        <p>{jobs_available}</p>
      </section>
    </>
  );
};

export default SingleCategory;
