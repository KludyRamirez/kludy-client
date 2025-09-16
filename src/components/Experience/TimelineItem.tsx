import React from "react";
import Spacer from "../../utils/Spacer";
import { Experience as ExperienceType } from "../../types/Experience";
import { MdLink } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const TimelineItem: React.FC<ExperienceType> = ({
  company,
  logo,
  period,
  title,
  points,
  documents,
  address,
  companyLink,
}) => {
  return (
    <div className="w-full flex justify-start gap-4">
      <div className="w-[60px] h-[60px] p-3 rounded-lg border border-slate-100/20 flex-shrink-0">
        <img src={logo} className="filter brightness-100 contrast-150" />
      </div>

      <div className="flex flex-col items-start">
        <a href={companyLink} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-3 group -mt-1 pb-2">
            <div className="text-[24px] font-[semi-bold] text-white cursor-pointer">
              {company}
            </div>
            <BsLinkedin
              size={18}
              className="opacity-0 group-hover:opacity-100 text-white -mt-1"
            />
          </div>
        </a>
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
                <a href={link.link} target="_blank" rel="noopener noreferrer">
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
};

export default TimelineItem;
