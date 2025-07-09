import { useState } from 'react';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { HiOutlineXMark } from 'react-icons/hi2';

interface NavbarProps {
  isHeroSectionActive: boolean;
  scrollToHero: () => void;
  scrollToBlogs: () => void;
  scrollToExperiences: () => void;
  scrollToProjects: () => void;
  scrollToBadges: () => void;
  scrollToFaqs: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isHeroSectionActive,
  scrollToHero,
  scrollToBlogs,
  scrollToExperiences,
  scrollToProjects,
  scrollToBadges,
  scrollToFaqs,
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
        <div className="w-full flex justify-center py-4 bg-yellow-300">
          <div className="max-w-5xl w-full h-full px-[1rem] relative flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap items-center gap-2">
              <FaTriangleExclamation size={18} className="-mt-1" />
              <span className="font-[semi-bold]">
                This website is currently under construction.
              </span>
            </div>
            <div className="font-[semi-bold]">
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              })}
            </div>
          </div>
        </div>
        <div
          className={`w-full flex justify-center items-center transition-all duration-200 ease-in ${
            isHeroSectionActive
              ? 'bg-transparent text-[#efefef]'
              : 'bg-black shadow-lg text-white'
          }`}
        >
          <div
            className={`w-full flex justify-between items-center max-w-5xl h-full transition-all duration-200 ease-in ${
              isHeroSectionActive
                ? 'pt-[1.75rem] pb-[1rem] px-[1.25rem]'
                : 'pt-[1rem] pb-[1rem] px-[1rem]'
            }`}
          >
            <span className="text-[20px] font-[semi-bold] tracking-wide">
              Kludy
            </span>

            <div
              onClick={handleToggleWindow}
              className="flex cursor-pointer relative w-[30px] flex-col justify-start items-end group gap-3"
            >
              <div className={`w-[30px] h-[1px] bg-white transform`}></div>
              <div className={`w-[18px] h-[1px] bg-white transform`}></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed right-0 bg-white border-l-[1px] border-gray-300 z-40 ${
          isOpen && !isClosing ? 'animate-slideInFull lg:animate-slideIn' : ''
        } ${isClosing ? 'animate-slideOut' : ''}`}
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
                  scrollToFaqs();
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
