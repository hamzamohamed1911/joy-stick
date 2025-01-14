"use client";
import React, { useState } from "react";
import { Slider } from "@mui/material";

const SalaryRange = () => {
  const [range, setRange] = useState([20, 80]);

  const handleSliderChange = (event, newValue) => {
    setRange(newValue);
  };

  const handleInputChange = (index, value) => {
    const newRange = [...range];
    newRange[index] = value === "" ? "" : Number(value);
    setRange(newRange);
  };

  const handleBlur = () => {
    setRange((prevRange) => [
      Math.max(0, Math.min(100, prevRange[0])),
      Math.max(0, Math.min(100, prevRange[1])),
    ]);
  };
  console.log(range);
  return (
    <div className="flex flex-col">
      <h3 className="font-medium text-xl mb-4">السعر</h3>

      {/* Slider */}
      <Slider
        value={range}
        onChange={handleSliderChange}
        min={0}
        max={100}
        disableSwap
        valueLabelDisplay="auto"
        sx={{
          color: "#02A09B",
          maxWidth:300,
        }}
      />

      <div className="flex mt-4 gap-4  w-full">
        <div className="w-full">
          <label className="block text-sm font-medium my-1">أقل سعر</label>
          <input
            type="number"
            value={range[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
            onBlur={handleBlur}
            min={0}
            max={range[1]}
            className="border  px-2 py-2  focus:border-primary  text-md  border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full "
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium my-1">اعلى سعر</label>
          <input
            type="number"
            value={range[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
            onBlur={handleBlur}
            min={range[0]}
            max={100}
            className="border  px-2 py-2  focus:border-primary  text-md  border-gray-300 text-gray-800 text-lg shadow-sm focus:outline-none rounded-[8px] w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default SalaryRange;
