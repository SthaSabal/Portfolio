import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: 1, label: "Wallpaper", path: "/wallpaper" },
    { id: 2, label: "Artwork", path: "/artwork" },
    { id: 3, label: "UI/UX", path: "/uiux" }
  ];

  return (
    <div className="w-full max-w-[755px] mx-auto mt-11">
      <div className="flex flex-col md:flex-row justify-between gap-4 text-center">
        <Link
          to="/"
          className="font-manrope text-xl font-semibold text-black text-[16px] hover:underline"
        >
          HOME
        </Link>

        <div className="flex flex-col md:flex-row gap-5">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative inline-block font-manrope text-xl font-semibold text-black text-[16px]"
            >
              <span className="relative">
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-all duration-300 ${
                    hoveredItem === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                ></span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-black mb-4 mt-9" />
    </div>
  );
};

export default Navbar;
