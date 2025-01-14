"use client";
import Image from "next/image";
import { Eye, hideEye, profile } from "../../../../public";
import { useState } from "react";

const Controlpanel = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((open) => !open);
  };
  return (
    <section className="flex flex-col justify-between gap-6 h-full md:p-0 p-4">
      <div className=" border-[1px] border-gray-300 md:h-1/2 h-full   w-full">
        <h1 className="border-b-[1px] border-gray-300 py-4 px-3 font-semibold">
          اعدادات الحساب
        </h1>
        <form className="p-4 md:p-8">
          <div className="md:grid grid-cols-12 gap-6">
            <div className="md:col-span-3 flex justify-center w-full  mt-4">
              <Image
                alt="profile picture"
                className="object-cover md:w-[250px] md:h-[250px] h-[200px] w-[200px]"
                src={profile}
              />
            </div>
            <div className="col-span-9">
              <div className="my-4">
                <label className="block mb-2 font-medium"> الاسم</label>
                <input className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full " />
              </div>
              <div className="my-4">
                <label className="block mb-2 font-medium"> رقم الهاتف</label>
                <input
                  type="tel"
                  className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full "
                />
              </div>
              <div className="my-4">
                <label className="block mb-2 font-medium">
                  البريد الالكتروني
                </label>
                <input
                  type="email"
                  className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end my-3">
            <button className="bg-primary text-white py-3 px-8 rounded-xl">
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
      <div className="border-[1px] border-gray-300 md:h-1/2 h-full w-full">
        <h1 className="border-b-[1px] border-gray-300 py-4 px-3 font-semibold">
          تغيير كلمة المرور
        </h1>
        <form className="p-4 md:px-10">
          <div>
            <div className="mb-4">
              <label className="block mb-2 font-medium"> كلمة المرور </label>
              <div className="relative">
                <input
                  className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 left-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  <Image
                    width={20}
                    height={20}
                    alt="eye icon"
                    src={showPassword ? hideEye : Eye}
                  />
                </button>
              </div>
            </div>

            <div className="my-4">
              <label className="block mb-2 font-medium"> كلمة المرور الجديدة </label>
              <input
                type="password"
                className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
              />
            </div>

            <div className="my-4">
              <label className="block mb-2 font-medium"> تأكيد كلمة المرور </label>
              <input
                type="password"
                className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
              />
            </div>
          </div>

          <div className="flex justify-end my-3">
            <button className="bg-primary text-white py-3 px-8 rounded-xl">
              حفظ التغييرات
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Controlpanel;
