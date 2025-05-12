import React, { useState, useEffect } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    // Trigger animations after component mounts with a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const contactInfo = [
    {
      id: 1,
      icon: <img src="mail.jpg" alt="Mail" className="h-6 w-6" />,
      text: "sabalshrestha58@gmail.com",
    },
    {
      id: 2,
      icon: <img src="phone.jpg" alt="Phone" className="h-6 w-6" />,
      text: "+977 986 9029 770",
    },
    {
      id: 3,
      icon: <img src="github.jpg" alt="Github" className="h-5 w-5" />,
      text: "github.com/SthaSabal",
    },
  ];
  
  return (
    <div className="w-full max-w-[664px] px-5 md:px-0 mx-auto mt-20 overflow-hidden">
      <section>
        <header>
          <div 
            className={`font-manrope text-sm font-semibold text-[14px] text-[#828282] tracking-wide transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Contact
          </div>
        </header>
        
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between">
          {contactInfo.map((item, index) => (
            <div 
              key={item.id}
              className={`flex items-center gap-2 transform transition-all duration-700 ease-out cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`transition-all duration-300 transform ${
                hoveredItem === item.id ? 'scale-110' : ''
              }`}>
                {item.icon}
              </div>
              <span className={`font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed transition-all duration-300 ${
                hoveredItem === item.id ? 'text-black translate-x-1' : ''
              }`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}