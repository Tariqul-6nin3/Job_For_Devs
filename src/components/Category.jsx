import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState();
  console.log(category);
  useEffect(async () => {
    const cateData = await fetch("category.json");
    const category = await cateData.json();
    const data = setCategory(data);
  }, []);
  return (
    <>
      <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center">
          <h1>Job category list</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* <div>{category.map(cate => console.log(cate))}</div> */}
      </section>
    </>
  );
};

export default Category;
