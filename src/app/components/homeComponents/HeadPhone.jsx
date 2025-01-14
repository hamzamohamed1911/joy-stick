"use client";

import { headPhoneArr } from "@/app/_constants";
import { addIcon, favouiteHeart, favouiteIcon } from "../../../../public";
import Image from "next/image";
import { useState } from "react";

const HeadPhone = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };
  return (
    <section className="flex flex-col justify-center items-center my-8">
      <div className="gap-6">
        <h1 className="font-bold text-2xl py-4 text-center">احدث المنتجات</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {headPhoneArr.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 lg:max-w-72 md:max-w-64 max-w-60 flex flex-col justify-between"
            >
              <div className="relative bg-[#F2FAFA] h-48 rounded-lg flex justify-center items-center">
                <div
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-1 left-1 cursor-pointer "
                >
                  <Image
                    src={favorites[product.id] ? favouiteHeart : favouiteIcon}
                    alt="Favorite Icon"
                    className={`transition duration-200 ease-in-out ${
                      favorites[product.id] ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </div>

                <Image
                  src={product.imageSrc}
                  alt={product.id}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                <h3 className="text-sm text-gray-700 font-semibold">
                  {product.title}
                </h3>
                <p className="text-lg font-medium text-primary ">
                  {product.price}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-700 ">{product.description}</p>
                <Image
                  src={addIcon}
                  alt="Add Icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeadPhone;
