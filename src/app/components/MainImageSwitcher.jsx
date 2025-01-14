"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const MainImageSwitcher = ({ headphone }) => {
  const [selectedImage, setSelectedImage] = useState(headphone?.subImages[0]?.src);

  useEffect(() => {
    if (headphone?.subImages?.length > 0) {
      setSelectedImage(headphone.subImages[0].src);
    }
  }, [headphone.subImages]);

  return (
    <div className="flex lg:flex-row flex-col md:gap-8 gap-4">
      <div className="flex lg:flex-col flex-row justify-center items-center lg:gap-4 gap-2 lg:h-96 h-auto">
        {headphone.subImages.map(subImage => (
          <Image
            key={subImage.id}
            src={subImage.src}
            alt={`Sub image ${subImage.id}`}
            width={80}
            height={80}
            className={`cursor-pointer border rounded-xl lg:w-24 md:w-20 w-16  hover:border-primary ${
              selectedImage === subImage.src ? "border-primary border-[2px]" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(subImage.src)}
          />
        ))}
      </div>

      {/* Main image */}
      <div className="bg-[#F2FAFA] rounded-lg lg:w-[470px] w-auto  flex justify-center items-center">
        <Image src={selectedImage} alt={headphone.title} width={300} height={300} />
      </div>
    </div>
  );
};

export default MainImageSwitcher;
