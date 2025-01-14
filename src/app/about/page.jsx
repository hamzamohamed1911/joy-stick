
import Features from "../components/Features";
import { aboutPic } from "../../../public";
import Image from "next/image";
import BackgroundVideo from "../components/BackgroundVideo";

const About = () => {

  return (
    <section className="lg:max-w-screen-2xl w-full container mx-auto py-6 flex flex-col justify-center items-center p-4">
      <div className="flex lg:flex-row flex-col gap-6 w-full my-8">
        <div className="lg:w-1/3 w-full">
          <Image
            className="w-full h-auto"
            alt="about Image"
            width={600}
            height={600}
            src={aboutPic}
          />
        </div>
        <div className="lg:w-2/3 w-full space-y-8 flex flex-col justify-center p-4">
          <h1 className="font-bold md:text-3xl text-2xl">عن JoyStick</h1>
          <p className="text-[#3D3D3D] md:text-lg text-md font-normal max-w-3xl">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد
          </p>
          <p className="text-[#3D3D3D] md:text-lg text-md font-normal max-w-3xl">
            نصي" فتجعلها تبدو هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
            المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو
            شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
            لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
            استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو
          </p>
        </div>
      </div>
      <Features />
      <BackgroundVideo/>
      <div>
   
    </div>
    </section>
  );
};

export default About;
