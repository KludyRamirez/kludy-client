import React from "react";

const Technology: React.FC<{ technology: string }> = ({ technology }) => {
  return (
    <div className="cursor-pointer w-[fit-content] flex justify-center items-center py-1 px-3 gap-2 border border-gray-300 text-[14px] text-[#282828] hover:border-[#282828] hover:bg-[#282828] hover:text-white group-hover:rounded-[6px] transition-all duration-300 rounded-md">
      <img
        src={`https://res.cloudinary.com/dni1vtbsv/image/upload/v1755160549/${technology}.png`}
        alt={technology}
        className="w-[16px] h-[16px] filter brightness-100 contrast-175"
      />
      <div className="text-[14px] mt-[2px] tracking-wide">{technology}</div>
    </div>
  );
};

export default Technology;
