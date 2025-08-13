import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Spacer from "../../utils/Spacer";
import Card from "./Card";
import { Certification as CertificationType } from "../../types/Certification";
import CertificationData from "../../assets/data/Certification.json";

interface Props {
  certificationRef: React.RefObject<HTMLElement>;
}

const SWIPER_CONFIG = {
  spaceBetween: 20,
  autoplay: {
    delay: 1400,
    disableOnInteraction: false,
  },
  breakpoints: {
    639: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
  },
  modules: [Autoplay, Pagination],
  className: "certification-swiper",
};

const Certification: React.FC<Props> = ({ certificationRef }) => {
  // const { data, isLoading } = useGetCertificationsQuery();
  const certifications: CertificationType[] =
    CertificationData as CertificationType[];

  return (
    <section
      id="certification"
      className="bg-white relative"
      ref={certificationRef}
    >
      <div className="max-w-5xl px-[1.25rem] mx-auto">
        <Spacer size="large" />
        <div className="text-[#282828]">Certifications</div>
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
        <Spacer size="small" />
        <div className="flex justify-between text-[2.875rem] text-[#282828] leading-[1.275]">
          <div className="flex flex-col">
            <span>Check out my certifications</span>
            <span className="text-[#919191] font-[regular] black-sweep">
              These works aspires to be best
            </span>
          </div>
        </div>
        <Spacer size="medium" />
        <Spacer size="small" />
        <div className="w-full h-[1px] bg-gray-200"></div>
        <Spacer size="small" />
        <h3 className="text-[1.75rem] text-[#282828] font-[regular]">
          Recent certifications
        </h3>
        <Spacer size="medium" />
        <Spacer size="xs" />
        <Swiper {...SWIPER_CONFIG}>
          {certifications && certifications.length > 0 ? (
            certifications.map((certification) => (
              <SwiperSlide key={certification._id}>
                <Card certification={certification} />
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center text-white w-full py-10">
              No certifications found.
            </div>
          )}
        </Swiper>
        <Spacer size="large" />
      </div>
    </section>
  );
};

export default Certification;
