import React from 'react';
import Image from './Image';
import Spacer from '../../utils/Spacer';
import { Project as ProjectType } from '../../types/Project';
import { BsGithub, BsGlobeAmericas } from 'react-icons/bs';

const Meta: React.FC<{ date: string; authors: string[] }> = ({
  date,
  authors,
}) => (
  <div className="flex gap-2 text-sm text-gray-400 tracking-wide font-[extra-light]">
    <span>
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </span>
    <span>•</span>
    <span>{authors.join(', ')}</span>
  </div>
);

const Links: React.FC<{
  url: ProjectType['url'];
  githubLink: ProjectType['githubLink'];
}> = ({ url, githubLink }) => (
  <>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <div className="project-links cursor-pointer flex justify-center items-center w-full gap-2 py-2 border-[1px] border-gray-300 hover:bg-[#282828] hover:text-white hover:border-gray-600 group-hover:rounded-lg transition-all duration-300">
        <span className="font-[semi-bold] text-[#282828] text-[12px] tracking-wider block group-hover:hidden">
          View Source
        </span>
        <BsGithub size={18} className="hidden group-hover:block" />
      </div>
    </a>
    <Spacer size="small" />
    <div className="w-full flex flex-wrap justify-start items-start gap-4 hover:underline">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="cursor-pointer flex justify-center items-center gap-2 text-[#282828]">
          <BsGlobeAmericas size={14} className="-mt-[2px]" />
          <span className="text-sm tracking-wide">
            {url.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </a>
    </div>
  </>
);

const Technology: React.FC<{ technology: string }> = ({ technology }) => (
  <div className="project-technology cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 border border-slate-400/90 text-[14px] text-[#282828] hover:border-[#282828] hover:bg-[#282828] hover:text-white group-hover:rounded-[6px] transition-all duration-300">
    <img
      src={`https://res.cloudinary.com/dni1vtbsv/image/upload/v1754623985/${technology}.png`}
      alt={technology}
      className="w-[16px] h-[16px] brightness-100 contrast-175"
    />
    <div className="text-[14px] mt-[2px] tracking-wide">{technology}</div>
  </div>
);

const Technologies: React.FC<{ technologies: ProjectType['technologies'] }> = ({
  technologies,
}) => (
  <div className="project-technologies w-full flex flex-wrap justify-start items-start gap-2">
    {technologies.map((technology, index) => (
      <Technology key={index} technology={technology} />
    ))}
  </div>
);

const Card: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="project cursor-pointer w-full h-full group relative hover:border hover:border-gray-300 hover:bg-neutral-100/20 hover:rounded-xl overflow-hidden">
      <Image
        logo={project.logo}
        splashPhoto={project.splashPhoto}
        title={project.title}
      />

      <div className="group-hover:px-4 pb-4 project-details">
        <Spacer size="small" />

        <Meta date={project.date} authors={project.authors} />

        <Spacer size="xs" />

        <div className="text-[#282828] text-[20px] cursor-pointer transition-all duration-300">
          {project.title}
        </div>

        <Spacer size="xs" />

        <span className="text-[#282828] text-[14px] tracking-wide">
          {project.description}
        </span>

        <Spacer size="xs" />

        <Links url={project.url} githubLink={project.githubLink} />

        <Spacer size="small" />

        <Technologies technologies={project.technologies} />
      </div>
    </div>
  );
};

export default Card;
