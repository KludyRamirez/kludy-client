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
        <div className="text-[#282828]">About me</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-100"></div>
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full flex justify-between items-center">
          <div className="w-[60%] flex flex-wrap justify-start items-center gap-8">
            <img
              src={profilePic}
              className="w-[160px] h-[160px] shadow-lg rounded-xl"
            ></img>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="font-[semi-bold] text-2xl text-[#282828]">
                  Kludy Ramirez
                </span>
                <PiSealCheckFill size={22} className="text-[#1d9bf0]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#282828] tracking-wider">
                  Valenzuela, Philippines
                </span>
              </div>
              <div className="flex items-center gap-3 mt-[2px]">
                <span className="text-sm text-[#282828] tracking-wide light-sweep">
                  Full Stack Developer and Certified GenAI Leader
                </span>
              </div>
              <div className="flex items-center gap-2 mt-[6px]">
                <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-transparent border border-[#141b23]/60 text-sm text-[#141b23] hover:bg-[#141b23] hover:text-white transition-all duration-300 rounded-md">
                  <FaGithub />
                  <div className="text-sm mt-[2px] tracking-wide">GitHub</div>
                </div>
                <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-transparent border border-[#0d66be]/60 text-sm text-[#0d66be] hover:bg-[#0d66be] hover:text-white transition-all duration-300 rounded-md">
                  <FaLinkedinIn />
                  <div className="text-sm mt-[2px] tracking-wide">LinkedIn</div>
                </div>
                <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-transparent border border-[#0a68ff]/60 text-sm text-[#0a68ff] hover:bg-[#0a68ff] hover:text-white transition-all duration-300 rounded-md">
                  <FaFacebook />
                  <div className="text-sm mt-[2px] tracking-wide">Facebook</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-[160px]">
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
                <div className="w-full h-full flex flex-col gap-4 px-4 py-[14px] border border-dashed border-gray-400 rounded-xl">
                  <div className="text-[#282828] text-sm tracking-wide leading-[1.860]">
                    With a knack for{" "}
                    <span className="tracking-wider font-[semi-bold]">
                      Web Dev, GenAI, CyberSec
                    </span>{" "}
                    and a track record of turning{" "}
                    <span className="tracking-wider font-[semi-bold]">
                      challenges
                    </span>{" "}
                    into{" "}
                    <span className="tracking-wider font-[semi-bold]">
                      results
                    </span>
                    , I’m eager to bring
                    <span className="tracking-wider font-[semi-bold]">
                      {" "}
                      innovative yet empathic
                    </span>{" "}
                    ideas to the company. I’m ready to transform a line of{" "}
                    <span className="tracking-wider font-[semi-bold]">
                      code
                    </span>{" "}
                    into a
                    <span className="tracking-wider font-[semi-bold]">
                      {" "}
                      robust infrastructure
                    </span>
                    .
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col gap-2 w-full h-full overflow-hidden rounded-xl">
                  <img
                    src="https://res.cloudinary.com/dni1vtbsv/image/upload/v1755158653/aboutmeexplosion.gif"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-100"></div>
        <Spacer size="small" />
        <Spacer size="xs" />
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
        <div className="flex flex-wrap items-center gap-2">
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
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default AboutMe;
