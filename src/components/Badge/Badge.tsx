import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Spacer from "../../utils/Spacer";
import Card from "./Card";
import { Badge as BadgeType } from "../../types/Badge";
import { useGetBadgesQuery } from "../../features/api/Badge";
import BadgeData from "../../assets/data/Badge.json";
import Loader from "../../utils/Loader";

interface Props {
  badgesRef: React.RefObject<HTMLElement>;
}

const SWIPER_CONFIG = {
  spaceBetween: 28,
  autoplay: {
    delay: 1400,
    disableOnInteraction: false,
  },
  breakpoints: {
    639: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
  },
  modules: [Autoplay, Pagination],
  className: "badge-swiper",
};

const Badge: React.FC<Props> = ({ badgesRef }) => {
  const { data, isLoading } = useGetBadgesQuery();
  const badges: BadgeType[] = data ?? (BadgeData as BadgeType[]);

  return (
    <section id="badge" className="" ref={badgesRef}>
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="large" />
        <div className="text-white">Badges and Certifications</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <div className="text-[2.875rem] text-white leading-[1.275]">
          <span>Check out my medals</span>
          <br />
          <span className="text-[#919191] font-[regular] light-sweep">
            These are proofs of commitment
          </span>
        </div>
        <Spacer size="medium" />
        <Spacer size="small" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-slate-100/20"></div>
        <Spacer size="small" />
        <h3 className="text-[1.75rem] text-white font-[regular]">
          Recent badges
        </h3>
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
