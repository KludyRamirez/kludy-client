import React from 'react';
import Spacer from '../../utils/Spacer';
import profilePic from '../../assets/images/profilepic.svg';
import { PiSealCheckFill } from 'react-icons/pi';
import { TiLocation } from 'react-icons/ti';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { RxEnvelopeClosed } from 'react-icons/rx';

const AboutMe: React.FC = () => {
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
              <TiLocation size={22} className="text-[#282828] -mt-[8px]" />
              <span className="font-[extra-light] text-[14px] text-[#282828] tracking-wide">
                Valenzuela, Philippines
              </span>
            </div>
            <div className="flex items-center gap-3 mt-[2px]">
              <span className="text-sm text-[#282828] tracking-wide">
                Full Stack Developer and Certified GenAI Leader
              </span>
            </div>
            <div className="flex items-center gap-4 mt-[2px]">
              <FaGithub
                size={32}
                className="cursor-pointer text-gray-700 hover:text-black"
              />
              <FaLinkedinIn
                size={32}
                className="cursor-pointer text-gray-700 hover:text-black"
              />
              <RxEnvelopeClosed
                size={32}
                className="cursor-pointer text-gray-700 hover:text-black"
              />
              <FaFacebook
                size={32}
                className="cursor-pointer text-gray-700 hover:text-black"
              />
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
        <div className="flex items-center gap-2"></div>
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default AboutMe;
