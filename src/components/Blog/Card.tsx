import React from 'react';
// import Spacer from '../../utils/Spacer';
// import { Badge as BadgeType } from '../../types/Badge';
import { BsArrowRightShort } from 'react-icons/bs';

const Card: React.FC = () => {
  return (
    <div className="cursor-pointer p-4 relative group border border-slate-100/20 hover:border-slate-100 text-gray-200 hover:text-white hover:rounded-xl hover:scale-105 transition-transform duration-300 flex flex-col gap-4">
      <div id="meta" className="flex items-center">
        <span className="text-[12px] tracking-wider">
          July 3, 2025 • 3 min read
        </span>
      </div>
      <div id="title" className="flex items-center -mt-1">
        <span className="text-[22px] tracking-wide">
          Navigating the Startup Jungle: Building a Productive and Positive
          Culture
        </span>
      </div>
      <div id="description" className="flex items-center justify-between">
        <span className="text-[14px] tracking-wider">
          This post explores the key elements of a successful startup culture,
          offering practical tips and examples for fostering a productive and
          positive environment.
        </span>
      </div>

      <div id="categories" className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12px] tracking-wider">
          <div className="py-1 px-3 border border-slate-100/60 rounded-md">
            Programming
          </div>
          <div className="py-1 px-3 border border-slate-100/60 rounded-md">
            Web Development
          </div>
        </div>
        <BsArrowRightShort size={22} className="ml-2" />
      </div>
    </div>
  );
};

export default Card;
