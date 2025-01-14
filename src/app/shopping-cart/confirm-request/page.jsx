import Image from "next/image";
import { headPhone, mouseImg } from "../../../../public";
import Link from "next/link";
export const Favourite = [
  {
    id: 1,
    imageSrc: headPhone,
    title: "سماعة رأس",
    description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
    price: "379.00",
  },
  {
    id: 2,
    imageSrc: mouseImg,
    title: "سماعة رأس",
    description: "ميكروفون احترافي لتسجيل الصوت بجودة فائقة",
    price: "1000.00",
  },
];
const ConfirmRequest = () => {
  return (
    <section className=" w-full container mx-auto  flex flex-col px-4">
      <div className="w-full flex lg:flex-row flex-col justify-between px-6">
        <div className="xl:max-w-[700px] lg:max-w-[500px] w-full">
          <div className="mb-3">
            <div className="flex justify-between font-medium my-6">
              <h3 className="text-2xl ">العنوان</h3>
              <Link
                href="/profile/added-location"
                className="text-primary text-lg"
              >
                تغير
              </Link>
            </div>
            <div className="border-[1px] flex flex-col space-y-4 justify-center p-6 border-[#E8EAED] h-[100px] rounded-lg">
              <span className="flex justify-between ">
                <h3 className="text-lg font-medium">المنزل</h3>
                <input
                  type="checkbox"
                  className="appearance-none cursor-pointer h-5 w-5 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                />
              </span>
              <h3>عباس العقاد - مدينة نصر</h3>
            </div>
          </div>
          <div className="w-full border-[1px] my-12 border-[#E4E7E9]"></div>
            <h3 className="text-2xl  font-medium my-6">تفاصيل الدفع</h3>
            <div className="flex flex-col md:flex-row lg:gap-8 gap-4  w-full">
            <div className="my-4 w-full">
            <label className="block mb-3 font-medium"> الاسم الأول</label>
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
                  type="email"
                />
              </div>
              <div className="my-4 w-full">
                <label className="block mb-3 font-medium"> الاسم الثاني </label>
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:gap-8 gap-4  w-full">
                <div className="my-4 w-full">
            <label className="block mb-3 font-medium">  العنوان</label>
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
                  type="email"
                />
              </div>
              <div className="my-4 w-full">
                <label className="block mb-3 font-medium">رقم الهاتف</label>
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
                  type="email"
                />
              </div>
            </div>
        </div>

        <div className="xl:max-w-[400px] lg:max-w-[350px] w-full">
          <h1 className="text-2xl font-medium">كود الخصم</h1>
          <input
            placeholder="ادخل كود الخصم"
            className="my-4 focus:border-primary px-5 py-3 text-sm border bg-[#FBFBFB] border-[#8686861A] text-gray-800 shadow-sm focus:outline-none rounded-[8px] w-full"
            type="text"
          />
          <div className="text-[#A6A798] flex justify-between font-semibold text-lg my-4">
            <span>السعر ({Favourite.length} قطع):</span>
            <span>
              {Favourite.reduce((total, item) => total + Number(item.price), 0)}
              جنيه
            </span>
          </div>
          <div className="text-[#A6A798] flex justify-between font-semibold text-lg my-4">
            <span>الشحن </span>
            <span>50.00 جنيه</span>
          </div>
          <div className="text-[#A6A798] flex justify-between font-semibold text-lg my-4">
            <span>الاجمالي </span>
            <span>1429.00 جنيه</span>
          </div>
          <button className="w-full text-center py-3 my-2 bg-primary text-white rounded-lg">
            استكمال عملية الشراء
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmRequest;
