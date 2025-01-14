"use client";
import React, { useState } from "react";
import {
  addIcon,
  favouiteHeart,
  favouiteIcon,
  headPhone,
  mouseImg,
} from "../../../../public";
import Image from "next/image";
export const FavouriteProducts = [
  {
    id: 1,
    imageSrc: headPhone,
    title: "سماعة رأس",
    description: "سماعة رأس عالية الجودة مع صوت نقي وتصميم مريح",
    price: "300 جنيه",
  },
  {
    id: 2,
    imageSrc: headPhone,
    title: "سماعة رأس",
    description: "ميكروفون احترافي لتسجيل الصوت بجودة فائقة",
    price: "500 جنيه",
  },
  {
    id: 3,
    imageSrc: headPhone,
    title: "سماعة رأس",
    description: "كاميرا ويب بدقة عالية مثالية لمكالمات الفيديو",
    price: "250 جنيه",
  },
  {
    id: 4,
    imageSrc: headPhone,
    title: "سماعة رأس",
    description: "ماوس لاسلكي سريع الاستجابة مع تصميم مريح",
    price: "150 جنيه",
  },
];
const Favourite = () => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section className="flex flex-col md:px-4 px-6 h-full">
      <div className=" border-[1px] border-[#E4E7E9] border-solid  md:text-lg text-md h-full  w-full">
        <div className="border-b-[1px] border-solid border-[#E4E7E9] py-4 px-6 items-center flex ">
          <h1 className=" font-semibold">المفضلة</h1>
        </div>
        {FavouriteProducts.map((product) => (
          <div
            key={product.id}
            className="md:p-6 p-4 md:m-8 m-4 my-4 md:my-8 rounded-lg shadow-lg relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
          >
            <div className="bg-Secondary flex w-full  justify-center items-center rounded-xl col-span-12 md:col-span-3">
              <Image width={160} src={product.imageSrc} alt="favurite Item " />
            </div>
            <div className="col-span-12 md:col-span-9 space-y-2">
            <div className="flex items-center justify-between">
            <h2 className="font-medium md:text-2xl text-lg">سماعة رأس</h2>
                <div
                  onClick={() => toggleFavorite(product.id)}
                  className="md:w-14 w-12  cursor-pointer "
                >
                  <Image
                    src={favorites[product.id] ? favouiteHeart : favouiteIcon}
                    alt="Favorite Icon"
                    className={`transition duration-200 ease-in-out md:w-14 w-12 ${
                      favorites[product.id] ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>
              <p className="text-[#737791] max-w-72">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
              </p>
              <div className="flex items-center justify-between">
                <h2 className="text-primary font-semibold">{product.price} </h2>
                <div
                  onClick={() => toggleFavorite(product.id)}
                  className="cursor-pointer md:w-14 w-12 "
                >
                  <Image src={addIcon} alt="add Icon" className="md:w-14 w-12"  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favourite;
