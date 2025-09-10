import React from "react";
import { Layout } from "../../layouts/Layout";
import { LayoutBlog } from "../../layouts/LayoutBlog";
import { BlogDetailsContent } from "../../components/blogs/BlogDetailsContent";
import { BlogComments } from "../../components/blogs/BlogComments";

export const BlogDetails = () => {
  return (
    <Layout
      breadcrumbTitle="Blog Details"
      breadcrumbSubtitle={"Blog Details"}
      mainClass="nothing"
    >
      <LayoutBlog>
        {/* details */}
        <BlogDetailsContent />

        {/* comments */}
        <BlogComments />
      </LayoutBlog>
    </Layout>
  );
};
