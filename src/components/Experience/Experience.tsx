import React from "react";
import Spacer from "../../utils/Spacer";

import { FaLinkedin } from "react-icons/fa6";
import { BsSuitcaseLg } from "react-icons/bs";
import { MdLink } from "react-icons/md";

interface Props {
  experiencesRef: React.RefObject<HTMLElement>;
}

interface ExperienceItem {
  period: string;
  title: string;
  points: string[];
  photos: string[];
  documentsLinks?: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "July 2024 - Present",
    title: "Software Engineer at Flexicon Solution Inc.",
    points: [
      `Developed renowned online gaming platforms (e.g., JILI, LakiWin, etc.), utilizing Vue.js, Nuxt.js,
Storybook.js, Pug.js, Cypress, and Jest.`,
      `Chosen as one of the key engineers to collaborate with international developers on building back-office systems (sensitive data) for online gaming platforms. (Full Stack)`,
      `Led agile sprint cycles to deliver responsive, high-performance interfaces for back-office
systems, ensuring alignment with technical standards and business goals.
`,
      `Shipped reliable bug fixes via dedicated branches and managed version control on target
branches, including maintaining detailed changelogs to ensure consistent and traceable releases.`,
    ],
    photos: [
      "https://res.cloudinary.com/dni1vtbsv/image/upload/flexicon-hiring-experience.png",
      "https://res.cloudinary.com/dni1vtbsv/image/upload/flexicon-regularization-experience.png",
      "https://res.cloudinary.com/dni1vtbsv/image/upload/flexicon-se-team-experience.png",
    ],
    documentsLinks: ["Performance Review", "Supervisor Feedback"],
  },
  {
    period: "January 2024 - July 2024",
    title: "Full Stack Developer at Pamantasan ng Lungsod ng Valenzuela",
    points: [
      `Built a web application that handled over 12,000 student affairs records and processed 9,000+
cases and appeals, featuring secure data delivery to official school email without requiring
student account creation.`,
      `Implemented user-friendly UI interfaces using React.js and Tailwind CSS, resulting increase in
user satisfaction compared to the previous system.
`,
      `Engineered RESTful APIs, WebSockets, and microservices with Express.js and SocketIO,
streamlining backend operations enough to handle a high volume of concurrent users while
ensuring 99% system availability.`,
    ],
    photos: [],
  },
  {
    period: "March 2023 - December 2023",
    title: "Junior Web Developer at Asia Pacific Digital GrowthOps",
    points: [
      `Key contributor to the development of the BPI-AIA, AIA Philippines, and AIA Thailand
websites.
`,
      `Developed user-friendly UI interfaces with Material UI and Bootstrap framework, leading to an
increase in user engagement based on analytics data.`,
      `Integrated and configured Google Tag Manager and Facebook Pixel to track user interactions,
enabling advanced analytics and remarketing strategies.`,
      `Configured dynamic meta tags in SPAs for accurate SEO and crawler rendering.`,
    ],
    photos: [
      "https://res.cloudinary.com/dni1vtbsv/image/upload/flexicon-se-team-experience.png",
    ],
  },
];

const TimelineItem: React.FC<ExperienceItem> = ({
  period,
  title,
  points,
  photos,
  documentsLinks,
}) => (
  <div className="w-full flex justify-start gap-6">
    <div className="hidden md:flex flex-col items-center justify-center gap-5">
      <div className="w-full flex justify-center items-start">
        <BsSuitcaseLg size={16} className="-mt-[2px] text-gray-600" />
      </div>
      <div className="w-[1px] h-full bg-slate-100/20"></div>
    </div>

    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2 text-white text-[14px] leading-none tracking-wide pb-2">
        <div>{period}</div>
      </div>
      <Spacer size="small" />
      <div className="flex items-center gap-2 group">
        <div className="text-[28px] text-white hover:underline cursor-pointer">
          {title}
        </div>
        <FaLinkedin
          size={22}
          className="opacity-0 group-hover:opacity-100 text-white"
        />
      </div>
      <Spacer size="small" />
      <ul className="list-disc list-inside space-y-4 md:space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="text-white text-[14px] tracking-wide">
            {point}
          </li>
        ))}
      </ul>
      <Spacer size="xs" />
      <Spacer size="small" />
      {documentsLinks && documentsLinks.length > 0 ? (
        <div className="flex items-center gap-3">
          {documentsLinks?.map((link, index) => (
            <div
              key={index}
              className="cursor-pointer flex items-center gap-2 group tracking-wide pl-3 pr-4 py-1 text-white border border-slate-100/20 group hover:bg-white hover:border-white hover:text-black transition-hover duration-[300ms] rounded-md"
            >
              <MdLink size={20} />
              <span className="text-[14px] mt-[2px]">{link}</span>
            </div>
          ))}
        </div>
      ) : null}
      <Spacer size="small" />
      <Spacer size="small" />
      {photos?.length > 0 ? (
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-wrap items-start gap-4">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="w-full md:w-[304px] h-[200px] object-cover"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  </div>
);

const Experience: React.FC<Props> = ({ experiencesRef }) => {
  return (
    <section id="experiences" ref={experiencesRef}>
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
