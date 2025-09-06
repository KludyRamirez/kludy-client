import React from "react";
import { Testimonial as TestimonialType } from "../../types/Testimonial";

const Card: React.FC<{ testimonial: TestimonialType }> = ({ testimonial }) => {
  return (
    <div className="w-[480px] hover:bg-gray-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden border border-slate-100/10 cursor-pointer">
      <div className="absolute top-4 left-4 text-gray-500 text-sm font-semibold">
        Oracle
      </div>

      <div className="absolute top-3 right-4 w-24 h-24 overflow-hidden bg-blue-950/10 rounded-[50%]"></div>

      <div className="mt-[108px]">
        <p className="mt-2 text-lg leading-relaxed">
          Yes, no doubt it is indeed expensive, but there’s a clear reason why
          it’s the best tax firm in the world.
        </p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Elona Mosco</p>
        <p className="text-sm text-gray-400">Head of Community @Goldman</p>
      </div>
    </div>
  );
};

export default Card;
