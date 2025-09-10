import React from "react";
import { Testimonial as TestimonialType } from "../../types/Testimonial";

const Card: React.FC<{ testimonial: TestimonialType }> = ({ testimonial }) => {
  return (
    <div className="h-[286px] w-[480px] hover:bg-gray-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden border border-slate-100/10 cursor-pointer">
      <div className="absolute top-4 left-4 text-gray-500 text-sm font-semibold">
        {testimonial.company}
      </div>

      <div className="absolute top-4 right-4 w-20 h-20 overflow-hidden rounded-[50%]">
        <img src={testimonial.photo} />
      </div>

      <div className="mt-[100px]">
        <p className="mt-2 text-sm leading-relaxed tracking-wide">
          {testimonial.content}
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-sm text-gray-400">
          {testimonial.position} @{testimonial.company}
        </p>
      </div>
    </div>
  );
};

export default Card;
