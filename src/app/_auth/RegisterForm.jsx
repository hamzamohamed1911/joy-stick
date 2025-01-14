"use client"
import Image from "next/image"
import { Eye, hideEye } from "../../../public"
import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((open)=>!open);
  };

  return (
    <form className="md:p-[20px] p-[15px] md:min-w-[380px] w-[300px]">
    <div className="mb-2">
      <label className="block mb-3 font-medium">اسم المستخدم</label>
      <input
        className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
        type="text"
      />
    </div>
    <div className="my-2">
      <label className="block mb-3 font-medium"> البريد الالكتروني</label>
      <input
        className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
        type="email"
      />
    </div>
    <div className="my-2">
      <label className="block mb-3 font-medium"> رقم الهاتف </label>
      <input
        className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
        type="phone"
      />
    </div>
    <div className="my-2">
      <label className="block mb-3 font-medium">كلمة المرور</label>
      <input
        className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
        type="password"
      />
    </div>
    <div className="my-2">
      <label className="block mb-3 font-medium">تأكيد كلمة المرور</label>
      <div className="relative">
            <input
              className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full "
              type={showPassword ? "text" : "password"} 
            />
            <button
              type="button"
              className="absolute inset-y-0 left-3 flex items-center "
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
    <div className="my-2">
      <div className="md:max-w-[350px] w-auto">
        <label className="block mb-3 font-medium">العنوان</label>
        <div className="flex gap-2 ">
          <input
            placeholder="رقم العمارة"
            className=" mb-3 mt-1 focus:border-primary px-5 py-2 text-sm border border-gray-300 text-gray-800  shadow-sm focus:outline-none rounded-[8px] w-1/3"
            type="number"
          />
          <input
            placeholder="رقم الدور"
            className=" mb-3 mt-1 focus:border-primary px-5 py-2 text-sm border border-gray-300 text-gray-800  shadow-sm focus:outline-none rounded-[8px] w-1/3"
            type="number"
          />
          <input
            placeholder="رقم الشقة"
            className=" mb-3 mt-1 focus:border-primary px-5 py-2 text-sm border border-gray-300 text-gray-800  shadow-sm focus:outline-none rounded-[8px] w-1/3"
            type="number"
          />
        </div>
      </div>
    </div>
    <div className="my-2">
      <input
        placeholder="العنوان"
        className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
        type="text"
      />
    </div>
    <button className="w-full text-center py-3 my-2 bg-primary text-white rounded-lg">
      إنشاء
    </button>
  </form>
  )
}

export default RegisterForm
