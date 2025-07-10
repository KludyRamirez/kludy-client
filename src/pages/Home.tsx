import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Home } from '../types/Home';
import Navbar from '../components/Navbar/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import emailjs from 'emailjs-com';
import growthops from '../assets/images/growthops.png';
import microsoft from '../assets/images/microsoft.svg';
import opswat from '../assets/images/opswat.svg';
import oracle from '../assets/images/oracle.svg';
import udemy from '../assets/images/udemy.svg';
import codecademy from '../assets/images/codecademy.svg';
import cisco from '../assets/images/cisco.svg';

import projectsGif from '../assets/gif/projects-gif.gif';

import StarsCanvas from '../components/Background/Stars';

import {
  FaFacebook,
  FaGithub,
  FaHatWizard,
  FaLinkedinIn,
  FaRegCopyright,
} from 'react-icons/fa6';

import { RxEnvelopeClosed } from 'react-icons/rx';

import toast from 'react-hot-toast';
import Project from '../components/Project/Project';
import Experience from '../components/Experience/Experience';
import Badge from '../components/Badge/Badge';
import AboutMe from '../components/AboutMe/AboutMe';
import Blog from '../components/Blog/Blog';

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

  const blogsRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const badgesRef = useRef<HTMLDivElement | null>(null);
  const faqsRef = useRef<HTMLDivElement | null>(null);

  const scrollToHero = () => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBlogs = () => {
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperiences = () => {
    if (experiencesRef.current) {
      experiencesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBadges = () => {
    if (badgesRef.current) {
      badgesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFaqs = () => {
    if (faqsRef.current) {
      faqsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <StarsCanvas />
      <Navbar
        isHeroSectionActive={isHeroSectionActive}
        scrollToHero={scrollToHero}
        scrollToBlogs={scrollToBlogs}
        scrollToExperiences={scrollToExperiences}
        scrollToProjects={scrollToProjects}
        scrollToBadges={scrollToBadges}
        scrollToFaqs={scrollToFaqs}
      />
      <section id="hero" className="relative hero-bg" ref={heroSectionRef}>
        <div className="max-w-5xl px-[1.25rem] mx-auto relative z-20">
          <div className="spacer-large"></div>
          <div className="spacer-large"></div>
          <div className="text-[3.525rem] leading-[1.275]">
            <div className="flex flex-col justify-center items-center text-white">
              <div className="text-center font-[semi-bold]">
                'Zup,{' '}
                <span className="text-[#919191] font-[regular]">I am</span>{' '}
                Kludy
              </div>
              <div className="text-center text-[#919191] relative">
                <span className="font-[semi-bold]">Software</span>{' '}
                <span className="font-[semi-bold] text-white">Engineer</span>{' '}
                <span className="font-[regular]">and</span>{' '}
                <span className="font-[semi-bold]">GenAI</span>{' '}
                <span className="font-[semi-bold] text-white relative z-20">
                  Prof
                </span>
              </div>
              <div className="spacer-xs"></div>
              <div className="spacer-small"></div>
              <div className="flex justify-center items-center gap-2">
                <div className="text-[16px] text-center font-[semi-bold] tracking-wide">
                  <span className="font-[regular] text-[#919191]">Also a</span>
                  {'  '}
                  Cybersecurity{'  '}
                  <span className="font-[regular] text-[#919191]">Nerd</span>
                </div>
                <FaHatWizard size={16} className="-mt-[6px]" />
              </div>
            </div>
          </div>
          <div className="spacer-medium"></div>
          <div className="w-[100%] flex justify-center gap-8">
            <div className="cursor-pointer py-[0.60rem] px-[1.75rem] text-[14px] bg-gray-200 border border-white hover:bg-white rounded-[42px] tracking-wider">
              Recruit me
            </div>
            <div className="cursor-pointer py-[0.60rem] px-[1.75rem] text-[14px] text-white bg-white/10 border border-white/20 hover:bg-white/30 rounded-[42px] tracking-wider">
              Download CV
            </div>
          </div>
          <div className="spacer-large"></div>
          <div className="spacer-small"></div>
          <div className="text-center text-white font-[extra-light] tracking-wider relative">
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
        <div className="spacer-large"></div>
      </section>

      {/* <section id="blogs" className="bg-white relative z-20" ref={blogsRef}>
        <div className="max-w-5xl px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#282828]">Blogs</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#282828] leading-[1.275]">
            <span>Our field evolves rapidly</span>
            <br />
            <span className="font-[regular] black-sweep">
              These blogs help you stay ahead
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#282828]">Recent blogs</h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="20"
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
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1400,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide>
              <Loader />
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.wired.com/story/most-dangerous-hackers-youve-never-heard-of/"
                target="_blank"
              >
                <div className="w-full h-full group">
                  <img src={mdhb} className="cursor-pointer aspect-[1/1]" />
                  <div className="spacer-small"></div>
                  <div className="flex gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                    <span>April 14, 2025</span>
                    <span>|</span>
                    <span>wired.com</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#282828] group-hover:underline">
                    The Most Dangerous Hackers You’ve Never Heard Of
                  </div>
                  <div className="spacer-small"></div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#282828] text-[14px] text-gray-800 gap-2 border-[1px] border-gray-200 group-hover:border-[#282828]">
                      <FaShieldHalved
                        size={14}
                        className="group-hover:text-white"
                      />
                      <div className="mt-[2px] tracking-wide group-hover:text-white">
                        Security
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.wired.com/frontiers-of-computing/"
                target="_blank"
              >
                <div className="w-full h-full group">
                  <img src={htgc} className="cursor-pointer aspect-[3/2]" />
                  <div className="spacer-small"></div>
                  <div className="flex gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                    <span>April 14, 2025</span>
                    <span>|</span>
                    <span>wired.com</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#282828] group-hover:underline">
                    How to Get Computers—Before Computers Get You
                  </div>
                  <div className="spacer-small"></div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#282828] text-[14px] text-gray-800 gap-2 border-[1px] border-gray-200 group-hover:border-[#282828]">
                      <FaScreenpal
                        size={14}
                        className="group-hover:text-white"
                      />
                      <div className="mt-[2px] tracking-wide group-hover:text-white">
                        IoT
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.wired.com/story/cve-program-cisa-funding-chaos/"
                target="_blank"
              >
                <div className="w-full h-full group">
                  <img src={skull} className="cursor-pointer aspect-[2/3]" />
                  <div className="spacer-small"></div>
                  <div className="flex gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                    <span>April 14, 2025</span>
                    <span>|</span>
                    <span>wired.com</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#282828] group-hover:underline">
                    ‘Stupid and Dangerous’: CISA Funding Chaos Threatens
                    Essential Cybersecurity Program
                  </div>
                  <div className="spacer-small"></div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#282828] text-[14px] text-gray-800 gap-2 border-[1px] border-gray-200 group-hover:border-[#282828]">
                      <FaShieldHalved
                        size={14}
                        className="group-hover:text-white"
                      />
                      <div className="mt-[2px] tracking-wide group-hover:text-white">
                        Security
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.wired.com/story/gmail-end-to-end-encryption-scams/"
                target="_blank"
              >
                <div className="w-full h-full group">
                  <img src={gnem} className="cursor-pointer aspect-[3/2]" />
                  <div className="spacer-small"></div>
                  <div className="flex gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                    <span>April 14, 2025</span>
                    <span>|</span>
                    <span>wired.com</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#282828] group-hover:underline">
                    Gmail’s New Encrypted Messages Feature Opens a Door for
                    Scams
                  </div>
                  <div className="spacer-small"></div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#282828] text-[14px] text-gray-800 gap-2 border-[1px] border-gray-200 group-hover:border-[#282828]">
                      <FaShieldHalved
                        size={14}
                        className="group-hover:text-white"
                      />
                      <div className="mt-[2px] tracking-wide group-hover:text-white">
                        Security
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://www.wired.com/story/florida-man-enters-the-encryption-wars/"
                target="_blank"
              >
                <div className="w-full h-full group">
                  <img src={fme} className="cursor-pointer aspect-[1/1]" />
                  <div className="spacer-small"></div>
                  <div className="flex gap-2 text-[.850rem] text-gray-500 font-[extra-light]">
                    <span>April 14, 2025</span>
                    <span>|</span>
                    <span>wired.com</span>
                  </div>
                  <div className="spacer-xs"></div>
                  <div className="text-[#282828] group-hover:underline">
                    Florida Man Enters the Encryption Wars
                  </div>
                  <div className="spacer-small"></div>
                  <div className="w-full flex flex-wrap justify-start items-start gap-2">
                    <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-gray-100 group-hover:bg-[#282828] text-[14px] text-gray-800 gap-2 border-[1px] border-gray-200 group-hover:border-[#282828]">
                      <FaShieldHalved
                        size={14}
                        className="group-hover:text-white"
                      />
                      <div className="mt-[2px] tracking-wide group-hover:text-white">
                        Security
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
          <div className="spacer-large"></div>
        </div>
      </section> */}
      <AboutMe />
      <Experience experiencesRef={experiencesRef} />
      <Project projectsRef={projectsRef} projectsGif={projectsGif} />
      <Blog blogsRef={blogsRef} />
      <Badge badgesRef={badgesRef} />

      {/* <section id="testimonials" className="relative">
        <img className="absolute bottom-0 w-full" src={dotunder} />
        <div className="w-[86.8125rem] px-[1.25rem] mx-auto">
          <div className="spacer-large"></div>
          <div className="text-[#282828]">Testimonials</div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h2 className="text-[2.875rem] text-[#282828] leading-[1.275]">
            Insights from mentors <br />
            <span className="text-[#282828] font-[regular] black-sweep">
              These responses keep me grounded
            </span>
          </h2>
          <div className="spacer-medium"></div>
          <div className="spacer-small"></div>
          <div className="spacer-small"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="spacer-small"></div>
          <h3 className="text-[1.75rem] text-[#282828] font-[regular]">
            Recent testimonials
          </h3>
          <div className="spacer-medium"></div>
          <div className="spacer-xs"></div>
          <Swiper
            spaceBetween="20"
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="blogs-swiper"
          >
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[1/1] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div>
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div>
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[1/1] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div>
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full">
                <div className="aspect-[3/2] bg-gradient-to-br from-gray-300 to-gray-800"></div>
                <div className="spacer-small"></div>
                <div className="flex gap-2 text-[.850rem] text-gray-400 font-[extra-light]">
                  <span>November 12, 2024</span>
                  <span>|</span>
                  <span>by Christopher Benneth</span>
                </div>
                <div className="spacer-xs"></div>
                <div>
                  PPC-Driven Lead Generation Strategies for Personal Finance
                  Companies
                </div>
              </div>
            </SwiperSlide>
            <div className="spacer-large"></div>
          </Swiper>
        </div>
      </section> */}
      {/* <section
        id="faqs"
        className="bg-white relative flex flex-col items-center"
        ref={faqsRef}
      >
        <div className="w-full xl:w-[86.8125rem] flex flex-col items-center">
          <div className="w-full px-[1.25rem] mx-auto relative z-20">
            <div className="spacer-small"></div>
            <div className="spacer-small"></div>
            <div className="spacer-medium"></div>
            <div className="w-full flex flex-col justify-start items-start">
              <span className="text-[48px] text-[#282828] font-[semi-bold]">
                FAQs
              </span>
              <div className="spacer-small"></div>
              <div className="w-full flex flex-col px-2">
                {accordionData.map((item, index) => (
                  <div key={index} className="w-full">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left py-7 font-semibold text-lg flex justify-between items-center text-gray-900 tracking-wide"
                    >
                      {item.title}
                      <span className="text-gray-700">
                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out bg-white border-l-[1px] border-r-[1px] border-b-[1px] border-gray-200 bg-[#fefefe] ${
                        openIndex === index
                          ? "border-t-[1px] max-h-40 px-3 py-7 text-gray-700"
                          : "max-h-0"
                      }`}
                    >
                      {openIndex === index && <div>{item.content}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="spacer-small"></div>
            <div className="spacer-medium"></div>
            <div className="spacer-medium"></div>
          </div>
        </div>
      </section> */}
      <footer
        id="footer"
        className="bg-white relative flex flex-col items-center"
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
                <FaGithub size={32} className="cursor-pointer text-gray-700" />
                <FaLinkedinIn
                  size={32}
                  className="cursor-pointer text-gray-700"
                />
                <RxEnvelopeClosed
                  size={32}
                  className="cursor-pointer text-gray-700"
                />
                <FaFacebook
                  size={32}
                  className="cursor-pointer text-gray-700"
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
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300"></div>{' '}
              <div className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></div>{' '}
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
