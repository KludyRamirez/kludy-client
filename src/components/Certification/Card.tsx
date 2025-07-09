import React from 'react';
import Image from './Image';
import Spacer from '../../utils/Spacer';
import { Certification as CertificationType } from '../../types/Certification'; // changed

import {
  FaBullseye,
  FaCloud,
  FaCode,
  FaCrown,
  FaFireFlameCurved,
  FaShieldHalved,
} from 'react-icons/fa6';
import { SiOpenai } from 'react-icons/si';

const Meta: React.FC<{ date: Date; authors: string[] }> = ({
  date,
  authors,
}) => (
  <div className="flex gap-2 text-[.850rem] text-gray-300">
    <span>{date.toLocaleDateString()}</span>
    <span>|</span>
    <span>by {authors.join(', ')}</span>
  </div>
);

const Links: React.FC<{
  url: CertificationType['url'];
  title: CertificationType['title'];
}> = ({ url, title }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    {title}
  </a>
);

const Clogo: React.FC<{ category: string }> = ({ category }) => (
  <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 bg-[#808080]/10 group-hover:bg-[#efefef] text-[14px] text-gray-300 gap-2">
    {category === 'Certification' ? (
      <FaBullseye size={14} className="group-hover:text-[#282828]" />
    ) : category === 'AI / ML' ? (
      <SiOpenai size={14} className="group-hover:text-[#282828]" />
    ) : category === 'Popular' ? (
      <FaFireFlameCurved size={14} className="group-hover:text-[#282828]" />
    ) : category === 'Cloud' ? (
      <FaCloud size={16} className="group-hover:text-[#282828]" />
    ) : category === 'Security' ? (
      <FaShieldHalved size={16} className="group-hover:text-[#282828]" />
    ) : category === 'Relevant' ? (
      <FaCrown size={16} className="group-hover:text-[#282828]" />
    ) : category === 'Development' ? (
      <FaCode size={14} className="group-hover:text-[#282828]" />
    ) : (
      ''
    )}
    <div className="mt-[2px] tracking-wide">{category}</div>
  </div>
);

const Categories: React.FC<{ categories: CertificationType['categories'] }> = ({
  categories,
}) => (
  <div className="w-full flex flex-wrap justify-start items-start gap-2">
    {categories.map((category, index) => (
      <Clogo key={index} category={category} />
    ))}
  </div>
);

const Card: React.FC<{ certification: CertificationType }> = ({
  certification,
}) => {
  return (
    <div className="w-full h-full p-2 relative group">
      <Image photo={certification.photo} title={certification.title} />

      <Spacer size="small" />

      <Meta date={certification.date} authors={certification.providers} />

      <Spacer size="xs" />

      <Links url={certification.url} title={certification.title} />

      <Spacer size="small" />

      <Categories categories={certification.categories} />
    </div>
  );
};

export default Card;
