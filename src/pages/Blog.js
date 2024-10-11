import React from "react";
import PageHeading from "../common/PageHeading";
import Category from "../components/Category";
import BestSeller from "../components/products";
const Blog = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"Blog"} />

      <div className="w-10/12 m-auto">
        <div className="my-8 text-3xl font-bold">Blog</div>
        <Category />
        <BestSeller />
      </div>
    </div>
  );
};

export default Blog;
