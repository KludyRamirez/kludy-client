import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Spacer from '../../utils/Spacer';
import Card from './Card';
import { useGetProjectsQuery } from '../../features/api/Project';
import { Project as ProjectType } from '../../types/Project';
import ProjectData from '../../assets/data/Project.json';
import Loader from '../../utils/Loader';

interface Props {
  projectRef: React.RefObject<HTMLElement>;
  projectsGif: string;
}

const SWIPER_CONFIG = {
  spaceBetween: 28,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    639: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
  },
  modules: [Autoplay, Pagination],
  className: 'project-swiper',
};

const Project: React.FC<Props> = ({ projectRef }) => {
  const { data, isLoading } = useGetProjectsQuery();
  const projects: ProjectType[] = data ?? (ProjectData as ProjectType[]);

  return (
    <section id="projects" className="bg-white relative" ref={projectRef}>
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="large" />
        <div className="text-[#282828]">Projects</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
        <Spacer size="small" />
        <div className="flex justify-between text-[2.875rem] text-[#282828] leading-[1.275]">
          <div className="flex flex-col">
            <span>Check out my projects</span>
            <span className="text-[#919191] font-[regular] black-sweep">
              These works aspires to be best
            </span>
          </div>
        </div>
        <Spacer size="medium" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
        <Spacer size="small" />
        <h3 className="text-[1.75rem] text-[#282828] font-[regular]">
          Recent projects
        </h3>
        <Spacer size="medium" />
        <Spacer size="xs" />
        <Swiper {...SWIPER_CONFIG}>
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <SwiperSlide key={project._id}>
                <Card project={project} />
              </SwiperSlide>
            ))
          ) : isLoading ? (
            <Loader />
          ) : (
            <div className="text-center text-[#919191] w-full py-10">
              No projects found.
            </div>
          )}
        </Swiper>
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default Project;
