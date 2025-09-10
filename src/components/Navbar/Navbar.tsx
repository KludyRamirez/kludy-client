import { useState } from "react";
import {
  BsFolder2,
  BsHeptagon,
  BsJournal,
  BsLaptop,
  BsSuitcaseLg,
  BsTrophy,
} from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";

interface NavbarProps {
  isHeroSectionActive: boolean;
  isAboutMeSectionActive: boolean;
  isExperienceSectionActive: boolean;
  isProjectSectionActive: boolean;
  isBlogSectionActive: boolean;
  isCertificationSectionActive: boolean;
  isBadgeSectionActive: boolean;
  isTestimonialSectionActive: boolean;
  scrollToHero: () => void;
  scrollToBlog: () => void;
  scrollToExperience: () => void;
  scrollToProject: () => void;
  scrollToBadge: () => void;
  scrollToCertification: () => void;
  scrollToTestimonial: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isHeroSectionActive,
  isAboutMeSectionActive,
  isExperienceSectionActive,
  isProjectSectionActive,
  isBlogSectionActive,
  isCertificationSectionActive,
  isBadgeSectionActive,
  isTestimonialSectionActive,
  scrollToHero,
  scrollToBlog,
  scrollToExperience,
  scrollToProject,
  scrollToBadge,
  scrollToCertification,
  scrollToTestimonial,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleToggleWindow = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col z-30 fixed">
        <div
          className={`w-full flex justify-center items-center transition-all duration-200 ease-in backdrop-blur-lg ${
            isHeroSectionActive
              ? "text-white"
              : isAboutMeSectionActive
              ? "text-black"
              : isExperienceSectionActive
              ? "text-white"
              : isProjectSectionActive
              ? "text-black"
              : isBlogSectionActive
              ? "text-white"
              : isCertificationSectionActive
              ? "text-black"
              : isBadgeSectionActive
              ? "text-white"
              : isTestimonialSectionActive
              ? "text-white"
              : "text-neutral-500"
          }`}
        >
          <div
            className={`w-full flex justify-between items-center max-w-5xl h-full transition-all duration-200 ease-in ${
              isHeroSectionActive
                ? "pt-[1rem] pb-[1rem] px-[1rem]"
                : "pt-[1rem] pb-[1rem] px-[1rem]"
            }`}
          >
            <div
              className="cursor-pointer flex items-start items-center gap-3 group"
              onClick={() => {
                scrollToHero();
              }}
            >
              <span className="font-[semi-bold] text-sm tracking-widest">
                Kludy
              </span>
            </div>

            <div className="hidden lg:flex items-center -mr-2">
              <div
                className="cursor-pointer flex items-center group gap-2"
                onClick={() => {
                  scrollToExperience();
                }}
              >
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsSuitcaseLg size={16} className="-mt-[1px]" />
                </div>

                <span
                  className={`overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100
               transition-all duration-500 ease-in-out text-sm font-[semi-bold] tracking-widest group-hover:pr-2 ${
                 isExperienceSectionActive
                   ? "max-w-[120px] opacity-100 pr-2"
                   : "max-w-0 opacity-0 pr-0"
               }`}
                >
                  Experiences
                </span>
              </div>
              <div
                className="cursor-pointer flex items-center group gap-2"
                onClick={() => {
                  scrollToProject();
                }}
              >
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsFolder2 size={16} className="-mt-[1px]" />
                </div>

                <span
                  className={`overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100
               transition-all duration-500 ease-in-out text-sm font-[semi-bold] tracking-widest group-hover:pr-2 ${
                 isProjectSectionActive
                   ? "max-w-[120px] opacity-100 pr-2"
                   : "max-w-0 opacity-0 pr-0"
               }`}
                >
                  Projects
                </span>
              </div>
              <div
                className="cursor-pointer flex items-center group gap-2"
                onClick={() => {
                  scrollToBlog();
                }}
              >
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsLaptop size={16} className="-mt-[1px]" />
                </div>

