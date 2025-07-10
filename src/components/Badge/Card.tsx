import React from 'react';
import Image from './Image';
import Spacer from '../../utils/Spacer';
import { Badge as BadgeType } from '../../types/Badge';
import {
  FaCloud,
  FaCode,
  FaCrown,
  FaDatabase,
  FaFireFlameCurved,
  FaMedal,
  FaShieldHalved,
  FaTrophy,
} from 'react-icons/fa6';
import { SiOpenai } from 'react-icons/si';

const Meta: React.FC<{ date: string; providers: string[] }> = ({
  date,
  providers,
}) => (
  <div className="flex gap-2 text-[.850rem] text-gray-300">
    <span>
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </span>
    <span>|</span>
    <span>by {providers.join(', ')}</span>
  </div>
);

const Links: React.FC<{
  url: BadgeType['url'];
  title: BadgeType['title'];
}> = ({ url, title }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:underline"
  >
    {title}
  </a>
);

const Clogo: React.FC<{ category: string }> = ({ category }) => (
  <div className="cursor-pointer flex justify-center items-center py-1 px-3 border border-slate-100/20 text-[14px] text-gray-200 group-hover:rounded-[42px] gap-2 hover:bg-white hover:border-white hover:text-black transition-all duration-[400ms]">
    {category === 'Certification' ? (
      <FaTrophy size={14} />
    ) : category === 'AI / ML' ? (
      <SiOpenai size={14} />
    ) : category === 'Popular' ? (
      <FaFireFlameCurved size={14} />
    ) : category === 'Cloud' ? (
      <FaCloud size={16} />
    ) : category === 'Security' ? (
      <FaShieldHalved size={16} />
    ) : category === 'Relevant' ? (
      <FaCrown size={16} />
    ) : category === 'Development' ? (
      <FaCode size={14} />
    ) : category === 'Data' ? (
      <FaDatabase size={14} />
    ) : category === 'Completion' ? (
      <FaMedal size={14} />
    ) : (
      ''
    )}
    <div className="mt-[2px] tracking-wide">{category}</div>
  </div>
);

const Categories: React.FC<{ categories: BadgeType['categories'] }> = ({
  categories,
}) => (
  <div className="w-full flex flex-wrap justify-start items-start gap-2">
    {categories.map((category, index) => (
      <Clogo key={index} category={category} />
    ))}
  </div>
);

const Card: React.FC<{ badge: BadgeType }> = ({ badge }) => {
  return (
    <div className="cursor-pointer w-full h-full p-2 relative group hover:p-4 hover:border hover:border-slate-100/20 hover:rounded-xl">
      <Image photo={badge.photo} title={badge.title} />

      <Spacer size="small" />

      <Meta date={badge.date} providers={badge.providers} />

      <Spacer size="xs" />

      <Links url={badge.url} title={badge.title} />

      <Spacer size="small" />

      <Categories categories={badge.categories} />
    </div>
  );
};

export default Card;
