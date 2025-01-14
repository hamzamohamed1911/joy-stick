"use client";
import Image from "next/image";
import React, { useState } from "react";
import { addIcon, addIcon2, deleteIcon } from "../../../../public";
import CustomModal from "@/app/components/CustomModal";

const AddedLocations = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex flex-col justify-between gap-6 h-full md:p-0 p-4">
      <div className=" border-[1px] border-gray-300  h-screen   w-full">
        <div className="border-b-[1px] border-solid border-[#E4E7E9] py-4 px-6 items-center flex justify-between">
          <h1 className=" font-semibold"> العناوين المضافة </h1>
          <button onClick={handleOpen} className="pl-4">
            <Image alt="add Icon" width={25} src={addIcon2} />
          </button>
        </div>
        <div className="lg:p-8 md:p-6 p-4 space-y-4">
          <div className="border-solid border-[#E4E7E9] border-[1px] py-4 px-6 rounded-xl w-full min-h-[100px] flex flex-row ">
            <div className="space-y-5 w-full">
              {/* Left side (text content) */}
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">المنزل</h3>
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    className="appearance-none cursor-pointer h-6 w-6 rounded-full border-[4px] border-gray-300 checked:border-primary  focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[#666666] lg:text-lg md:text-md text-sm max-w-lg">
                  عباس العقاد - مدينة نصر
                </p>
                <Image alt="play Icon" src={deleteIcon} width={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal open={open} onClose={handleClose}>
        <form className=" lg:min-w-[500px] w-[300px] m-4">
          <div className="bg-[#F5F6F7] w-auto rounded-lg ">
            <h2 className="text-lg font-medium   flex justify-center p-3 text-center">
              اضافة عنوان
            </h2>
          </div>
          <div className="my-2">
            <div className="w-full ">
              <div className="flex md:gap-8 gap-6  ">
                <input
                  placeholder="رقم العمارة"
                  className=" mb-3 mt-1 focus:border-primary px-5 py-3 text-sm border bg-[#FBFBFB] border-[#8686861A] text-gray-800  shadow-sm focus:outline-none rounded-[8px] w-full"
                  type="number"
                />
                <input
                  placeholder=" رقم الشقة"
                  className=" mb-3 mt-1 focus:border-primary px-5 py-3 text-sm border bg-[#FBFBFB] border-[#8686861A] text-gray-800  shadow-sm focus:outline-none rounded-[8px] w-full"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="my-2">
            <input
              placeholder="العنوان"
              className="block mb-3 mt-1 focus:border-primary px-5 py-2 text-md border bg-[#FBFBFB] border-[#8686861A] text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full"
              type="text"
            />
          </div>
          <div className="flex justify-end w-full">
            <button type="button">
              <Image
                className="w-12"
                alt="history Icon"
                width={50}
                src={addIcon}
              />
            </button>
          </div>
        </form>
      </CustomModal>
    </div>
  );
};

export default AddedLocations;
