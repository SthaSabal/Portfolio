import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full max-w-[755px] mx-auto mt-11">
      <div className="flex flex-col md:flex-row justify-between gap-4 text-center">
        <div className="font-manrope font-semibold text-black text-[16px] leading-[29px]">
          HOME
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="font-manrope font-semibold text-black text-[16px] leading-[22px]">
            Wallpaper
          </div>
          <div className="font-manrope font-semibold text-black text-[16px] leading-[22px]">
            Artwork
          </div>
          <div className="font-manrope font-semibold text-black text-[16px] leading-[22px]">
            UI/UX
          </div>
        </div>
      </div>
            <div className="w-full mx-auto flex flex-col md:flex-col h-px bg-black w-full max-w-[] mb-4 mt-9"/>

    </div>
  );
};
export default Navbar;