import { headPhoneArr } from "@/app/_constants";
import MainImageSwitcher from "@/app/components/MainImageSwitcher";
import { add, addIcon4, favouiteIcon, minus } from "../../../../../public";
import Image from "next/image";
import FavouriteProducts from "@/app/components/FavouriteProducts";

const HeadphoneDetail = ({ params }) => {
  const { id } = params;

  // Find the headphone by id
  const headphone = headPhoneArr.find((item) => item.id === parseInt(id));

  if (!headphone) {
    return <div>Product not found!</div>;
  }

  return (
    <section className="container mx-auto p-4 md:space-y-20 space-y-5">
      {/* Main image switcher component */}
      <div className="flex lg:flex-row flex-col w-full h-full gap-8 ">
        <MainImageSwitcher headphone={headphone} />

        {/* Headphone details */}

        <div className="flex w-full flex-col gap-2 space-y-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{headphone.title}</h1>
            <button className="">
              <Image width={70} src={favouiteIcon} alt="Favorite Icon" />
            </button>
          </div>
          <p className="max-w-xl text-xl font-[#0D0D0D]">
            {headphone.description}
          </p>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium">الألوان</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value="red"
                  className="hidden"
                />
                <span className="w-6 h-6 bg-[#F29797] rounded-full border-2 border-gray-300"></span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value="blue"
                  className="hidden"
                />
                <span className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300"></span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value="black"
                  className="hidden"
                />
                <span className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value="white"
                  className="hidden"
                />
                <span className="w-6 h-6 bg-white rounded-full border-2 border-gray-300"></span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value="black"
                  className="hidden"
                />
                <span className="w-6 h-6 bg-[#E6E6E6] rounded-full border-2 border-gray-300"></span>
              </label>
            </div>
          </div>

          <p className="text-3xl font-medium">{headphone.price}</p>
          <div className="lg:flex-row flex-col flex gap-4  font-bold">
            <div className="flex flex-col gap-2">
              <div className="gap-3 items-center flex">
                <button>
                  <Image src={minus} alt="Minus Icon" className="w-7" />
                </button>
                <span className=" text-xl">8</span>
                <button>
                  <Image src={add} alt="Add Icon" className="w-7" />
                </button>
              </div>
              <p className="text-sm">متوفرة في المخزن </p>
            </div>

            <div className="flex md:flex-row flex-col  gap-4">
              <button className="w-48 bg-primary py-4 px-2 rounded-xl text-white flex gap-3 items-center justify-center">
                <Image alt="add Icon" src={addIcon4} />
                أضف الى العربة
              </button>
              <button className="w-48 border-primary py-4 px-2  rounded-xl text-primary border-2">
                شراء الآن
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E4E7E9] w-full  my-6"></div>
      <div className="space-y-5 text-[#0D0D0D]">
        <h2 className="text-2xl font-semibold">تفاصيل المنتج</h2>
        <p className="md:text-xl text-lg max-w-7xl leading-normal">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء هناك حقيقة مثبتة
          منذ زمن طويل وهي أن المحتوى المقروء هناك حقيقة مثبتة منذ زمن طويل وهي
          أن المحتوى المقروء هناك هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
          المقروء هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء هناك
          حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء هناك
        </p>
      </div>
    
      <FavouriteProducts title="منتجات ذات صلة" />

    </section>
  );
};

// Generate static params
export async function generateStaticParams() {
  return headPhoneArr.map((item) => ({ id: item.id.toString() }));
}

export default HeadphoneDetail;
