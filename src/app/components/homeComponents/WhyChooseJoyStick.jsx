import React from "react";
import { joystick, JoyStickBg } from "../../../../public";
import Image from "next/image";
import Features from "../Features";

const WhyChooseJoyStick = () => {
  return (
    <section className="lg:max-w-screen-2xl w-full container mx-auto py-6 flex flex-col justify-center items-center p-4">
      <div className="relative w-full">
        <Image
          alt="Joy stick background"
          width={700}
          height={700}
          className="object-cover w-full h-auto"
          src={JoyStickBg}
        />
      </div>
      <div>
        <Features />
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 my-6">
          <div className="custom-gradient p-4 rounded-2xl max-w-xl flex md:h-60 h-56 justify-center items-center">
            <div className="space-y-5">
            <h1 className="text-[#FFB948] font-bold lg:text-3xl md:text-2xl text-xl">
            احصل على صيانة في مكانك
              </h1>
              <p className="text-white lg:text-lg md:text-md text-sm leading-7">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              </p>
            </div>
            <Image width={200} height={200} className="lg:w-full md:w-40 w-32" alt="joy stick" src={joystick} />
          </div>
          <div className="custom-gradient p-4 rounded-2xl max-w-xl flex md:h-60 h-56 justify-center items-center">
            <div className="space-y-5">
              <h1 className="text-[#FFB948] font-bold lg:text-3xl md:text-2xl text-xl">
                احصل على صيانة في مكانك
              </h1>
              <p className="text-white lg:text-lg md:text-md text-sm leading-7">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              </p>
            </div>
            <Image width={200} height={200} className="lg:w-full md:w-40 w-32" alt="joy stick" src={joystick} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseJoyStick;
