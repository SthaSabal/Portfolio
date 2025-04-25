import React from 'react'

export const Herosection = () => {
  return (
<section className="relative max-w-[785px] mx-auto mt-20 px-4">
  <div className="flex flex-col gap-6 items-start">
    {/* Profile image */}
    <div className="w-[148px] h-[147px] rounded-full overflow-hidden">
      <img
        className="w-full h-full object-cover"
        alt="Sabal's profile"
        src="/profile.jpg"
      />
    </div>

    {/* Heading */}
    <h1 className="font-manrope font-semibold text-black text-[22px] leading-[29px]">
      I am Sabal -- -- a designer and artist.
    </h1>

    {/* Bio paragraph */}
    <p className="font-manrope text-base text-black leading-relaxed text-justify">
      I began with a passion for drawing and sketching, and I still take
      portrait commissions. Over time, I discovered my love for graphic design
      and UI/UX, where I combine creativity with problem-solving. I enjoy
      designing clean, user-friendly interfaces and creating visuals that are
      both impactful and functional. I'm based in Kathmandu, Nepal.
    </p>
  </div>
</section>

  )
}
