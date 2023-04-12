import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const Category = () => {
  const [category, setCategory] = useState();
  // console.log(category);
  useEffect(() => {
    const fetchCategoryData = async () => {
      const cateData = await fetch("category.json");
      const category = await cateData.json();
      setCategory(category);
    };
    fetchCategoryData();
  }, []);

  return (
    <>
      <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-5">
        <div className="text-center">
          <h1 className="text-4xl text-black font-bold mb-4">
            Job category list
          </h1>
          <p className="text-gray-800 mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </p>
        </div>
        <div className="flex flex-col gap-7 md:flex-row justify-evenly mb-6">
          {category?.map(cate => (
            <SingleCategory key={cate.id} cate={cate} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
