import React from "react";
import Spacer from "../../utils/Spacer";
import profilePic from "../../assets/images/profilepic.svg";
import { PiSealCheckFill } from "react-icons/pi";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import { RxEnvelopeClosed } from "react-icons/rx";
import AboutMeData from "../../assets/data/AboutMe.json";
import { AboutMe as AboutMeType } from "../../types/AboutMe";
import Technology from "./Technology";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const AboutMe: React.FC = () => {
  const aboutMeInfo: AboutMeType[] = AboutMeData;
  const { frontend, backend, devops, database, cloud } = aboutMeInfo[0];

  return (
    <section id="aboutme" className="bg-white relative">
      <div className="max-w-5xl px-[1.25rem] mx-auto relative overflow-hidden">
        <Spacer size="large" />
        <div className="text-[#282828]">About me</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="flex flex-wrap justify-start items-center gap-8">
          <img
            src={profilePic}
            className="w-[160px] h-[160px] shadow-lg rounded-[50%]"
          ></img>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-[semi-bold] text-2xl text-[#282828]">
                Kludy Ramirez
              </span>
              <PiSealCheckFill size={22} className="text-[#1d9bf0] -mt-[2px]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#282828] tracking-wider">
                Valenzuela, Philippines
              </span>
            </div>
            <div className="flex items-center gap-3 mt-[2px]">
              <span className="text-sm text-[#282828] tracking-wide black-sweep">
                Full Stack Developer and Certified GenAI Leader
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-[#141b23] border border-[#141b23] text-[14px] text-white hover:border-gray-300 hover:bg-white hover:text-black group-hover:rounded-[6px] transition-all duration-300 rounded-md">
                <FaGithub />
                <div className="text-[14px] mt-[2px] tracking-wide">GitHub</div>
              </div>
              <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-[#0d66be] border border-[#0d66be] text-[14px] text-white hover:border-gray-300 hover:bg-white hover:text-black group-hover:rounded-[6px] transition-all duration-300 rounded-md">
                <FaLinkedinIn />
                <div className="text-[14px] mt-[2px] tracking-wide">
                  LinkedIn
                </div>
              </div>
              <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 bg-[#0a68ff] border border-[#0a68ff] text-[14px] text-white hover:border-gray-300 hover:bg-white hover:text-black group-hover:rounded-[6px] transition-all duration-300 rounded-md">
                <FaFacebook />
                <div className="text-[14px] mt-[2px] tracking-wide">
                  Facebook
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
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
