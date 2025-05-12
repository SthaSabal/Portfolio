import React, { useState, useEffect } from "react";

export const Gallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const images = [
    { src: "/20200516_195444 1.jpg", alt: "Element" },
    { src: "/Untitled-1 1.jpg", alt: "Untitled" },
    { src: "/LRM_EXPORT_20200101_110922 1.jpg", alt: "Lrm EXPORT 1" },
    { src: "/IMG-0127 (1)dd 1.jpg", alt: "Img dd" },
    { src: "/LRM_EXPORT_20200222_084039 1.jpg", alt: "Lrm EXPORT 2" },
    { src: "/2972F29C-00BD-4E4F-8E0F-64862FFFF351 1.jpg", alt: "Element 2" },
    { src: "/LRM_EXPORT_20200212_183309 1.jpg", alt: "Lrm EXPORT 3" },
  ];

  const handleMouseEnter = (image) => {
    setPreviewImage(image);
  };

  const handleMouseLeave = () => {
    setPreviewImage(null);
  };

  const handleMouseMove = (e) => {
    // Update preview position based on cursor, keeping it on screen
    const x = Math.min(
      Math.max(e.clientX + 20, 20), 
      window.innerWidth - 420
    );
    
    const y = Math.min(
      Math.max(e.clientY - 200, 20), 
      window.innerHeight - 420
    );
    
    setPreviewPosition({ x, y });
  };

  return (
    <div 
      className="w-full px-4 mt-16 flex justify-center relative"
      onMouseMove={previewImage ? handleMouseMove : null}
    >
      <div className="w-full max-w-[755px]">
        <h2 
          className={`text-center font-manrope font-semibold text-black text-xl sm:text-2xl tracking-wide mb-6 transform transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Artwork
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className={`overflow-hidden rounded-md shadow-sm transform transition-all duration-700 ease-out cursor-pointer ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + idx * 100}ms` }}
              onMouseEnter={() => handleMouseEnter(image)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[220px] sm:h-[260px] object-cover rounded-md transition-all duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full image preview on hover */}
      {previewImage && (
        <div 
          className="fixed rounded-lg shadow-2xl overflow-hidden z-50 transition-opacity duration-300"
          style={{
            left: `${previewPosition.x}px`,
            top: `${previewPosition.y}px`,
            width: 'max',
            height: 'max',
            opacity: previewImage ? 1 : 0,
            pointerEvents: 'none',
            transform: 'translate3d(0, 0, 0)'
          }}
        >
          <img
            src={previewImage.src}
            alt={previewImage.alt}
            className="w-full h-full object-contain bg-white p-2"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;