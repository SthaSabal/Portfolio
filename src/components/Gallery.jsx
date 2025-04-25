import React from "react";

export const Gallery = () => {
    return (
        <div className="relative w-full px-5 md:px-0 mt-16 flex justify-center">
            <div className="relative w-full max-w-[755px] h-[1260px]">
                <div className="absolute w-[720px] h-[1200px] top-[60px] left-1/2 -translate-x-1/2">
                    <div className="absolute w-[355px] h-[340px] top-0 left-0">
                        <div className="absolute w-[230px] h-[220px] top-0 left-0 bg-[#060606]" />
                        <img
                            className="absolute w-[355px] h-[340px] top-0 left-0 object-cover"
                            alt="Element"
                            src="/20200516_195444 1.jpg"
                        />
                    </div>

                    <img
                        className="absolute w-[355px] h-[195px] top-0 left-[365px] object-cover"
                        alt="Untitled"
                        src="/Untitled-1 1.jpg"
                    />

                    <img
                        className="absolute w-[355px] h-[405px] top-[230px] left-[365px] object-cover"
                        alt="Lrm EXPORT"
                        src="/LRM_EXPORT_20200101_110922 1.jpg"
                    />

                    <img
                        className="absolute w-[355px] h-[355px] top-[340px] left-0 object-cover"
                        alt="Img dd"
                        src="/IMG-0127 (1)dd 1.jpg"
                    />

                    <img
                        className="absolute w-[355px] h-[480px] top-[705px] left-0 object-cover"
                        alt="Lrm EXPORT"
                        src="/LRM_EXPORT_20200222_084039 1.jpg"
                    />

                    <img
                        className="absolute w-[355px] h-[285px] top-[640px] left-[365px] object-cover"
                        alt="Element"
                        src="/2972F29C-00BD-4E4F-8E0F-64862FFFF351 1.jpg"
                    />

                    <img
                        className="absolute w-[355px] h-[295px] top-[935px] left-[365px] object-cover"
                        alt="Lrm EXPORT"
                        src="/LRM_EXPORT_20200212_183309 1.jpg"
                    />
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 font-manrope font-semibold text-black text-[22px] tracking-[0.66px] leading-[20.5px] whitespace-nowrap">
                    Artwork
                </div>
            </div>
        </div>
    );
};

export default Gallery;
