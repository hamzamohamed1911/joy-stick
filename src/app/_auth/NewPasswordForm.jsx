"use client"

import Image from "next/image";
import { Eye, hideEye } from "../../../public";
import { useState } from "react";

const NewPasswordForm = ({ onOpenLoginModal }) => {
    const [showPassword, setShowPassword] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    onOpenLoginModal();
  };


  const togglePasswordVisibility = () => {
    setShowPassword((open) => !open);
  };


  return (
    <form className="md:min-w-[380px] w-[300px]" onSubmit={handleSave}>
      <h2 className="text-lg font-medium mb-4 border-b-2 flex justify-center py-3 text-center">
        استعادة كلمة المرور
      </h2>
      <div className="p-[20px]">
        <h2 className="text-md font-medium text-center">
          يرجى اعادة تعيين كلمة المرور
        </h2>
        <div className="my-2">
          <label className="block mb-3 font-medium text-sm">كلمة المرور</label>
          <input
            className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
            type="password"
          />
        </div>
        <div className="my-2">
          <label className="block mb-3 font-medium text-sm">
            تأكيد كلمة المرور
          </label>
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
        <button
          type="submit"
          className="w-full text-center py-3 my-4 bg-primary text-white rounded-lg"
        >
          تأكيد
        </button>
      </div>
    </form>
  );
};

export default NewPasswordForm;
