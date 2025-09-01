import React from "react";
import Spacer from "../../utils/Spacer";
import Card from "./Card";
import { useGetBlogsQuery } from "../../features/api/Blog";
import { Blog as BlogType } from "../../types/Blog";
import BlogData from "../../assets/data/Blog.json";
import Loader from "../../utils/Loader";
import { Link } from "react-router-dom";

interface Props {
  blogRef: React.RefObject<HTMLElement>;
}

const Blog: React.FC<Props> = ({ blogRef }) => {
  const { data, isLoading } = useGetBlogsQuery();
  const blogs: BlogType[] = data ?? (BlogData as BlogType[]);

  return (
    <section id="blog" className="" ref={blogRef}>
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="large" />
        <div className="text-white">Blogs</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <div className="text-[2.875rem] text-white leading-[1.275]">
          <span>Our field evolves rapidly</span>
          <br />
          <span className="text-[#919191] font-[regular] light-sweep">
            These blogs helps you stay ahead
          </span>
        </div>
        <Spacer size="medium" />
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <h3 className="text-[1.75rem] text-white font-[regular]">
          Recent blogs
        </h3>
        <Spacer size="medium" />
        <Spacer size="xs" />
        <div className="flex flex-col gap-4">
          {blogs?.length > 0 ? (
            blogs.map((blog) => (
              <Link key={blog._id} to={`/blog/${blog._id}`}>
                <Card key={blog._id} blog={blog} />
              </Link>
            ))
          ) : isLoading ? (
            <Loader />
          ) : (
            <div className="text-center text-white w-full py-10">
              No blogs found.
            </div>
          )}
        </div>
        <Spacer size="xs" />
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default Blog;
