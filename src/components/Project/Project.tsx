import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Spacer from '../../utils/Spacer';
import Card from './Card';
import { useGetProjectsQuery } from '../../features/api/Project';
import { Project as ProjectType } from '../../types/Project';
import ProjectData from '../../assets/data/Project.json';
import Loader from '../../utils/Loader';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface Props {
  projectRef: React.RefObject<HTMLElement>;
  projectsGif: string;
}

const Project: React.FC<Props> = ({ projectRef }) => {
  const { data, isLoading } = useGetProjectsQuery();
  const projects: ProjectType[] = data ?? (ProjectData as ProjectType[]);

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const SWIPER_CONFIG = {
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
    },
    onInit: (swiper: SwiperType) => {
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== 'boolean'
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    },
    breakpoints: {
      639: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
    },
    modules: [Autoplay, Pagination, Navigation],
    className: 'project-swiper',
  };

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
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
          <div className="min-w-[50%]">
            <h3 className="text-[1.75rem] text-[#282828] font-[regular] whitespace">
              Recent projects
            </h3>
          </div>
          <div className="w-full lg:min-w-[50%] flex gap-[20px]">
            <div
              ref={prevRef}
              className="flex justify-center items-center gap-2 cursor-pointer w-[50%] h-[40px] border border-slate-400/90 hover:bg-black hover:border-black hover:text-white rounded-lg transition-colors ease-in-out duration-300"
            >
              <BsChevronLeft className="-ml-2" />
              <span className="text-sm mt-[1px]">Prev</span>
            </div>
            <div
              ref={nextRef}
              className="flex justify-center items-center gap-2 cursor-pointer w-[50%] h-[40px] border border-slate-400/90 hover:bg-black hover:border-black hover:text-white rounded-lg transition-colors ease-in-out duration-300"
            >
              <span className="text-sm mt-[1px] ml-2">Next</span>
              <BsChevronRight className="" />
            </div>
          </div>
        </div>
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
