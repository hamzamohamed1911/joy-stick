"use client";
import React, { useState } from "react";

const headphoneBrands = [
  { id: 1, tag: "Asus Laptops" },
  { id: 2, tag: "TV" },
  { id: 3, tag: "iPhone" },
  { id: 4, tag: "Game" },
  { id: 5, tag: "Graphics Card" },
  { id: 6, tag: "SSD" },
  { id: 7, tag: "Macbook" },
  { id: 8, tag: "Speaker" },
  { id: 9, tag: "Smart TV" },
  { id: 10, tag: "Power Bank" },
  { id: 11, tag: "Samsung" },
  { id: 12, tag: "Microwave" },
  { id: 13, tag: "Tablet" },
];

const PopularTag = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (id) => {
    setSelectedTags((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((tagId) => tagId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-medium text-xl mb-4">Popular Tags</h3>
      <ul className="flex flex-wrap gap-4 items-center mt-4">
        {headphoneBrands.map((brand) => (
          <li
            key={brand.id}
            onClick={() => toggleTag(brand.id)}
            className={`cursor-pointer flex items-center rounded-[4px] font-medium border-[1px] p-[8px] gap-2 ${
              selectedTags.includes(brand.id)
                ? "text-primary border-primary"
                : "text-gray-700 border-gray-300"
            }`}
          >
            {brand.tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTag;
