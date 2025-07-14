import React from "react";

const Image: React.FC<{
  logo: string;
  splashPhoto: string;
  title: string;
}> = ({ logo, splashPhoto, title }) => {
  return (
    <div className="relative cursor-pointer group">
      <div
        className="absolute top-0 left-0 w-full h-full
    flex justify-center items-center transition-all duration-[300ms] ease-in-out p-10"
      >
        <img
          src={logo}
          alt={`${title} logo`}
          className="max-w-full max-h-full object-contain transition-all duration-[300ms] ease-in-out group-hover:opacity-0 filter brightness-100 contrast-125 grayscale z-20"
        />
      </div>
      <div className="absolute w-full h-full box-pattern transition-all duration-[300ms] ease-in-out group-hover:hidden"></div>

      <img
        src={splashPhoto}
        alt={`${title} project screenshot`}
        className="aspect-[3/2] opacity-0 group-hover:opacity-100 transition-all duration-[300ms] ease-in-out"
      />
    </div>
  );
};

export default Image;
