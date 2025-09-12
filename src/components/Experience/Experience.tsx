import React from 'react';
import Spacer from '../../utils/Spacer';
import { Experience as ExperienceType } from '../../types/Experience';
import ExperienceData from '../../assets/data/Experience.json';
import { MdLink } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

interface Props {
  experienceRef: React.RefObject<HTMLElement>;
}

const TimelineItem: React.FC<ExperienceType> = ({
  company,
  logo,
  period,
  title,
  points,
  documents,
  address,
  companyLink,
}) => (
  <div className="w-full flex justify-start gap-4">
    <div className="w-[60px] h-[60px] p-3 rounded-lg border border-slate-100/20 flex-shrink-0">
      <img src={logo} className="filter brightness-100 contrast-150" />
    </div>

    <div className="flex flex-col items-start">
      <div className="flex items-center gap-3 group -mt-1 pb-2">
        <div className="text-[24px] font-[semi-bold] text-white cursor-pointer tracking-wide">
          {company}
        </div>
        <BsLinkedin
          size={18}
          className="opacity-0 group-hover:opacity-100 text-white"
        />
      </div>
      <div className="text-md font-[semi-bold] text-white cursor-pointer pb-[1px]">
        {title}
      </div>
      <Spacer size="xs" />
      <div className="flex items-center gap-2 text-gray-400 text-sm leading-none tracking-wide pb-2">
        <div>{period}</div>
      </div>
      <Spacer size="xs" />
      <div className="flex items-center gap-2 text-white text-sm leading-none tracking-wider pb-2 font-[extra-light]">
        <div>{address}</div>
      </div>
      <Spacer size="small" />
      <ul className="list-disc list-inside space-y-4 md:space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="text-white text-sm tracking-wide">
            {point}
          </li>
        ))}
      </ul>

      {documents && documents.length > 0 ? (
        <>
          <Spacer size="xs" />
          <Spacer size="small" />
          <div className="flex items-center gap-3">
            {documents?.map((link, index) => (
              <a>
                <div
                  key={index}
                  className="cursor-pointer flex items-center gap-2 group tracking-wide pl-3 pr-4 py-1 text-neutral-100 border border-slate-100/30 group hover:bg-white hover:border-white hover:text-black transition-hover duration-[300ms] rounded-md"
                >
                  <MdLink size={20} />
                  <span className="text-sm mt-[2px] tracking-wide">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </>
      ) : null}
    </div>
  </div>
);

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
