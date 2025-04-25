import React from "react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <img src="mail.jpg" alt="Mail" className="h-6 w-6" />,
      text: "sabalshrestha58@gmail.com",
    },
    {
      icon: <img src="phone.jpg" alt="Phone" className="h-6 w-6" />,
      text: "+977 986 9029 770",
    },
    {
      icon: <img src="github.jpg" alt="Github" className="h-5 w-5" />,
      text: "github.com/SthaSabal",
    },
  ];


  return (
    <div className="w-full max-w-[755px] px-5 md:px-0 mx-auto mt-16">

           <section className="w-full max-w-[785px] mx-auto mt-16">
              <header>
                <div className="font-manrope max-w-[785px] text-sm font-semibold text-[#828282] tracking-wide">
                Contact
                </div>
              </header>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon}
                <span className="text-base text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </section>


      </div>

  );
}
