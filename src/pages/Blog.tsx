import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Spacer from '../../utils/Spacer';
import { Blog as BlogType } from '../types/Blog';
import BlogData from '../assets/data/Blog.json';
import { BsArrowRightShort } from 'react-icons/bs';

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
    <div className="cursor-pointer p-4 relative group border border-slate-100/20 hover:bg-neutral-100/10 text-gray-200 hover:text-white rounded-xl hover:scale-[101%] transition-transform duration-400 flex flex-col gap-4">
      <div id="meta" className="flex items-center">
        <span className="text-xs tracking-wide">
          {new Date(blog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}{' '}
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
              className="py-1 px-3 border border-slate-100/20 rounded-md group-hover:bg-neutral-950 group-hover:border-neutral-700"
            >
              {category}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 group">
          <BsArrowRightShort
            size={24}
            className="-ml-7 text-white transform transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
