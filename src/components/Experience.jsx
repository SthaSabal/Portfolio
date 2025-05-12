import React from "react";

export default function Experience() {
  const experiences = [
    {
      period: "2022 - 2023",
      title: "Counselor",
      organization: "Abstract Education Network",
    },
    {
      period: "2023 - 2024",
      title: "UI/UX Intern",
      organization: "Spell Innovation Pvt. Ltd",
    },
    {
      period: "2022 - Present",
      title: "Fine Art Tutor",
      organization: "Vedvyas Boarding School",
    },
  ];

  const education = [
    {
      period: "2017",
      title: "Secondary Education Examination",
      institution: "Manakamana Higher Secondary School",
    },
    {
      period: "2017 - 2019",
      title: "10+2 / School Leaving Certificate",
      institution: "Jaya Multiple Campus",
    },
    {
      period: "2019 - Present",
      title: "Bachelor in Computer Application",
      institution: "Jaya Multiple Campus",
    },
  ];

  return (
    <div className="relative w-full max-w-[664px] px-5 md:px-0 mx-auto mt-20 flex flex-col md:flex-row">
      {/* Experience Section */}
      <section className="w-full mx-auto flex flex-col md:flex-col gap-6">
      <header>
          <div className="font-manrope text-sm font-semibold text-[#828282] tracking-wide">
            Experience
          </div>
        </header>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div key={index}>
              <p className="mt-1 font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed">{exp.period}</p>
              <h3 className="font-manrope text-xl font-semibold text-black text-[16px]">{exp.title}</h3>
              <p className="mt-1 font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed">{exp.organization}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="w-full mx-auto flex flex-col md:flex-col gap-6">
      <header>
          <div className="font-manrope text-sm font-semibold text-[#828282] tracking-wide">
            Education
          </div>
        </header>
        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <div key={index}>
              <p className="mt-1 font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed">{edu.period}</p>
              <h3 className="font-manrope text-xl font-semibold text-black text-[16px]">{edu.title}</h3>
              <p className="mt-1 font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed">{edu.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
