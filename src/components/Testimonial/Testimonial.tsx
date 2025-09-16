import React from "react";
import Spacer from "../../utils/Spacer";
import { Testimonial as TestimonialType } from "../../types/Testimonial";
import TestimonialData from "../../assets/data/Testimonial.json";
import Card from "./Card";

interface Props {
  testimonialRef: React.RefObject<HTMLElement>;
}

const Testimonial: React.FC<Props> = ({ testimonialRef }) => {
  const testimonials: TestimonialType[] = TestimonialData as TestimonialType[];

  return (
    <section
      id="testimonial"
      className="bg-gradient-to-b from-black to-blue-950/40"
      ref={testimonialRef}
    >
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="large" />
        <div className="text-white">Testimonials</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <div className="text-[2.875rem] text-white leading-[1.275]">
          <span>Check out the feedbacks</span>
          <br />
          <span className="text-[#919191] font-[regular] light-sweep">
            I received {testimonials.length} so far
          </span>
        </div>
        <Spacer size="medium" />
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <h3 className="text-[1.75rem] text-white font-[regular]">
          Recent testimonials
        </h3>
        <Spacer size="medium" />
        <Spacer size="xs" />
        <div className="flex flex-wrap items-center gap-5">
          {testimonials?.length > 0 ? (
            testimonials.map((testimonial) => (
              <Card key={testimonial._id} testimonial={testimonial} />
            ))
          ) : (
            <div className="text-center text-white w-full py-10">
              No testimonials found.
            </div>
          )}
        </div>
        <Spacer size="xs" />
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default Testimonial;
