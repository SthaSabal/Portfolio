
import React, { useState, useEffect } from "react";

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    // Trigger animations after component mounts with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

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
      path: "/uiux",
    },
  ];

  return (
    <section className="relative w-full max-w-[700px] px-4 mx-auto mt-20 overflow-hidden">
      <header>
        <div 
          className={`font-manrope text-sm font-semibold text-[14px] text-[#828282] tracking-wide transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Creating
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
        {categories.map((category, index) => (
          <div 
            key={category.id} 
            className={`p-0 transform transition-all duration-700 ease-out cursor-pointer ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
            onMouseEnter={() => setHoveredItem(category.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href={category.path || "#"}>
              <h3 className="font-manrope text-xl font-semibold text-black text-[16px] transition-all duration-300 ease-out">
                <span className={`relative inline-block ${
                  hoveredItem === category.id ? 'text-black' : ''
                }`}>
                  {category.title}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-all duration-300 ${
                    hoveredItem === category.id ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </span>
              </h3>
            </a>
            <p className={`mt-1 font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed transition-all duration-300 ${
              hoveredItem === category.id ? 'translate-x-1' : ''
            }`}>
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}