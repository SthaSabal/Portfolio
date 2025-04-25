import React from 'react'

export default function Personalskills() {
  const personalSkills = [
    "Responsible",
    "Time management",
    "Love learning",
    "Attention to details",
    "Collaborative",
    "Open to criticism",
  ];

  const creativeFields = [
    "Illustration",
    "UI/UX Design",
    "Visual Design",
    "Digital Painting",
  ];

  const designTools = [
    { name: "Figma", icon: <img src="figma.jpg" alt="Figma" className="w-[51px] h-[51px]" /> },
    { name: "Photoshop", icon: <img src="devicon-plain_photoshop.jpg" alt="Photoshop" className="w-[51px] h-[51px]" /> },
    { name: "Lightroom", icon: <img src="iconoir_adobe-lightroom-solid.jpg" alt="Lightroom" className="w-[51px] h-[51px]" /> },
    { name: "Illustrator", icon: <img src="adobeillustrator.jpg" alt="Illustrator" className="w-[51px] h-[51px]" /> },
    { name: "Clip Studio", icon: <img src="clip-studio.jpg" alt="Clip Studio" className="w-[51px] h-[51px]" /> },
  ];

  return (
    <div className="relative w-full max-w-[755px] mx-auto flex flex-col md:flex-row gap-20">
      {/* Personal Skills */}
      <section className="w-full max-w-[755px] mx-auto flex flex-col md:flex-col gap-9 mt-16">
        <header>
          <div className="font-manrope text-sm font-semibold text-[#828282] tracking-wide">
            Personal Skills
          </div>
        </header>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {personalSkills.map((skill, index) => (
            <span
              key={index}
              className="inline-block rounded-full px-4 py-2 border border-black text-gray-800 mt-4 font-manrope text-base text-[#4c4c4c] leading-relaxed"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Creative Fields and Tools */}
      <section className="w-full max-w-[755px] mx-auto flex flex-col md:flex-col gap-10 mt-16z">
        <header>
          <div className="font-manrope text-sm font-semibold text-[#828282] tracking-wide">
            Creative Fields
          </div>
        </header>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {creativeFields.map((field, index) => (
            <span
              key={index}
              className="inline-block rounded-full px-7 py-2 border border-black text-gray-800 mt-4 font-manrope text-base text-[#4c4c4c] leading-relaxed"
            >
              {field}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          {designTools.map((tool, index) => (
            <div key={index} title={tool.name}>
              {tool.icon}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