                <span
                  className={`overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100
               transition-all duration-500 ease-in-out text-sm font-[semi-bold] tracking-widest group-hover:pr-2 ${
                 isBlogSectionActive
                   ? "max-w-[120px] opacity-100 pr-2"
                   : "max-w-0 opacity-0 pr-0"
               }`}
                >
                  Blogs
                </span>
              </div>
              <div
                className="cursor-pointer flex items-center group gap-2"
                onClick={() => {
                  scrollToCertification();
                }}
              >
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsTrophy size={16} className="-mt-[1px]" />
                </div>

                <span
                  className={`overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100
               transition-all duration-500 ease-in-out text-sm font-[semi-bold] tracking-widest group-hover:pr-2 ${
                 isCertificationSectionActive
                   ? "max-w-[120px] opacity-100 pr-2"
                   : "max-w-0 opacity-0 pr-0"
               }`}
                >
                  Certifications
                </span>
              </div>
              <div
                className="cursor-pointer flex items-center group gap-2"
                onClick={() => {
                  scrollToBadge();
                }}
              >
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsHeptagon size={16} className="-mt-[2px]" />
                </div>

                <span
                  className={`overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100
               transition-all duration-500 ease-in-out text-sm font-[semi-bold] tracking-widest group-hover:pr-2 ${
                 isBadgeSectionActive
                   ? "max-w-[120px] opacity-100 pr-2"
                   : "max-w-0 opacity-0 pr-0"
               }`}
                >
                  Badges
                </span>
              </div>
              <div
                className="cursor-pointer flex items-center group gap-2"
                onClick={() => {
                  scrollToTestimonial();
                }}
              >
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsJournal size={15} className="-mt-[1px]" />
                </div>

                <span
                  className={`overflow-hidden group-hover:max-w-[120px] group-hover:opacity-100
               transition-all duration-500 ease-in-out text-sm font-[semi-bold] tracking-widest group-hover:pr-2 ${
                 isTestimonialSectionActive
                   ? "max-w-[120px] opacity-100 pr-2"
                   : "max-w-0 opacity-0 pr-0"
               }`}
                >
                  Testimonials
                </span>
              </div>
            </div>

            <div
              onClick={handleToggleWindow}
              className="lg:hidden flex cursor-pointer relative w-[30px] flex-col justify-start items-end group gap-3"
            >
              <div className={`w-[30px] h-[1px] bg-white transform`}></div>
              <div className={`w-[18px] h-[1px] bg-white transform`}></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed right-0 bg-white border-l-[1px] border-gray-300 z-40 ${
          isOpen && !isClosing ? "animate-slideInFull md:animate-slideIn" : ""
        } ${isClosing ? "animate-slideOut" : ""}`}
      >
        {isOpen && !isClosing && (
          <>
            <div className="w-full p-6 relative flex justify-between items-center group">
              <span className="text-2xl text-gray-400 mt-2"></span>
              <HiOutlineXMark
                className="text-[#282828] cursor-pointer"
                size={30}
                onClick={handleToggleWindow}
              />
            </div>
            <div className="w-full flex flex-col text-3xl text-[#282828]">
              <span
                onClick={() => {
                  scrollToHero();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100 hover:border-t-[1px]"
              >
                Home
              </span>
              <span
                onClick={() => {
                  scrollToBlog();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100 hover:border-t-[1px]"
              >
                Blogs
              </span>
              <span
                onClick={() => {
                  scrollToExperience();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100"
              >
                Experiences
              </span>
              <span
                onClick={() => {
                  scrollToProject();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100"
              >
                Projects
              </span>
              <span
                onClick={() => {
                  scrollToBadge();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100"
              >
                Badges
              </span>
              <span
                onClick={() => {
                  scrollToCertification();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 hover:bg-gray-100 hover:border-b-[1px]"
              >
                FAQs
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
