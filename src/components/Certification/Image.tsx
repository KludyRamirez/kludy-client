import React from 'react';

const Image: React.FC<{
  photo: string;
  title: string;
}> = ({ photo, title }) => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={photo}
        alt={`${title} badge`}
        className="cursor-pointer aspect-[3/2] grayscale z-20 transition-hover duration-[400ms] ease-in hidden group-hover:block hover:aspect-[1/1]"
      />
    </div>
  );
};

export default Image;
