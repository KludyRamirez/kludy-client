import React from "react";
import Spacer from "../../utils/Spacer";
import { Experience as ExperienceType } from "../../types/Experience";
import ExperienceData from "../../assets/data/Experience.json";
import TimelineItem from "./TimelineItem";

interface Props {
  experienceRef: React.RefObject<HTMLElement>;
}

const Experience: React.FC<Props> = ({ experienceRef }) => {
  const experiences: ExperienceType[] = ExperienceData as ExperienceType[];

  return (
    <section id="experiences" ref={experienceRef}>
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="large" />
        <div className="text-white">Experiences</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <h2 className="text-[2.875rem] text-white leading-[1.275]">
          <span>Check out my experiences</span>
          <br />
          <span className="text-[#919191] font-[regular] light-sweep">
            These are proofs of commitment
          </span>
        </h2>
        <Spacer size="medium" />
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <h3 className="text-[1.75rem] text-white font-[regular]">
          Recent experiences
        </h3>
        <Spacer size="medium" />
        <Spacer size="xs" />

        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <TimelineItem {...exp} />
            <Spacer size="medium" />
          </React.Fragment>
        ))}

        <Spacer size="xs" />
        <Spacer size="small" />
        <Spacer size="small" />
        <Spacer size="medium" />
      </div>
    </section>
  );
};

export default Experience;
