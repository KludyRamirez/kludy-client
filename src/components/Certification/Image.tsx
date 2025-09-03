import React from "react";

const Image: React.FC<{
  photo: string;
  title: string;
}> = ({ photo, title }) => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={photo}
        alt={`${title} badge`}
        className="aspect-[3/2] object-contain transition-hover duration-[400ms] ease-in-out filter brightness-100 contrast-150 grayscale group-hover:grayscale-0"
      />
    </div>
  );
};

export default Image;
