import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Spacer from '../../utils/Spacer';
import { Blog as BlogType } from "../types/Blog";
import BlogData from "../assets/data/Blog.json";
import { BsArrowLeftShort } from "react-icons/bs";
import Spacer from "../utils/Spacer";

const Blog: React.FC = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogType | null>(null);

  useEffect(() => {
    console.log(id);
    if (!id) {
      setBlog(null);
      return;
    }

    const found = (BlogData as BlogType[]).find((b) => b._id === id);
    setBlog(found ?? null);
  }, [id]);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <section id="projects" className="bg-white relative min-h-screen">
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="medium" />
        <Spacer size="small" />
        <Link to="/">
          <div className="flex items-center gap-2 text-[#282828] hover:underline">
            <BsArrowLeftShort size={24} className="-mt-1" />
            <span className="text-md">Go Back</span>
          </div>
        </Link>
        <Spacer size="medium" />
        <div className="flex w-full justify-between items-center">
          <div className="text-[#282828]">Blog • {blog.minRead}</div>
          <div className="text-[#282828]">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
        <Spacer size="small" />
        <div className="flex justify-between text-[2.875rem] text-[#282828] leading-[1.275]">
          <div className="flex flex-col">{blog.title}</div>
        </div>
        <Spacer size="xs" />
        <Spacer size="small" />
        <div className="flex items-center gap-2 text-sm tracking-wide">
          {blog.categories.map((category, index) => (
            <div
              key={index}
              className="py-1 px-3 border border-slate-500/80 rounded-md group-hover:border-slate-100/30"
            >
              {category}
            </div>
          ))}
        </div>
        <Spacer size="medium" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="text-md">{blog.description}</div>
        <Spacer size="medium" />
        <Spacer size="xs" />
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default Blog;
