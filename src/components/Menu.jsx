import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {
  const categories = [
    {
      id: 1,
      title: "Wallpaper",
      description: "Designing clean and minimal wallpaper for desktop and mobile.",
      path: "/wallpaper",
    },
    {
      id: 2,
      title: "Artwork",
      description: "Creating detailed pencil drawings and custom portrait commissions.",
      path: "/artwork",
    },
    {
      id: 3,
      title: "YouTube",
      description: "Uploading videos covering time-lapse and montages of drawings in process.",
      path: "/youtube",
    },
    {
      id: 4,
      title: "UI/UX",
      description: "Designing intuitive and visually appealing digital experiences.",

    },
  ];
  

  return (
    <section className="w-full max-w-[755px] px-5 md:px-0 mx-auto mt-16">
      <header>
        <div className="font-manrope text-sm font-semibold text-[#828282] tracking-wide">
          Creating
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-11 gap-y-9">
        {categories.map((category) => (
          <div key={category.id} className="p-0">
            <Link to={category.path}>
              <h3 className="font-manrope text-xl font-semibold text-black hover:underline">
                {category.title}
              </h3>
              </Link>

            <p className="mt-4 font-manrope text-base text-[#4c4c4c] leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}