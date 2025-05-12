import React from 'react'

export default function Box() {
  const socialProfiles = [
    {
      icon: "/instagram.svg",
      username: "sthasabalart",
      platform: "instagram",
      link: "https://www.instagram.com/sthasabalart",
    },
    {
      icon: "/instagram.svg",
      username: "stha_sabal",
      platform: "instagram",
      link: "https://www.twitter.com/stha_sabal",
    },
    {
      icon: "/tiktok.svg",
      username: "sthasabalart",
      platform: "tiktok",
      link: "https://www.tiktok.com/@sthasabalart",
    },
    {
      icon: "/youtube.svg",
      username: "sthasabalart7179",
      platform: "youtube",
      link: "https://www.youtube.com/@sthasabalart7179",
    },
  ];
  return (
    <section className="w-full max-w-[664px] px-5 md:px-0 mx-auto flex flex-col md:flex-col gap-6 mt-20">
      <header>
          <div className="font-manrope text-sm font-semibold text-[14px] text-[#828282] tracking-wide">
            Ealsewhere
          </div>
        </header>

      <div className="gap-6 flex flex-col sm:flex-row sm:justify-between">
        {socialProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-black rounded-full hover:bg-white hover:text-[#FFFFF] transition duration-200"
          >
            <img
              src={profile.icon}
              alt={profile.username}
              className="w-5 h-5"
            />
            <span className="hover:underline font-manrope text-base text-[#4c4c4c] text-[15px] leading-relaxed">{profile.username}</span>
          </a>
        ))}
      </div>
    </section>
  );
}