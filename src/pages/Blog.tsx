import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Blog as BlogType } from "../types/Blog";
import BlogData from "../assets/data/Blog.json";
import { BsArrowLeftShort } from "react-icons/bs";
import Spacer from "../utils/Spacer";
import { useNavigate } from "react-router-dom";

const Blog: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center gap-3 text-[#282828] group"
        >
          <div className="flex items-center justify-center group-hover:bg-black rounded-[50%] group-hover:p-2 group -mt-[3px] group-hover:-ml-1 transition-all ease-in-out duration-500">
            <BsArrowLeftShort size={24} className="group-hover:text-white" />
          </div>
          <span className="text-md">Go Back</span>
        </div>
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
        <article className="prose prose-md max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </article>
        <Spacer size="medium" />
        <Spacer size="xs" />
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default Blog;
