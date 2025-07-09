import React from 'react';

const Image: React.FC<{
  logo: string;
  splashPhoto: string;
  title: string;
}> = ({ logo, splashPhoto, title }) => {
  return (
    <div className="relative cursor-pointer group">
      <div
        className="absolute top-0 left-0 w-full h-full
    flex justify-center items-center transition-all duration-[400ms] ease-in-out p-10 bg-gradient-to-b from-slate-200 via-white to-white group-hover:bg-none"
      >
        <img
          src={logo}
          alt={`${title} logo`}
          className="max-w-full max-h-full object-contain transition-all duration-[400ms] ease-in-out group-hover:opacity-0 filter brightness-100 contrast-150 grayscale"
        />
      </div>

      <img
        src={splashPhoto}
        alt={`${title} project screenshot`}
        className="aspect-[3/2] opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-in-out"
      />
    </div>
  );
};

export default Image;
