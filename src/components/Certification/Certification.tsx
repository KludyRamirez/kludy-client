import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Spacer from '../../utils/Spacer';
import Card from './Card';
import { Certification as CertificationType } from '../../types/Certification';
import { useGetCertificationsQuery } from '../../features/api/Certification'; // updated path
import Loader from '../../utils/Loader';

const SWIPER_CONFIG = {
  spaceBetween: 20,
  autoplay: {
    delay: 1400,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    639: { slidesPerView: 1 },
    767: { slidesPerView: 2 },
    1023: { slidesPerView: 3 },
    1279: { slidesPerView: 4 },
  },
  modules: [Autoplay, Pagination],
  className: 'projects-swiper',
};

const Certification: React.FC = () => {
  const { data, isLoading } = useGetCertificationsQuery();
  const certifications: CertificationType[] = data ?? [];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Spacer size="medium" />
      <Spacer size="small" />
      <div className="w-full h-[1px] bg-slate-100/20"></div>
      <Spacer size="small" />
      <h3 className="text-[1.75rem] text-white font-[regular]">
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
    </>
  );
};

export default Certification;
