import React from "react";
import { Testimonial as TestimonialType } from "../../types/Testimonial";
import { BsLinkedin } from "react-icons/bs";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const Card: React.FC<{ testimonial: TestimonialType }> = ({ testimonial }) => {
  return (
    <a href={testimonial.linkedInUrl} target="_blank" rel="noopener noreferrer">
      <div className="min-h-[286px] max-w-[480px] hover:bg-gray-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden border border-slate-100/10 cursor-pointer">
        <div className="absolute top-4 left-4 w-20 h-20">
          <BsLinkedin />
        </div>

        <div className="absolute top-[88px] left-4 flex items-center">
          <BiSolidQuoteSingleLeft size={24} />
          <BiSolidQuoteSingleLeft size={24} className="-ml-2" />
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
    </a>
  );
};

export default Card;
