"use client";
import { useState } from "react";
import PopularTag from "./PopularTag";
import SalaryRange from "./SalaryRange";
import { FiXCircle ,FiFilter} from "react-icons/fi"; 


const headphoneBrands = [
  { id: 1, brand: "Sony" },
  { id: 2, brand: "Bose" },
  { id: 3, brand: "Sennheiser" },
  { id: 4, brand: "JBL" },
  { id: 5, brand: "Beats by Dre" },
  { id: 6, brand: "Apple AirPods" },
  { id: 7, brand: "Skullcandy" },
  { id: 8, brand: "Philips" },
  { id: 9, brand: "Samsung" },
  { id: 10, brand: "AKG" },
  { id: 11, brand: "Shure" },
];

const StoreSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((open) => !open);
  };

  return (
    <div className="lg:w-80 w-full lg:h-screen flex lg:flex-col relative">
      {/* Hamburger Menu Icon */}
      <div className="lg:hidden flex justify-center items-center w-full p-4">
        <button 
          className="text-3xl" 
          onClick={toggleSidebar}
        >
          <FiFilter />
        </button>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" 
          onClick={toggleSidebar} 
        ></div>
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 z-50 h-full bg-white md:w-1/2 w-full lg:w-full lg:overflow-visible overflow-auto hide-scrollbar lg:relative p-6 shadow-lg lg:shadow-none transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Close Icon */}
        <button 
          className="lg:hidden text-3xl mb-4" 
          onClick={toggleSidebar}
        >
          <FiXCircle />
        </button>

        {/* Categories */}
        <div>
          <h3 className="font-medium text-xl">الأقسام</h3>
          <ul className="space-y-2 text-lg flex flex-col mt-4 overflow-x-auto overflow-hidden whitespace-normal flex-grow">
            {headphoneBrands.map((brand) => (
              <li key={brand.id} className="flex items-center gap-2">
                <input
                  id={`brand-${brand.id}`}
                  type="checkbox"
                  className="appearance-none cursor-pointer h-5 w-5 rounded-full border-[4px] border-gray-300 checked:border-primary focus:outline-none"
                />
                <label htmlFor={`brand-${brand.id}`}>{brand.brand}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider and Additional Components */}
        <div className="border-[1px] my-4 border-[#E4E7E9]"></div>
        <SalaryRange />
        <div className="border-[1px] my-4 border-[#E4E7E9]"></div>
        <PopularTag />
      </div>
    </div>
  );
};

export default StoreSideBar;
