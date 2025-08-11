import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

interface NavbarProps {
  isHeroSectionActive: boolean;
  scrollToHero: () => void;
  scrollToBlogs: () => void;
  scrollToExperiences: () => void;
  scrollToProjects: () => void;
  scrollToBadges: () => void;
  scrollToCertification: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isHeroSectionActive,
  scrollToHero,
  scrollToBlogs,
  scrollToExperiences,
  scrollToProjects,
  scrollToBadges,
  scrollToCertification,
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
          className={`w-full flex justify-center items-center transition-all duration-200 ease-in ${
            isHeroSectionActive
              ? "bg-transparent text-[#efefef]"
              : "bg-black shadow-lg text-white"
          }`}
        >
          <div
            className={`w-full flex justify-between items-center max-w-5xl h-full transition-all duration-200 ease-in ${
              isHeroSectionActive
                ? "pt-[1.75rem] pb-[1rem] px-[1.25rem]"
                : "pt-[1rem] pb-[1rem] px-[1rem]"
            }`}
          >
            <div
              className="cursor-pointer flex flex-col items-start py-1 group"
              onClick={() => {
                scrollToHero();
              }}
            >
              <span className="text-sm tracking-widest">Kludy</span>
              <div className="w-[0%] group-hover:w-full group-hover:bg-white h-[1px] bg-slate-400 transition-all duration-[300ms] mt-[1px]"></div>
            </div>

            <div className="hidden lg:flex items-center">
              <div
                className="cursor-pointer flex flex-col items-end py-1 px-3 group"
                onClick={() => {
                  scrollToExperiences();
                }}
              >
                <span className="text-sm tracking-wide">Experiences</span>
                <div className="w-[0%] group-hover:w-full group-hover:bg-white h-[1px] bg-neutral-400 transition-all duration-[300ms] mt-[1px]"></div>
              </div>
              <div className="cursor-pointer flex flex-col items-end py-1 px-3 group">
                <span className="text-sm tracking-wide">Projects</span>
                <div className="w-[0%] group-hover:w-full group-hover:bg-white h-[1px] bg-neutral-400 transition-all duration-[300ms] mt-[1px]"></div>
              </div>
              <div className="cursor-pointer flex flex-col items-end py-1 px-3 group">
                <span className="text-sm tracking-wide">Badges</span>
                <div className="w-[0%] group-hover:w-full group-hover:bg-white h-[1px] bg-neutral-400 transition-all duration-[300ms] mt-[1px]"></div>
              </div>
              <div
                onClick={() => {
                  scrollToCertification();
                }}
                className="cursor-pointer flex flex-col items-end py-1 px-3 group"
              >
                <span className="text-sm tracking-wide">Certifications</span>
                <div className="w-[0%] group-hover:w-full group-hover:bg-white h-[1px] bg-neutral-400 transition-all duration-[300ms] mt-[1px]"></div>
              </div>
              <div
                className="cursor-pointer flex flex-col items-end py-1 px-3 group"
                onClick={() => {
                  scrollToBlogs();
                }}
              >
                <span className="text-sm tracking-wide">Blogs</span>
                <div className="w-[0%] group-hover:w-full group-hover:bg-white h-[1px] bg-neutral-400 transition-all duration-[300ms] mt-[1px]"></div>
              </div>
              <div className="cursor-pointer flex flex-col items-end py-1 pl-3 group">
                <span className="text-sm tracking-wide">Testimonials</span>
                <div className="w-[0%] group-hover:w-full group-hover:bg-white h-[1px] bg-neutral-400 transition-all duration-[300ms] mt-[1px]"></div>
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
