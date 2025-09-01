import React from "react";
import { Blog as BlogType } from "../../types/Blog";
import { BsArrowRightShort } from "react-icons/bs";

const Card: React.FC<{ blog: BlogType }> = ({ blog }) => {
  return (
    <div className="cursor-pointer p-4 hover:px-6 relative group border border-slate-100/20 hover:border-white hover:bg-slate-100 text-gray-200 hover:text-black rounded-xl transition-all duration-500 flex flex-col gap-4">
      <div id="meta" className="flex items-center">
        <span className="text-xs tracking-wide">
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          • {blog.minRead}
        </span>
      </div>
      <div id="title" className="flex items-center -mt-1">
        <span className="text-[22px] tracking-wide">{blog.title}</span>
      </div>
      <div id="description" className="flex items-center justify-between">
        <span className="text-[14px] tracking-wide">{blog.description}</span>
      </div>

      <div id="categories" className="flex items-end justify-between">
        <div className="flex items-center gap-2 text-sm tracking-wide">
          {blog.categories.map((category, index) => (
            <div
              key={index}
              className="py-1 px-3 border border-white/60 rounded-md group-hover:border-slate-500/90"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 group">
          <BsArrowRightShort
            size={24}
            className="-ml-7 text-white transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
