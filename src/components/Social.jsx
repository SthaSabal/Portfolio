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
      link: "https://www.facebook.com/sthasabalart",
    },
    {
      icon: "/youtube.svg",
      username: "sthasabalart7179",
      platform: "youtube",
      link: "https://www.youtube.com/@sthasabalart7179",
    },
  ];
  return (
    <section className="w-full max-w-[755px] px-5 md:px-0 mx-auto flex flex-col md:flex-col gap-8 mt-16">
      <header>
          <div className="font-manrope text-sm font-semibold text-[#828282] tracking-wide">
            Ealsewhere
          </div>
        </header>

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
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
            <span className="text-gray-800 mt-0 font-manrope text-base text-[#4c4c4c] leading-relaxed">{profile.username}</span>
          </a>
        ))}
      </div>
    </section>
  );
}