"use client"
import { useState } from "react";
import Image from "next/image";
import { Eye, hideEye } from "../../../public";

const LoginForm = ({ onForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((open)=>!open);
  };

  return (
    <>
      <form className="md:p-[20px] p-[15px] md:min-w-[380px] w-[300px]">
        <div className="my-2">
          <label className="block mb-3 font-medium">البريد الالكترونى</label>
          <input
            className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
            type="email"
          />
        </div>

        <div className="my-2">
          <div className="flex justify-between">
            <label className="block mb-3 font-medium">كلمة المرور</label>
            <span
              onClick={onForgotPassword}
              className="text-primary cursor-pointer font-medium"
            >
              نسيت كلمة المرور
            </span>
          </div>

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
                src={showPassword ? Eye  : hideEye} 
              />
            </button>
          </div>
        </div>

        <button className="w-full text-center py-3 my-2 bg-primary text-white rounded-lg">
          دخول
        </button>
      </form>
    </>
  );
};

export default LoginForm;
