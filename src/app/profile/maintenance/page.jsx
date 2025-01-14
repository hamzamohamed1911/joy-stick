"use client"
import Image from "next/image";
import {
  addIcon2,
  deleteIcon,
  historyIcon,
  joystic2,
} from "../../../../public";
import { useRouter } from "next/navigation";


const Maintenance = () => {
  const router = useRouter(); 

const handleNavigate = (url) => {
  router.push(url); 
};
  return (
    <section className="flex flex-col justify-between gap-6 h-full md:p-0 p-4">
      <div className=" border-[1px] border-[#E4E7E9] border-solid h-auto   w-full">
          <div className="border-b-[1px] border-solid border-[#E4E7E9] py-4 px-6 items-center flex justify-between">
          <h1 className=" font-semibold">اختر جهاز</h1>
          <div className="gap-4 flex">
          <button onClick={() => handleNavigate("/profile/maintenance/previous-operations")}>
          <Image  alt="history Icon" width={25} src={historyIcon} />
            </button>
            <button onClick={() => handleNavigate("/profile/maintenance/added-devices")}>
              <Image  alt="add Icon" width={25} src={addIcon2} />
            </button>
          </div>
        </div>
        <div className="p-4 flex gap-6 flex-wrap">
          <div className="grid grid-cols-12 gap-2 items-center border-[1px] border-solid rounded-lg shadow-lg w-96 border-primary cursor-pointer p-3 h-36 relative">
            <div className="col-span-4">
              <Image
                alt="joy stick"
                width={200}
                className="object-contain"
                src={joystic2}
              />
            </div>
            <div className="col-span-8 space-y-3">
              <button className="absolute left-4 top-3">
                <Image width={18} alt="delete Icon " src={deleteIcon} />
              </button>
              <h1 className="font-medium text-md">جهاز 1</h1>

              <h3 className="text-sm">
                رقم الجهاز: <strong>1234</strong>
              </h3>
              <div className="flex justify-between">
                <h3 className="text-sm">
                  تاريخ الشراء : <strong> 2/5/2023</strong>
                </h3>
                <h3 className="text-sm">
                  حالة الجهاز: <strong> جديد</strong>
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 items-center border-[1px] border-solid rounded-lg shadow-lg w-96 border-gray-300 cursor-pointer p-3 h-36 relative">
            <div className="col-span-4">
              <Image
                alt="joy stick"
                width={200}
                className="object-contain"
                src={joystic2}
              />
            </div>
            <div className="col-span-8 space-y-3">
              <button className="absolute left-4 top-3">
                <Image width={18} alt="delete Icon " src={deleteIcon} />
              </button>
              <h1 className="font-medium text-md">جهاز 1</h1>

              <h3 className="text-sm">
                رقم الجهاز: <strong>1234</strong>
              </h3>
              <div className="flex justify-between">
                <h3 className="text-sm">
                  تاريخ الشراء : <strong> 2/5/2023</strong>
                </h3>
                <h3 className="text-sm">
                  حالة الجهاز: <strong> جديد</strong>
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 items-center border-[1px] border-solid rounded-lg shadow-lg w-96 border-gray-300 cursor-pointer p-3 h-36 relative">
            <div className="col-span-4">
              <Image
                alt="joy stick"
                width={200}
                className="object-contain"
                src={joystic2}
              />
            </div>
            <div className="col-span-8 space-y-3">
              <button className="absolute left-4 top-3">
                <Image width={18} alt="delete Icon " src={deleteIcon} />
              </button>
              <h1 className="font-medium text-md">جهاز 1</h1>

              <h3 className="text-sm">
                رقم الجهاز: <strong>1234</strong>
              </h3>
              <div className="flex justify-between">
                <h3 className="text-sm">
                  تاريخ الشراء : <strong> 2/5/2023</strong>
                </h3>
                <h3 className="text-sm">
                  حالة الجهاز: <strong> جديد</strong>
                </h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className=" border-[1px] border-[#E4E7E9] border-solid  h-full   w-full">
        <div className="border-b-[1px] border-solid border-[#E4E7E9] py-4 px-6 items-center flex ">
          <h1 className=" font-semibold">طلب صيانة</h1>
        </div>
        <form className="p-8">
          <div className="flex md:flex-row flex-col md:gap-8 gap-4">
            <div className="my-2 w-full">
              <label className="block mb-3 font-medium">العنوان </label>
              <input
                className="block mb-3 mt-1 focus:border-primary px-5 py-3 text-md border border-[#E4E7E9] border-solid text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
                type="text"
              />
            </div>
            <div className="my-2 w-full">
              <label className="block mb-3 font-medium"> تاريخ الزيارة</label>
              <input
                className="block mb-3 mt-1 focus:border-primary px-5 py-3 text-md border border-[#E4E7E9] border-solid text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
                type="date"
              />
            </div>
          </div>
          <div className="my-3">
            <h3 className="text-md my-4 text-xl font-medium">وقت الزيارة</h3>
            <div className="my-4 flex flex-wrap text-md gap-3">
              <span className="py-2 text-center   md:w-28 w-24 rounded-full bg-primary text-white text-bold">
                09:00 ص
              </span>
              <span className="py-2 text-center   md:w-28 w-24 rounded-full text-[#AAAAAA] bg-[#8686861A] text-bold">
                10:00 ص
              </span>
              <span className="py-2 text-center   md:w-28 w-24 rounded-full text-[#AAAAAA] bg-[#8686861A] text-bold">
                02:00 م
              </span>
              <span className="py-2 text-center  wmd:-28  w-24 rounded-full text-[#AAAAAA] bg-[#8686861A] text-bold">
                03:00 م
              </span>
              <span className="py-2 text-center   md:w-28 w-24 rounded-full text-[#AAAAAA] bg-[#8686861A] text-bold">
                05:00 م
              </span>
              <span className="py-2 text-center   md:w-28 w-24 rounded-full text-[#AAAAAA] bg-[#8686861A] text-bold">
                06:00 م
              </span>
            </div>
          </div>

          <div className="my-3">
            <h3 className="text-lg font-medium"> اختر مكان العطل </h3>
            <div className="flex md:flex-row flex-col gap-6 md:justify-between justify-center my-8">
              <div className="md:max-w-[180px] w-[200px] gap-4 flex items-center flex-wrap">
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">1</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">2</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">3</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">4</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">5</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">6</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">7</span>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-4 w-4 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                  <span className="font-semibold text-xl">8</span>
                </div>
              </div>
           <div className="flex md:justify-start justify-center md:items-start  ml-6">
           <Image
                alt="joy stick"
                width={300}
                className="object-contain"
                src={joystic2}
              />  
           </div>
            </div>
          </div>

          <div className="my-3">
            <h3 className="text-md font-medium"> حالة الجهاز</h3>
            <textarea className="block mb-3 mt-2 focus:border-primary px-5 min-h-52 text-md border border-[#E4E7E9] border-solid text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"></textarea>
          </div>
          <div className="flex justify-end">
            <button className="w-[150px] text-lg text-center py-3 my-2 bg-primary text-white rounded-lg">
              تأكيد
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Maintenance;
