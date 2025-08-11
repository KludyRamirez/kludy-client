import React, { useState, useEffect, useRef, FormEvent } from "react";
import { Home } from "../types/Home";
import Navbar from "../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import emailjs from "emailjs-com";
import growthops from "../assets/images/growthops.png";
import microsoft from "../assets/images/microsoft.svg";
import opswat from "../assets/images/opswat.svg";
import oracle from "../assets/images/oracle.svg";
import udemy from "../assets/images/udemy.svg";
import codecademy from "../assets/images/codecademy.svg";
import cisco from "../assets/images/cisco.svg";

import projectsGif from "../assets/gif/projects-gif.gif";

import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa6";

import { RxEnvelopeClosed } from "react-icons/rx";

import toast from "react-hot-toast";
import Project from "../components/Project/Project";
import Experience from "../components/Experience/Experience";
import Badge from "../components/Badge/Badge";
import AboutMe from "../components/AboutMe/AboutMe";
import Blog from "../components/Blog/Blog";
import Certification from "../components/Certification/Certification";
import Typewriter from "../utils/Typewriter";

const HomePage: React.FC<Home> = () => {
  const [isHeroSectionActive, setIsHeroSectionActive] = useState(false);

  const heroSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroSectionActive(entry.isIntersecting);
      },
      { threshold: 0.9 }
    );

    const heroSection = heroSectionRef.current;

    if (heroSection) {
      heroObserver.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        heroObserver.unobserve(heroSection);
      }
    };
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ps65lj",
        "template_gy0m0sm",
        e.currentTarget,
        "PxOfC-PYxo4STwqcF"
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

  const blogsRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);
  const certificationRef = useRef<HTMLDivElement | null>(null);

  const scrollToHero = () => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBlogs = () => {
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperiences = () => {
    if (experiencesRef.current) {
      experiencesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBadges = () => {
    if (badgesRef.current) {
      badgesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCertification = () => {
    if (certificationRef.current) {
      certificationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        isHeroSectionActive={isHeroSectionActive}
        scrollToHero={scrollToHero}
        scrollToBlogs={scrollToBlogs}
        scrollToExperiences={scrollToExperiences}
        scrollToProjects={scrollToProjects}
        scrollToBadges={scrollToBadges}
        scrollToCertification={scrollToCertification}
      />
      <section id="hero" className="h-screen relative" ref={heroSectionRef}>
        <div className="max-w-5xl px-[1.25rem] mx-auto relative z-20">
          <div className="spacer-large"></div>
          <div className="spacer-medium"></div>
          <div className="hidden lg:block spacer-medium"></div>
          <div className="hidden lg:block spacer-medium"></div>
          <div className="hidden lg:block spacer-small"></div>
          <div className="spacer-small"></div>

          <div className="text-7xl leading-[1.275]">
            <div className="flex flex-col justify-center items-center text-white tracking-wide">
              <div className="text-center font-[semi-bold]">
                <span className="text-[#919191] font-[regular]">I'm</span>{" "}
                <span>Kludy</span>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 md:gap-4 text-[#919191] relative tracking-wide text-white">
                <Typewriter words={["Frontend", "Backend"]} />
                <div className="text-[#919191]">and</div>
                <div className="font-[semi-bold] text-white"> GenAI</div>
                <Typewriter words={["Leader", "Oracle", "Builder", "Nerd"]} />
              </div>
              <div className="spacer-small"></div>
            </div>
          </div>
          <div className="spacer-small"></div>
          <div className="w-[100%] flex justify-center gap-8">
            <div
              className="cursor-pointer py-[0.70rem] px-[1.75rem] text-md bg-gray-200 border border-white hover:bg-white rounded-lg tracking-wide"
              onClick={() => {
                scrollToCertification();
              }}
            >
              Recruit me
            </div>
            <div className="cursor-pointer py-[0.70rem] px-[1.75rem] text-md text-white bg-white/10 border border-white/20 hover:bg-white/30 rounded-lg tracking-wide">
              Download CV
            </div>
          </div>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>

          <div className="text-md text-center text-white font-[extra-light] tracking-wide relative">
            These are the organizations and institutions that have issued my
            certifications.
          </div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-slate-100/20"></div>
          <div className="spacer-small"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="84"
            autoplay={{
              delay: 1400,
              disableOnInteraction: true,
            }}
            loop={true}
            breakpoints={{
              639: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              1023: {
                slidesPerView: 3,
              },
              1279: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="hero-swiper"
          >
            <SwiperSlide>
              <img
                src={oracle}
                className="filter brightness-200 contrast-125"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={microsoft}
                className="filter brightness-200 contrast-125"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cisco} className="filter brightness-200 contrast-125" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={opswat}
                className="filter brightness-200 contrast-125"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={udemy} className="filter brightness-200 contrast-125" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={growthops}
                className="filter brightness-200 contrast-125 h-[50px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={codecademy}
                className="filter brightness-200 contrast-125"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={opswat}
                className="filter brightness-200 contrast-125"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <AboutMe />
      <Experience experiencesRef={experiencesRef} />
      <Project projectsRef={projectsRef} projectsGif={projectsGif} />
      <Blog blogsRef={blogsRef} />
      <Certification certificationRef={certificationRef} />
      <Badge badgesRef={badgesRef} />
      <footer
        id="footer"
        className="bg-white relative flex flex-col items-center"
        ref={certificationRef}
      >
        <div className="w-full lg:max-w-5xl px-[1.25rem] flex flex-col items-center relative">
          <div className="w-full lg:w-[45%] mx-auto relative z-20">
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
                    className="w-full h-[120px] border-[1px] border-gray-300 p-4 focus:border-none bg-[#fefefe]"
                  />
                </div>
                <div className="spacer-small"></div>
                <button
                  type="submit"
                  className="w-full cursor-pointer py-[0.75rem] w-full footer-btn"
                >
                  Recruit me
                </button>
              </form>
              <div className="spacer-small"></div>
              <div className="spacer-medium"></div>
              <div className="flex justify-center items-center gap-5">
                <FaGithub size={32} className="cursor-pointer text-gray-900" />
                <FaLinkedinIn
                  size={32}
                  className="cursor-pointer text-gray-900"
                />
                <RxEnvelopeClosed
                  size={32}
                  className="cursor-pointer text-gray-900"
                />
                <FaFacebook
                  size={32}
                  className="cursor-pointer text-gray-900"
                />
              </div>
            </div>
            <div className="spacer-small"></div>
            <div className="spacer-medium"></div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#e5e7eb]"></div>
        <div className="spacer-xs"></div>
        <div className="spacer-small"></div>
        <div className="w-full max-w-5xl px-[1.25rem] flex flex-wrap justify-center md:justify-between items-center gap-3">
          <div className="flex justify-end items-center gap-2">
            <FaRegCopyright size={14} className="-mt-1" />
            <span className="tracking-wider text-[14px]">Kludy</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3 -mt-1">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300"></div>{" "}
              <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>{" "}
            </div>
            <span className="tracking-wider text-[14px]">
              No issues detected
            </span>
          </div>
        </div>
        <div className="spacer-xs"></div>
        <div className="spacer-small"></div>
      </footer>
    </>
  );
};

export default HomePage;
