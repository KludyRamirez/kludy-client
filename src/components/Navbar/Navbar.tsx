import { useState } from "react";
import {
  BsApp,
  BsAppIndicator,
  BsArchive,
  BsAward,
  BsBook,
  BsBox,
  BsCardText,
  BsCassette,
  BsChat,
  BsChatSquare,
  BsChatSquareText,
  BsCodeSquare,
  BsCoin,
  BsCollection,
  BsCupHot,
  BsDiamond,
  BsFloppy,
  BsFolder,
  BsFolder2,
  BsFolder2Open,
  BsHandThumbsUp,
  BsJournal,
  BsLaptop,
  BsLayers,
  BsMegaphone,
  BsPatchCheck,
  BsPentagon,
  BsPersonCheck,
  BsPuzzle,
  BsRss,
  BsShare,
  BsShield,
  BsStar,
  BsStars,
  BsSticky,
  BsSuitcaseLg,
  BsTerminal,
  BsTextarea,
  BsTextareaResize,
  BsTrophy,
  BsWindow,
} from "react-icons/bs";
import { PiCertificateThin } from "react-icons/pi";
import { HiOutlineXMark } from "react-icons/hi2";

interface NavbarProps {
  isHeroSectionActive: boolean;
  isAboutMeSectionActive: boolean;
  isExperienceSectionActive: boolean;
  isProjectSectionActive: boolean;
  isBlogSectionActive: boolean;
  isCertificationSectionActive: boolean;
  isBadgeSectionActive: boolean;
  scrollToHero: () => void;
  scrollToBlogs: () => void;
  scrollToExperiences: () => void;
  scrollToProjects: () => void;
  scrollToBadges: () => void;
  scrollToCertifications: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isHeroSectionActive,
  isAboutMeSectionActive,
  isExperienceSectionActive,
  isProjectSectionActive,
  isBlogSectionActive,
  isCertificationSectionActive,
  isBadgeSectionActive,
  scrollToHero,
  scrollToBlogs,
  scrollToExperiences,
  scrollToProjects,
  scrollToBadges,
  scrollToCertifications,
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
                  scrollToExperiences();
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
                  scrollToProjects();
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
                  scrollToBlogs();
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
                  scrollToCertifications();
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
                  scrollToBadges();
                }}
              >
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsApp size={16} className="-mt-[1px]" />
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
              <div className="cursor-pointer flex items-center group gap-2">
                <div className="flex items-center gap-2 p-2 rounded-[70px]">
                  <BsChatSquare size={16} className="-mt-[1px]" />
                </div>

                <span
                  className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[120px] group-hover:opacity-100
               transition-all duration-500 ease-in-out text-sm font-[semi-bold] tracking-widest tracking-wide"
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
                  scrollToBlogs();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100 hover:border-t-[1px]"
              >
                Blogs
              </span>
              <span
                onClick={() => {
                  scrollToExperiences();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100"
              >
                Experiences
              </span>
              <span
                onClick={() => {
                  scrollToProjects();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100"
              >
                Projects
              </span>
              <span
                onClick={() => {
                  scrollToBadges();
                  handleToggleWindow();
                }}
                className="cursor-pointer p-6 border-b-[1px] hover:bg-gray-100"
              >
                Badges
              </span>
              <span
                onClick={() => {
                  scrollToCertifications();
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
