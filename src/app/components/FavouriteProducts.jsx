"use client"
import { useState } from "react";
import {  addIcon,  favouiteHeart, favouiteIcon } from "../../../public";
import { headPhoneArr } from "../_constants";
import Image from "next/image";

const FavouriteProducts = ({title}) => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (productId) => {
      setFavorites((prev) => ({
        ...prev,
        [productId]: !prev[productId],
      }));
    };
  return (
    <div className="flex flex-col my-8">
    <h1 className="font-bold text-2xl py-4 text-start"> {title} </h1>
    <div className=" flex-wrap flex justify-center items-center gap-8">
      {headPhoneArr.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md p-4 md:w-[340px] w-[300px] flex flex-col justify-between"
        >
          <div className="relative bg-[#F2FAFA] h-48 rounded-lg flex justify-center items-center">
            <div
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-1 left-1 cursor-pointer "
            >
              <Image
                src={favorites[product.id] ? favouiteHeart : favouiteIcon}
                alt="Favorite Icon"
                width={40}
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
  )
}

export default FavouriteProducts
