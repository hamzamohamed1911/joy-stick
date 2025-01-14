import Image from "next/image";
import React from "react";
import { addIcon3, deleteIcon, joystic2 } from "../../../../../public";

const AddedDevices = () => {
  return (
    <section className="h-full lg:p-6 md:p-3 p-2">
      <form className="flex flex-col justify-between gap-6 h-full md:p-0 p-4">
        <div className="border-[1px] border-[#E4E7E9] border-solid h-full w-full">
          <div className="border-b-[1px] border-solid border-[#E4E7E9] py-4 px-6 items-center flex justify-between">
            <h1 className="font-semibold">اضافة جهاز</h1>
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="my-2 w-full">
                <label className="block mb-3 font-medium">رقم الجهاز *</label>
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-3 text-md border border-[#E4E7E9] border-solid text-gray-800 text-lg shadow-sm focus:outline-none rounded-[10px] w-full"
                  type="text"
                />
              </div>
              <div className="my-2 w-full">
                <label className="block mb-3 font-medium">تاريخ الشراء *</label>
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-3 text-md border border-[#E4E7E9] border-solid text-gray-800 text-lg shadow-sm focus:outline-none rounded-[10px] w-full"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="my-2 w-full">
                <label className="block mb-3 font-medium">حالة الجهاز * </label>
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-3 text-md border border-[#E4E7E9] border-solid text-gray-800 text-lg shadow-sm focus:outline-none rounded-[10px] w-full"
                  type="text"
                />
              </div>
              <button className="w-12 h-6">
                <Image alt="add Icon" src={addIcon3} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-[1px] border-[#E4E7E9] border-solid h-full">
          <div className="border-b-[1px] border-solid border-[#E4E7E9] py-4 px-6 items-center flex justify-between">
            <h1 className="font-semibold">الأجهزة</h1>
          </div>
          <div className="lg:p-6 md:p-5 p-2 flex gap-6 flex-wrap justify-center md:items-start items-center  md:justify-start">
            {/** Device Card */}
            <div className="grid grid-cols-12 gap-2 items-center border-[1px] border-solid rounded-lg shadow-lg cursor-pointer lg:p-5 md:p-3 p-2 h-auto w-full lg:max-w-sm md:max-w-[350px]  relative">
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
                  <Image width={18} alt="delete Icon" src={deleteIcon} />
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
            <div className="grid grid-cols-12 gap-2 items-center border-[1px] border-solid rounded-lg shadow-lg cursor-pointer lg:p-5 md:p-3 p-2 h-auto w-full lg:max-w-sm md:max-w-[350px]  relative">
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
                  <Image width={18} alt="delete Icon" src={deleteIcon} />
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
      </form>
    </section>
  );
};

export default AddedDevices;
