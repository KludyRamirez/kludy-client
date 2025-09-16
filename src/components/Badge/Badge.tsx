import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Spacer from "../../utils/Spacer";
import Card from "./Card";
import { Badge as BadgeType } from "../../types/Badge";
import { useGetBadgesQuery } from "../../features/api/Badge";
import BadgeData from "../../assets/data/Badge.json";
import Loader from "../../utils/Loader";
import {
  BsArrowRightShort,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

interface Props {
  badgeRef: React.RefObject<HTMLElement>;
}

const Badge: React.FC<Props> = ({ badgeRef }) => {
  const { data, isLoading } = useGetBadgesQuery();
  const badges: BadgeType[] = data ?? (BadgeData as BadgeType[]);

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const SWIPER_CONFIG = {
    spaceBetween: 20,
    autoplay: {
      delay: 1400,
    },
    onInit: (swiper: SwiperType) => {
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== "boolean"
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    },
    breakpoints: {
      639: { slidesPerView: 1 },
      767: { slidesPerView: 2 },
    },
    modules: [Autoplay, Pagination, Navigation],
    className: "badge-swiper",
  };

  return (
    <section id="badge" className="" ref={badgeRef}>
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="large" />
        <div className="text-white">Badges</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <div className="text-[2.875rem] text-white leading-[1.275]">
          <span>Check out my badges</span>
          <br />
          <div className="flex items-center gap-2 text-[#919191] font-[regular]">
            <div className="light-sweep">I've got {badges.length} so far.</div>
            <div className="flex items-center gap-1 ml-2 group cursor-pointer text-[#717171] hover:text-white">
              See each
              <BsArrowRightShort className="transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
        <Spacer size="medium" />
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <div className="flex items-center justify-between gap-4">
          <div className="w-[50%]">
            <h3 className="text-[1.75rem] text-white font-[regular]">
              Recent badges
            </h3>
          </div>
          <div className="w-[50%] flex gap-[20px]">
            <div
              ref={prevRef}
              className="flex justify-center items-center gap-2 cursor-pointer w-[50%] h-[40px] border border-slate-100/30 text-white hover:bg-white hover:border-white hover:text-black rounded-lg transition-colors ease-in-out duration-300"
            >
              <BsChevronLeft className="-ml-2" />
              <span className="text-sm mt-[1px]">Prev</span>
            </div>
            <div
              ref={nextRef}
              className="flex justify-center items-center gap-2 cursor-pointer w-[50%] h-[40px] border border-slate-100/30 text-white hover:bg-white hover:border-white hover:text-black rounded-lg transition-colors ease-in-out duration-300"
            >
              <span className="text-sm mt-[1px] ml-2">Next</span>
              <BsChevronRight className="" />
            </div>
          </div>
        </div>
        <Spacer size="medium" />
        <Spacer size="xs" />
        <Swiper {...SWIPER_CONFIG}>
          {badges && badges.length > 0 ? (
            badges.map((badge) => (
              <SwiperSlide key={badge._id}>
                <Card badge={badge} />
              </SwiperSlide>
            ))
          ) : isLoading ? (
            <Loader />
          ) : (
            <div className="text-center text-white w-full py-10">
              No badges found.
            </div>
          )}
        </Swiper>
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default Badge;
