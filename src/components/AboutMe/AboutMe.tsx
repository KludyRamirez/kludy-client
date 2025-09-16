import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip } from "swiper/modules";
import Spacer from "../../utils/Spacer";
import profilePic from "../../assets/images/profilepic.svg";
import { PiSealCheckFill } from "react-icons/pi";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import AboutMeData from "../../assets/data/AboutMe.json";
import { AboutMe as AboutMeType } from "../../types/AboutMe";
import Technology from "./Technology";

interface Props {
  aboutMeRef: React.RefObject<HTMLElement>;
}

const AboutMe: React.FC<Props> = ({ aboutMeRef }) => {
  const aboutMeInfo: AboutMeType[] = AboutMeData;
  const { frontend, backend, devops, database, cloud } = aboutMeInfo[0];

  return (
    <section id="aboutme" className="bg-white relative" ref={aboutMeRef}>
      <div className="max-w-5xl px-[1.25rem] mx-auto relative overflow-hidden">
        <Spacer size="large" />
        <div className="text-[#282828]">About</div>
        <Spacer size="small" />
        <div className="w-full bg-slate-200 h-[1px]"></div>
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="min-w-[59%] flex flex-wrap justify-start items-center gap-8 py-8">
            <img
              src={profilePic}
              className="w-[160px] h-[160px] shadow-lg rounded-xl"
            ></img>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-[semi-bold] text-2xl text-[#282828] tracking-wide">
                  Kludy Ramirez
                </span>
                <PiSealCheckFill size={22} className="text-[#1d9bf0]" />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-[#282828] tracking-wider">
                  Valenzuela City, Philippines
                </div>
              </div>
              <div className="flex items-center mt-[2px] hover:underline cursor-pointer font-[extra-light]">
                <span className="text-sm text-[#282828] tracking-wider">
                  ramirezkludy23@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 mt-[6px]">
                <a
                  href="https://github.com/KludyRamirez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-transparent border border-[#141b23]/60 text-sm text-[#141b23] hover:bg-[#141b23] hover:text-white transition-all duration-300 rounded-md">
                    <FaGithub />
                    <div className="text-sm mt-[2px] tracking-wide">GitHub</div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/kludyramirez/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-transparent border border-[#0d66be]/60 text-sm text-[#0d66be] hover:bg-[#0d66be] hover:text-white transition-all duration-300 rounded-md">
                    <FaLinkedinIn />
                    <div className="text-sm mt-[2px] tracking-wide">
                      LinkedIn
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/kludy.ramirez19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-transparent border border-[#0a68ff]/60 text-sm text-[#0a68ff] hover:bg-[#0a68ff] hover:text-white transition-all duration-300 rounded-md">
                    <FaFacebook />
                    <div className="text-sm mt-[2px] tracking-wide">
                      Facebook
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="min-w-[40%] min-h-[224px]">
            <Swiper
              effect={"flip"}
              autoplay={{
                delay: 5000,
              }}
              loop={true}
              pagination={true}
              modules={[Autoplay, EffectFlip]}
              className="about-me-desc-swiper"
            >
              <SwiperSlide>
                <div className="w-full h-full min-h-[224px] flex flex-col gap-4 justify-center p-8 border-l border-r border-slate-200">
                  <div className="text-[#282828] text-sm tracking-wider leading-[1.8] mt-[3px]">
                    <span className="text-[24px] leading-[0] align-middle -ml-[1px] pr-[1px]">
                      W
                    </span>
                    ith a knack for{" "}
                    <span className="tracking-wider font-[semi-bold] leading-[0] align-middle">
                      Software Development
                    </span>{" "}
                    and a track record of turning{" "}
                    <span className="tracking-wider font-[semi-bold] leading-[0] align-middle">
                      challenges
                    </span>{" "}
                    into{" "}
                    <span className="tracking-wider font-[semi-bold] leading-[0] align-middle">
                      results
                    </span>
                    , I’m eager to bring
                    <span className="tracking-wider font-[semi-bold] leading-[0] align-middle">
                      {" "}
                      innovative yet empathic
                    </span>{" "}
                    ideas to the company. I’m ready to transform a line of{" "}
                    <span className="tracking-wider font-[semi-bold] leading-[0] align-middle">
                      code
                    </span>{" "}
                    into a
                    <span className="tracking-wider font-[semi-bold] leading-[0] align-middle">
                      {" "}
                      robust infrastructure
                    </span>
                    .
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="w-full bg-slate-200 h-[1px]"></div>
        <Spacer size="small" />
        <Spacer size="small" />
        <h3 className="text-[1.75rem] font-[regular]">Frontend</h3>
        <Spacer size="small" />
        <div className="flex flex-wrap items-center gap-2">
          {frontend?.length > 0 ? (
            frontend.map((technology, index) => (
              <Technology key={index} technology={technology} />
            ))
          ) : (
            <div className="text-center text-[#919191] w-full py-10">
              No information found.
            </div>
          )}
        </div>
        <Spacer size="small" />
        <Spacer size="small" />
        <h3 className="text-[1.75rem] font-[regular]">Backend</h3>
        <Spacer size="small" />
        <div className="flex flex-wrap items-center gap-2">
          {backend?.length > 0 ? (
            backend.map((technology, index) => (
              <Technology key={index} technology={technology} />
            ))
          ) : (
            <div className="text-center text-[#919191] w-full py-10">
              No information found.
            </div>
          )}
        </div>

        <Spacer size="small" />
        <Spacer size="small" />
        <h3 className="text-[1.75rem] font-[regular]">Database</h3>
        <Spacer size="small" />
        <div className="flex flex-wrap items-center gap-2">
          {database?.length > 0 ? (
            database.map((technology, index) => (
              <Technology key={index} technology={technology} />
            ))
          ) : (
            <div className="text-center text-[#919191] w-full py-10">
              No information found.
            </div>
          )}
        </div>
        <Spacer size="small" />
        <Spacer size="small" />
        <h3 className="text-[1.75rem] font-[regular]">DevOps</h3>
        <Spacer size="small" />
        <div className="flex flex-wrap items-center gap-2">
          {devops?.length > 0 ? (
            devops.map((technology, index) => (
              <Technology key={index} technology={technology} />
            ))
          ) : (
            <div className="text-center text-[#919191] w-full py-10">
              No information found.
            </div>
          )}
        </div>
        <Spacer size="small" />
        <Spacer size="small" />
        <h3 className="text-[1.75rem] font-[regular]">Cloud</h3>
        <Spacer size="small" />
        <div className="w-full flex items-center justify-between gap-4">
          <div className="w-[80%] flex flex-wrap items-center gap-2">
            {cloud?.length > 0 ? (
              cloud.map((technology, index) => (
                <Technology key={index} technology={technology} />
              ))
            ) : (
              <div className="text-center text-[#919191] w-full py-10">
                No information found.
              </div>
            )}
          </div>
        </div>
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default AboutMe;
