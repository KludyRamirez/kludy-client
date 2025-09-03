import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Home } from '../types/Home';
import Navbar from '../components/Navbar/Navbar';
import 'swiper/swiper-bundle.css';
import emailjs from 'emailjs-com';

import projectsGif from '../assets/gif/projects-gif.gif';

import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { RxEnvelopeClosed } from 'react-icons/rx';

import toast from 'react-hot-toast';
import Project from '../components/Project/Project';
import Experience from '../components/Experience/Experience';
import Badge from '../components/Badge/Badge';
import AboutMe from '../components/AboutMe/AboutMe';
import Blog from '../components/Blog/Blog';
import Certification from '../components/Certification/Certification';
import Typewriter from '../utils/Typewriter';
import { BsChevronUp } from 'react-icons/bs';
import Spacer from '../utils/Spacer';

const HomePage: React.FC<Home> = () => {
  const [isHeroSectionActive, setIsHeroSectionActive] = useState(false);
  const [isAboutMeSectionActive, setIsAboutMeSectionActive] = useState(false);
  const [isExperienceSectionActive, setIsExperienceSectionActive] =
    useState(false);
  const [isProjectSectionActive, setIsProjectSectionActive] = useState(false);
  const [isBlogSectionActive, setIsBlogSectionActive] = useState(false);
  const [isCertificationSectionActive, setIsCertificationSectionActive] =
    useState(false);
  const [isBadgeSectionActive, setIsBadgeSectionActive] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);
  const certificationRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const aboutMeObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAboutMeSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const experienceObserver = new IntersectionObserver(
      ([entry]) => {
        setIsExperienceSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const projectObserver = new IntersectionObserver(
      ([entry]) => {
        setIsProjectSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const blogObserver = new IntersectionObserver(
      ([entry]) => {
        setIsBlogSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const certificationObserver = new IntersectionObserver(
      ([entry]) => {
        setIsCertificationSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const badgeObserver = new IntersectionObserver(
      ([entry]) => {
        setIsBadgeSectionActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const heroSection = heroRef.current;
    const aboutMeSection = aboutMeRef.current;
    const experienceSection = experienceRef.current;
    const projectSection = projectRef.current;
    const blogSection = blogRef.current;
    const certificationSection = certificationRef.current;
    const badgeSection = badgeRef.current;

    if (heroSection) {
      heroObserver.observe(heroSection);
    }
    if (aboutMeSection) {
      aboutMeObserver.observe(aboutMeSection);
    }
    if (experienceSection) {
      experienceObserver.observe(experienceSection);
    }
    if (projectSection) {
      projectObserver.observe(projectSection);
    }
    if (blogSection) {
      blogObserver.observe(blogSection);
    }
    if (certificationSection) {
      certificationObserver.observe(certificationSection);
    }
    if (badgeSection) {
      badgeObserver.observe(badgeSection);
    }

    return () => {
      if (heroSection) {
        heroObserver.unobserve(heroSection);
      }
      if (aboutMeSection) {
        aboutMeObserver.unobserve(aboutMeSection);
      }
      if (experienceSection) {
        experienceObserver.unobserve(experienceSection);
      }
      if (projectSection) {
        projectObserver.unobserve(projectSection);
      }
      if (blogSection) {
        blogObserver.unobserve(blogSection);
      }
      if (certificationSection) {
        certificationObserver.unobserve(certificationSection);
      }
      if (badgeSection) {
        badgeObserver.unobserve(badgeSection);
      }
    };
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7ps65lj',
        'template_gy0m0sm',
        e.currentTarget,
        'PxOfC-PYxo4STwqcF'
      )
      .then(
        (result) => {
          toast.success(result.text);
          e.currentTarget.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const scrollToAboutMe = () => {
  //   if (aboutMeRef.current) {
  //     aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToExperiences = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBlogs = () => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCertifications = () => {
    if (certificationRef.current) {
      certificationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBadges = () => {
    if (badgeRef.current) {
      badgeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    {
      name: 'AIA',
      logo: 'https://res.cloudinary.com/dni1vtbsv/image/upload/v1751014508/aia-ph-logo.png',
    },
    {
      name: 'GrowthOps',
      logo: 'https://res.cloudinary.com/dni1vtbsv/image/upload/v1755246559/go-logo.png',
    },
    {
      name: 'APD',
      logo: 'https://res.cloudinary.com/dni1vtbsv/image/upload/v1755247013/apd-logo-white.png',
    },
    {
      name: 'GO Asia',
      logo: 'https://res.cloudinary.com/dni1vtbsv/image/upload/v1755246691/go-asia.png',
    },
    {
      name: 'BPI',
      logo: 'https://res.cloudinary.com/dni1vtbsv/image/upload/v1755242964/bpi-logo.png',
    },
    {
      name: 'Flexicon Inc.',
      logo: 'https://res.cloudinary.com/dni1vtbsv/image/upload/v1755248176/flexicon-hero-logo-white.png',
    },
  ];

  return (
    <>
      <Navbar
        isHeroSectionActive={isHeroSectionActive}
        isAboutMeSectionActive={isAboutMeSectionActive}
        isExperienceSectionActive={isExperienceSectionActive}
        isProjectSectionActive={isProjectSectionActive}
        isBlogSectionActive={isBlogSectionActive}
        isCertificationSectionActive={isCertificationSectionActive}
        isBadgeSectionActive={isBadgeSectionActive}
        scrollToHero={scrollToHero}
        scrollToBlogs={scrollToBlogs}
        scrollToExperiences={scrollToExperiences}
        scrollToProjects={scrollToProjects}
        scrollToBadges={scrollToBadges}
        scrollToCertifications={scrollToCertifications}
      />
      <section id="hero" className="lg:h-screen relative" ref={heroRef}>
        <div className="max-w-5xl px-[1.25rem] mx-auto relative z-20">
          <div className="spacer-large"></div>
          <div className="spacer-medium"></div>
          <div className="hidden lg:block spacer-medium"></div>
          <div className="hidden lg:block spacer-medium"></div>
          <div className="hidden lg:block spacer-small"></div>

          <div className="text-7xl leading-[1.275]">
            <div className="flex flex-col justify-center items-center text-white tracking-wide">
              <div className="text-center font-[semi-bold]">
                <span className="text-[#919191] font-[regular]">'Zup,</span>{' '}
                <span className="text-[#919191] font-[regular]">I'm</span>{' '}
                <span>Kludy</span>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 md:gap-4 text-[#919191] relative tracking-wide text-white">
                <Typewriter words={['Frontend', 'Backend']} />
                <div className="text-[#919191]">and</div>
                <div className="font-[semi-bold] text-white"> GenAI</div>
                <Typewriter words={['Leader', 'Oracle', 'Builder', 'Nerd']} />
              </div>
              <div className="spacer-small"></div>
            </div>
          </div>
          <div className="spacer-small"></div>
          <div className="w-[100%] flex justify-center gap-8">
            <div
              className="cursor-pointer py-[0.70rem] px-[1.75rem] text-md bg-gray-200 border border-white hover:bg-white rounded-lg tracking-wide"
              onClick={() => {
                scrollToCertifications();
              }}
            >
              Recruit me
            </div>
            <a href="/Ramirez-Kludy-CV.pdf" download="Ramirez-Kludy-CV">
              <div className="cursor-pointer py-[0.70rem] px-[1.75rem] text-md text-white bg-neutral-500/10 border border-white/20 hover:bg-white/20 rounded-lg tracking-wide">
                Download CV
              </div>
            </a>
          </div>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-xs"></div>
          <div className="text-sm text-center text-white font-[extra-light] tracking-wider relative">
            These are the organizations I have worked with over the past years.
          </div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="relative w-full overflow-hidden">
            <div className="marquee">
              <div className="marquee-inner">
                {items.map((item, i) => (
                  <div key={`a-${i}`} className="marquee-item">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-[52px] max-h-[52px] filter brightness-125 contrast-200"
                    />
                    <span className="ml-4 text-white text-2xl font-[semi-bold]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="marquee-inner">
                {items.map((item, i) => (
                  <div key={`b-${i}`} className="marquee-item">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-[52px] max-h-[52px]"
                    />
                    <span className="ml-4 text-white text-2xl font-[semi-bold]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Spacer size="large" />
      </section>
      <AboutMe aboutMeRef={aboutMeRef} />
      <Experience experienceRef={experienceRef} />
      <Project projectRef={projectRef} projectsGif={projectsGif} />
      <Blog blogRef={blogRef} />
      <Certification certificationRef={certificationRef} />
      <Badge badgeRef={badgeRef} />
      <footer
        id="footer"
        className="bg-white relative flex flex-col items-center"
      >
        <div className="w-full lg:max-w-5xl px-[1.25rem] flex flex-col items-center relative">
          <div className="w-full lg:w-[45%] mx-auto relative z-20">
            <div className="spacer-xs"></div>
            <div className="spacer-small"></div>
            <div className="spacer-medium"></div>
            <div className="w-full flex flex-col justify-start items-center">
              <span className="text-[44px] font-[semi-bold]">
                Let's Connect
              </span>
              <div className="spacer-medium"></div>
              <form className="w-full" onSubmit={sendEmail}>
                <div className="w-full flex justify-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full h-[50px] border-[1px] border-gray-300 px-4 focus:border-none bg-[#fefefe]"
                  />
                </div>
                <div className="spacer-small"></div>
                <div className="w-full flex justify-center">
                  <textarea
                    name="message"
                    placeholder="Write me some message..."
                    className="w-full h-[120px] border-[1px] border-gray-300 p-4 focus:border-none bg-[#fefefe] rounded-lg"
                  />
                </div>
                <div className="spacer-small"></div>
                <button
                  type="submit"
                  className="w-full cursor-pointer py-[0.75rem] w-full bg-black/90 text-white border border-black/80 hover:bg-black transition-all ease-in duration-300"
                >
                  Recruit me
                </button>
              </form>
              <div className="spacer-xs"></div>
              <div className="spacer-medium"></div>
            </div>
            <div className="spacer-medium"></div>
          </div>
        </div>
        <div className="spacer-xs"></div>
        <div className="spacer-small"></div>
        <div className="w-full max-w-5xl px-[1.25rem] flex flex-wrap justify-center md:justify-between items-center gap-3">
          <div className="flex items-center gap-3 px-3 py-2 border border-gray-300 rounded-lg">
            <div className="relative flex h-3 w-3">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></div>{' '}
              <div className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></div>{' '}
            </div>
            <span className="tracking-wide text-sm">Normal</span>
          </div>
          <div className="flex gap-2 items-center group">
            <div className="flex gap-2 items-center py-2 pl-3 pr-4 border border-gray-300 rounded-lg text-sm hover:bg-black hover:text-white hover:border-black cursor-pointer tracking-wide transition-all ease-in duration-300">
              <BsChevronUp size={16} className="ml-[2px] -mt-[1px]" />
              <span className="pl-[3px]">Back to top</span>
            </div>
          </div>
        </div>
        <div className="spacer-xs"></div>
        <div className="spacer-small"></div>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <div className="spacer-xs"></div>
        <div className="spacer-small"></div>
        <div className="w-full max-w-5xl px-[1.25rem] flex flex-wrap justify-center md:justify-between items-center gap-3">
          <div className="flex justify-end items-center gap-2">
            <span className="tracking-widest text-[14px]">
              2025 • All rights reserved
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center gap-4">
              <FaGithub size={28} className="cursor-pointer text-black" />
              <FaLinkedinIn size={28} className="cursor-pointer text-black" />
              <RxEnvelopeClosed
                size={28}
                className="cursor-pointer text-black"
              />
              <FaFacebook size={28} className="cursor-pointer text-black" />
            </div>
          </div>
        </div>
        <div className="spacer-xs"></div>
        <div className="spacer-medium"></div>
      </footer>
    </>
  );
};

export default HomePage;
