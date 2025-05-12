
import React, { useEffect, useState } from 'react'

export const Herosection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative max-w-[700px] mx-auto mt-20 px-4 overflow-hidden">
      <div className="flex flex-col gap-6 items-start">
        {/* Profile image with fade-in and slight pop animation */}
        <div 
          className={`w-[130px] h-[130px] rounded-full overflow-hidden transform transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            className="w-full h-full object-cover"
            alt="Sabal's profile"
            src="/profile.jpg"
          />
        </div>

        {/* Heading with slide-up animation */}
        <h1 
          className={`font-manrope font-semibold text-black text-[22px] leading-[29px] transform transition-all duration-700 delay-300 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          I am Sabal — a designer and artist.
        </h1>

        {/* Bio paragraph with fade-in animation */}
        <p 
          className={`mt-4 font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed transform transition-all duration-700 delay-500 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          I began with a passion for drawing and sketching, and I still take
          portrait commissions. Over time, I discovered my love for graphic design
          and UI/UX, where I combine creativity with problem-solving. I enjoy
          designing clean, user-friendly interfaces and creating visuals that are
          both impactful and functional. I'm based in Kathmandu, Nepal.
        </p>
      </div>
    </section>
  );
}